import React from 'react'
import Link from 'gatsby-link'

import aboutImage from '../img/about/hero.png'
import pitch from '../img/about/pitch.png'
import uLogo from '../img/about/u-logo.png'

import LandingPage from '../components/LandingPage'
import CallToAction from '../components/CallToAction'
import Divider from '../components/Divider'

import styles from '../styles/About.module.css'
import description from '../styles/About/Description.module.css'
import meetTheTeam from '../styles/About/MeetTheTeam.module.css'
import ourStory from '../styles/About/OurStory.module.css'
import whoWeAre from '../styles/About/WhoWeAre.module.css'
import memberStyles from '../styles/About/Members.module.css'

const Description = (props) => {
  return (
    <section className={styles.sectionContainer}>
      <h1 className={description.title}>Univjobs</h1>
      <div className={description.sub}>is the online job marketplace for Canadian post-secondary students 
and recent graduates. 
</div>

      <h1 className={description.how}>We enable students to connect with forward 
thinking employers through part-time work, 
internships, and entry-level jobs.</h1>
    </section>
  )
}

const WhoWeAre = (props) => {
  return (
    <section className={styles.sectionContainer}>
      <div className={whoWeAre.flexContainer}>
        <div className={whoWeAre.imageContainer}>
          <img src={pitch}/>
        </div>
        
        <div className={whoWeAre.textContainer}>
          <h1>Who we are</h1>
          <p>There was a problem. It was hard for 
  students and recent grads to find jobs 
  and internships. It was also tough for 
  employers to find great early-career talent.</p>
          <p>One of our founders, Charles wanted to 
  solve this problem, and so UnivJobs was born. 
  UnivJobs' mission is to connect students and 
  recent grads with meaningful opportunities.</p>
        </div>
      </div>
    </section>
  )
}

const OurStory = (props) => {
  return (
    <section className={styles.sectionContainer}>

      <div className={ourStory.flexContainer}>
        <div className={ourStory.imageContainer}>
          <img src={uLogo}/>
        </div>

        <div className={ourStory.textContainer}>
          <p>UnivJobs was co-founded by Charles and Khalil, after they noticed that 
  them and many of their friends experienced difficulty looking for work 
  during school and after graduating. Upon realizing the problem they 
  started UnivJobs while at school. 
  </p>
          <p>The platform launched early of September 2017, building the 
  platform in between classes.</p>
        </div>
      </div>
    
    </section>
  )
}

const Member = (props) => {
  return (
    <div className={memberStyles.container} key={props.index}>
      <div className={memberStyles.imageContainer}>
        <Link to={props.member.slug}><img src={props.member.image}/></Link>
      </div>
      <div className={memberStyles.textContainer}>
        <h3>{props.member.name}</h3>
        <div>{props.member.role}</div>
        <p>{props.member.excerpt}</p>

        <a className={memberStyles.learnMore} href={props.member.slug}>Learn more about {
          props.member.name.substring(0, props.member.name.indexOf(" "))
        } here.</a>
      </div>
    </div>
  )
}

const MeetTheTeam = (props) => {
  return (
    <section className={styles.sectionContainer}>
      <h1 style={{ marginBottom: '2em'}}>Meet the Team</h1>
      {
        props.members.map((member, index) => {
          return <Member 
            key={index} 
            index={index} 
            member={member}/>
        })
      }
    </section>
  )
}

const AboutPage = ({ data }) => {
  
  const TeamMembers = data.allMarkdownRemark
    .edges.map((edge) => edge.node)
    .map((node) => Object.assign(
      {}, { excerpt: node.excerpt }, node.frontmatter, node.fields)
    )

  return (
    <div>
      <LandingPage
        heroTitle="About"
        heroSubTitle="Learn more about the team behind Univjobs"
  
        showHeroMask={false}
        centerHeroContainer={true}
        hasPolygon={false}
        options={{
          alignment: 'center',
          image: aboutImage,
          hero: {
            showHeroMask: true,
            showDarkMask: false
          }
        }}
      />
      <Description/>
      <Divider/>
      <WhoWeAre/>
      <Divider/>
      <OurStory/>
      <Divider/>
      <MeetTheTeam
        members={TeamMembers}
      />

      <CallToAction
        header={'Start Now!'}
        subHeader={'Students are already applying to jobs. Create your profile and find meaningful work today!'}
        buttonText={'Sign up'}
        alt={true}
        location={"https://app.univjobs.ca/register/"}
      />
    </div>
  )
}

export default AboutPage

export const teamMembersQuery = graphql`
  query AboutPage {
    allMarkdownRemark(filter: { 
      frontmatter:  { templateKey: {eq: "team-member"} } }
    ){
        edges {
          node {
            excerpt(pruneLength: 250)
            frontmatter {
              name
              role 
              image
            }
            fields {
              slug
            }

          }
        }
    }
  }
`