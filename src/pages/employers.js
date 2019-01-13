import React from 'react'

import LandingPage from '../components/LandingPage'
import { Backers, AltFeature, StudentTestimonials } from '../components/landing';

import SocialValidation from '../components/SocialValidation'

import landingePageStyles from '../styles/StudentLandingPageStyles.module.css'


import { CallToAction } from '../components/shared';
import LeftFeatures from '../components/LeftFeatures'
import RightFeatures from '../components/RightFeatures'
import Slidy from '../components/Slidy'

import features from '../styles/FeatureStyles.module.css'
import productImage from '../img/student_invites.png';

import invite from '../img/undraw_invite.svg'
import mobileMarketing from '../img/undraw_mobile_marketing.svg'
import gotJob from '../img/she-got-the-job.jpg'

import scribbleLive from '../img/scribble.svg';
import rover from '../img/companies/rover.svg'
import instacart from '../img/companies/instacart.svg';
import homeDepot from '../img/companies/homedepot.svg';
import ymca from '../img/companies/ymca.svg'
import airmiles from '../img/companies/airmiles.svg';

import haltech from '../img/haltech.png'
import icube from '../img/icube.png'
import startupschool from '../img/startupschool.png';
import edge from '../img/edge_hires-400x143.png'

import SEO from '../components/SEO'

import config from '../config'

const Employers = () => (
  <div>
    <SEO
      isBlogPost={false}
      postData={{
        title: "Univjobs: Online campus recruitment solution for employers",
        description: "Reach and recruit college and university students and recent-grads on campus. Save time and money finding or hiring interns and recent grads."
      }}
    />
    <LandingPage
      heroTitle="Find the best students and recent grads to hire"
      heroSubTitle="A network of young talent from different post secondary schools to source, recruit, and hire."
      options={{
        alignment: 'left',
        image: gotJob,
        hasPolygon: false,
        buttons: {
          mainButtonText: 'Hire talent',
          mainButtonLocation: `${config.appUrl}register/employer?buttond_id=hero`,
          reRouteButtonText: "I'm a student",
          reRouteButtonLocation: '/?button_id=reroute_hero',
          alreadyOnComponentActive: false
        },
        hero: {
          showColorMask: true,
          color: '#1C46DA',
        },
        styles: {
          container: {
            minHeight: 'calc(85vh - 50px)'
          }
        }
      }}
    />

    <Backers
      companies={[
        { link: 'https://www.scribblelive.com/', imageUrl: scribbleLive },
        { link: 'https://www.rover.com/ca/', imageUrl: rover },
        { link: 'https://www.homedepot.ca/en/home.html', imageUrl: homeDepot },
        { link: 'https://www.instacart.com/', imageUrl: instacart },
        { link: 'http://ymca.ca/', imageUrl: ymca },
        { link: 'https://www.airmiles.ca/arrow/Home', imageUrl: airmiles },
      ]}
    />

     <CallToAction
      header="Get early access to young talent now"
      subHeader=""
      buttonText="Start hiring"
      alt={false}
      location={`${config.appUrl}register/employer?button_id=cta1`}
    />
    
    <AltFeature
      header="Source candidates now"
      subHeader=""
      paragraphOne="UnivJobs Source enables you to search for qualified candidates based on filters."
      paragraphTwo="Finding the right candidate doesn't have to be painful."
      paragraphThree="Message and notify candidates directly through SMS, email or real-time chat."
      picture={productImage}
    />

   
    <section className={features.container}>
      <RightFeatures
        header="Target and reach the right applicants"
        paragraphOne="Univjobs Target enables you to reach out to the candidates you want."
        paragraphTwo="Stop spending time filtering out candidates who don't match your preferences."
        paragraphThree="Set criteria to determine who has access to apply to your posting."
        picture= {invite}
      />

      <LeftFeatures
        header= 'Magnify your brand presence'
        paragraphOne= 'Univjobs Magnify enables you to create custom ad, event and marketing campaigns to engage early career candidates.'
        paragraphTwo= 'Improve your brand perception and attract the best talent by showcasing your company culture, presenting your team and possible career paths. '
        picture={mobileMarketing}
      />
    </section>

    <CallToAction
        header='Attract early career talent'
        subHeader=''
        buttonText='Recruit students'
        alt={true}
        location={`${config.appUrl}register/employer?button_id=cta2`}
    />
    <StudentTestimonials/>
    <Backers
      header="Our community support"
      subHeader="Thank you for supporting us in changing the way students find meaningful employment."
      companies={[
        { link: 'http://haltech.ca/', imageUrl: haltech },
        { link: 'http://icubeutm.ca/', imageUrl: icube },
        { link: 'https://www.startupschool.org/', imageUrl: startupschool },
        { link: 'https://edge.sheridancollege.ca/', imageUrl: edge }
      ]}
    />

      <CallToAction 
      header="Find your future team member"
      alt={true}
      subHeader=""
      buttonText="Find students"
      location={`${config.appUrl}register/employer?button_id=cta3`}
    />
   </div>

)

export default Employers
