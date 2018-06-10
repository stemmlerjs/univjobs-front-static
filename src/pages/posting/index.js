import React from 'react'
import Link from 'gatsby-link'

import ShortHero from '../../components/ShortHero'
import job from '../../styles/JobPosting.module.css'

import haltech from '../../img/haltech.png'
import briefcase from '../../img/briefcase.svg'
import money from '../../img/money.svg'
import place from '../../img/place.svg'




const JobHeader = (props) => {
    return(
        <section className={job.jobHeaderContainer}>
        <div className={job.centeredJobContainer}>
                <div className={job.companyBrandImageContainer}>
                    <img className={job.companyBrandImage} src={haltech}/>
                </div>
                <h3 className={job.jobTitle}>Haltech</h3>
                <span style={{marginLeft: '8%'}} className={job.jobHeaderInfo}>
                    <img className={job.icons}src={place}/>
                </span>
                <p className={job.iconText}>Toronto, ON</p>
                <span className={job.jobHeaderInfo}>
                    <img className={job.icons}src={briefcase}/>
                </span>
                <p className={job.iconText}>Entry-level</p>
                <span className={job.jobHeaderInfo}>
                    <img className={job.icons}src={money}/>
                </span>
                <p className={job.iconText}>$15/h</p>

                <button className={job.applyHeaderButton}>APPLY NOW</button>

        </div>
      </section>

    )

}


export default () => 
  <div>
      <ShortHero
         heroTitle= 'Job Test'
         heroSubTitle= ''
         image=""
      />
      <JobHeader/>
     
  </div>
