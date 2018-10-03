import React from 'react'
import Link from 'gatsby-link'

import CallToAction from '../components/CallToAction'
import LeftFeatures from '../components/LeftFeatures'
import RightFeatures from '../components/RightFeatures'
import Slidy from '../components/Slidy'

import landingePageStyles from '../styles/StudentLandingPageStyles.module.css'
import studentShowCaseStyles from '../styles/StudentShowCaseSectionStyles.module.css'
import studentCTA from '../styles/StudentCallToActionStyles.module.css'
import studentFeatures from '../styles/StudentFeatureStyles.module.css'
import altStudentCTA from '../styles/AltStudentCallToActionStyles.module.css'
import recognition from '../styles/BrandRecognitionStyles.module.css'
import backers from '../styles/BackersStyles.module.css'
import features from '../styles/FeatureStyles.module.css'

import leftside from '../img/leftside.png'
import companies from '../img/companies.png'

import grad from '../img/gradphotos.jpeg'

import companySmallOne from '../img/companies-resized-1.png'
import companySmallTwo from '../img/companies-resized-2.png'
import companySmallThree from '../img/companies-resized-3.png'

import featureOneImage from '../img/undraw_mail_2_tqip.png'
import featureTwoImage from '../img/undraw_job_hunt_byf9.png'
import workingStudent from '../img/leaf-wall-office-space_925x.png'
import td from '../img/td.png'
import asud from '../img/asud.png'
import haltech from '../img/haltech.png'
import icube from '../img/icube.png'
import startupSchool from '../img/startupschool.png'
import sheridanEdge from '../img/edge_hires-400x143.png'

import LandingPage from '../components/LandingPage'

import config from '../config'
import { redirectTo } from '../helpers'
import SEO from '../components/SEO'

const StudentShowCaseSection = props => {
  return (
    <div>
      <section className={studentShowCaseStyles.container}>
        <div className={studentShowCaseStyles.graphicsContainer}>
          <img style={{ maxHeight: '888px' }} src={leftside} />
        </div>
        <div className={studentShowCaseStyles.textContainer}>
          <div>
            <h1>One profile, one resume</h1>
          </div>

          <div className={studentShowCaseStyles.standardParagraph}>
            Making multiple cover letters and resumes, on top of your exams and
            projects, can be stressful and time consuming.
          </div>
          <div className={studentShowCaseStyles.standardParagraph}>
            The next time you apply to a job, you can relax. UnivJobs eliminates
            having to create multiple cover letters and resumes; that way, you
            can get back to your studies.
          </div>

          <div className={studentShowCaseStyles.regularWhosOn}>
            <div className={studentShowCaseStyles.whosOnContainer}>
              <h1 className={studentShowCaseStyles.whosOn}>
                Who's on our platform?
              </h1>
            </div>
            <img
              className={studentShowCaseStyles.companiesShowCase}
              src={companies}
            />
            <div
              style={{ margin: '0' }}
              className={studentShowCaseStyles.andMore}
            >
              ...and many more!
            </div>
          </div>
        </div>
      </section>
      <div className={studentShowCaseStyles.resizedWhosOn}>
        <div className={studentShowCaseStyles.whosOnContainer}>
          <h1 className={studentShowCaseStyles.whosOn}>
            Who's on our platform?
          </h1>
        </div>
        <img
          className={studentShowCaseStyles.companiesShowCase}
          src={companies}
        />

        <div className={studentShowCaseStyles.tinyScreens}>
          <img src={companySmallOne} />
          <img src={companySmallTwo} />
          <img src={companySmallThree} />
        </div>

        <div style={{ margin: '0' }} className={studentShowCaseStyles.andMore}>
          ...and many more!
        </div>
      </div>
    </div>
  )
}

