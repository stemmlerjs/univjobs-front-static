import React from 'react'
import { redirectTo } from '../../../../helpers'

import studentCTA from '../styles/StudentCallToActionStyles.module.css'
import altStudentCTA from '../styles/AltStudentCallToActionStyles.module.css'
import landingePageStyles from '../../../landing-page/styles/LandingPageStyles.module.css'

class CallToAction extends React.Component {
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
        <button
          onClick={this.onClickButton}
          className={`${landingePageStyles.getStartedButton} ${
            studentCTA.button
          }`}
        >
          {this.props.buttonText}
        </button>
      </section>
    )
  }
}

CallToAction.defaultProps = {
  header: '',
  subHeader: '',
  buttonText: '',
  alt: false,
  location: '',
}

export default CallToAction
