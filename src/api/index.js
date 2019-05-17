
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

  async getCompanySummary () {

  }

  async getLatestJobs () {
    const response = await axios({
      method: "GET",
      url: `${this.baseUrl}/api/v1/public/v2/jobs/recent`
    });
    return response.data.jobs;
  }

  async getLatestJobsBySkill (skill) {
    const response = await axios({
      method: "GET",
      url: `${this.baseUrl}/api/v1/public/v2/jobs/recent`,
      params: { skill }
    });
    return response.data.jobs;
  }

  async getLatestJobsByCity (city) {
    const response = await axios({
      method: "GET",
      url: `${this.baseUrl}/api/v1/public/v2/jobs/recent`,
      params: { city }
    });
    return response.data.jobs;
  }

  async getLatestJobsBySkillAndCity (skill, city) {
    const response = await axios({
      method: "GET",
      url: `${this.baseUrl}/api/v1/public/v2/jobs/recent`,
      params: { city, skill }
    });
    return response.data.jobs;
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