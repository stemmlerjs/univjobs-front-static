
// https://www.gatsbyjs.org/docs/source-plugin-tutorial/
// Use this tutorial to help figure out what to do next
// https://www.gatsbyjs.org/docs/create-source-plugin/

const crypto = require("crypto");
const PublicCompanies = require('./PublicCompanies')
const Processor = require('./Processor')


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
  const CompanyProcessor = Processor.createProcessor(createNodeId, createNode);
  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;
  // plugin code goes here...
  console.log("Univjobs Datasource API Plugin starting with options", configOptions);

  try {
    // Get all companies
    const exploreCompanies = await PublicCompaniesAPI.getExploreCompanies();
    const featuredCompanies = await PublicCompaniesAPI.getFeaturedCompanies();
    let allCompanies = await getAllCompanies(exploreCompanies, featuredCompanies, PublicCompaniesAPI);
    console.log("Adding dummy company!")
    allCompanies = await allCompanies.concat(await PublicCompaniesAPI.addDummyCompany());
    console.log(allCompanies)
    for (let company of allCompanies) {
      CompanyProcessor.processAndCreateCompanyNode(company);
    }
  } 
  
  catch (err) {
     return Promise.reject(err);
  }
};
