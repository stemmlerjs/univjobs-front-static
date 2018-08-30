const axios = require('axios');

/**
 * Public Companies
 * 
 * @class that's used to handle getting all explore companies
 */

 class PublicCompanies {
    constructor (url) {
      this.url = url;
    }

    /**
   * getExploreCompanies
   * 
   * @function that gets all of the explore companies based on 
   * some criteria:
   * 
   * > has filled out all required early adopter explore company details
   * > they're an early adopter plan companies
   * 
   * @return {Promise | Array}
   */
  async getExploreCompanies () {
    //Make an axios call here
    let exploreCompanies = '';
    try {
      console.log('Getting explore companies from UnivJobs API...');
      exploreCompanies = await axios.get(this.url+'/api/v1/public/companies/explore');
    } catch(err) {
      return Promise.reject(err);
    }

    //Transform data to requirement
    console.log(exploreCompanies.data.companies);

    //TODO: Return object
    return true;
  }

   /**
   * getFeaturedCompanies
   * 
   * @function that returns all featured companies.
   * 
   * @return {Promise | Array}
   */

  async getFeaturedCompanies () {
    //Make an axios call here
    let featuredCompanies = '';
    try {
      console.log('Getting featured companies from UnivJobs API...');
      featuredCompanies = await axios.get(this.url+'/api/v1/public/companies/featured');
    } catch(err) {
      return Promise.reject(err);
    }

    //Transform data to requirement
    console.log(featuredCompanies.data.companies);

    //TODO: Return object
    //Return object
    return true;

  }

  /**
   * getExploreCompanyById
   * 
   * @function that returns a company object.
   * 
   * @return {Promise | Object}
   */


  async getExploreCompanyById (companyId) {
    //Make an axios call here
    let company = '';
    try {
      console.log('Getting a company from UnivJobs API...');
      company = await axios.get(`${this.url}/api/v1/public/companies/${companyId}`);
    } catch(err) {
      return Promise.reject(err);
    }

    //Transform data to requirement
    console.log(company.data.company);

    //TODO: Return object
    //Return object
    return true;
  }



}

module.exports = (url) => {
  return new PublicCompanies(url);
};
  
