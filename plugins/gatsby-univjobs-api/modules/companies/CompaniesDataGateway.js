
const { BaseDataGateway } = require('../../common/BaseDataGateway')

class CompaniesDataGateway extends BaseDataGateway {
  constructor (api) {
    super(api);
  }

  getCompanySummary (companyName) {
    return this.api.getCompanySummary(companyName);
  }

  getCompanyList () {
    return this.api.getCompanyList();
  }

  getCompanyBySlugOrId (slugOrId) {
    return this.api.getCompanyBySlugOrId(slugOrId)
  }
  
}

module.exports = (api) => {
  return new CompaniesDataGateway(api)
}