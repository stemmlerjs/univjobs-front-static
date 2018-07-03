import React from 'react'
import Link from 'gatsby-link'

import charles from '../img/press/charles.png'
import khalil from '../img/press/khalil.png'
import judy from '../img/press/judy.png'
import gurdeep from '../img/press/gurdeep.png'

import press1 from '../img/press/press-1.png'
import press2 from '../img/press/press-2.png'
import press3 from '../img/press/press-3.png'

import CallToAction from '../components/CallToAction'
import LandingPage from '../components/LandingPage'

import CountUp from 'react-countup';

import Divider from '../components/Divider'
import Mentions from '../components/press/Mentions'
import Founders from '../components/press/Founders'
import Advisors from '../components/press/Advisors'
import Mentors from '../components/press/Mentors'

import styles from '../styles/Press.module.css'

import config from '../config'

const Body = (props) => {
  return (
    <div style={{
      maxWidth: `1000px`,
      margin: `0 auto`,
      paddingTop: `2em`,
      paddingBottom: `2em`,
      paddingLeft: '1em',
      paddingRight: '1em'
    }}>
      {props.children}
    </div>
  )
}

const DownloadPressKit = (props) => {
  return (
    <div>
      <h3>Need to download our press kit?</h3>
      <div>Get it here</div>
    </div>
  )
}

const About = (props) => {
  return (
    <section className={styles.section}>
      <p className={styles.lastUpdated}>Last updated June 9th, 2018</p>
      <h1>About Univjobs</h1>
      <p>UnivJobs is the online job marketplace for Canadian post-secondary students
and recent graduates. We enable students to connect with forward
thinking employers through part-time work, internships, and entry-level jobs.</p>
      <p>UnivJobs was co-founded by Charles Javelona and Khalil Stemmler, after they noticed that 
many of their friends experienced difficulty looking for work during school and after
graduating. Upon realizing the problem, they started UnivJobs while at school.
The platform launched early of <b>September 2017</b>, building the platform in
between classes.</p>
    </section>
  )
}

const Milestones = (props) => {
  return (
    <section>
      <h1>Milestones</h1>

      <div className={styles.milestonesContainer}>
        <div className={styles.milestoneItem}>
          <div>Students from</div>
          <h3>40+</h3>
          <div>post-secondary institutions</div>
        </div>
        <div className={styles.milestoneItem}>
          <div>Active user base</div>
          <h3>1.5K</h3>
        </div>
        <div className={styles.milestoneItem}>
          <div>Forward-thinking employers onboard</div>
          <h3>100+</h3>
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
    <a href="https://drive.google.com/drive/folders/19eOhSLLlsPsfw7QpG93QlfeWu6I6niO3?usp=sharing">Download our press kit</a>
  )
}

/**
 * @class PressPage
 * @desc Press page describing important details about our company for
 * the public.
 */

class PressPage extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>

        <LandingPage
          heroTitle="Press and Media"
          heroSubTitle="The latest news, updates and resources on Univjobs"
          options={{
            centerHeroContainer:true,
            hero: {
              showHeroMask: true,
            }
          }}
          
        />
        
        <Body>
          <Download/>
          <About/>
          <Divider/>
          <Milestones/>
          <Divider/>
          <Founders
            founders={
              [
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
                  isLeftAligned: true
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
                  isLeftAligned: false
                }
              ]
            }
          />
          <Divider/>
          <Advisors
            advisors={[
              {
                  name: 'Gurdeep Singh',
                  paragraph1: `Gurdeep, a graduate from Rotman School of Management, is a start-up growth specialist. 
                    He has launched businesses from scratch and has grown them to become market leaders.`,
                  paragraph2: `Some of the start-ups that have benefited from his expertise are inMotive 
                    (bringing one of the world's most efficient transmission technology for electric vehicles) and GoFetch 
                    (Canada's leading pet care technology platform, which has recently been acquired).`,
                  paragraph3: `Gurdeep's passion for scaling start-ups has had him selected into the highly coveted Creative Destruction Lab (CDL) cohort.`,
                  image: gurdeep,
                  isLeftAligned: true
                }
            ]}
          />
          <Divider/>
          <Mentors
            mentors={[
              {
                  name: 'Judy Lindenbach',
                  paragraph1: `Judy has held a number of roles as founder and director at companies she helped grow from start to profit.`,
                  paragraph2: `Judy's expertise includes guiding high-level strategic initiatives to further business development & growth with a special emphasis on Sales, Marketing, 
                    Talent Acquisition & Management, Policy & Procedure Development, Training Program Design & Delivery.`,
                  paragraph3: `She is currently a Senior Director of Corporate Partnerships at Haltech Regional Innovation Centre.`,
                  image: judy,
                  isLeftAligned: true
                }
            ]}
          />
          <Divider/>
          <Mentions
            mentions={[
              {
                title: "There's a new way for students to look for jobs in Toronto",
                image: press1,
                author: 'Blog Toronto',
                link: 'https://www.blogto.com/tech/2018/04/students-jobs-toronto/'
              },
              {
                title: "Where do college students in Toronto go to find internships and part-time jobs?",
                image: press2,
                author: 'Info 51',
                link: 'http://info.51.ca/life/study/2018-04/638154.html'
              },
              {
                title: "Univjobs app dedicated to boosting the Oakville job market",
                image: press3,
                author: 'Oakville News',
                link: 'https://oakvillenews.org/univjobs-boosts-job-opportunities-ontario/'
              }

            ]}
          />
          <Download/>
        </Body>
        <CallToAction
          header={'Start Now!'}
          subHeader={'Students are already applying to jobs. Create your profile and find meaningful work today!'}
          buttonText={'Sign up'}
          alt={true}
          location={`${config.appUrl}register`}
        />
      </div>
    )
  }
}

export default PressPage
