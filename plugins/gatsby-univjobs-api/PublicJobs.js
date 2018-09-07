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
    let publicJobs = '';
    publicJobs = await axios.get(`${this.url}/api/v1/public/jobs/open`);
    console.log("WE ARE HERE!!! LITASS!")
    let jobs = await publicJobs.data.jobs.map((job) => {
        console.log(job)
    })
    return jobs;
  }
}

module.exports = (url) => {
  return new PublicJobs(url);
};
  
