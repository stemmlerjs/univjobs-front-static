import React from 'react'
import PropTypes from 'prop-types'

import SocialLinks from '../SocialLinks'
import CompanyLogo from './CompanyLogo'

const CompanyHeader = (props) => (
  <div className="company-header-container">
    <div>
      <CompanyLogo logoUrl={props.logoUrl}/>
      <div className="company-header-main">
        <div>Careers at {props.companyName}</div>
        <div>{props.industry}</div>
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

CompanyHeader.propTypes = {
  companyName: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  numEmployees: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }))
}

export default CompanyHeader;
