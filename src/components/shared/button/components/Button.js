import React from 'react'
import PropTypes from 'prop-types'
import "../styles/Button.sass"

const Button = ({ text, onClick }) => (
  <button className="button standard-button" onClick={onClick}>{text}</button>
)

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired
}