import React from 'react'
import PropTypes from 'prop-types'
import "../styles/Tag.sass"

const Tag = ({ name }) => (
  <div className="tag">#{name}</div>
)

export default Tag;

Tag.propTypes = {
  name: PropTypes.string.isRequired
}