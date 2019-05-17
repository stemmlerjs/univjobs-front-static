
import axios from 'axios'
import config from '../config'

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
}

const univjobsAPI = new UnivjobsAPI(config.apiUrl);

export {
  univjobsAPI
} 