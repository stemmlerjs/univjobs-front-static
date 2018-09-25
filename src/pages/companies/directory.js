import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import DirectoryHeader from '../../components/directory/components/DirectoryHeader'
import DirectoryFilters from '../../components/directory/components/DirectoryFilters'
import DirectoryResultsList from '../../components/directory/components/DirectoryResultsList'
import DirectoryMap from '../../components/directory/components/DirectoryMap'
import Loading from '../../components/Loading'
import { getCurrentCity, getCoordinates } from '../../utils/ip'
import CallToAction from '../../components/CallToAction'
import '../../styles/Directory/Directory.sass'

/**
 * https://medium.com/@morgannegagne/google-maps-with-react-951c12b723ad
 * https://tomchentw.github.io/react-google-maps/
 * https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
 */

const companies = [
  {
    companyName: 'Rover',
    address: '1428 White Oaks Blvd',
    industry: {
      value: 5,
      label: 'Service',
    },
    companySize: { value: 1, label: '1 - 9' },
    about: `Dog-walking and pet-sitting at your own convenience. 
      We help blah blah blah so o lklf lorem ipsum, etc.`,
    featured: true,
    logoUrl:
      'https://freebiemom.r.worldssl.net/wp-content/uploads/2018/08/Rover-logo.jpg',
    jobs: [
      {
        title: 'Software Developer - Co-op',
        slug: '/software-developer-co-op-12343nkd',
      },
      { title: 'Sales associate - Brampton', slug: '/salesassociate' },
      { title: 'Entry level Dev-ops', slug: '/entry-level-dev-ops' },
    ],
    exploreSlug: '/companies/rover',
    position: {
      lat: 43.65077,
      lng: -79.37581,
    },
    hiring: true,
  },
  {
    jobs: [],
    companyName: 'Wealthsimple',
    address: '1524 Front Avenue, Toronto ON',
    companySize: { value: 2, label: '10 - 99' },
    industry: {
      value: 6,
      label: 'Finance',
    },
    about: `We help you use your money for smart investments.`,
    featured: false,
    logoUrl:
      'https://images.startupopenhouse.com/thumbnail?colorspace=srgb&url=https://s3.amazonaws.com/soh-pwa-files-production/img/874e3c45-47dd-4ee6-a2ce-f9867d43d29c-1653e55f118.jpeg&width=310',
    position: {
      lat: 43.64491,
      lng: -79.41233,
    },
    hiring: false,
  },
]

