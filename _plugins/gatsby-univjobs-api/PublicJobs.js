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
    const publicJobs = await axios.get(`${this.url}/api/v1/public/jobs/open`);

    let jobs = publicJobs.data.jobs.map((job) => Object.assign({}, job, { hidden: false}));
  
    return jobs;
  }

  async createDummyJob () {
    return(
      {
        "job_id": 1000001,
        "employer_id": 100001,
        "title": "Social Media Marketing Interns",
        "job_type_id": 6,
        "paid": false,
        "responsibilities": "InterestPiggy is looking for a Marketing/Social Media intern to grow our presence in Social Media and potentially grow with the startup as it scales and establishes robust revenues. • Assist in creating and implementing social media marketing strategies and tactics and handle social media market research activities • Collect and analyze marketing data to develop and adjust correlating marketing plans • Create presentations and agreements and assemble client activity reports • Possess clear understanding of mobile applications, websites and advertising • Handle content creation and management tasks along with planning and executing special events • Write and post blogs and articles, handle tweets and updates and upload pictures and videos to create awareness • Gather and analyse data from the community and track the growth and impact of social media on the business and create and submit progress reports • Perform research activities to find articles, stories and resources, relevant to client base and post links to social media profiles • Update social media accounts with activities and events being led by the company • Monitor and respond to social media activities on a regular basis and build relationships with new and existing audiences • Provide recommendations to clients on how to extend their performance and results • Assist in performing social media optimization activities on behalf of the company / client",
        "qualification": "- Experience in Social Media(Instagram, FB, Twitter, LinkedIn). - Must be able to adapt to growing needs.(We are a startup after all)   -  Willing to learn Google Analytics and other metrics trackers such as Instagram, FB insights, LinkedIn/Twitter Analytics & HootSuite Ability to create and learn how to create engaging marketing content including blogs, motion graphics, image editing etc.- Other marketing experience is an asset.",
        "compensation": "All travel and meal expenses will be covered. The position has the option of working remote or InterestPiggy will provide the intern access to the offices in Burlington, Oakville and Toronto - all working environments that are highly innovative and influenced by the startup communities.  The Marketing/Social Media intern will gain experience in: - Learn how to nurture and grow the online social channels including: LinkedIn, Twitter, Facebook, Snapchat, Instagram, Tumblr and Reddit.  ",
        "slug": "9999999-social-media-marketing-interns",
        "location": "111 Queen St E, Toronto, ON",
        "active": true,
        "verified": true,
        "company_name": "Interest Piggy",
        "hidden": true,
      }
    )
  }
}

module.exports = (url) => {
  return new PublicJobs(url);
};
  
