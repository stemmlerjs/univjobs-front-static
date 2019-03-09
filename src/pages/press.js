import React from 'react'
import Link from 'gatsby-link'

import charles from '../img/press/charles.png'
import khalil from '../img/press/khalil.png'

import blogTo from '../img/press/blogTo.png'
import fiftyOne from '../img/press/fiftyOne.png'
import oakvilleNews from '../img/press/oakvilleNews.png'
import bramptonGuardian from '../img/press/bramptonGuardian.png'
import mississaugaNews from '../img/press/mississaugaNews.jpg'
import canindiaNews from '../img/press/canindiaNews.png'
import torontoGuardian from '../img/press/torontoGuardian.jpg'
import buzzfeed from '../img/press/buzzfeed.png'

import { CallToAction } from '../components/shared'
import LandingPage from '../components/LandingPage'

import CountUp from 'react-countup'

import Divider from '../components/Divider'
import Mentions from '../components/press/Mentions'
import Founders from '../components/press/Founders'
import {SEO} from '../components/seo'

import styles from '../styles/Press.module.css'

import config from '../config'

const Body = props => {
  return (
    <div
      style={{
        maxWidth: `1000px`,
        margin: `0 auto`,
        paddingTop: `2em`,
        paddingBottom: `2em`,
        paddingLeft: '1em',
        paddingRight: '1em',
      }}
    >
      {props.children}
    </div>
  )
}

const DownloadPressKit = props => {
  return (
    <div>
      <h3>Need to download our press kit?</h3>
      <div>Get it here</div>
    </div>
  )
}

const About = props => {
  return (
    <section className={styles.section}>
      <p className={styles.lastUpdated}>Last updated March 1st, 2019</p>
      <h1>About Univjobs</h1>
      <p>
        Univjobs is a marketplace that connects students and recent grads with
        employers through co-ops, internships and part-time and entry level
        jobs. The platform is tailored toward the talent pool of students and
        recent grads. They no longer need to worry about jobs that have
        unrealistic requirements such as 3 years of experience. We use machine
        learning and artificial intelligence to match candidates with jobs that
        are suited for them based on their education, career goals and location.
      </p>

      <p>
        {`Traditional options for employers such as job fairs, regular job boards, and career services are inefficient methods to recruit students. 
        They cost a lot of time, money and according to employers, are not the most effective ways to find the right talent. 
        On other job searching platforms like Indeed, it's easy for students to get lost among senior level and overqualified candidates.
        At Univjobs, employers can headhunt early career candidates quickly, promoting diverse and inclusive hiring practices. 
        They can target, invite, search, and narrow down candidates based on school, skills, and year. 
        This allows them to find qualified job seekers within days instead of months while magnifying their brand presence among the next generation of talent.`}
      </p>

      <p>
        Univjobs has over 7,000 students and recent grads looking for jobs. Over
        200 employers have signed up and posted jobs including AirMiles,
        Instacart, and Stackadapt. It is our mission to help students reach
        their full potential and bridge them to meaningful work related to their
        field of study.
      </p>

      <p>
        UnivJobs was co-founded by Charles Javelona and Khalil Stemmler, after
        they noticed that many of their friends experienced difficulty looking
        for work during school and after graduating. Upon realizing the problem,
        they started UnivJobs while at school. The platform launched early of{' '}
        <b>September 2017</b>, building the platform in between classes.
      </p>
    </section>
  )
}

const Figures = props => {
  return (
    <section>
      <h1>Figures</h1>

      <div className={styles.milestonesContainer}>
        <div className={styles.milestoneItem}>
          <h3>7000+</h3>
          <div>Active students and recent grads using the platform</div>
        </div>
        <div className={styles.milestoneItem}>
          <h3>250+</h3>
          <div>Forward thinking employers who have used the platform</div>
        </div>
        <div className={styles.milestoneItem}>
          <h3>59%</h3>
          <div>Are female members</div>
        </div>
        <div className={styles.milestoneItem}>
          <h3>60%</h3>
          <div>Are from a under represented minority group</div>
        </div>
      </div>
    </section>
  )
}

/**
 * Download
 *
 * Download button to download our press kit.
 */

