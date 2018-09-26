import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import helpers from '../helpers'

import LandingPage from '../components/LandingPage'
import FeaturedSlider from '../components/companies/FeaturedSlider'
import CompaniesShowcase from '../components/companies/CompaniesShowcase'
import CallToAction from '../components/CallToAction'
import DirectoryLink from '../components/companies/DirectoryLink';

import config from '../config'
import SEO from '../components/SEO'

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

  render () {
    const { data } = this.props;
    const companies = helpers.companies.getCompaniesFromQuery(data.companies);
    const featuredCompanies = helpers.companies.getCompaniesFromQuery(data.featureCompanies);
    console.log(data)
    return (
      <div>
        <SEO
          isBlogPost={false}
          postData={{
            title: "Companies @ Univjobs | Explore companies",
            description: "Explore companies on Univjobs offering opportunities for students and recent-grads"
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
        <FeaturedSlider 
          companies={featuredCompanies}/>
        <CompaniesShowcase 
          title={'Growing companies'}
          subTitle={`Looking for an opportunity to make an impact? 
            These companies are growing fast and looking for new grads to shape the future of their business.`}
          companies={companies}
        />
        <DirectoryLink/>
        <CallToAction
          header="Get started now!"
          subHeader="Create your profile and get access to student-friendly jobs."
          buttonText="Sign me up"
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
      brandImageUrl: PropTypes.string
    }
  )).isRequired
}

export default Companies

export const companiesPageQuery = graphql`
query CompaniesQuery {
  featureCompanies: allCompany ( 
      filter: {
        featured: { eq: true }
      }
    ) {
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
          industry
          mission
          perks
          companyValues
          cultureItems {
            image
            title
            description
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
  
    companies: allCompany ( 
      filter: {
        hidden: { eq: false }
      }
    ) { 
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
          industry
          mission
          perks
          companyValues
          cultureItems {
            image
            title
            description
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
