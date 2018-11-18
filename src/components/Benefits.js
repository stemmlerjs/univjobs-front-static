import React from 'react'
import Link from 'gatsby-link'

import benefits from '../styles/BenefitsStyles.module.css'

import target from '../img/target.svg'
import search from '../img/search.svg'
import piggy from '../img/piggy-bank.svg'



/**
 * NOTE: We can use this for other logos such as employers who use us
 */
class Benefits extends React.Component {
    constructor () {
      super();
      this.state = {
      };
    }


render = () => {
    return (
      <section className={benefits.container}>
        <div className={benefits.innerContainer}>
          <div className={benefits.benefitsList}>
                <div className={benefits.column}>
                    <a href={'#'}><img className={benefits.icons} src={target}></img></a>
                    <h3>Target</h3>
                    <p> Target candidates with specific skillsets and backgrounds in leading post-secondary schools.</p>

                </div>
                <div className={benefits.column}>
                    <a href={'#'}><img className={benefits.icons} src={search}></img></a>
                    <h3>Invite</h3>
                    <p>Stop using Craigslist to ‘post & pray’. Use our search filters, be proactive and invite the perfect candidate.</p>

                </div>
                <div className={benefits.column}>
                    <a href={'#'}><img className={benefits.icons} src={piggy}></img></a>
                    <h3>Hire & Save</h3>
                    <p> Better applicants also means lower turnover and quicker hiring, which will save you time and money.</p>

                </div>
          </div>
        </div>  
      </section>
    )
 }
}

/**
 * NOTE: For this, we want to limit the logos to six
 */
Benefits.defaultProps = {
  header: '',
  logos: {},
}

export default Benefits
