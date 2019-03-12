import React from 'react'
import Link from 'gatsby-link'

import woman from '../img/pricing/woman-mask.jpg'
import womanMobile from '../img/pricing/business-woman-mobile.jpg'
import companies1 from '../img/companies-resized-2.png'
import companies2 from '../img/companies-4-alt.png'
import goodCompany from '../img/good-company.png'
import desktopCompanies from '../img/pricing/desktop-companies.png'

import { CallToAction } from '../components/shared'
import LandingPage from '../components/LandingPage'

import Divider from '../components/Divider'

import EmployerReviews from '../components/EmployerReviews'

import styles from '../styles/Pricing.module.css'

import config from '../config'
import { redirectTo } from '../helpers'
import {SEOContainer} from '../components/seo'
import SEOType from '../components/seo/class/SEOType'

const Type = SEOType

const Logo = () => {
  return (
    <div className={styles.uLogo}>
      <img src={config.assets.image.cirularLogo} />
    </div>
  )
}

const Features = props => {
  return (
    <div className={styles.featuresContainer}>
      {props.features.map((feature, index) => {
        return <div key={index}>{feature}</div>
      })}
    </div>
  )
}

const Plan = props => {
  return (
    <div
      style={{
        borderTop: `solid 6px ${props.headerColor}`,
      }}
      className={styles.plan}
    >
      <h3 className={styles.planTitle}>{props.title}</h3>
      <p style={{ textAlign: 'center' }}>{props.subTitle}</p>

      {/**
       * When price is listed
       */

      props.price ? (
        <div className={styles.priceContainer}>
          <div className={styles.priceFlex}>
            <div>$</div>
            <div className={styles.price}>{props.price}</div>
          </div>
          <Features features={props.features} />
          <button onClick={props.onClick} className={styles.planButton}>
            {props.buttonText}
          </button>
        </div>
      ) : (
        <div className={styles.priceContainer}>
          <div className={styles.priceFlex}>
            <div className={`${styles.price} ${styles.contactUs}`}>
              Contact us
            </div>
          </div>

          <Features features={props.features} />
          <button
            onClick={props.onClick}
            className={`${styles.planButton} drift-open-chat`}
          >
            {props.buttonText}
          </button>
          <div
            style={{
              fontSize: '16px',
              marginTop: '12px',
              textAlign: 'center',
            }}
          >
            or chat with us below (bottom-right)
          </div>
        </div>
      )}
    </div>
  )
}

const Plans = props => {
  return (
    <section className={styles.plansContainer}>
      <h1>SIMPLE PLANS FOR EVERYONE</h1>
      <div className={styles.planSubTitle}>
        Choose the plan that works for you. Our pricing is flexible so you can
        pay for exactly what you need.
      </div>

      <div className={styles.planCards}>
        <Plan
          title={'Pay per posting'}
          subTitle={''}
          price={'100'}
          headerColor={'#0cc9e8'}
          features={[
            'Job marketplace access',
            '1 public job posting',
            'Unlimited applicants',
            'Target students by school',
            'Applicant tracking system',
            'Custom questions',
          ]}
          buttonText={'Sign up for free'}
          onClick={() => redirectTo(`${config.appUrl}register/employer`)}
        />
        <Plan
          title={'Enterprise'}
          subTitle={undefined}
          price={undefined}
          headerColor={'#03d597'}
          features={[
            'Immediate access to new features',
            'Become a member of the Early Adopters Program',
          ]}
          buttonText={'Request a demo'}
          onClick={() => {
            if (typeof window !== undefined) {
              window.location.href =
                'mailto:contact@univjobs.ca?Subject=Enterprise Inquiry'
            }
          }}
        />
      </div>

      <div className={styles.disclaimer}>No setup or hidden fees.</div>
    </section>
  )
}

const UsedBy = () => {
  return (
    <div className={styles.usedByContainer}>
      <img className={styles.womanMobile} src={womanMobile} />
      <div
        className={styles.woman}
        style={{ backgroundImage: `url("${woman}")` }}
      />
      <h3>Used by forward thinking companies</h3>
      <div className={styles.mobileCompaniesContainer}>
        <img className={styles.companies} src={companies1} />
        <img className={styles.companies} src={companies2} />
      </div>
    </div>
  )
}

class Pricing extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
         <SEOContainer
          type={Type.pricing} 
        />
        <Logo />

        <div className={styles.heroFlex}>
          <Plans />
          <UsedBy />
        </div>
        <div className={styles.desktopCompanies}>
          <img src={desktopCompanies} />
        </div>

        <EmployerReviews />
        <CallToAction
          header={'Post your first job'}
          subHeader={
            'Students are already applying to jobs. Post a job to over 50 post-secondary schools in Ontario.'
          }
          buttonText={'Start'}
          alt={true}
          location={`${config.appUrl}register`}
        />
      </div>
    )
  }
}

export default Pricing
