import React from 'react'
import PropTypes from 'prop-types'
import uLogo from '../../../img/about/u-logo.png'
import searchSvg from '../../../img/directory/search.svg'
import '../styles/DirectoryHeader.sass'

/**
 * @class DirectoryHeader
 * @desc This class is the directory header which allows users
 * to search for companies based on their location.
 */

export default class DirectoryHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      didScroll: false,
      lastScrollTop: 0,
      delta: 5,
      navbarHeight: 0,
      hideUp: false,
    }

    this.hasScrolled = this.hasScrolled.bind(this)
    this.setupScrollEvents = this.setupScrollEvents.bind(this)
  }

  componentDidMount() {
    // Setup scrolling events.
    this.setupScrollEvents()
  }

  setupScrollEvents() {
    if (typeof window !== 'undefined') {
      // Set navbar height
      this.setState({
        ...this.state,
        navbarHeight: document.getElementById('directory-header-nav')
          .offsetHeight,
      })

      // Hook up scroll event listener
      window.addEventListener('scroll', () => {
        this.setState({
          ...this.state,
          didScroll: true,
        })
      })

      // Check for scroll every while
      setInterval(() => {
        if (this.state.didScroll) {
          this.hasScrolled()
          this.setState({
            ...this.state,
            didScroll: false,
          })
        }
      }, 250)
    }
  }

  hasScrolled = () => {
    const st = window.scrollY
    const { lastScrollTop, delta, navbarHeight } = this.state

    const body = document.body,
      html = document.documentElement

    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      // $('header').removeClass('nav-down').addClass('nav-up');
      this.setState({
        ...this.state,
        hideUp: true,
      })
      console.log('scroll down')
    } else {
      // Scroll Up
      if (st + window.innerHeight < documentHeight) {
        // $('header').removeClass('nav-up').addClass('nav-down');
        this.setState({
          ...this.state,
          hideUp: false,
        })
        console.log('scroll up')
      }
    }

    this.setState({
      ...this.state,
      lastScrollTop: st,
    })
  }

  render() {
    return (
      <div
        style={{
          top: this.state.hideUp ? '-95px' : '0px',
        }}
        className="directory-header"
        id="directory-header-nav"
      >
        <div className="logo-container"><img src={uLogo}/></div>
        <div className="search-container">
          <input type="text" placeholder="Search by address or city"/>
          <div className="enter-button">
            <img src={searchSvg}/>
          </div>
        </div>
      </div>
    )
  }
}

DirectoryHeader.propTypes = {
  
}