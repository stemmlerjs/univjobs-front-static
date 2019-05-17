
// https://www.gatsbyjs.org/docs/source-plugin-tutorial/
// Use this tutorial to help figure out what to do next
// https://www.gatsbyjs.org/docs/create-source-plugin/

const _ = require('lodash')
const services = require('./services')
const Processor = require('./Processor')

const JobsDataGateway = require('./modules/jobs/JobsDataGateway');
const JobsNodeProcessor = require('./modules/jobs/JobsNodeProcessor');
const CompaniesDataGateway = require('./modules/companies/CompaniesDataGateway');
const CompaniesNodeProcessor = require('./modules/companies/CompaniesNodeProcessor')
const UnivjobsAPI = require('./api')


/**
 * @desc combineCompanies
 * This function combines all companies.
 */

async function combineCompanies (exploreCompanies, featuredCompanies, ExploreCompanyService, FeaturedCompanyService) {
  console.log(`[Combine Companies]: There are ${exploreCompanies.length} explore companies and ${featuredCompanies.length} featured companies.`)
  
  let uniqueCompaniesIds = exploreCompanies
    .concat(featuredCompanies)
    .map((company) => company.companyId)

  uniqueCompaniesIds = [...new Set(uniqueCompaniesIds)];

  // Get each company from the backend using it's company id.
  let allCompanies = await Promise.all(
    uniqueCompaniesIds.map((id) => ExploreCompanyService.getCompanyById(id))
  );

  // Get the one dummy company that has all of the keys that we definitely need.
  allCompanies.push(FeaturedCompanyService.getDummy())

  return allCompanies;
}

exports.sourceNodes = async ({ boundActionCreators, createNodeId }, configOptions) => {
  // plugin code goes here...
  const { createNode } = boundActionCreators;
  const { url } = configOptions;
  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;
  console.log("Univjobs Datasource API Plugin starting with options", configOptions);

  const api = UnivjobsAPI(url);
  const jobsDataGateway   = JobsDataGateway(api);
  const jobsNodeProcessor = JobsNodeProcessor(createNodeId, createNode, jobsDataGateway)
  const companiesDataGateway = CompaniesDataGateway(api);
  const companiesNodeProcessor = CompaniesNodeProcessor(createNodeId, createNode, companiesDataGateway)
  
  await jobsNodeProcessor.createLatestJobNodes();
  await companiesNodeProcessor.createFeaturedCompanies();
  await companiesNodeProcessor.createCompanyNodes();

  // Create all of the services for creating nodes.
  // const {
  //   DirectoryCompanyService,
  //   FeaturedCompanyService,
  //   ExploreCompanyService,
  //   CitiesService
  // } = services.createServices(url);

  // // The processor will actually allow us to create Nodes in Gatsby
  // // from our data models.
  // const ProcessorInstance = Processor.createProcessor(createNodeId, createNode);

  // try {

  //   /**
  //    * In this section, we create all of the Explore Companies and 
  //    * Featured Companies which are shown on the /companies and companies/explore
  //    * pages.
  //    */

  //   // const exploreCompanies = await ExploreCompanyService.getCompanies();
  //   // const featuredCompanies = await FeaturedCompanyService.getCompanies();
  //   // // Combine all of the companies
  //   // const allCompanies = await combineCompanies(exploreCompanies, featuredCompanies, ExploreCompanyService, FeaturedCompanyService);
    
  //   // // 1. Create all CompanyNodes
  //   // ProcessorInstance.processAndCreateCompanyNodesBulk(allCompanies);

  //   // // 2. Create all DirectoryNodes
  //   // const directoryCompanies = await DirectoryCompanyService.getCompanies();
  //   // ProcessorInstance.processAndCreateDirectoryCompanyNodesBulk(directoryCompanies)

  //   // 3. Create all of the different City Nodes.
  //   // const uniqueCities  = _.uniq(directoryCompanies.map((dc) => dc.city)).sort();
  //   // const cityMap = CitiesService.getCities(uniqueCities, directoryCompanies);

  //   // // ======================
  //   // // Create city nodes
  //   // for (let cityKey of Object.keys(cityMap)) {
  //   //   const cityJobs = cityMap[cityKey];
  //   //   ProcessorInstance.processAndCreateCityNode({ name: cityKey, jobs: cityJobs })
  //   // }
  // } 
  
  // catch (err) {
  //    return Promise.reject(err);
  // }
};
