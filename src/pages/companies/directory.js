import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import DirectoryHeader from '../../components/directory/components/DirectoryHeader'
import DirectoryFilters from '../../components/directory/components/DirectoryFilters'
import DirectoryResultsList from '../../components/directory/components/DirectoryResultsList'
import DirectoryMap from '../../components/directory/components/DirectoryMap'
import Loading from '../../components/Loading'
import {getCurrentCity, getCoordinates} from '../../utils/ip'
import '../../styles/Directory/Directory.sass'

/**
 * https://medium.com/@morgannegagne/google-maps-with-react-951c12b723ad
 * https://tomchentw.github.io/react-google-maps/
 * https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
 */

const companies = [
  { 
    companyName: "Rover", 
    address: "1428 White Oaks Blvd", 
    industry: {
      value: 5,
      label: "Service"
    },
    about: `Dog-walking and pet-sitting at your own convenience. 
      We help blah blah blah so o lklf lorem ipsum, etc.`,
    featured: true,
    logoUrl: "https://freebiemom.r.worldssl.net/wp-content/uploads/2018/08/Rover-logo.jpg",
    jobs: [
      { title: 'Software Developer - Co-op', slug: '/software-developer-co-op-12343nkd' },
      { title: 'Sales associate - Brampton', slug: '/salesassociate' },
      { title: 'Entry level Dev-ops', slug: '/entry-level-dev-ops' }
    ],
    exploreSlug: '/companies/rover',
    position: {
      lat: 43.650770,
      lng: -79.375810
    }
  },
  { 
    jobs: [],
    companyName: "Wealthsimple", 
    address: "1524 Front Avenue, Toronto ON", 
    industry: {
      value: 6,
      label: "Finance"
    },
    about: `We help you use your money for smart investments.`,
    featured: false,
    logoUrl: "https://images.startupopenhouse.com/thumbnail?colorspace=srgb&url=https://s3.amazonaws.com/soh-pwa-files-production/img/874e3c45-47dd-4ee6-a2ce-f9867d43d29c-1653e55f118.jpeg&width=310",
    position: {
      lat: 43.644910,
      lng: -79.412330
    }
  },
]

// Coordinates for Union Station in Toronto. A backup
// in case we can't get the coordinates for this current
// user.
const unionStationCoordinates = {
  lat: 43.645530,
  lng: -79.380350
}

/**
 * Companies
 *
 * @desc Parent component to render all of the components for
 * the Explore Companies page via /companies.
 *
 * TODO: Animate loading onto this page somehow
 */

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myLat: unionStationCoordinates.lat,
      myLng: unionStationCoordinates.lng,
      currentLocation: ''
    }
    
    this.handleChangeLocationText = this.handleChangeLocationText.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this)
    this.handleSearchForLocation = this.handleSearchForLocation.bind(this)
  }

  async componentDidMount() {

    const getLatitudePromise = () => {
      return new Promise((resolve, reject) => {
        // Get latitude and longitude.
        if (navigator) {
          navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude
            const lng = position.coords.longitude

            return resolve({
              lat: lat,
              lng: lng
            })
            
          }, err => {
            return resolve(null);
          }, { enableHighAccuracy: true, timeout: 60000, maximumAge: 3600000 })
        }
      })
    }

    const getCityAndCacheCoordinatePromise = async () => {
      // Get current city
      let city = '';
      try {
        city = await getCurrentCity();
        return city;
      } catch (err) {
        return null;
      }
    }

    const [coords, city] = await Promise.all([
      getLatitudePromise(),
      getCityAndCacheCoordinatePromise()
    ])

    // If the navigator was able to successfully query and
    // retrieve the coordinates of this user, we'll take that
    // because it's more accurate.

    if (coords) {
      this.setState({
        myLat: coords.lat,
        myLng: coords.lng,
        currentLocation: city
      })
    } 
    
    // Otherwise, in the case that we weren't able to get it from
    // the user (they didn't accept, request timed out, non-secure
    // connection, etc), then we'll take it from the ip-stack req.
    else {
      const coordinates = await getCoordinates();
      this.setState({
        myLat: coordinates.lat,
        myLng: coordinates.lng,
        currentLocation: city
      })
    }
  }

  /**
   * changeLocation
   * 
   * @desc This function changes the location of the map and would
   * also need to re-order companies in view.
   * @param {String} cityOrAddress
   * @param {Number} lat latitude 
   * @param {Number} lng longitude
   *  
   * @return void
   */
  
  handleChangeLocation (cityOrAddress, lat, lng) {

  }

  handleChangeLocationText (searchTerm) {
    this.setState({
      ...this.state,
      currentLocation: searchTerm
    })
  }

  handleSearchForLocation () {
    const { currentLocation } = this.state;
    console.log('time to search for a new location', currentLocation)
  }

  render() {
    const { currentLocation } = this.state;
    return (
      <div className="directory-container">
        <DirectoryHeader 
          currentLocation={currentLocation}
          onChange={this.handleChangeLocationText}
          onSubmit={this.handleSearchForLocation}
        />
        <div className="directory-body">
          <DirectoryFilters />
          <DirectoryResultsList 
            companies={companies}
          />
          <DirectoryMap
            companies={companies}
            currentLatitude={this.state.myLat}
            currentLongitude={this.state.myLng}
          />
        </div>
      </div>
    )
  }
}

export default Directory
