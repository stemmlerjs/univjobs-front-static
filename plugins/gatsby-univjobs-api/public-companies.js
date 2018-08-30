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
 * TODO:
 * - Delete all try catch in this file
 * - Make a index list of all unique employer_id. 
 * 
 */

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
    let exploreCompanies = '';
    exploreCompanies = await axios.get(`${this.url}/api/v1/public/companies/explore`);
    let companies = await exploreCompanies.data.companies.map((company) => {
      return {
        companyId: company.employer_id,
        companyName: company.company_name,
        //slug: /companies/company.company_name
        brandImageUrl: company.brand_image_url,
        industry: company.industry.industry_text,
        logoUrl: company.logo_url
      }
    });
    return companies;
  }

   /**
   * getFeaturedCompanies
   * 
   * @function that returns all featured companies.
   * 
   * @return {Promise | Array}
   */

  async getFeaturedCompanies () {
    let featuredCompanies = '';
    console.log('Getting featured companies from UnivJobs API...');
    featuredCompanies = await axios.get(this.url+'/api/v1/public/companies/featured');
    let companies = await featuredCompanies.data.companies.map((company) => {
      return {
        companyId: company.employer_id,
        companyName: company.company_name,
        slogan: company.slogan,
        brandImageUrl: company.brand_image_url,
        industry: company.industry.industry_text,
        logoUrl: company.logo_url
      }
    });
    return companies;

  }

  /**
   * getExploreCompanyById
   * 
   * @function that returns a company object.
   * 
   * @return {Promise | Object}
   */


  async getExploreCompanyById (companyId) {
    let company = '';
    console.log('Getting a company from UnivJobs API...');
    company = await axios.get(`${this.url}/api/v1/public/companies/${companyId}`);
    return company.data.company;
  }



}

module.exports = (url) => {
  return new PublicCompanies(url);
};
  
