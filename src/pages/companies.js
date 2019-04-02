import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import helpers from '../helpers'

import LandingPage from '../components/LandingPage'
import FeaturedSlider from '../components/companies/FeaturedSlider'
import CompaniesShowcase from '../components/companies/CompaniesShowcase'
import { CallToAction } from '../components/shared'
import DirectoryLink from '../components/companies/DirectoryLink'

import config from '../config'
import {SEO, PageType} from '../components/seo'

import exploreCompanies from '../img/companies/explore-companies.png'

/**
 * Companies
 *
 * @desc Parent component to render all of the components for
 * the Explore Companies page via /companies.
 */

class Companies extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props
    const companies = helpers.companies.getCompaniesFromQuery(data.companies)
    const featuredCompanies = helpers.companies.getCompaniesFromQuery(
      data.featureCompanies
    )
    console.log(data)
    console.log(this.props)
    return (
      <div>
         <SEO
        requiredProps={{
          title: 'Find companies that hire college students and recent grads',
          description: 'Look inside different companies to see what they offer, what they do, and apply for jobs.',
          url: window.location.href,
          image: config.assets.image.logo

        }}
        type={PageType.REGULAR}
        pageProps={{
        }}
      />
        <LandingPage
          heroTitle="Explore Companies"
          heroSubTitle={`Top companies are searching for candidates just like you.
          Discover their company culture and the careers they offer.`}
          options={{
            alignment: 'center',
            image: exploreCompanies,
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
        <FeaturedSlider companies={featuredCompanies} />
        <CompaniesShowcase
          title={'Growing companies'}
          subTitle={`Looking for an opportunity to make an impact? 
            These companies are growing fast and looking for new grads to shape the future of their business.`}
          companies={companies}
        />
        <DirectoryLink />
        <CallToAction
          header="Get access to these company jobs"
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
    featureCompanies: allCompany(filter: { featured: { eq: true } }) {
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
