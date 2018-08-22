import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import LandingPage from '../components/LandingPage'
import FeaturedSlider from '../components/companies/FeaturedSlider'

import exploreCompanies from '../img/companies/explore-companies.png'

/**
 * TODO: Replace this with actual data from
 * data source.
 */

const defaultData = {
  featuredCompanies: [{
    companyName: 'Rover',
    slogan: "We're the dog-walking company changing the world.",
    slug: '/companies/rover',
    brandImageUrl: 'https://user-images.githubusercontent.com/6892666/44449999-c2c6a380-a5bd-11e8-8a96-6b01c2020fb3.png'
  }, {
    companyName: 'Univjobs',
    slogan: "We help students get jobs, for real.",
    slug: '/companies/univjobs',
    brandImageUrl: 'https://univjobs.ca/static/u-logo.4bc69dc3.png'
  }]
}

/**
 * Companies
 * 
 * @desc Parent component to render all of the components for
 * the Explore Companies page via /companies.
 */

const Companies = () => (
  <div>
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
    <FeaturedSlider companies={defaultData.featuredCompanies}/>
  </div>
)

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
