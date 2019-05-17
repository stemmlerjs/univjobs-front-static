import React from 'react'
import Link from 'gatsby-link'
import "../styles/LogoCard.sass"

const LogoCard = ({ logoUrl, companySlug }) => (
  <Link className="logo-card" to={companySlug}>
    <img src={logoUrl}/>
  </Link>
)

export default LogoCard;