const StudentCallToAction = props => {
  return (
    <section className={studentCTA.container}>
      <h1>Get started now!</h1>
      <div>Create your profile and get access to student-friendly jobs.</div>
      <button
        onClick={() => redirectTo(`${config.appUrl}register`)}
        className={`${landingePageStyles.getStartedButton} ${
          studentCTA.button
        }`}
      >
        Try it now
      </button>
    </section>
  )
}

const AltStudentCallToAction = props => {
  return (
    <section className={altStudentCTA.container}>
      <h1>Start now!</h1>
      <div>
        Students are already applying to jobs. Create your profile and find
        meaningful work today.
      </div>
      <button
        onClick={() => redirectTo(`${config.appUrl}register`)}
        className={`${landingePageStyles.getStartedButton} ${
          studentCTA.button
        }`}
      >
        Sign up
      </button>
    </section>
  )
}

const StudentBrandRecognition = props => {
  return (
    <section className={recognition.container}>
      <div className={recognition.quoteContainer}>
        <h1>Get recognized by top-tier brands</h1>
        <div>
          "Univjobs is a great platform for students to grow and connect with
          employers that truly want to foster the best in their abilities. We
          use it to find the best talent."{' '}
        </div>

        {true == false ? '' : ''}
        <div className={recognition.personContainer}>
          <div className={recognition.personImgContainer}>
            <img src={asud} />
          </div>
          <div className={recognition.personDetailsContainer}>
            <div>Asud Anderson</div>
            <div>Head of Campus Recruitment</div>
            <div className={recognition.personCompanyImgContainer}>
              <img src={td} />
            </div>
          </div>
        </div>
      </div>
      <div className={recognition.imgContainer}>
        <img src={workingStudent} />
      </div>
    </section>
  )
}

const Backers = props => {
  return (
    <section className={backers.container}>
      <div className={backers.innerContainer}>
        <h1>Who's backing us?</h1>
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

/**
 * heroTitle="Early access to young talent from any post-secondary school"
      heroSubTitle="A network of affordable qualified students for your growing team"
     
 */

const Index = () => (
  <div>
    <SEO
      isBlogPost={false}
      postData={{
        title: 'Univjobs | Simplifying hiring post-secondary students',
        description:
          'A place where you can find jobs to earn cash and launch your career.',
      }}
    />
    <LandingPage
      heroTitle="Quickly apply to student and recent grad jobs"
      heroSubTitle="A place where you can find jobs to earn cash and launch your career"
      options={{
        alignment: 'left',
        image: grad,
        buttons: {
          hasButtons: true,
          mainButtonText: 'Get hired',
          mainButtonLocation: `${config.appUrl}register`,
          reRouteButtonText: "I'm an employer",
          reRouteButtonLocation: '/employers',
          alreadyOnComponentActive: true,
        },
        hero: {
          showHeroMask: true,
          color: '',
        },
        overrideClass: landingePageStyles.overrideLandingPage,
      }}
    />
    <StudentShowCaseSection />
    <CallToAction
      header="Get started now!"
      subHeader="Create your profile and get access to student-friendly jobs."
      buttonText="Sign me up"
      alt={false}
      location={`${config.appUrl}register`}
    />

    <section className={features.container}>
      <LeftFeatures
        header="Get invited to jobs by employers"
        paragraphOne="Your next job is right around the corner."
        paragraphTwo="We encourage employers to invite you to jobs and let you build meaningful connections, fast."
        picture={featureOneImage}
      />
      <RightFeatures
        header="Track all your job applications"
        paragraphOne={`Going to career fairs can be time-consuming and costly, especially when you have limited time and budget.`}
        paragraphTwo={`UnivJobs can reduce this anxiety by showing you the "progress" of your job applications whether you're being considered, whether you're invited for an interview or whether you get hired.`}
        picture={featureTwoImage}
      />
    </section>
    <AltStudentCallToAction />

    {'Asud signed off = true' === 'Asud signed off = false' ? (
      <StudentBrandRecognition />
    ) : (
      <Slidy />
    )}

    <Backers />
  </div>
)

export default Index
