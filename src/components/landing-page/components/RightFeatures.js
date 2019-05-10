import React from 'react'
import Link from 'gatsby-link'
import features from '../styles/FeatureStyles.module.css'

class RightFeatures extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render = () => {
    return (
      <section className={features.flexContainerRight}>
        <div className={features.imageContainer}>
          <img src={this.props.picture} />
        </div>
        <div className={features.flexItem}>
          <h1>{this.props.header}</h1>
          <div>{this.props.paragraphOne}</div>
          <div>{this.props.paragraphTwo}</div>
          <div>{this.props.paragraphThree}</div>
        </div>
      </section>
    )
  }
}

RightFeatures.defaultProps = {
  header: '',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  picture: '',
}

export default RightFeatures
