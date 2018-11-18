import React from 'react'
import Link from 'gatsby-link'

import LandingPage from '../components/LandingPage'
import Benefits from '../components/Benefits'
import { CallToAction } from '../components/shared';
import LeftFeatures from '../components/LeftFeatures'
import RightFeatures from '../components/RightFeatures'
import Slidy from '../components/Slidy'
import SocialValidation from '../components/SocialValidation'

import features from '../styles/FeatureStyles.module.css'

import merchant from '../img/merchant.jpg'
import leftSide from '../img/leftside.png'
import haltech from '../img/haltech.png'
import icube from '../img/icube.png'
import startupSchool from '../img/startupschool.png'
import sheridanEntrepreneurs from '../img/sheridanentrepreneurs.png'
import scribble from '../img/scribble.svg'
import rover from '../img/rover.png'
import homedepot from '../img/homedepot.svg'
import instacart from '../img/instacart.svg'
import ymca from '../img/ymca.svg'
import airmiles from '../img/airmiles.svg'
import config from '../config'
import SEO from '../components/SEO'

const SmallBusiness = () => (
  <div>
    <SEO
      isBlogPost={false}
      postData={{
        title: 'Univjobs for Small Businesses | Find local help',
        description:
          'Browse and connect with thousands of local students to help with your business',
      }}
    />
    <LandingPage
      heroTitle="Easily access, and hire local young talent"
      heroSubTitle="We have thousands of candidates ready and waiting"
      options={{
        centerHeroContainer:true,
        image: merchant,
        hasPolygon: false,
        buttons: {
          mainButtonText: 'Hire local talent',
          mainButtonLocation: `${config.appUrl}register/employer`,
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
          'one': ['https://www.scribblelive.com/', scribble], 
          'two': ['http://go.rover.com/univjobs', rover], 
          'three': ['https://www.homedepot.ca/en/home.html', homedepot], 
          'four': ['https://www.instacart.com/', instacart],
          'five': ['http://ymcaofoakville.org/', ymca], 
          'six': ['https://www.airmiles.ca/arrow/Home', airmiles], 
 
        } 
      }
    />
     <CallToAction
      header='Get help and save money with Univjobs'
      subHeader='UnivJobs makes it easy to find affordable talent locally'
      buttonText='Try it now!'
      alt={true}
      location={`${config.appUrl}register/employer`}
    />

    <Benefits/>

    <CallToAction
        header='Get local brand awareness virtually with Univjobs'
        subHeader='UnivJobs shows your company logo in front of thousands of job seekers.'
        buttonText='Post a job now'
        alt={true}
        location={`${config.appUrl}register/employer`}
    />

    <Slidy/>
   </div>

)

export default SmallBusiness
