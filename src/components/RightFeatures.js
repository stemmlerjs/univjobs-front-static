import React from 'react'
import Link from 'gatsby-link'
import features from '../styles/StudentFeatureStyles.module.css'

class RightFeatures extends React.Component {
    constructor () {
      super();
      this.state = {
      };
    }

render = () => {
    return (
        <section className={features.flexContainerRight}>
            <img  style={{width: '40%', height: 'auto'}} src={this.props.picture}></img>
          <div className={features.flexItem}>
            <h1>{this.props.header}</h1>
            <div>{this.props.paragraphOne}</div>
            <div>{this.props.paragraphTwo}</div>
          </div>
        </section>
     )
    }
}

RightFeatures.defaultProps = {
    header: '',
    paragraphOne: '',
    paragraphTwo: '',
    picture: ''
  };
  
export default RightFeatures
  