const dummy = require('./dummy');
const axios = require('axios')

/**
 * @class DirectoryCompany
 * @desc The directory companies are a type of graphql 
 * node that we use to create the company directory and graph.
 * 
 * The format for what we expect for this can be seen in the
 * dummy company file.
 * 
 * @see /dummy.js
 */

class DirectoryCompanyService {
  constructor (url) {
    this.url = url;
  }

  async getCompanies () {
    this.log(`Getting all directory companies from UnivJobs API...\n`)
    const response = await axios.get(
      `${this.url}/api/v1/public/companies/directory`
    )
    // Get all companies from the backend.
    let companies = response.data.directory;
    console.log('**** directory')
    console.log(companies)
    console.log('**** directory')
    // Add the dummy company so that it can build.
    companies = companies.concat([dummy])
    // Log it out

    console.log('**** directory after dummy')
    console.log(companies)
    console.log('**** directory after dummy')
    this.log(`Retrieved ${companies.length} companies.\n`)
    return companies;
  }

  log (message) {
    console.log(`[DirectoryCompanyService]: ${message}`)
  }
}

module.exports = (url) => {
  return new DirectoryCompanyService(url);
}