import React from 'react'
import Link from 'gatsby-link'

import styles from "../styles/FooterStyles.module.css";

import facebook from '../img/facebook-logo.png'
import twitter from '../img/twitter-logo-silhouette.png'
import linkedin from '../img/linkedin-logo.png'

const Strip = () => {
  return (
    <div className={styles.bottomStrip}>
      <div>DCommons, Inc. © 2018</div>
      <div>Privacy Policy</div>
      <div>Terms of Service</div>
    </div>
  )
}



const SocialLinks = (props) => {
  return (
    <div className={styles.socialLinksContainer}>
      <a className={styles.socialLink} href="https://www.facebook.com/univjobs/"><img src={facebook}></img></a>
      <a className={styles.socialLink} href="https://twitter.com/univjobsapp"><img src={twitter}></img></a>
      <a className={styles.socialLink} href="https://www.linkedin.com/company/univjobs/?originalSubdomain=ca"><img src={linkedin}></img></a>
    </div>
  )
}

const FooterMenuSection = (props) => {
  return (
    <div className={styles.menuSection}>
      <div className={styles.menuHeader}>{props.title}</div>
      {
        props.links.map((link, index) => {
          return link.mail 
            ? (
              <a key={index} className={styles.menuItem}  href={link.url}>
                <div>{link.name}</div>
              </a>
            ) : (
              <Link key={index} className={styles.menuItem}  to={link.url}>
                <div>{link.name}</div>
              </Link>
            )
        })
      }
    </div>
  )
}

const Footer = ({ siteTitle }) => (
  <div className={styles.container}>
    <div className={styles.linksContainer}>
      <section>
        <FooterMenuSection title={'Company'} links={
          [
            { name: 'About', url: '/about' },
            { name: 'Contact', url: 'mailto:univjobscanada@gmail.com?Subject=Inquiry', mail: true },
            { name: 'Why Univjobs', url: '/blog/why-univjobs/' }
          ]
        }/>
        <FooterMenuSection title={'Product'} links={
          [
            { name: 'Blog', url: '/blog' },
            { name: 'Pricing', url: '/pricing'}
          ]
        }/>
      </section>

      <section>
        <FooterMenuSection title={'For employers'} links={
          [
            { name: 'Register', url: 'https://app.univjobs.ca/register/employer' },
            { name: 'Small Businesses', url: '/small-business' },
            { name: 'How to be successful on Univjobs', url: '/blog/how-to-be-most-successful-on-univjobs'}
          ]
        }/>
        <SocialLinks/>
      </section>
      
    </div>
    <Strip/>
  </div>
)

export default Footer
