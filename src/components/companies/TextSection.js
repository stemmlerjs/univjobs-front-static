import React from 'react'
import PropTypes from 'prop-types'
import withSection from './withSection'

/**
 * TextSection
 *
 * @class that renders basic text in the company profile.
 */

class TextSection extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { text } = this.props
    return <div dangerouslySetInnerHTML={{ __html: text }} />
  }
}

TextSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

export default withSection(TextSection)
