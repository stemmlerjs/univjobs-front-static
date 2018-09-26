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
import config from '../../config'
import SEO from '../../components/SEO'
import '../../styles/Directory/Directory.sass'

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

  areFiltersApplied = () => {
    const { industry, companySize, hiring } = this.state.filters;
    if (industry) {
      if (industry.length !== 0) {
        return true;
      }
    }

    // TODO: Put a clear button under both of these to set to null
    if (companySize) return true;
    if (hiring) return true;
    return false;
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
    const { hiring, companySize, industry } = this.state.filters;
    const companies = this.getCompaniesFromProps();
    
    let filteredCompanies = this.filterByCompanySize(
      this.filterByHiring(this.filterByIndustry(companies, industry), hiring),
      companySize
    )

    console.log('filtered companies', filteredCompanies)
    this.setState({
      ...this.state,
      filteredCompanies: filteredCompanies
    })
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

  getCompaniesFromProps = () => {
    let { companies } = this.props.data;
    return companies.edges.map((c) => c.node);
  }

  render() {
    const { filteredCompanies, currentLocation } = this.state;
    const companies = this.areFiltersApplied() ? filteredCompanies : this.getCompaniesFromProps();

    console.log(this.state)
    
    return (
      <div className="directory-container">
        <SEO
          isBlogPost={false}
          postData={{
            title: "Companies Near Me | Univjobs",
            description: "Find local tech, design, business and part-time jobs near you"
          }}
        />
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
          location={`${config.appUrl}register/employer`}
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
