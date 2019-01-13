const axios = require('axios');
const dummyFeaturedCompany = require('./dummy');

// console.log("=FEATURED DUMMY=")
// console.log(dummyFeaturedCompany)

class FeaturedCompanyService {
  constructor (url) {
    this.url = url;
  }

    /**
   * getFeaturedCompanies
   *
   * @function that returns all featured companies.
   *
   * @return {Promise | Array}
   */

  async getCompanies () {
    let featuredCompanies;
    this.log('Getting featured companies from UnivJobs API...')
    const response = await axios.get(
      this.url + '/api/v1/public/companies/featured'
    )

    featuredCompanies = response.data.companies;
    this.log(`Found ${featuredCompanies.length} featured companies.`)
    
    featuredCompanies.map(company => {
      return {
        companyId: company.employer_id,
        companyName: company.company_name,
        slogan: company.slogan,
        brandImageUrl: company.brand_image_url,
        industries: company.industries,
        logoUrl: company.logo_url,
        hidden: false,
      }
    });

    // Add the dummy company
    featuredCompanies.concat([dummyFeaturedCompany])

    console.log('))))))) featured companies')
    console.log(dummyFeaturedCompany);
    console.log('))))))) featured companies')
    return featuredCompanies;
  }

  getDummy () {
    return dummyFeaturedCompany;
  }

  log (message) {
    console.log(`[FeaturedCompanyService]: ${message}`)
  } 

}

module.exports = (url) => {
  return new FeaturedCompanyService(url);
}