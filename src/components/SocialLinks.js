import React from 'react'
import PropTypes from 'prop-types'
import SocialLink from './SocialLink'
import '../styles/SocialLinks.sass'

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
