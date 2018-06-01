import React from 'react'
import Link from 'gatsby-link'

import styles from "../styles/HeaderStyles.module.css";

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
    <div className={styles.logoContainer}>
      <img 
        className={styles.univjobsLogo}
        src="https://s3.amazonaws.com/assets.univjobs/images/front/justtransparency.png"/>
    </div>
    <div className={styles.navItems}>
      <Link to="https://blog.univjobs.ca">Blog</Link>
      <Link to="/employers">Employers</Link>
      <div className={styles.signInButton}>
        SIGN IN
      </div>
      
    </div>
  </div>
)

export default Header
