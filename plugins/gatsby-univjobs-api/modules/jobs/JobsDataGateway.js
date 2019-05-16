
const { BaseDataGateway } = require('../../common/BaseDataGateway')

class JobsDataGateway extends BaseDataGateway {
  constructor (api) {
    super(api);
  }

  getLatestJobs () {
    return this.api.getLatestJobs(6);
  }

  getJobsByCity (cityName) {
    return this.api.getLatestJobsByCity(cityName)
  }
  
}

module.exports = (api) => {
  return new JobsDataGateway(api)
}