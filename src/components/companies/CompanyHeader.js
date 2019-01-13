import React from 'react'
import PropTypes from 'prop-types'

import SocialLinks from '../SocialLinks'
import CompanyLogo from './CompanyLogo'

const Industries = ({ industries }) => {
  console.log('=========innn', industries)
  if (!industries) return <div></div>
  if (industries.length === 1) return <span>{industries[0].industry_text}</span>
  
  return industries.map((industry, i) => {
    if (i === industries.length - 1) {
      return <span>{industry.industry_text}</span>
    } else {
      return <span>{industry.industry_text}, </span>
    }
  })
}

const CompanyHeader = (props) => {
  return (
    <div className="company-header-container">
    <div>
      <CompanyLogo logoUrl={props.logoUrl}/>
      <div className="company-header-main">
        <div>Careers at {props.companyName}</div>
        {props.industries ? props.industries.map((industry, i) => (
          <div className="industry" key={i}>{industry.industry_text}</div>
        )) : ''}
      </div>
      <div className="company-header-slogan">{props.slogan}</div>
    </div>
    <div>
      <div className="company-header-main">
        <div>Company size</div>
        <div>{props.numEmployees}</div>
      </div>
      <SocialLinks links={props.socialLinks}/>
    </div>
  </div>
  )
}

CompanyHeader.propTypes = {
  companyName: PropTypes.string.isRequired,
  industries: PropTypes.array.isRequired,
  slogan: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  numEmployees: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }))
}

export default CompanyHeader;
