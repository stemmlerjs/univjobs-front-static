import axios from 'axios';

const IPSTACK_URL = "https://api.ipstack.com/107.190.49.54?access_key=b59c2a5bdda684535c44e08f1f73d9bc"

const cache = {
  getCityResponse: null,
  getCoordinates: null
}

/**
 * cacheResponse
 * @desc This function will cache all of the things that we get back from
 * IP_STACK.
 * 
 * @param {Object} response the response object from ipstack
 */

function cacheResponse (response) {
  cache.getCityResponse = `${response.data.city}, ${response.data.region_code}`
  cache.getCoordinates = {
    lat: response.data.latitude,
    lng: response.data.longitude
  }
}

/**
 * getCoordinates
 * @desc Returns the coordinates for where the current user is located.
 * @return {Object | {lat: Number, lng: Number}}
 */

export function getCoordinates () {
  return new Promise(async (resolve, reject) => {
    // If cached, return from cache
    if (cache.getCoordinates) return resolve(cache.getCoordinates);

    // Otherwise, make the request yourself.
    try {
      const response = await axios.get(IPSTACK_URL);
      cacheResponse(response)
      return resolve(cache.getCoordinates);
    } catch (err) {
      return reject(null);
    }
  })
}

/**
 * getCurrentCity
 * @desc This function will return the current city that the user resides in.
 * @return {Promise | String}
 */

export function getCurrentCity () {
  return new Promise( async (resolve, reject) => {
    // If cached, return from cache
    if (cache.getCityResponse) return resolve(cache.getCityResponse);

    // Otherwise, make the request yourself.
    try {
      const response = await axios.get(IPSTACK_URL);
      cacheResponse(response)
      return resolve(cache.getCityResponse);
    } catch (err) {
      return reject(null);
    }
  })
}