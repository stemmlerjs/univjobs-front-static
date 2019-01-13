

const axios = require('axios')

/**
 * @desc ExploreCompanyService
 * Returns all of the companies that are on the explore companies page.
 */

class ExploreCompanyService {
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

  async getCompanies () {
    this.log(`Getting explore companies...`)
    const response = await axios.get(
      `${this.url}/api/v1/public/companies/explore`
    )
    const exploreCompanies = response.data.companies;
    this.log(exploreCompanies);
    return exploreCompanies.map(company => {
      return {
        companyId: company.employer_id,
        companyName: company.company_name,
        brandImageUrl: company.brand_image_url,
        industries: company.industries,
        logoUrl: company.logo_url,
        hidden: false,
      }
    })
  }

    /**
   * getExploreCompanyById
   *
   * @function that returns a company object.
   *
   * @return {Promise | Object}
   */

  async getCompanyById (companyId) {
    this.log(`\nGetting a company id=${companyId} from UnivJobs API...`)
    const response = await axios.get(
      `${this.url}/api/v1/public/companies/${companyId}`
    )

    // if the company existed, we'll set the flag hidden = false
    // so that we separate it from the dummy companies.
    if (response.data.company) {
      response.data.company['hidden'] = false
    }
    
    return response.data.company
  }

  log (message) {
    console.log(`[ExploreCompanyService]: ${message}`)
  }
}

module.exports = (url) => {
  return new ExploreCompanyService(url);
}