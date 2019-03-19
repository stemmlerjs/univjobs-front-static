import React from 'react'
import { CallToAction, ReferralCallToAction } from '../components/shared'
import LeftFeatures from '../components/LeftFeatures'
import RightFeatures from '../components/RightFeatures'

import landingePageStyles from '../styles/StudentLandingPageStyles.module.css'
import features from '../styles/FeatureStyles.module.css'

import gift from '../img/gift.jpg'
import LandingPage from '../components/LandingPage'
import ReferralLandingPage from '../components/ReferralLandingPage'

import config from '../config'
import SEO from '../components/SEO'

import { Backers, AltFeature, StudentTestimonials, Prizes } from '../components/landing'

import scribbleLive from '../img/scribble.svg'
import rover from '../img/companies/rover.svg'
import instacart from '../img/companies/instacart.svg'
import homeDepot from '../img/companies/homedepot.svg'
import ymca from '../img/companies/ymca.svg'
import airmiles from '../img/companies/airmiles.svg'

import productImage from '../img/product-image.svg'
import mail from '../img/undraw-mail.svg'
import jobs from '../img/undraw-jobs.svg'
import socialShare from '../img/social_share.svg'
import winners from '../img/winners.svg'


import haltech from '../img/haltech.png'
import icube from '../img/icube.png'
import startupschool from '../img/startupschool.png'
import edge from '../img/edge_hires-400x143.png'

import Helmet from 'react-helmet'

const Students = () => (
  <div>
    <SEO
      isBlogPost={false}
      postData={{
        title:
          'Univjobs: Jobs, Internships & Work Study for College Students and Recent Grads',
        description:
          'Find paid internship, remote work, part time, and entry-level jobs at startups and large companies',
      }}
    />
    <Helmet>
    <script>
    {
      `{
        !function(a,b,c,d,t){var e,f=a.getElementsByTagName("head")[0];if(!a.getElementById(c)){if(e=a.createElement(b),e.id=c,e.setAttribute("data-vrlps-ucid",d),e.setAttribute("data-vrlps-version","2"), e.setAttribute("data-vrlps-template", t),e.src="https://app.viral-loops.com/popup_assets/js/vl_load_v2.min.js",window.ub){jQuery=null,$=null;var g=a.createElement(b);g.src="https://code.jquery.com/jquery-2.2.4.min.js",f.appendChild(g)}f.appendChild(e);var h=a.createElement("link");h.rel="stylesheet",h.type="text/css",h.href="https://app.viral-loops.com/static/vl-loader.css",f.appendChild(h);var i=a.createElement("div");i.id="vl-overlay",i.style.display="none";var j=a.createElement("div");j.id="vl-loader",i.appendChild(j),a.addEventListener("DOMContentLoaded",function(b){a.body.appendChild(i);for(var c=a.getElementsByClassName("vrlps-trigger"),d=0;d<c.length;d++)c[d].removeAttribute("href"),c[d].onclick=function(){a.getElementById("vl-overlay").style.display="block"};var e=a.querySelectorAll("[data-vl-widget='popupTrigger']");[].forEach.call(e,function(b){var c=a.createElement("div");c.className="vl-embedded-cta-loader",b.appendChild(c)})})}}(document,"script","vrlps-js","jfM6l6pzIzyLIxQNY5SkVJkr6Js","ranking");
      }`
    }
    </script>

    </Helmet>

    <ReferralLandingPage
      heroTitle="Refer your friends to Univjobs"
      heroSubTitle="Win free prizes by referring to friends!"
      options={{
        alignment: 'left',
        image: gift,
        buttons: {
          hasButtons: true,
          mainButton: <div data-vl-widget="popupTrigger"></div>,
          reRouteButtonText: "Student registration",
          reRouteButtonLocation: `${config.appUrl}register?button_id=hero`,
          alreadyOnComponentActive: false,
        },
        hero: {
          showColorMask: true,
          color: 'black',
        },
        overrideClass: landingePageStyles.overrideLandingPage,
      }}
    />

    <Prizes />


    <section className={features.container}>
      <div className={features.titleContainer}>
        <h2 className={features.titleName}>How Can I Win ?</h2>
      </div>
      <LeftFeatures
        header="1. Invite your friends using a unique code"
        paragraphOne="The code will be given to you after joining the contest."
        paragraphTwo=""
        picture={socialShare}
      />
      <RightFeatures
        header="2. Check your status on the leaderboard page."
        paragraphOne={`You will be able to see your status on the leaderboard page.`}
        paragraphTwo={``}
        picture={winners}
      />
    </section>
   

    <section>
      <div className={features.titleContainer}>
        <h2 className={features.titleName}>FAQ</h2>
        <h3>How many prizes can I choose per month?</h3>
        <p>You can choose one prize per month.</p>
        <h3>What happens at the start of each contest?</h3>
        <p>A new contest will start, everyones points goes back to 0.</p>
        <h3>When do new prizes get announced?</h3>
        <p>To be announced! Join as a user in our platform <a href="https://app.univjobs.ca/register" target="_blank" rel="noopener noreferrer">here</a> to stay notified of new prizes!</p>
      </div>
    </section>
   
    <CallToAction
      header="Checkout new job opportunities for students and grads"
      alt={true}
      subHeader=""
      buttonText="Start applying"
      location={`${config.appUrl}register?button_id=cta3`}
    />
  </div>
)

export default Students 