const Download = () => {
  return (
    <a href="https://drive.google.com/drive/folders/19eOhSLLlsPsfw7QpG93QlfeWu6I6niO3?usp=sharing">
      Download our press kit
    </a>
  )
}

/**
 * @class PressPage
 * @desc Press page describing important details about our company for
 * the public.
 */

class PressPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <SEO
          isBlogPost={false}
          postData={{
            title:
              'Univjobs Press',
            description:
              'The latest news, updates and resources on Univjobs',
          }}
        />
        <LandingPage
          heroTitle="Press and Media"
          heroSubTitle="The latest news, updates and resources on Univjobs"
          options={{
            centerHeroContainer: true,
            hero: {
              showHeroMask: true,
            },
          }}
        />

        <Body>
          <Download />
          <About />
          <Divider />
          <Figures />
          <Divider />
          <Founders
            founders={[
              {
                name: 'Charles Javelona',
                paragraph1: `Originally from the Philippines, Charles
              previously worked at Scotiabank
              Innovation Factory. An aspiring
              entrepreneur, Charles has an impressive
              track record for innovation and making
              the impossible happen.`,
                paragraph2: `From starting a Toastmasters Club in
Oakville and having recognized a need for
improved communication capabilities
among students to braving the world of
entrepreneurship, Charles simply views
obstacles as challenges to be overcome.`,
                image: charles,
                isLeftAligned: true,
              },
              {
                name: 'Khalil Stemmler',
                paragraph1: `Prior to becoming a founding member
of the Univjobs team, Khalil worked in
software development at IBM and
Pinnaca while attending school at
both Brock University and Sheridan
College.`,
                paragraph2: `As a Software Architect, Khalil works
diligently to ensure that the platform is
scalable, secure, and mobile friendly
for employers and students.`,
                image: khalil,
                isLeftAligned: false,
              },
            ]}
          />
          <Divider />

          <Divider />
          <Mentions
            mentions={[
              {
                title:
                  "There's a new way for students to look for jobs in Toronto",
                image: blogTo,
                author: 'Blog Toronto',
                link:
                  'https://www.blogto.com/tech/2018/04/students-jobs-toronto/',
              },
              {
                title:
                  'Where do college students in Toronto go to find internships and part-time jobs?',
                image: fiftyOne,
                author: 'Info 51',
                link: 'http://info.51.ca/life/study/2018-04/638154.html',
              },
              {
                title: 'Sheridan alumni help undergrads connect with employers',
                image: bramptonGuardian,
                author: 'Brampton Guardian',
                link:
                  'https://www.bramptonguardian.com/news-story/8809420-sheridan-alumni-help-undergrads-connect-with-employers-via-new-liaison-service/',
              },
              {
                title:
                  'Univjobs app dedicated to boosting the Oakville job market',
                image: oakvilleNews,
                author: 'Oakville News',
                link:
                  'https://oakvillenews.org/univjobs-boosts-job-opportunities-ontario/',
              },
              {
                title: '5 undiscovered startups in Mississauga',
                image: mississaugaNews,
                author: 'Mississauga News',
                link:
                  ' https://www.mississauga.com/news-story/8800040-5-undiscovered-startups-in-mississauga/',
              },
              {
                title: 'Online tool to assist undergrads with jobs',
                image: canindiaNews,
                author: 'CanIndia News',
                link:
                  'https://www.canindia.com/online-tool-to-assist-undergrads-with-jobs/',
              },
              {
                title:
                  'Univjobs helps employers connect with students at post-secondary schools',
                image: torontoGuardian,
                author: 'Toronto Guardian',
                link:
                  'https://torontoguardian.com/2018/07/univjobs-post-secondary-jobs-connect/',
              },
              {
                title: 'Top 5 Emerging Startups In Mississauga',
                image: buzzfeed,
                author: 'Buzzfeed',
                link:
                  'https://www.buzzfeed.com/dewtre/top-5-emerging-startups-in-mississauga-3k530?utm_term=.glVoYJVn2#.fivbZ87l1',
              },
            ]}
          />
        </Body>
        <CallToAction
          header={'Start Now!'}
          subHeader={
            'Students are already applying to jobs. Create your profile and find meaningful work today!'
          }
          buttonText={'Sign up'}
          alt={true}
          location={`${config.appUrl}register`}
        />
      </div>
    )
  }
}

export default PressPage
