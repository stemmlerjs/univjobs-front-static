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
import '../styles/Directory/DirectoryCompanyTemplate.sass'

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
    console.log(company)

    return (
      <div>
        <SEO
          isBlogPost={false}
          postImage={company.logoUrl}
          postData={{
            title: `${company.companyName} | Univjobs - Jobs for students and recent-grads`,
            description:
              `Apply to student, part-time and recent grad jobs at ${company.companyName}`
          }}
        />
        <LandingPage
          heroTitle={`${company.companyName}`}
          subTitle=""
          options={{
            alignment: 'center',
            hasPolygon: false,
            hero: {
              showHeroMask: false,
              showDarkMask: false,
              color: '',
            },
            styles: {
              container: {
                maxHeight: '40vh',
                minHeight: '40vh',
                textAlign: 'center',
              }
            }
          }}
        />
        <CompanyHeader
          companyName={company.companyName}
          industry={company.industry.label}
          logoUrl={company.logoUrl}
          numEmployees={company.companySize.label}
        />
        <div className="directory-company-template-container">
        
          <div className="header">Where are they?</div>
          <p>{company.address}</p>

          <div className="header">What's their thing?</div>
          <p>{company.about}</p>
          
        </div>
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
