import React from 'react'
import Link from 'gatsby-link'
import "../styles/LogoCard.sass"
import altCompanyImg from '../../../../img/directory/company.svg'

const LogoCard = ({ logoUrl, companySlug }) => (
  <Link className="logo-card" to={companySlug}>
    { !!logoUrl === true ? <img src={logoUrl}/> : <img src={altCompanyImg}/> }
    
  </Link>
)

export default LogoCard;