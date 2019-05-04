
import axios from 'axios'
import config from '../config'

/**
 * @class UnivjobsAPI
 * @desc All of the API calls needed to call to Univjobs to
 * retrieve data that needs to be displayed dynamically.
 */

class UnivjobsAPI {
  constructor (baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getCompanyByCompanyId (companyId) {
    const response = await axios({
      method: "GET",
      url: `${this.baseUrl}/api/v1/public/companies/${companyId}`
    });
    return response.data.company;
  }

  async getAllExploreCompanies () {
    const response = await axios({
      method: "GET",
      url: `${this.baseUrl}/api/v1/public/companies/explore`
    });
    return response.data.companies;
  }

  async getAllFeaturedCompanies () {
    const response = await axios({
      method: "GET",
      url: `${this.baseUrl}/api/v1/public/companies/featured`
    });
    return response.data.companies;
  }
}

const univjobsAPI = new UnivjobsAPI(config.apiUrl);

export {
  univjobsAPI
} 