import React from 'react'
import Link from 'gatsby-link'

import styles from "../styles/HeaderStyles.module.css";

import config from '../config'
import { redirectTo } from '../helpers'

class Header extends React.Component {
  constructor () {
    super();
    this.state = {
      menuOpen: false
    };
  }

  /**
   * openBurgerMenu
   * 
   * Opens the burger menu.
   */

  toggleBurgerMenu = () => {
    this.setState({
      ...this.state,
      menuOpen: !this.state.menuOpen
    })
  }

  render = () => {
    return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link to="/">
        <img 
          className={styles.univjobsLogo}
          src="https://s3.amazonaws.com/assets.univjobs/images/front/justtransparency.png"/>
        </Link>
      </div>
      <div className={styles.navItems}>
        <Link className={styles.navItem} to="/pricing">Pricing</Link>
        <Link className={styles.navItem} to="/blog">Blog</Link>
        <Link className={styles.navItem} to="/employers">Employers</Link>
        <div onClick={() => redirectTo(config.appUrl)} className={styles.signInButton}>
          SIGN IN
        </div>
        <div className={styles.burgerMenuNavItem} href="javascript:void(0);" onClick={this.toggleBurgerMenu}>
          <div>
            <div className={
              this.state.menuOpen 
                ? `${styles.change1} ${styles.bar1}`
                : styles.bar1}>
            </div>
            <div className={
              this.state.menuOpen 
                ? `${styles.change2} ${styles.bar2}`
                : styles.bar2}>
            </div>

            <div className={
              this.state.menuOpen 
                ? `${styles.change3} ${styles.bar3}`
                : styles.bar3}>
            </div>
          </div>

        </div>

        <div className={this.state.menuOpen 
          ? styles.mobileNavOverlay
          : `${styles.mobileNavOverlay} ${styles.overlayClosed}`}>

          {
            /**s
             * Overlay options
             */
          }
          <div className={styles.mobileNavOverlayOptionsContainer}>
            <a className={styles.overlayItemMain} href={`${config.appUrl}login`}>Sign in</a>
            <a className={styles.overlayItemMain} href={`${config.appUrl}register`}>Register</a>
            <a className={styles.overlayItemMain} href="/blog">Blog</a>

            <div className={styles.overlaySection}>For Employers</div>
            <a className={styles.overlayItemMain} href={`${config.appUrl}login`}>Sign in</a>
            <a className={styles.overlayItemMain} href={`${config.appUrl}register/employers`}>Register</a>
            <a className={styles.overlayItem} href="/pricing">Pricing</a>
            <a className={styles.overlayItem} href="mailto:contact@univjobs.ca?Subject=Inquiry%20">Contact</a>
            <a className={styles.overlayItem} href="/about">About</a>
            <a className={styles.overlayItem} href="/blog/categories/employers">Tips</a>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

export default Header
