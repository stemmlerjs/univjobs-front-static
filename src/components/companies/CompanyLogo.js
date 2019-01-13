import React from 'react'
import PropTypes from 'prop-types'

import altCompanyImg from '../../img/directory/company.svg'
import { doesLogoExist } from '../../utils/misc'

import '../../styles/company/CompanyLogo.sass'

const CompanyLogo = ({ logoUrl }) => (
  <div className="company-logo">
    {doesLogoExist(logoUrl) ? <img src={logoUrl}/> : <img src={altCompanyImg}/>}
    
  </div>
)

export default CompanyLogo;
