import React from 'react'
import PropTypes from 'prop-types'
import LandingPage from '../components/LandingPage'
import CompanyHeader from '../components/companies/CompanyHeader'
import DirectoryMap from '../components/directory/components/DirectoryMap'

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
    const { lat, lng } = company.position;
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
        <div 
          // style={{
          //   backgroundImage: `url("https://api.mapbox.com/v4/mapbox.outdoors/pin-l-marker+285A98(-79.3806,43.6453)/-79.3806,43.6453,15/600x300@2x.png?access_token=pk.eyJ1Ijoia3N0ZW1tbGVyIiwiYSI6ImNpbzYzdHY3OTAyNXF3M2tqcnBsNnNnbG0ifQ.t5zgcqnSItauuI69WK-Sew")`
          // }}
          className="directory-company-directory-map">
          <DirectoryMap
            currentLatitude={lat}
            currentLongitude={lng}
            styleUrl="mapbox://styles/kstemmler/cjmqjkd1w4gx82slmwc4t7qk5"
            zoom={15}
            companies={[company]}
            containerStyle={{
              height: '50vh',
              width: '100%',
            }}
          />
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
