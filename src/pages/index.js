import React from 'react'
import Link from 'gatsby-link'

import landingePageStyles from '../styles/StudentLandingPageStyles.module.css'
import studentShowCaseStyles from '../styles/StudentShowCaseSectionStyles.module.css'

const StudentLandingPage = (props) => {
  return (
    <section className={landingePageStyles.backgroundFallback}>
      <div className={landingePageStyles.hero}></div>
      <div className={landingePageStyles.heroMask}></div>
      <div className={landingePageStyles.heroContainer}>
        <div className={landingePageStyles.title}>Quickly apply to student and recent grad jobs</div>
        <div className={landingePageStyles.subTitle}>A place where you can find jobs to earn cash and launch your career</div>

        <div className={landingePageStyles.ctaContainer}>
          <div className={landingePageStyles.buttonContainer}>
            <button className={landingePageStyles.getStartedButton}>GET STARTED</button>
            <div className={landingePageStyles.alreadyOn}>Already on Univjobs? <span>Sign in.</span></div>
          </div>
          <div className={landingePageStyles.buttonContainer}>
            <button className={landingePageStyles.employerButton}>I'm an employer</button>
          </div>
        </div>
      </div>
    </section>
  )
}

const StudentShowCaseSection = (props) => {
  return (
    <section className={studentShowCaseStyles.container}>

    </section>
  )
}

export default () =>
  <div>
    <StudentLandingPage/>
    <StudentShowCaseSection/>
  </div>