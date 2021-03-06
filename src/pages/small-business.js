import React from 'react'

import LandingPageHero from '../components/landing-page/components/LandingPageHero'
import { Benefits } from '../components/landing-page'
import { CallToAction } from '../components/shared/cta'
import { SocialValidation } from '../components/landing-page'

import merchant from '../img/merchant.jpg'
import soti from '../img/companies/soti.png'
import td from '../img/companies/td.svg'
import rover from '../img/companies/rover.png'
import homeDepot from '../img/companies/homedepot.png'
import ymca from '../img/companies/ymca.svg'
import airmiles from '../img/companies/airmiles.svg'

import config from '../config'
import { SeoLayout, PageType } from '../components/seo'

const SmallBusiness = () => (
  <div>
    <SeoLayout
      requiredProps={{
        title: 'Find local help | Univjobs',
        description: 'Browse and connect with thousands of local students to help with your business',
        url: `${config.url}small-business`,
        image: config.assets.image.logo
      }}
      type={PageType.REGULAR}
      pageProps={{
      }}
    />
    <LandingPageHero
      heroTitle="Easily access, and hire local young talent"
      heroSubTitle="We have thousands of candidates ready and waiting"
      options={{
        centerHeroContainer: true,
        image: merchant,
        hasPolygon: false,
        buttons: {
          mainButtonText: 'Hire local talent',
          mainButtonLocation: `${config.appUrl}register/employer`,
        },
        hero: {
          showHeroMask: false,
          showDarkMask: true,
          color: '',
        },
      }}
    />

    <SocialValidation
      header=""
      logos={{
        one: ['https://www.td.com/', td],
        two: ['http://go.rover.com/univjobs', rover],
        three: ['https://www.homedepot.ca/en/home.html', homeDepot],
        four: ['https://www.soti.com/', soti],
        five: ['http://ymcaofoakville.org/', ymca],
        six: ['https://www.airmiles.ca/arrow/Home', airmiles],
      }}
    />
    <CallToAction
      header="Get help and save money with Univjobs"
      subHeader="Univjobs makes it easy to find affordable talent locally"
      buttonText="Try it now!"
      alt={true}
      location={`${config.appUrl}register/employer`}
    />

    <Benefits />

    <CallToAction
      header="Get local brand awareness virtually with Univjobs"
      subHeader="Univjobs shows your company logo in front of thousands of job seekers."
      buttonText="Post a job now"
      alt={true}
      location={`${config.appUrl}register/employer`}
    />
  </div>
)

export default SmallBusiness
