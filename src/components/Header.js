import React from 'react'
import Link from 'gatsby-link'

import styles from "../styles/HeaderStyles.module.css";

import config from '../config'
import { redirectTo } from '../helpers'

const Overlay = ({ isOpen }) => {
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

class Header extends React.Component {
  constructor () {
    super();
    this.state = {
      menuOpen: false,
      didScroll: false,
      lastScrollTop: 0,
      delta: 5,
      navbarHeight: 0,
      hideUp: false
    };

    this.hasScrolled = this.hasScrolled.bind(this);
  }

  componentDidMount () {
    if (typeof window !== "undefined") {
      // Set navbar height
      this.setState({
        ...this.state,
        navbarHeight: document.getElementById('header-nav').offsetHeight
      })

      // Hook up scroll event listener
      window.addEventListener('scroll', () => {
        this.setState({ 
          ...this.state,
          didScroll: true
        })
      });

      // Check for scroll every while
      setInterval(() => {
        if (this.state.didScroll) {
          this.hasScrolled();
          this.setState({
            ...this.state,
            didScroll: false
          })
        }
      }, 250);
    }
  }

  hasScrolled = () => {
    const st = window.scrollY;
    const { lastScrollTop, delta, navbarHeight } = this.state;

    const body = document.body,
    html = document.documentElement;

    const documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      // $('header').removeClass('nav-down').addClass('nav-up');
      this.setState({
        ...this.state,
        hideUp: true
      })
      console.log('scroll down')
    } 
    else {
      // Scroll Up
      if(st + window.innerHeight < documentHeight) {
        // $('header').removeClass('nav-up').addClass('nav-down');
        this.setState({
          ...this.state,
          hideUp: false
        })
        console.log('scroll up')
      }
    }
    
    this.setState({
      ...this.state,
      lastScrollTop: st
    })
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
    <div 
      id="header-nav" 
      className={styles.container}
      style={{
        top: this.state.hideUp ? '-95px' : '0px'
      }}
    >
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
        <Link className={styles.navItem} to="/companies">Explore Companies</Link>
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

        <Overlay
          isOpen={this.state.menuOpen}
        />
      </div>
    </div>
  )
  }
}

export default Header
