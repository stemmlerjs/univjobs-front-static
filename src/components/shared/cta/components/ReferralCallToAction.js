import React from 'react'

import PropTypes from 'prop-types'
import { redirectTo } from '../../../../helpers'
import studentCTA from '../styles/StudentCallToActionStyles.module.css'
import altStudentCTA from '../styles/AltStudentCallToActionStyles.module.css'

class ReferralCallToAction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onClickButton = this.onClickButton.bind(this)
  }

  onClickButton() {
    //Amplitude: Grab device id and pass as a ref
    redirectTo(`${this.props.location}`)
  }

  render = () => {
    return (
      <section
        className={
          this.props.alt ? altStudentCTA.container : studentCTA.container
        }
      >
        <h3>{this.props.header}</h3>
        <div>{this.props.subHeader}</div>

          {this.props.button}
      </section>
    )
  }
}

ReferralCallToAction.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
  button: PropTypes.any,
  alt: PropTypes.bool,
  location: PropTypes.string,
}

export default ReferralCallToAction
