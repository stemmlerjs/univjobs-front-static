import React from 'react'
import Link from 'gatsby-link'

import styles from "../styles/HeaderStyles.module.css";

import config from '../config'
import { redirectTo } from '../helpers'

const HeaderOverlay = ({ isOpen }) => {
  return (
    <div className={isOpen
      ? styles.mobileNavOverlay
      : `${styles.mobileNavOverlay} ${styles.overlayClosed}`}>

      {
        /**s
         * Overlay options
         */
      }
      <div className={styles.mobileNavOverlayOptionsContainer}>
       <a className={`${styles.overlayItemMain} ${styles.overlay}`} href={`${config.appUrl}login`}>Login</a>
       <a className={`${styles.overlayItem} ${styles.overlay}`} href="/companies">Explore Companies</a>
       <a className={`${styles.overlayItem} ${styles.overlay}`} href="/about">About</a>

      <div className={styles.overlaySection}>Student</div>        
        <a className={`${styles.overlayItemMain} ${styles.overlay}`} href={`${config.appUrl}register`}>Register</a>
        <a className={`${styles.overlayItem} ${styles.overlay}`} href="/blog/categories/students">Tips</a>

        <div className={styles.overlaySection}>Employers</div>
          <a className={`${styles.overlayItemMain} ${styles.overlay}`} href={`${config.appUrl}register/employer`}>Register Employer</a>
          <a className={`${styles.overlayItem} ${styles.overlay}`} href="/pricing">Pricing</a>

      </div>
    </div>
  )
}

export default HeaderOverlay;