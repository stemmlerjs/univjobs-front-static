import React from 'react'
import PropTypes from 'prop-types'
import LandingPage from '../components/LandingPage'
import CompanyHeader from '../components/companies/CompanyHeader'
import CompanyJobs from '../components/companies/CompanyJobs'
import CompanyArticles from '../components/companies/CompanyArticles'
import TextSection from '../components/companies/TextSection'
import ListSection from '../components/companies/ListSection'
import Videos from '../components/companies/Videos'
import SocialMediaSection from '../components/companies/SocialMediaSection'
import OfficesSection from '../components/companies/OfficesSection'
import CultureSection from '../components/companies/CultureSection'
import helpers from '../helpers'
import { logExploreCompanyView } from '../utils/logging';
import SEO from '../components/SEO'

/**
 * CompanyTemplate
 * 
 * @class The CompanyTemplate class outlines the template for how
 * an "Explore companies" commpany page will actually look.
 * 
 * @see LandingPage for the background image at the top
 * @see CompanyHeader for the header details
 * @see CompanyJobs for the jobs search
 * @see CompanyArticles for all of the articles by this company
 */

class DirectoryCompanyTemplate extends React.Component {

  componentDidMount () {}

  render () {
    const company = this.props.data.allDirectoryCompany.edges[0].node;

    return (
      <div>
        <SEO
          isBlogPost={false}
          postImage={company.logoUrl}
          postData={{
            title: `${company.companyName} | Univjobs - Jobs for students and recent-grads`,
            description:
              `Apply to student, part-time and recent grad jobs at ${company.companyName} 
              `,
          }}
        />
      </div>
    )
  }
}

DirectoryCompanyTemplate.propTypes = {

}

export default DirectoryCompanyTemplate;

export const pageQuery = graphql`
query DirectoryCompanyQuery($companyId: Int) {
  allDirectoryCompany(filter: {
    companyId: { eq: $companyId }
  }) {
      edges {
        node {
          fields {
            slug
          }
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
