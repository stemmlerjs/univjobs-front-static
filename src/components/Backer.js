import React from 'react'
import Link from 'gatsby-link'

import backers from '../styles/BackersStyles.module.css'



/**
 * NOTE: We can use this for other logos such as employers who use us
 */
class Backer extends React.Component {
    constructor () {
      super();
      this.state = {
      };
    }


render = () => {
    return (
      <section className={backers.container}>
        <div className={backers.innerContainer}>
          <h1>{this.props.header}</h1>
          <div className={backers.backersList}>
           { 
              Object.values(this.props.logos).map( logo => 
                <div><a href={logo[0]}><img style={{maxWidth: '220px'}} src={logo[1]}></img></a></div>
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
Backer.defaultProps = {
  header: '',
  logos: {},
}

export default Backer