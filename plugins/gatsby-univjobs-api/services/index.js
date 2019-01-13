
const directoryCompanyService = require('./directoryCompany');
const featuredCompanyService = require('./featuredCompany');
const exploreCompanyService = require('./exploreCompany');
const citiesService = require('./cities')

module.exports = {
  createServices: (url) => {
    // Create all of the different services that we need to use.
    const DirectoryCompanyService = directoryCompanyService(url);
    const FeaturedCompanyService = featuredCompanyService(url);
    const ExploreCompanyService = exploreCompanyService(url);
    const CitiesService = citiesService();

    return {
      CitiesService,
      DirectoryCompanyService,
      FeaturedCompanyService,
      ExploreCompanyService
    }
  }
}