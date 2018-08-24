import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/company/CompanyLogo.sass'

const CompanyLogo = ({ logoUrl }) => (
  <div className="company-logo">
    <img src={logoUrl}/>
  </div>
)

export default CompanyLogo;
