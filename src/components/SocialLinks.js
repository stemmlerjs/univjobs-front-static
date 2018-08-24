import React from 'react'
import PropTypes from 'prop-types'

import facebook from '../img/facebook-logo.png'
import twitter from '../img/twitter-logo-silhouette.png'
import linkedin from '../img/linkedin-logo.png'
import instagram from '../img/instagram.svg'
import webPage from '../img/web-page-home.svg'

import '../styles/SocialLinks.sass'

/**
 * SocialLink
 *
 * @class is a single social link
 * that renders by type.
 */

const SocialLink = ({ url, type }) => (
  <a className="social-link" href={url}>
    {(() => {
      switch (type) {
        case 'facebook':
          return <img src={facebook} />
        case 'twitter':
          return <img src={twitter} />
        case 'linkedin':
          return <img src={linkedin} />
        case 'instagram':
          return <img src={instagram} />
        case 'website':
          return <img src={webPage} />
        default:
          return <div />
      }
    })()}
  </a>
)

SocialLink.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

/**
 * SocialLinks
 *
 * @class returns a list of social links.
 */

const SocialLinks = props => {
  if (props.links === undefined) {
    return <div />
  } else {
    return (
      <div className="social-links-container">
        {props.links.map((link, i) => <SocialLink key={i} {...link} />)}
      </div>
    )
  }
}

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
}

export default SocialLinks
