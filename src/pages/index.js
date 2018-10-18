import React from 'react'
import Link from 'gatsby-link'

import CallToAction from '../components/CallToAction'
import LeftFeatures from '../components/LeftFeatures'
import RightFeatures from '../components/RightFeatures'
import Slidy from '../components/Slidy'

import landingePageStyles from '../styles/StudentLandingPageStyles.module.css'

import studentCTA from '../styles/StudentCallToActionStyles.module.css'
import studentFeatures from '../styles/StudentFeatureStyles.module.css'
import altStudentCTA from '../styles/AltStudentCallToActionStyles.module.css'
import recognition from '../styles/BrandRecognitionStyles.module.css'
import features from '../styles/FeatureStyles.module.css'

import grad from '../img/gradphotos.jpeg'

import featureOneImage from '../img/undraw_mail_2_tqip.png'
import featureTwoImage from '../img/undraw_job_hunt_byf9.png'
import workingStudent from '../img/leaf-wall-office-space_925x.png'
import td from '../img/td.png'
import asud from '../img/asud.png'

import LandingPage from '../components/LandingPage'

import config from '../config'
import { redirectTo } from '../helpers'
import SEO from '../components/SEO'

import Backers from './index/Backers';
import StudentShowCaseSection from './index/StudentShowcaseSection'



const AltStudentCallToAction = props => {
  return (
    <section className={altStudentCTA.container}>
      <div className="heading-large">Start now!</div>
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



/**
 * @class Index
 * @desc This is the index page. It's the main page for univjobs.ca.
 */

const Index = () => (
  <div>
    <SEO
      isBlogPost={false}
      postData={{
        title: 'Univjobs | Find student, part time, entry level and recent grad jobs',
        description:
          'A place for students and recent-grads to find jobs to earn cash and launch their careers.',
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
