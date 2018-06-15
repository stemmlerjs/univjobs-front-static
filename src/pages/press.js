import React from 'react'
import Link from 'gatsby-link'

import charles from '../img/about/charles-headshot.png'
import khalil from '../img/about/khalil-headshot.png'

import press1 from '../img/press/press-1.png'
import press2 from '../img/press/press-2.png'
import press3 from '../img/press/press-3.png'

import CallToAction from '../components/CallToAction'
import LandingPage from '../components/LandingPage'

import CountUp from 'react-countup';

import Divider from '../components/Divider'

import styles from '../styles/Press.module.css'

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

const Founders = () => {
  return (
    <section>
      <h1>Founders</h1>

      <div className={styles.founderContainer}>

        <div><img style={{paddingRight: '1em'}} src={charles}/></div>

        <div>
          <h3>Charles Javelona</h3>
          <p>Originally from the Philippines, Charles
              previously worked at Scotiabank
              Innovation Factory. An aspiring
              entrepreneur, Charles has an impressive
              track record for innovation and making
              the impossible happen.
          </p>
          <p>
              From starting a Toastmasters Club in
Oakville and having recognized a need for
improved communication capabilities
among students to braving the world of
entrepreneurship, Charles simply views
obstacles as challenges to be overcome.
          </p>
        </div>
      </div>

      <div className={styles.founderContainer}>
        <div>
          <h3>Khalil Stemmler</h3>
          <p>Prior to becoming a founding member
of the Univjobs team, Khalil worked in
software development at IBM and
Pinnaca while attending school at
both Brock University and Sheridan
College.
          </p>
          <p>As a Software Architect, Khalil works
diligently to ensure that the platform is
scalable, secure, and mobile friendly
for employers and students.</p>
        </div>

        <div className={styles.founderContainerRight}><img style={{paddingLeft: '1em'}} src={khalil}/></div>
      </div>


    </section>
  )
}

const Mention = (props) => {
  return (
    <a className={styles.mention} href={props.link}
      style={{ textDecoration: 'none'}}
    >
      <img src={props.img}/>
      <div>
        <div>{props.title}</div>
        <div className={styles.mentionAuthor}>{props.author}</div>
      </div>
    </a>
  )
}

const Mentions = () => {
  return (
    <section>
      <h1>Press mentions</h1>
      <Mention 
        title={"There's a new way for students to look for jobs in Toronto"} 
        img={press1}
        author={'Blog Toronto'}
        link={'https://www.blogto.com/tech/2018/04/students-jobs-toronto/'}
      />
      <Mention 
        title={"Where do college students in Toronto go to find internships and part-time jobs?"} 
        img={press2}
        author={'Info 51'}
        link={'http://info.51.ca/life/study/2018-04/638154.html'}
      />
      <Mention 
        title={"Univjobs app dedicated to boosting the Oakville job market"} 
        img={press3}
        author={'Oakville News'}
        link={'https://oakvillenews.org/univjobs-boosts-job-opportunities-ontario/'}
      />
    </section>
  )
}

const Download = () => {
  return (
    <a href="https://drive.google.com/open?id=1JWrGWVoBImg-eOCg4H6jxb7N45a-sAye">Download our press kit</a>
  )
}


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
          <Founders/>
          <Divider/>
          <Mentions/>
          <Download/>
        </Body>
        
        
      
        <CallToAction
          header={'Start Now!'}
          subHeader={'Students are already applying to jobs. Create your profile and find meaningful work today!'}
          buttonText={'Sign up'}
          alt={true}
          location={'https://app.univjobs.ca/register/'}
        />
      </div>
    )
  }
}

export default PressPage
