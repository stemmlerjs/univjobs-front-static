import React from 'react'
import Link from 'gatsby-link'
import features from '../styles/FeatureStyles.module.css'

class LeftFeatures extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render = () => {
    return (
      <section className={features.flexContainerLeft}>
        <div className={features.flexItem}>
          <h1>{this.props.header}</h1>
          <div>{this.props.paragraphOne}</div>
          <div>{this.props.paragraphTwo}</div>
          <div>{this.props.paragraphThree}</div>
        </div>
        <div className={features.imageContainer}>
          <img src={this.props.picture} />
        </div>
      </section>
    )
  }
}

LeftFeatures.defaultProps = {
  header: '',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  picture: '',
}

export default LeftFeatures
