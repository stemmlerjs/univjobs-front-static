import React from 'react'
import PropTypes from 'prop-types'

const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

HTMLContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

export default HTMLContent