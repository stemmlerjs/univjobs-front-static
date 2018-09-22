import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import directoryLinkImg from '../../img/companies/directory-link.png'
import pin from '../../img/companies/pin.svg'
import '../../styles/company/DirectoryLink.sass'

const DirectoryLink = () => (
  <div 
    style={{ backgroundImage: `url(${directoryLinkImg})`}}
    className="directory-link-container">
      <h2 className="title">Directory</h2>
      <div className="divider"></div>
      <h5 className="sub-text">Find jobs at companies within your city</h5>
      <Link to="/companies/directory" className="button">
        <img src={pin}/>
        <div>Discover</div>
      </Link>
  </div>
)

export default DirectoryLink;