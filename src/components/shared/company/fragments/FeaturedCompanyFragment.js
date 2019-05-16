import React from "react"

export default ( props ) => {
  return (<div></div>)
}

export const query = graphql`
  fragment FeaturedCompanyProps on FeaturedCompany {
    id
    numOpenJobs
    companyName
    companySlug
    logoUrl
    city
  }
`