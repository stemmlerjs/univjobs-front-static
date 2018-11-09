import React from 'react'
import Link from 'gatsby-link'
import HeaderOverlay from './HeaderOverlay'
import config from '../../../config'
import { redirectTo } from '../../../helpers'

import styles from "../styles/HeaderStyles.module.css";
import "../styles/Header.sass"

import logo from '../../../img/logo-aqua-large@2x.png'
import greenArrow from '../../../img/icons/left-arrow.svg'
import whiteArrow from '../../../img/icons/left-arrow-right.svg'

/**
 * @class Header
 * @desc The basic blue header that shows within the entire application.
 * We'll make it show on every page except the directory, it will render
 * a different header.
 */
class Header extends React.Component {
  constructor () {
    super();
    this.state = {
      menuOpen: false,
      didScroll: false,
      lastScrollTop: 0,
      delta: 5,
      navbarHeight: 0,
      hideUp: false,
      currentUrl: '',
      shouldHideHeader: false
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

        const re = /companies\/directory$/g;
        const re2 = /companies\/directory\/$/g;
        const url = window.location.href;

        const shouldHideHeader = re.test(url) || re2.test(url);
        if (shouldHideHeader !== this.state.shouldHideHeader) {
          this.setState({
            ...this.state,
            shouldHideHeader: shouldHideHeader
          })
        }
      }, 250);
    }
  }

  // Deterine if the user has scrolled recently.
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
      this.setState({
        ...this.state,
        hideUp: true
      })
    } 
    else {
      // Scroll Up
      if(st + window.innerHeight < documentHeight) {
        this.setState({
          ...this.state,
          hideUp: false
        })
      }
    }
    
    this.setState({
      ...this.state,
      lastScrollTop: st
    })
  }

  // Opens the burger menu
  toggleBurgerMenu = () => {
    this.setState({
      ...this.state,
      menuOpen: !this.state.menuOpen
    })
  }

  isOnEmployerRoute = () => {
    if (typeof window !== undefined) {
      const pathname = window.location.pathname;
      const isEmployerRoute = pathname.indexOf('employers') === 1;
      return isEmployerRoute;
    }
    return false;
  }

  render = () => {
    return (
    <div 
      main-header-container 
      id="header-nav" 
      className={`main-header-container 
        ${styles.container} ${this.state.shouldHideHeader 
          ? styles.hideNav 
          : ''}
        `}
      style={{
        top: this.state.hideUp ? '-95px' : '0px'
      }}
    >
      <div className="logo-container">
        <Link to="/">
          <img className="univjobs-logo" src={logo}/>
        </Link>
      </div>
      <div className="nav-items">
        {this.isOnEmployerRoute() ? (
          <Link className="nav-item" to="/">Get Hired</Link>
        ): (
          <Link className="nav-item" to="/employers">Hire Talent</Link>
        )}
        
        <Link className="nav-item" to="/blog">Blog</Link>
        <Link className="nav-item" to="/companies">Explore Companies</Link>
        {/* <Link className="nav-item" to="/employers">Log in</Link> */}
        <div 
          onClick={() => redirectTo(config.appUrl)} 
          className="sign-in-button">
          SIGN IN
          <img className="before-hover" src={greenArrow}></img>
          <img className="after-hover" src={whiteArrow}></img>
        </div>
      </div>
      <div className={styles.burgerMenuNavItem} href="javascript:void(0);" onClick={this.toggleBurgerMenu}>
        <div>
          <div className={
            this.state.menuOpen 
              ? `${styles.change1} bar1`
              : "bar1"}>
          </div>
          <div className={
            this.state.menuOpen 
              ? `${styles.change2} bar2`
              : "bar2"}>
          </div>

          <div className={
            this.state.menuOpen 
              ? `${styles.change3} bar3`
              : "bar3"}>
          </div>
        </div>
      </div>
      <HeaderOverlay
        isOpen={this.state.menuOpen}
      />
    </div>
  )
  }
}

export default Header
