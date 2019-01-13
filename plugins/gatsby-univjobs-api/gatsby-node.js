
// https://www.gatsbyjs.org/docs/source-plugin-tutorial/
// Use this tutorial to help figure out what to do next
// https://www.gatsbyjs.org/docs/create-source-plugin/

const _ = require('lodash')
const crypto = require("crypto");
const PublicCompanies = require('./PublicCompanies')
const PublicJobs = require('./PublicJobs')

const Processor = require('./Processor')

/**
 * getAllCompanies
 * @desc This function combines all companies
 */

async function getAllCompanies (exploreCompanies, featuredCompanies, PublicCompaniesAPI) {
  let uniqueCompaniesIds = await exploreCompanies
    .concat(featuredCompanies)
    .map((company) => company.companyId)

  uniqueCompaniesIds = [...new Set(uniqueCompaniesIds)];

  let allCompanies = await Promise.all(
    uniqueCompaniesIds.map((element) => {
      let company = PublicCompaniesAPI.getExploreCompanyById(element);
      return company;
    })
  );

  return allCompanies;
}

exports.sourceNodes = async ({ boundActionCreators, createNodeId }, configOptions) => {
  const cities = [];
  const { createNode } = boundActionCreators;
  const { url } = configOptions;
  const PublicCompaniesAPI = PublicCompanies(url);
  //const PublicJobsAPI = PublicJobs(url)
  const ProcessorInstance = Processor.createProcessor(createNodeId, createNode);
    // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;
  // plugin code goes here...
  console.log("Univjobs Datasource API Plugin starting with options", configOptions);

  try {

    /**
     * In this section, we create all of the Explore Companies and 
     * Featured Companies which are shown on the /companies and companies/explore
     * pages.
     */

    const exploreCompanies = await PublicCompaniesAPI.getExploreCompanies();
    const featuredCompanies = await PublicCompaniesAPI.getFeaturedCompanies();
    
    let allCompanies = await getAllCompanies(exploreCompanies, featuredCompanies, PublicCompaniesAPI);
    allCompanies = await allCompanies.concat(await PublicCompaniesAPI.addDummyCompany());

    for (let company of allCompanies) {
      // console.log(`======> Creating company node: ${JSON.stringify(company)}`)
      ProcessorInstance.processAndCreateCompanyNode(company);
    }

    /**
     * Now, we need to get and create all directory nodes.
     */

    const directoryCompanies = await PublicCompaniesAPI.getDirectoryCompanies();
    for (let directoryCompany of directoryCompanies) {
      cities.push(directoryCompany.city);
      ProcessorInstance.processAndCreateDirectoryCompanyNode(directoryCompany)
    }

    /**
     * Create all of the different City Nodes.
     */
    
    let unique  = _.uniq(cities).sort();

    // Working on a map so that we can create pages on
    // {job-type}-jobs-in-{city}
    // ======================
    const cityMap = {};
    for (let city of unique) {
      cityMap[city] = [];
    }

    for (let directoryCompany of directoryCompanies) {
      for (let job of directoryCompany.jobs) {
        let city = directoryCompany.city;
        cityMap[city].push(job);
      }
    }
    // ======================
    // Create city nodes
    for (let cityKey of Object.keys(cityMap)) {
      const cityJobs = cityMap[cityKey];
      ProcessorInstance.processAndCreateCityNode({ name: cityKey, jobs: cityJobs })
    }
  } 
  
  catch (err) {
     return Promise.reject(err);
  }
};
