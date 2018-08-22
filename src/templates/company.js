import React from 'react'
import PropTypes from 'prop-types'

class CompanyTemplate extends React.Component {
  render () {
    return (
      <section>
        company page
      </section>
    )
  }
}

export default CompanyTemplate;

export const pageQuery = graphql`
  query CompanyTemplateQuery($companyId: Int) {
    company: allCompany(filter: {
      companyId: { eq: $companyId }
    }) {
    
      edges {
        node { 
          id
          companyName
          companyId
          industry
          logoUrl
          earlyAdopter
          brandImageUrl
          fields {
            slug
          }
        }
      }
    }
  }
`
