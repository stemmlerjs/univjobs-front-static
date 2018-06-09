import React from 'react'
import Link from 'gatsby-link'

import social from '../styles/SocialValidation.module.css'



/**
 * NOTE: We can use this for other logos such as employers who use us
 */
class SocialValidation extends React.Component {
    constructor () {
      super();
      this.state = {
      };
    }


render = () => {
    return (
      <section className={social.container}>
        <div className={social.innerContainer}>
          <h1>{this.props.header}</h1>
          <div className={social.backersList}>
           { 
              Object.values(this.props.logos).map( logo => 
                <div><a href={logo[0]}><img className={social.logos} src={logo[1]}></img></a></div>
                )
            }  
          
          </div>
        </div>  
      </section>
    )
 }
}

/**
 * NOTE: For this, we want to limit the logos to six
 */
SocialValidation.defaultProps = {
  header: '',
  logos: {},
}

export default SocialValidation