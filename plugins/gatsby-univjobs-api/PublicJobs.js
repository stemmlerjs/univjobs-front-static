const axios = require('axios');

/**
 * Public Jobs
 * 
 * @class that's used to handle all job related calls
 */

 class PublicJobs {
    constructor (url) {
      this.url = url;
    }

  /**
   * getPublicJobs
   * 
   * @function that gets all of the public jobs that are open
   * 
   * @return {Promise | Array}
   */

  async getPublicJobs () {
    const publicJobs = await axios.get(`${this.url}/api/v1/public/companies/jobs`);
    return publicJobs;
  }

  // TODO: 
  async createDummyJob () {
    // Fill this in
  }
  
}

module.exports = (url) => {
  return new PublicJobs(url);
};
  
