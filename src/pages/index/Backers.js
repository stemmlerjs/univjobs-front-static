import React from 'react'
import backers from '../../styles/BackersStyles.module.css'

import haltech from '../../img/haltech.png'
import icube from '../../img/icube.png'
import startupSchool from '../../img/startupschool.png'
import sheridanEdge from '../../img/edge_hires-400x143.png'

const Backers = props => {
  return (
    <section className={backers.container}>
      <div className={backers.innerContainer}>
        <div className="heading-large">Who's backing us?</div>
        <div className={backers.backersList}>
          <div>
            <a href="http://haltech.ca/">
              <img src={haltech} />
            </a>
          </div>
          <div>
            <a href="http://icubeutm.ca/">
              <img src={icube} />
            </a>
          </div>
          <div>
            <a href="https://www.startupschool.org/">
              <img style={{ paddingLeft: '23px' }} src={startupSchool} />
            </a>
          </div>
          <div>
            <a href="https://edge.sheridancollege.ca/">
              <img src={sheridanEdge} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Backers;
