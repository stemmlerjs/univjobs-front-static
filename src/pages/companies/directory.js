import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import DirectoryHeader from '../../components/directory/components/DirectoryHeader'
import DirectoryFilters from '../../components/directory/components/DirectoryFilters'
import DirectoryResultsList from '../../components/directory/components/DirectoryResultsList'
import DirectoryMap from '../../components/directory/components/DirectoryMap'
import MobilePagePicture from '../../components/directory/components/MobilePagePicture'
import Loading from '../../components/Loading'
import { getCurrentCity, getCoordinates } from '../../utils/ip'
import CallToAction from '../../components/CallToAction'
import config from '../../config'
import SEO from '../../components/SEO'
import '../../styles/Directory/Directory.sass'
import { calculateDistance } from '../../utils/navigation'
import { ClipLoader } from 'react-spinners'

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
        hiring: { label: 'Yes', value: true },
      },

      filteredCompanies: [],

      isRebuildingMap: false,
      isRebuildingMapSuccess: false,
      isRebuildingMapFailure: false,

      width: 0,
      height: 0,

      isSearching: true,
    }

    this.handleChangeLocationText = this.handleChangeLocationText.bind(this)
    this.handleSearchForLocation = this.handleSearchForLocation.bind(this)
    this.handleFiltersChange = this.handleFiltersChange.bind(this)

    this.filterByIndustry = this.filterByIndustry.bind(this)
    this.filterByCompanySize = this.filterByCompanySize.bind(this)
    this.filterByHiring = this.filterByHiring.bind(this)
    this._doFilter = this._doFilter.bind(this)

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.getInitialPosition = this.getInitialPosition.bind(this)
    this.sortByDistance = this.sortByDistance.bind(this)
    this.detectLocationChange = this.detectLocationChange.bind(this)
    this.isMobileUser = this.isMobileUser.bind(this)
  }

  componentWillUnmount() {
    if (typeof window !== undefined) {
      window.removeEventListener('resize', this.updateWindowDimensions)
    }
  }

  areFiltersApplied = () => {
    const { industry, companySize, hiring } = this.state.filters
    if (industry) {
      if (industry.length !== 0) {
        return true
      }
    }

    if (companySize) return true
    if (hiring) return true
    return false
  }

  /**
   * getInitialPosition
   *
   * @desc Get the initial coordinates for the user.
   */

  async getInitialPosition(cb) {
    /**
     * getLatitudePromise
     * @desc This function attempts to acquire the latitude
     * and longitude of the current user via navigator.
     *
     * @return {Promise | Object | null} returns null if it can't find the
     * coordinates via navigator.
     */

    const getLatitudePromise = () => {
      return new Promise(resolve => {
        // Create a timeout, if we don't get a response after 3 seconds,
        // then we're going to skip and get the initial position through
        // other means, not through navigator. We can't wait on it.
        let id = setTimeout(() => {
          console.log(
            '[Directory]: Navigator timed out, continuing with IPstack call.'
          )
          return resolve(null)
        }, 3000)

        // Get latitude and longitude from the navigator. If this doesn't
        // work after 3 seconds, we cancel this promise and return null.
        if (window.navigator) {
          window.navigator.geolocation.getCurrentPosition(
            position => {
              // Acquired position through the navigator.
              const lat = position.coords.latitude
              const lng = position.coords.longitude
              console.log('[Directory]: Got lat/lng via navigator.')
              clearTimeout(id)

              return resolve({
                lat: lat,
                lng: lng,
              })
            },
            err => {
              clearTimeout(id)
              return resolve(null)
            },
            { enableHighAccuracy: true, timeout: 60000, maximumAge: 3600000 }
          )
        }
      })
    }

    /**
     * getCityAndCacheCoordinatePromise
     * @desc Gets the current user's city.
     */

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

      if (cb) cb()
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

      if (cb) cb()
    }
  }

  componentDidMount() {
    // Get the initial position of the user.
    this.getInitialPosition(() => {
      debugger;
      // Filter companies
      this._doFilter();
    })

    // Setup event listener on window dimensions
    this.updateWindowDimensions()
    if (typeof window !== undefined) {
      window.addEventListener('resize', this.updateWindowDimensions)
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
    const { Geocoder } = window;
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
        isSearching: true,
      },
      isRebuildingMap: !this.isMobileUser() ? !this.state.isRebuildingMap : this.state.isRebuildingMap
    })
  }

  isMobileUser () {
    const { width } = this.state;
    return width < 675;
  }

  _doFilter() {
    // Filter companies
    const { hiring, companySize, industry } = this.state.filters
    const companies = this.getCompaniesFromProps()

    let filteredCompanies = this.filterByCompanySize(
      this.filterByHiring(this.filterByIndustry(companies, industry), hiring),
      companySize
    );

    this.setState({
      ...this.state,
      filteredCompanies: filteredCompanies,
      isSearching: false,
      isRebuildingMap: this.isMobileUser() ? false : !this.state.isRebuildingMap
    })
  }

  sortByDistance (companies) {
    const { myLat, myLng } = this.state
    return companies.map(company => {
      const distance = calculateDistance(
        myLat,
        myLng,
        company.position.lat,
        company.position.lng,
        'K'
      )
      company.distance = distance
      return company
    })
    .sort((a, b) => {
      return a.distance - b.distance
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

  detectLocationChange (prevLat, prevLng) {
    if (prevLat !== this.state.myLat) return true;
    if (prevLng !== this.state.myLng) return true;
    return false
  }

  componentDidUpdate(prevProps, prevState) {
    const didFiltersChange = this.detectFiltersChange(prevState.filters)
    const didLocationChange = this.detectLocationChange(prevState.myLat, prevState.myLng)
    if (didFiltersChange || didLocationChange) {
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
            return false;
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
    return this.shuffleFeatured(
      this.sortByDistance(companies.edges.map(c => c.node))
    )
  }

  /**
   * shuffleFeatured
   * 
   * @desc This function places the featured companies towards the 
   * top of the list, shuffled every 3/4 companies.
   */

  shuffleFeatured = (companies) => {
    let featuredMap = [];
    // Get all featured companies
    companies.filter((company, i) => {
      if (company.feature) {
        featuredMap.push({ index: i, company: company })
        return true;
      }
      return false;
    });

    // Only begin shuffling if there were some featured companies
    // found.
    if (featuredMap.length !== 0) {
      let shuffleIndex = 0;
      featuredMap.forEach((featured, ind) => {
        // Remove the featured company from the original list.
        companies.splice(featured.index, 1)
        // Insert featured company
        companies.splice(shuffleIndex, 0, featured.company)
        // Get next position of featured company
        shuffleIndex = companies[(shuffleIndex + 3)] ? shuffleIndex + 3 : shuffleIndex + 1;
      });
    }
    
    return companies;
  }

  updateWindowDimensions() {
    if (typeof window !== undefined) {
      this.setState({ width: window.innerWidth, height: window.innerHeight })
    }
  }

  render() {
    const {
      filteredCompanies,
      currentLocation,
      width,
      isSearching,
    } = this.state
    const companies = this.areFiltersApplied()
      ? filteredCompanies
      : this.getCompaniesFromProps()

      console.log(companies)

    return (
      <div className="directory-container">
        <SEO
          isBlogPost={false}
          postData={{
            title: 'Companies Near Me | Univjobs',
            description:
              'Find local tech, design, business and part-time jobs near you',
          }}
        />
        <DirectoryHeader
          currentLocation={currentLocation}
          onChange={this.handleChangeLocationText}
          onSubmit={this.handleSearchForLocation}
        />
        <div className="directory-body">
          <MobilePagePicture />
          <DirectoryFilters
            onChange={this.handleFiltersChange}
            values={this.state.filters}
          />
          {isSearching ? (
            <div className="search-container">
              <div className="search-message-title">Retrieving companies</div>
              <div>Just a moment!</div>
              <div
                style={{
                  margin: '0 auto',
                  textAlign: 'center',
                  paddingTop: '10px'
                }}
                className="center"
              >
                <ClipLoader color={'#48ded7'} loading={true} />
              </div>
            </div>
          ) : !isSearching && companies.length === 0 ? (
            <div className="search-container">
              <div className="search-message-title">No results found</div>
              <div>Try adjusting your search filters!</div>
            </div>
          ) : (
            <DirectoryResultsList 
              companies={companies ? companies : []} 
              isMobile={this.isMobileUser()}
            />
          )}

          {!this.isMobileUser() ? (
            <DirectoryMap
              companies={companies ? companies : []}
              currentLatitude={this.state.myLat}
              currentLongitude={this.state.myLng}
              isRebuildingMap={this.state.isRebuildingMap}
              isRebuildingMapSuccess={this.state.isRebuildingMapSuccess}
              isRebuildingMapFailure={this.state.isRebuildingMapFailure}
            />
          ) : (
            ''
          )}
        </div>
        <CallToAction
          header="Students and recent grads"
          subHeader="Sign up for free, apply to 🔥 jobs, get hired."
          buttonText="Sign up"
          alt={false}
          location={`${config.appUrl}register`}
        />
        <CallToAction
          header="Employers, want your company listed here?"
          subHeader="Sign up for free and let students know you exist"
          buttonText="Create account"
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
            active
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
          position {
            lat
            lng
          }
          hiring
          fields {
            slug
            exploreSlug
          }
        }
      }
    }
  }
`
