import React from 'react'
import PropTypes from 'prop-types'

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

export default Content
