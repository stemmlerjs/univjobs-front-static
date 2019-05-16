
const { BaseNodeProcessor } = require('../../common/BaseNodeProcessor')
const FEATURED_COMPANIES_LIST = require('../../../../data/FeaturedCompanies')
const DummyCompany = require('./DummyCompany')

class CompaniesNodeProcessor extends BaseNodeProcessor {
  constructor (createNodeId, createNode, companiesDataGateway) {
    super(createNodeId, createNode);
    this.companiesDataGateway = companiesDataGateway;
  }

  makeUniqueCompanyId (company, unique) {
    return `${company.companySlug}-${unique}`
  }

  async createFeaturedCompanies () {
    const nodeDisplayName = 'FeaturedCompany'; 
    for (let companyName of FEATURED_COMPANIES_LIST) {
      try {
        const companySummary = await this.companiesDataGateway.getCompanySummary(companyName)
        this.create(companySummary, this.makeUniqueCompanyId(companySummary, 'featured'), nodeDisplayName);
      } catch (err) {
        console.log(`[CompaniesNodeProcessor]: => 409 - Couldn't find company ${companyName}`);
      }
    }
  }

  async createDummy () {
    this.create(DummyCompany, this.makeUniqueCompanyId(DummyCompany, 'all'), 'Company')
  }

  async createCompanyNodes () {
    this.createDummy();
    
    const nodeDisplayName = 'Company'; 
    const companiesList = await this.companiesDataGateway.getCompanyList();
    for (let companySlug of companiesList) {
      try {
        const company = await this.companiesDataGateway.getCompanyBySlugOrId(companySlug);
        console.log(company)
        this.create(company, this.makeUniqueCompanyId(company, 'all'), nodeDisplayName);
      } catch(err) {
        console.log(`[CompaniesNodeProcessor]: Error creating company ${companySlug}`)
      }
    }
  }
}

module.exports = (createNodeId, createNode, companiesDataGateway) => {
  return new CompaniesNodeProcessor(createNodeId, createNode, companiesDataGateway)
}