
// https://www.gatsbyjs.org/docs/source-plugin-tutorial/
// Use this tutorial to help figure out what to do next
// https://www.gatsbyjs.org/docs/create-source-plugin/

const crypto = require("crypto");
const axios = require('axios');
const PublicCompanies = require('./public-companies')

/**
 * getCompanies
 * 
 * @function gets all of the test companies
 * so that we can put them together in our interface.
 */

const getCompanies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          companyId: 1,
          earlyAdopter: true,
          companyName: 'Rover.com',
          brandImageUrl: 'https://user-images.githubusercontent.com/6892666/44449999-c2c6a380-a5bd-11e8-8a96-6b01c2020fb3.png',
          industry: 'Start-up',
          logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYel_hiMcSbl4mTNc0sOIAAOeyluy54xudTWQHSwsU8tKQolLA'
        },
        {
          companyId: 2,
          earlyAdopter: false,
          companyName: 'Univjobs',
          brandImageUrl: 'https://user-images.githubusercontent.com/6892666/44449999-c2c6a380-a5bd-11e8-8a96-6b01c2020fb3.png',
          industry: 'Start-up',
          logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYel_hiMcSbl4mTNc0sOIAAOeyluy54xudTWQHSwsU8tKQolLA'
        }
      ])
    }, 1300)
  })
}

/**
 * processCompany
 * 
 * @function formats data into the format that Gatsby needs it.
 * @param {Object}
 * @param {Function} to create the node id
 * @return {Object}
 */

const processCompany = (company, createNodeId) => {
  const nodeId = createNodeId(`univjobs-company-${company.companyId}`)
  const nodeContent = JSON.stringify(company)
  const nodeContentDigest = crypto
    .createHash('md5')
    .update(nodeContent)
    .digest('hex')

  const nodeData = Object.assign({}, company, {
    id: nodeId,
    parent: null,
    children: [],
    internal: {
      type: `Company`,
      content: nodeContent,
      contentDigest: nodeContentDigest,
    },
  })

  return nodeData
}

exports.sourceNodes = async ({ boundActionCreators, createNodeId }, configOptions) => {
  const { createNode } = boundActionCreators;
  const { url } = configOptions;
  const PublicCompaniesAPI = PublicCompanies(url);

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;

  // plugin code goes here...
  console.log("Univjobs Datasource API Plugin starting with options", configOptions);
   try {
     const exploreCompanies = await PublicCompaniesAPI.getExploreCompanies();
     const featuredCompanies = await PublicCompaniesAPI.getFeaturedCompanies();
     
      let uniqueCompanies = await exploreCompanies
        .concat(featuredCompanies)
        .map((company) => company.companyId)

      uniqueCompanies = [...new Set(uniqueCompanies)];

      let allCompanies = await Promise.all(
          uniqueCompanies.map((element) => {
          return PublicCompaniesAPI.getExploreCompanyById(element);
        })
      );

  } catch (err) {
     return Promise.reject(err);
  }

  return getCompanies()
    // Handle the companies
    .then((companies) => {
      // For each company, parse them into the appropriate format for Gatsby
      companies.forEach((company) => {
        let nodeData = processCompany(company, createNodeId);
        // Use Gatsby's createNode helper to create a node from the node data
        createNode(nodeData)
      })
    })

    .catch((err) => {
      return Promise.reject(err)
    })
};
