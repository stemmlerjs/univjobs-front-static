import React from 'react'
import Link from 'gatsby-link'

import woman from '../img/pricing/business-woman.jpg'
import womanMobile from '../img/pricing/business-woman-mobile.jpg'
import uLogo from '../img/u-logo-circle.png'

import CallToAction from '../components/CallToAction'
import LandingPage from '../components/LandingPage'

import Divider from '../components/Divider'

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
                <button className={styles.planButton}>{props.buttonText}</button>
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
      <div className={styles.planSubTitle}>Choose the plan that work for you. Our pricing is flexible so you can pay for exactly what you need. No hidden costs.</div>

      <div className={styles.planCards}>
        <Plan 
          title={'Pay per posting'}
          price={'20'}
          headerColor={'#0cc9e8'}
          features={
            [
              'Job marketplace access',
              '1 job posting',
              'Unlimited applicants',
              'Target students by school',
              'Public job for social media sharing',
              'Applicant tracking system',
              'Custom question',
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
          onClick={() => {
            if ( typeof window !== 'undefined') {
              window.location.href = "mailto:contact@univjobs.ca?Subject=Enterprise Pricing Inquiry";
            }
          }}
          features={[
            'Immediate access to new features',
            'Become a member of the Early Adopters Program'
          ]}
          buttonText={'Request a demo'}
        />
      </div>

    </section>
  )
}

const UsedBy = () => {
  return (
    <div>
      <img src={womanMobile}/>
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
            console.log("[Drift]: Drift loaded");
            clearInterval(loadingDrift);
          });
        }
      }

      console.log("[Drift]: Trying again in 1 second.");
    }
    
    loadingDrift = setInterval(loadDrift, 1000);


  }

  render () {
    return (
      <div>
        
        <Plans/>
        <ULogo/>
        <UsedBy/>
      </div>
    )
  }
}

export default Pricing
