import React from 'react'
import Link from 'gatsby-link'
import features from '../styles/StudentFeatureStyles.module.css'

class LeftFeatures extends React.Component {
    constructor () {
      super();
      this.state = {
      };
    }

render = () => {
    return (
        <section className={features.flexContainerLeft}>
          <div className={features.flexItem}>
            <h1>{this.props.header}</h1>
            <div>{this.props.paragraphOne}</div>
            <div>{this.props.paragraphTwo}</div>
          </div>
          <img style={{maxWidth: '40%', height: 'auto'}} src={this.props.picture}></img>
        </section>
     )
    }
}

LeftFeatures.defaultProps = {
    header: '',
    paragraphOne: '',
    paragraphTwo: '',
    picture: ''
  };
  
export default LeftFeatures
  