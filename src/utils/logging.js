import axios from 'axios'
import config from '../config'

export function logExploreCompanyView(companyId, cb) {
  return axios({
    method: 'POST',
    url: config.apiUrl + `/api/v1/analytics/company/${companyId}/explore`,
  })
    .then(() => {
      cb ? cb() : ''
    })
    .catch(err => {

    })
}
