import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import helpers from '../helpers'
import { univjobsAPI } from '../api'

import { LandingPageHero } from '../components/landing-page'
import FeaturedSlider from '../components/companies/FeaturedSlider'
import CompaniesShowcase from '../components/companies/CompaniesShowcase'
import { CallToAction } from '../components/shared/cta'

import config from '../config'
import {SeoLayout, PageType} from '../components/seo'

import exploreCompaniesImage from '../img/companies/explore-companies.png'

/**
 * Companies
 *
 * @desc Parent component to render all of the components for
 * the Explore Companies page via /companies.
 */

class Companies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetchingCompanies: false,
      isFetchingCompaniesSuccess: false,
      isFetchingCompaniesFailure: false,
      exploreCompanies: [],
      featuredCompanies: [],
    }
  }

  updateFetchStatus (isFetchingCompanies,
    isFetchingCompaniesSuccess,
    isFetchingCompaniesFailure) {
      this.setState({
        ...this.state,
        isFetchingCompanies,
        isFetchingCompaniesSuccess,
        isFetchingCompaniesFailure
      })
  }
  
  async componentDidMount () {
    try {
      this.updateFetchStatus(true, false, false)
      const [ exploreCompanies, featuredCompanies ] = await Promise.all([
        univjobsAPI.getAllExploreCompanies(),
        univjobsAPI.getAllFeaturedCompanies()
      ])

      this.setState({
        ...this.state,
        exploreCompanies,
        featuredCompanies
      });

      this.updateFetchStatus(false, true, false)
    } catch (err) {
      this.updateFetchStatus(false, false, true)
    }
  }

  getFeaturedCompanies () {
    const { data } = this.props
    const featuredCompaniesFromProps = helpers.companies.getCompaniesFromQuery(
      data.featuredCompanies
    )
    const featuredCompaniesFromState = this.state.featuredCompanies;
    return featuredCompaniesFromState.length !== 0 ? featuredCompaniesFromState : featuredCompaniesFromProps;
  }

  getExploreCompanies () {
    const { data } = this.props
    const exploreCompaniesFromProps = helpers.companies.getCompaniesFromQuery(data.companies)
    const exploreCompaniesFromState = this.state.exploreCompanies;
    return exploreCompaniesFromProps.map((exploreCompany) => {
      let companyFromState = exploreCompaniesFromState.filter((e) => e.employer_id === exploreCompany.companyId)
      const companyFound = companyFromState.length !== 0;

      if (companyFound) {
        companyFromState = companyFromState[0];
        exploreCompany.brandImageUrl = companyFromState.brand_image_url;
        exploreCompany.logoUrl = companyFromState.logo_url;
        exploreCompany.industries = companyFromState.CompanyIndustries;
      }
      
      return exploreCompany;
    })
  }

  render() {
    const exploreCompanies  = this.getExploreCompanies();
    const featuredCompanies = this.getFeaturedCompanies();

    return (
      <div>
       <SeoLayout
        requiredProps={{
          title: 'Find companies that hire college students and recent grads',
          description: 'Look inside different companies to see what they offer, what they do, and apply for jobs.',
          url: `${config.url}companies`,
          image: config.assets.image.logo

        }}
        type={PageType.REGULAR}
        pageProps={{
        }}
       />
        <LandingPageHero
          heroTitle="Explore Companies"
          heroSubTitle={`Top companies are searching for candidates just like you.
          Discover their company culture and the careers they offer.`}
          options={{
            alignment: 'center',
            image: exploreCompaniesImage,
            hasPolygon: false,
            hero: {
              showHeroMask: false,
              showDarkMask: true,
              color: '',
            },
            styles: {
              container: {
                maxHeight: '45vh',
                minHeight: '45vh',
                textAlign: 'center',
              },
            },
          }}
        />
        <FeaturedSlider 
          companies={featuredCompanies} 
        />
        <CompaniesShowcase
          title={'Growing companies'}
          subTitle={`Looking for an opportunity to make an impact? 
            These companies are growing fast and looking for new grads to shape the future of their business.`}
          companies={exploreCompanies}
        />
        {/* <DirectoryLink /> */}
        <CallToAction
          header="Get access to student-friendly jobs"
          subHeader=""
          buttonText="Start applying"
          alt={true}
          location={`${config.appUrl}register`}
        />
      </div>
    )
  }
}

Companies.propTypes = {
  featuredCompanies: PropTypes.arrayOf(
    PropTypes.shape({
      companyName: PropTypes.string,
      slogan: PropTypes.string,
      slug: PropTypes.string,
      brandImageUrl: PropTypes.string,
    })
  ).isRequired,
}

export default Companies

export const companiesPageQuery = graphql`
  query CompaniesQuery {
    featuredCompanies: allCompany(filter: { featured: { eq: true } }) {
      edges {
        node {
          id
          aboutUs
          brandImageUrl
          companyId
          companyName
          featured
          funFacts
          logoUrl
          numEmployees
          mission
          perks
          companyValues
          cultureItems {
            image
            title
            description
          }
          industries {
            industry_text
            industry_id
          }
          slogan
          socialLinks {
            url
            type
          }
          jobs {
            title
            location
            slug
            jobTypeId
            jobType
          }
          articles {
            companyName
            employerId
            title
            sponsored
            sponsoredCompanyName
            sponsoredCompanyImage
            timeToRead
            slug
            image
          }
          offices {
            name
            street
            headquarters
            provinceOrState
            city
            country
          }
          videos
          vision
          fields {
            slug
          }
          hidden
        }
      }
    }

    companies: allCompany(filter: { hidden: { eq: false } }) {
      edges {
        node {
          id
          aboutUs
          brandImageUrl
          companyId
          companyName
          featured
          funFacts
          logoUrl
          numEmployees
          mission
          perks
          companyValues
          cultureItems {
            image
            title
            description
          }
          industries {
            industry_text
            industry_id
          }
          slogan
          socialLinks {
            url
            type
          }
          jobs {
            title
            location
            slug
            jobTypeId
            jobType
          }
          articles {
            companyName
            employerId
            title
            sponsored
            sponsoredCompanyName
            sponsoredCompanyImage
            timeToRead
            slug
            image
          }
          offices {
            name
            street
            headquarters
            provinceOrState
            city
            country
          }
          videos
          vision
          fields {
            slug
          }
          hidden
        }
      }
    }
  }
`
