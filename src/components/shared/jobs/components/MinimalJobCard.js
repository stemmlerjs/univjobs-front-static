import React from 'react'
import PropTypes from 'prop-types'
import "../styles/MinimalJobCard.sass"
import LogoCard from '../../company/components/LogoCard';
import Link from 'gatsby-link'
import config from '../../../../config'



const JobCitiesList = ({ cities }) => (
  <span className="cities">
    {cities.map((city, i) => {
      if (cities.length === 0) {
        return ""
      } else if (i !== cities.length - 1) {
        return `${city},`
      } else {
        return city
      }
    })}
  </span>
)


const MinimalJobCard = ({ job }) => (
  <div className="minimal-job-listing">
    <div className="minimal-job-listing--logo-container">
      <LogoCard 
        companySlug={job.companySlug}
        logoUrl={job.logoUrl}
      />
    </div>
    <div className="minimal-job-listing--body-container">
      <div className="header">
        <div className="summary">
          <a href={`${config.appUrl}${job.slug}`} className="title">{job.title}</a>
          <Link className="company-name" to={job.companySlug}>{job.companyName}</Link> - <JobCitiesList cities={job.cities}/>
          <div>
          <div className="job-type">{job.jobType.name}</div>
          </div>
        </div>
        <div className="salary">{job.salary}</div>
      </div>
      <div 
        className="description" 
        dangerouslySetInnerHTML={{__html: job.description.substring(0, 200) + "..."}}>
      </div>
    </div>
  </div>
)

export default MinimalJobCard;