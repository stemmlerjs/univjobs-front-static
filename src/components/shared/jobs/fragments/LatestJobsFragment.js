import React from "react"

export default ( props ) => {
  return (<div></div>)
}

export const query = graphql`
  fragment LatestJobProps on LatestJob {
    id 
    jobType {
      id
      name
    }
    title
    companyName 
    logoUrl
    slug
    cities
    datePosted
    skills
    companySlug
    salary
    description
  }
`