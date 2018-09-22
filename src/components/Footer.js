import React from 'react'
import Link from 'gatsby-link'

import styles from '../styles/FooterStyles.module.css'
import SocialLinks from './SocialLinks'

import config from '../config'

const Strip = () => {
  return (
    <div className={styles.bottomStrip}>
      <div>DCommons, Inc. © 2018</div>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <Link to="/terms-of-service">Terms of Service</Link>
    </div>
  )
}

const FooterMenuSection = props => {
  return (
    <div className={styles.menuSection}>
      <div className={styles.menuHeader}>{props.title}</div>
      {props.links.map((link, index) => {
        return link.mail || link.external ? (
          <a key={index} className={styles.menuItem} href={link.url}>
            <div>{link.name}</div>
          </a>
        ) : (
          <Link key={index} className={styles.menuItem} to={link.url}>
            <div>{link.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.linksContainer}>
      <section>
        <FooterMenuSection
          title={'Univjobs'}
          links={[
            { name: 'About', url: '/about' },
            {
              name: 'Contact',
              url: 'mailto:contact@univjobs.ca?Subject=Inquiry',
              mail: true,
            },
            { name: 'Press', url: '/press' },
          ]}
        />
        <FooterMenuSection
          title={'Product'}
          links={[
            { name: 'Blog', url: '/blog' },
            { name: 'Pricing', url: '/pricing' },
          ]}
        />
        <FooterMenuSection
          title={'Companies'}
          links={[
            { name: 'Directory', url: '/companies/directory' },
            { name: 'Featured Companies', url: '/companies' },
          ]}
        />

      </section>

      <section>
        <FooterMenuSection
          title={'For employers'}
          links={[
            {
              name: 'Register',
              url: `${config.appUrl}/register/employer`,
              external: true,
            },
            { name: 'Small Businesses', url: '/small-business' },
          ]}
        />
        <SocialLinks
          links={[
            { url: 'https://www.facebook.com/univjobs/', type: 'facebook' },
            { url: 'https://twitter.com/univjobsapp', type: 'twitter' },
            {
              url:
                'https://www.linkedin.com/company/univjobs/?originalSubdomain=ca',
              type: 'linkedin',
            },
            { url: 'https://www.instagram.com/univjobs', type: 'instagram' },
          ]}
        />
      </section>
    </div>
    <Strip />
  </div>
)

export default Footer
