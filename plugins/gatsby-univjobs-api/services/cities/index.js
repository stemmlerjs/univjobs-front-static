
class CitiesService {
  constructor () {

  }

  getCities (uniqueCities, directoryCompanies) {
    // Working on a map so that we can create pages on
    // {job-type}-jobs-in-{city}
    // ======================
    const cityMap = {};
    for (let city of uniqueCities) {
      cityMap[city] = [];
    }

    for (let directoryCompany of directoryCompanies) {
      for (let job of directoryCompany.jobs) {
        let city = directoryCompany.city;
        cityMap[city].push(job);
      }
    }

    return cityMap;
  }
}

module.exports = () => {
  return new CitiesService();
}