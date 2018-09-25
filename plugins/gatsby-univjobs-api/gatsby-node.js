
// https://www.gatsbyjs.org/docs/source-plugin-tutorial/
// Use this tutorial to help figure out what to do next
// https://www.gatsbyjs.org/docs/create-source-plugin/

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

    const directoryCompanies

    for (let company of allCompanies) {
      ProcessorInstance.processAndCreateCompanyNode(company);
    }
  } 
  
  catch (err) {
     return Promise.reject(err);
  }
};
