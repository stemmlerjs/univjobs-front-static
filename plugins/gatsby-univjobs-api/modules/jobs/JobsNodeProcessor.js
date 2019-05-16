
const { BaseNodeProcessor } = require('../../common/BaseNodeProcessor')

class JobNodeProcessor extends BaseNodeProcessor {
  constructor (createNodeId, createNode, jobsDataGateway) {
    super(createNodeId, createNode);
    this.jobsDataGateway = jobsDataGateway;
  }

  makeUniqueJobId (job) {
    return job.slug;
  }

  async createLatestJobNodes () {
    const nodeDisplayName = 'LatestJob';
    try {
      const jobs = await this.jobsDataGateway.getLatestJobs();
      for (let job of jobs) {
        this.create(job, this.makeUniqueJobId(job), nodeDisplayName);
      }
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = (createNodeId, createNode, jobsDataGateway) => {
  return new JobNodeProcessor(createNodeId, createNode, jobsDataGateway)
}