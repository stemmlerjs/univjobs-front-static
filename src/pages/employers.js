import React from 'react'
import Link from 'gatsby-link'

import LandingPage from '../components/LandingPage'
import SocialValidation from '../components/SocialValidation'
import ShowCaseSection from '../components/ShowCaseSection'

import CallToAction from '../components/CallToAction'
import LeftFeatures from '../components/LeftFeatures'
import RightFeatures from '../components/RightFeatures'
import Slidy from '../components/Slidy'
import Backer from '../components/Backer'

import features from '../styles/FeatureStyles.module.css'
import featureOneImage from '../img/undraw_filter_4kje.svg'
import featureTwoImage from '../img/undraw_experts3_3njd.svg'
import featureThreeImage from '../img/undraw_invite_i6u7.svg'
import leftSide from '../img/leftside.png'
import postJob from '../img/post-a-job.png'
import gotJob from '../img/she-got-the-job.jpg'

import scribble from '../img/scribble.svg'
import chartwells from '../img/chartwells.svg'
import homedepot from '../img/homedepot.svg'
import instacart from '../img/instacart.svg'
import ymca from '../img/ymca.svg'
import airmiles from '../img/airmiles.svg'

import config from '../config'

const Employers = () => (
  <div>
    <LandingPage
      heroTitle="Early access to young talent from any post-secondary school"
      heroSubTitle="A network of affordable qualified students for your growing team"
      options={{
        alignment: 'center',
        image: gotJob,
        hasPolygon: false,
        buttons: {
          mainButtonText: 'Post a job',
          mainButtonLocation: `${config.appUrl}register/employer`,
          reRouteButtonText: "I'm a student",
          reRouteButtonLocation: '/',
          alreadyOnComponentActive: true
        },
        hero: {
          showHeroMask: false,
          showDarkMask: true,
          color: ''
        }
      }}
    />

    <SocialValidation
      header=""
      logos={ 
        {
          'one': ['#', scribble], 
          'two': ['#', chartwells], 
          'three': ['#', homedepot], 
          'four': ['#', instacart],
          'five': ['#', ymca], 
          'six': ['#', airmiles], 
 
        } 
      }
    />

    <CallToAction
      header='Get help quickly with UnivJobs'
      subHeader='UnivJobs makes it easy to find early career talent'
      buttonText='Try it now!'
      alt={true}
      location={`${config.appUrl}register/employer`}
    />

   
    <section className={features.container}>
      <LeftFeatures
        header="Post one job to many schools"
        paragraphOne="Managing multiple job postings for different schools and job boards on top of your work is not easy. You could lose out on good applicants."
        paragraphTwo=' UnivJobs" "one to many postings" saves you time.'
        picture= {featureOneImage}
      />

      <RightFeatures
        header= 'Invite Students'
        paragraphOne= 'Going to career fairs can be time-consuming and costly, especially when you have limited time and budget.'
        paragraphTwo= 'Our "invite" feature gives you freedom and affordability to prospect students.'
        picture={featureTwoImage}
      />

      <LeftFeatures
        header= 'Accept.&#10;Interview.&#10;&#13;Hire.'
        paragraphOne= 'Managing the whole interview cycle is mentally draining. Sorting and screening numerous cover letters and resumes can be laborious.'
        paragraphTwo= 'Our ATS system saves you time and energy in helping you find the right students.'
        picture={featureThreeImage}
      />
    </section>

    <CallToAction
        header='Show your brand in front of students '
        subHeader='UnivJobs advertises your job listing & logo in front of thousands of early career talent.'
        buttonText='Post a job now'
        alt={true}
        location={`${config.appUrl}register/employer`}
    />
    <Slidy/>
   </div>

)

export default Employers
