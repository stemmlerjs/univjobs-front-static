import React from 'react'
import PropTypes from 'prop-types'

//LandingPage
//JobHeaderContainer
//JobInfoContainer //TODO: Add social media

class JobTemplate extends React.Component {
    render() {
        return(
            <div/>
        )
    }
}

JobTemplate.propTypes = {

}

export default JobTemplate;

export const pageQuery = graphql `
    query JobTemplateQuery($jobId: Int) {
        job: allJobs(filter: {
            jobId: { eq: $jobId }
            hidden: { eq: false }
        })

    }
`
