import React from 'react'
import PropTypes from 'prop-types'
import { HTMLContent } from '../components/Content'
import { CallToAction } from '../components/shared'
import Link from 'gatsby-link'
import {SeoLayout, PageType} from '../components/seo'
import config from '../config'
import styles from '../styles/TeamMember.module.css'

const Intro = props => {
  return (
    <div className={styles.introContainer}>
      <h1>{props.name}</h1>
      <div>{props.role}</div>
      <img src={props.image} />
    </div>
  )
}

export const TeamMemberPageTemplate = ({ image, name, role, content }) => (
  <div>
    <section className={styles.pageContainer}>
      <SeoLayout
        requiredProps={{
          title: `${name} - Univjobs Team Member`,
          description: role,
          url: `${config.url}team/${name}`,
          image: `${config.staticUrl.substring(0, config.staticUrl.length-1)}${image}`
        }}
        type={PageType.REGULAR}
        pageProps={{    
        }}
      />
      <Intro name={name} role={role} image={image} />
      <div className={styles.content}>
        <HTMLContent content={content} />
        <Link to="/about">Learn about the rest of the Univjobs Team</Link>
      </div>
    </section>
    <CallToAction
      header={'Start Now!'}
      subHeader={
        'Students are already applying to jobs. Create your profile and find meaningful work today!'
      }
      buttonText={'Sign up'}
      alt={false}
      location={'https://app.univjobs.ca/register/'}
    />
  </div>
)

TeamMemberPageTemplate.propTypes = {
  image: PropTypes.string,
  role: PropTypes.string,
  name: PropTypes.string,
}

const TeamMemberPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <TeamMemberPageTemplate
      image={frontmatter.image}
      role={frontmatter.role}
      name={frontmatter.name}
      content={html}
    />
  )
}

TeamMemberPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TeamMemberPage

export const teamMemberPageQuery = graphql`
  query TeamMemberPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name
        image
        role
      }
    }
  }
`