// Coordinates for Union Station in Toronto. A backup
// in case we can't get the coordinates for this current
// user.
const unionStationCoordinates = {
  lat: 43.64553,
  lng: -79.38035,
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
    super(props)
    this.state = {
      myLat: unionStationCoordinates.lat,
      myLng: unionStationCoordinates.lng,
      currentLocation: '',

      filters: {
        industry: null,
        companySize: null,
        hiring: null,
      },

      filteredCompanies: [],

      isRebuildingMap: false,
      isRebuildingMapSuccess: false,
      isRebuildingMapFailure: false,
    }

    this.handleChangeLocationText = this.handleChangeLocationText.bind(this)
    this.handleSearchForLocation = this.handleSearchForLocation.bind(this)
    this.handleFiltersChange = this.handleFiltersChange.bind(this)

    this.filterByIndustry = this.filterByIndustry.bind(this)
    this.filterByCompanySize = this.filterByCompanySize.bind(this)
    this.filterByHiring = this.filterByHiring.bind(this)
    this._doFilter = this._doFilter.bind(this)
  }

  async componentDidMount() {
    const getLatitudePromise = () => {
      return new Promise(resolve => {
        // Get latitude and longitude.
        if (navigator) {
          navigator.geolocation.getCurrentPosition(
            position => {
              const lat = position.coords.latitude
              const lng = position.coords.longitude

              return resolve({
                lat: lat,
                lng: lng,
              })
            },
            err => {
              return resolve(null)
            },
            { enableHighAccuracy: true, timeout: 60000, maximumAge: 3600000 }
          )
        }
      })
    }

    const getCityAndCacheCoordinatePromise = async () => {
      // Get current city
      let city = ''
      try {
        city = await getCurrentCity()
        return city
      } catch (err) {
        return null
      }
    }

    const [coords, city] = await Promise.all([
      getLatitudePromise(),
      getCityAndCacheCoordinatePromise(),
    ])

    // If the navigator was able to successfully query and
    // retrieve the coordinates of this user, we'll take that
    // because it's more accurate.

    if (coords) {
      this.setState({
        myLat: coords.lat,
        myLng: coords.lng,
        currentLocation: city,
      })
    }

    // Otherwise, in the case that we weren't able to get it from
    // the user (they didn't accept, request timed out, non-secure
    // connection, etc), then we'll take it from the ip-stack req.
    else {
      const coordinates = await getCoordinates()
      this.setState({
        myLat: coordinates.lat,
        myLng: coordinates.lng,
        currentLocation: city,
      })
    }
  }

  /**
   * handleChangeLocationText
   *
   * @desc Updates the text for the current location.
   * @param {String} searchTerm
   *
   * @return void
   */

  handleChangeLocationText(searchTerm) {
    this.setState({
      ...this.state,
      currentLocation: searchTerm,
    })
  }

  /**
   * handleSearchForLocation
   * @desc When a user types in a new location and hits search,
   * we need to get the geolocation coordinates for that location and
   * then update our map. That's what this function does.
   */

  handleSearchForLocation() {
    const { currentLocation } = this.state
    const { Geocoder } = window
    Geocoder.geocode({ address: currentLocation }, geocodeResponse => {
      const lat = geocodeResponse[0].geometry.location.lat()
      const lng = geocodeResponse[0].geometry.location.lng()

      this.setState({
        ...this.state,
        myLat: lat,
        myLng: lng,
      })
    })
  }

  /**
   * handleFiltersChange
   * @desc When the filters change, we set the new filter
   * value and issue a filter over the current showing data.
   */

  handleFiltersChange(value, filterName) {
    // Set new filter values, signal intent to rebuild map
    this.setState({
      ...this.state,
      filters: {
        ...this.state.filters,
        [filterName]: value,
      },
    })
  }

  _doFilter() {
    // Filter companies
    const { hiring, companySize, industry } = this.state.filters
    let filteredCompanies = this.filterByCompanySize(
      this.filterByHiring(this.filterByIndustry(companies, industry), hiring),
      companySize
    )

    console.log('filtered companies', filteredCompanies)
  }

  detectFiltersChange = previousFilters => {
    const { industry, hiring, companySize } = previousFilters
    if (
      JSON.stringify(industry) !== JSON.stringify(this.state.filters.industry)
    )
      return true
    if (JSON.stringify(hiring) !== JSON.stringify(this.state.filters.hiring))
      return true
    if (
      JSON.stringify(companySize) !==
      JSON.stringify(this.state.filters.companySize)
    )
      return true
    return false
  }

  componentDidUpdate(prevProps, prevState) {
    const didFiltersChange = this.detectFiltersChange(prevState.filters)
    if (didFiltersChange) {
      this._doFilter()
    }
  }

  /**
   * filterByIndustry
   * @desc Only shows companies that are of the selected industries.
   * @param {Array | Object} companies original list of companies
   * @param
   */

  filterByIndustry(companies, industryFilters) {
    if (industryFilters !== null) {
      if (industryFilters.length !== 0) {
        companies = companies.filter(company => {
          // If the company doesn't belong to one of the filters provided,
          // then it shouldn't be shown.
          let show = false

          // Use "some()", return "true" when you want it to break.
          industryFilters.some(industry => {
            if (industry.value === company.industry.value) {
              show = true
              return true
            }
            return false
          })

          return show
        })
      }
    }

    return companies
  }

  /**
   * @filterByHiring
   * @desc Filter companies by companies hiring only.
   */

  filterByHiring(companies, hiringFilters) {
    if (hiringFilters !== null) {
      companies = companies.filter(company => {
        // If the company doesn't belong to one of the filters provided,
        // then it shouldn't be shown.

        if (hiringFilters.value === company.hiring) {
          return true
        }

        return false
      })
    }
    return companies
  }

  /**
   * filterByCompanySize
   * @desc Filters by company size.
   */

  filterByCompanySize(companies, companySizeFilters) {
    if (companySizeFilters !== null) {
      companies = companies.filter(company => {
        // If the company doesn't belong to one of the filters provided,
        // then it shouldn't be shown.

        if (companySizeFilters.value === company.companySize.value) {
          return true
        }

        return false
      })
    }
    return companies
  }

  render() {
    let { companies } = this.props.data;
    companies = companies.edges.map((c) => c.node);

    const { currentLocation } = this.state;
    return (
      <div className="directory-container">
        <DirectoryHeader
          currentLocation={currentLocation}
          onChange={this.handleChangeLocationText}
          onSubmit={this.handleSearchForLocation}
        />
        <div className="directory-body">
          <DirectoryFilters onChange={this.handleFiltersChange} />
          <DirectoryResultsList companies={companies ? companies : []} />
          <DirectoryMap
            companies={companies ? companies : []}
            currentLatitude={this.state.myLat}
            currentLongitude={this.state.myLng}
            isRebuildingMap={this.state.isRebuildingMap}
            isRebuildingMapSuccess={this.state.isRebuildingMapSuccess}
            isRebuildingMapFailure={this.state.isRebuildingMapFailure}
          />
        </div>
        <CallToAction
          header="Want your company listed here?"
          subHeader="Sign up for free and let students know you exist!"
          buttonText="Sign up"
          alt={true}
          location=""
        />
      </div>
    )
  }
}

export default Directory

export const directoryQuery = graphql`
  query DirectoryCompanies {
    companies: allDirectoryCompany(
      sort: { order: DESC, fields: [companyName] }
    ) {
      edges {
        node {
          id
          industry {
            value
            label
          }
          jobs {
            title
            slug
          }
          companyId
          companyName
          about
          logoUrl
          address
          companySize {
            value
            label
          }
          feature
          exploreSlug
          position {
            lat
            lng
          }
          hiring
        }
      }
    }
  }
`
