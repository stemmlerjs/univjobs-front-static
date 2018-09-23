import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import DirectoryHeader from '../../components/directory/components/DirectoryHeader'
import DirectoryFilters from '../../components/directory/components/DirectoryFilters'
import DirectoryResultsList from '../../components/directory/components/DirectoryResultsList'
import DirectoryMap from '../../components/directory/components/DirectoryMap'
import Loading from '../../components/Loading'
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
    super(props)
    this.state = {
      myLat: 42.3601,
      myLng: -71.0589,
    }
    // OAKVILLE: latitude: 43.4714071, longitude: -79.6935869
  }

  componentDidMount() {
    debugger;
    if (navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude

        debugger;

        this.setState({
          ...this.state,
          myLat: lat,
          myLng: lon,
        })
      }, err => {
        debugger;
        console.log(err)
      }, { enableHighAccuracy: true, timeout: 2000, maximumAge: 3600000 })
    }
  }

  render() {
    return (
      <div className="directory-container">
        <DirectoryHeader />
        <div className="directory-body">
          <DirectoryFilters />
          <DirectoryResultsList 
            companies={companies}
          />
          <DirectoryMap
            companies={companies}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBphEXJviUGPiUE4GDnsBXIqnMi3mC0KLA&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<Loading />}
            containerElement={<div style={{ height: `600px`, width: `50%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            lat={this.state.myLat}
            lng={this.state.myLng}
          />
        </div>
      </div>
    )
  }
}

export default Directory
