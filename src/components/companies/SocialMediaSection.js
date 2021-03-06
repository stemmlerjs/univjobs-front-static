import React from 'react'
import PropTypes from 'prop-types'
import withSection from './withSection'
import '../../styles/company/ListSection.sass'

import { SocialLink } from '../shared/social'

const SocialMedia = props => (
  <div className="list-section-item">
    <a
      href={props.url}
      style={{ textDecoration: 'none', color: 'inherit' }}
      className="social-item"
    >
      <SocialLink {...props} />
      <div className="social-type">{props.type}</div>
    </a>
  </div>
)

SocialMedia.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

class SocialMediaSection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { links } = this.props
    return (
      <div className="list-section">
        {links
          .filter(link => link.url !== '')
          .map((link, i) => (
            <SocialMedia key={i} {...link} />
          ))}
      </div>
    )
  }
}

SocialMediaSection.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
  size: PropTypes.string.isRequired,
}

export default withSection(SocialMediaSection)
