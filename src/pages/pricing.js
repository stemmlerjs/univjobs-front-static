import React from 'react'
import Link from 'gatsby-link'

import woman from '../img/pricing/woman-mask.jpg'
import womanMobile from '../img/pricing/business-woman-mobile.jpg'
import companies1 from '../img/companies-resized-2.png'
import companies2 from '../img/companies-4-alt.png'
import desktopCompanies from '../img/pricing/desktop-companies.png'
import uLogo from '../img/u-logo-circle.png'

import CallToAction from '../components/CallToAction'
import LandingPage from '../components/LandingPage'

import Divider from '../components/Divider'

import EmployerReviews from '../components/EmployerReviews'

import styles from '../styles/Pricing.module.css'


const ULogo = () => {
  return (
    <div className={styles.uLogo}>
      <img src={uLogo}/>
    </div>
  )
}

const Features = (props) => {
  return (
    <div className={styles.featuresContainer}>
      {
        props.features.map((feature, index) => {
          return <div key={index}>{feature}</div>
        })
      }
    </div>
  )
}

const Plan = (props) => {
  return (
    <div style={{
      borderTop: `solid 6px ${props.headerColor}`
    }} className={styles.plan}>
      <h3 className={styles.planTitle}>{props.title}</h3>

      
        {

          /**
           * When price is listed
           */

          props.price 
            ? <div className={styles.priceContainer}>
                <div className={styles.priceFlex}>
                  <div>$</div>
                  <div className={styles.price}>{props.price}</div>
                </div>
                <Features features={props.features}/>
                <button onClick={props.onClick} className={styles.planButton}>{props.buttonText}</button>
              </div>
              
            : <div className={styles.priceContainer}>
                <div className={styles.priceFlex}>
                  <div className={`${styles.price} ${styles.contactUs}`}>Contact us</div>
                </div>
                
                <Features features={props.features}/>
                <button className={`${styles.planButton} drift-open-chat`}>{props.buttonText}</button>
              </div>
        }
        
    </div>
  )
}

const Plans = (props) => {
  return (
    <section className={styles.plansContainer}>
      <h1>SIMPLE PLANS FOR EVERYONE</h1>
      <div className={styles.planSubTitle}>Choose the plan that works for you. Our pricing is flexible so you can pay for exactly what you need.</div>

      <div className={styles.planCards}>
        <Plan 
          title={'Pay per posting'}
          price={'20'}
          headerColor={'#0cc9e8'}
          features={
            [
              'Job marketplace access',
              '1 public job posting',
              'Unlimited applicants',
              'Target students by school',
              'Applicant tracking system',
              'Custom questions',
              'Access to student database',
              'Invite students'
            ]
          }
          buttonText={'Get started - $20'}
          onClick={() => {
            if ( typeof window !== 'undefined') {
              window.location.href = "https://app.univjobs.ca/register/"
            }
          }}
        />
        <Plan 
          title={'Enterprise'}
          price={undefined}
          headerColor={'#03d597'}
          features={[
            'Immediate access to new features',
            'Become a member of the Early Adopters Program'
          ]}
          buttonText={'Request a demo'}
        />
      </div>

      <div className={styles.disclaimer}>No setup or monthly fees.</div>

    </section>
  )
}

const UsedBy = () => {
  return (
    <div className={styles.usedByContainer}>
      <img className={styles.womanMobile} src={womanMobile}/>
      <div className={styles.woman} style={{ backgroundImage: `url("${woman}")`}}/>
      <h3>Used by forward thinking companies</h3>
      <div className={styles.mobileCompaniesContainer}>
        <img className={styles.companies} src={companies1}></img>
        <img className={styles.companies} src={companies2}></img>
      </div>
    </div>
  )
}

class Pricing extends React.Component {
  constructor () {
    super();
  }

  componentDidMount () {
    let loadingDrift;
    var DRIFT_CHAT_SELECTOR = '.drift-open-chat'

    function forEachElement(selector, fn) {
      var elements = document.querySelectorAll(selector);
      for (var i = 0; i < elements.length; i++)
        fn(elements[i], i);
    }

    function openSidebar(driftApi, event) {
      event.preventDefault();
      driftApi.sidebar.open();
      return false;
    }

    function loadDrift () {
      console.log("[Drift]: Attempting to load Drift.");

      if (typeof window !== undefined) {
        if (window.drift) {
          window.drift.on('ready', function(api) {
            var handleClick = openSidebar.bind(this, api)
            forEachElement(DRIFT_CHAT_SELECTOR, function(el) {
              el.addEventListener('click', handleClick);
            });
            console.log("[Drift]: Drift loaded [via ready state]");
            clearInterval(loadingDrift);
          });

          if (window.drift.api) {
            var handleClick = openSidebar.bind(this, window.drift.api)
            forEachElement(DRIFT_CHAT_SELECTOR, function(el) {
              el.addEventListener('click', handleClick);
            });
            console.log("[Drift]: Drift loaded [via api]");
            clearInterval(loadingDrift);
          }
        }
      }

      console.log("[Drift]: Trying again in 1 second.");
    }
    
    loadingDrift = setInterval(loadDrift, 1000);


  }

  render () {
    return (
      <div>
        <ULogo/>

        <div className={styles.heroFlex}>
          <Plans/>
          <UsedBy/>
        </div>
        <div className={styles.desktopCompanies}>
          <img src={desktopCompanies}></img>
        </div>
        
        
        <EmployerReviews/>
        <CallToAction
          header={'Post your first job'}
          subHeader={'Students are already applying to jobs. Post a job to over 50 post-secondary schools in Ontario.'}
          buttonText={'Start'}
          alt={true}
        />
      </div>
    )
  }
}

export default Pricing
