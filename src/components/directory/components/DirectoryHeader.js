import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import searchSvg from '../../../img/directory/search.svg'
import '../styles/DirectoryHeader.sass'
import { HeaderOverlay } from '../../shared'

import config from '../../../config'

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
      isHeaderOpen: false,
    }

    this.hasScrolled = this.hasScrolled.bind(this)
    this.setupScrollEvents = this.setupScrollEvents.bind(this)
    this.setupGoogleMapsAutoComplete = this.setupGoogleMapsAutoComplete.bind(
      this
    )
  }

  componentDidMount() {
    // Setup scrolling events.
    this.setupScrollEvents()

    // Setup autocomplete
    if (typeof window !== undefined) {
      this.setupGoogleMapsAutoComplete()
    }
  }

  setupGoogleMapsAutoComplete() {
    // Place "initializegmaps" onto the window as a global function
    // so that the google maps API can access it as a callback
    // function.
    const self = this
    window.initializegmaps = () => {
      // Setup autocomplete
      const input = document.getElementById('searchTextField')
      const autocomplete = new google.maps.places.Autocomplete(input)
      google.maps.event.addListener(
        autocomplete,
        'place_changed',
        this.handlePlaceChanged.bind(self)
      )

      // Setup GeoCoder
      window.Geocoder = new google.maps.Geocoder()
    }
  }

  /**
   * handlePlaceChanged
   * @desc This callback gets fired when the place is changed from
   * the Google Maps input.
   */

  handlePlaceChanged() {
    const newPlaceValue = document.getElementById('searchTextField').value
    this.props.onChange(newPlaceValue)
    this.props.onSubmit()
  }

  /**
   * setupScrollEvents
   * @desc This function initializes all of the scroll events.
   */

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

  /**
   * hasScrolled
   * @desc When we scroll, we want the status bar to not show. This
   * function determines if we've scrolled past the navbar and places
   * a class on it to remove it from view.
   */

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
    } else {
      // Scroll Up
      if (st + window.innerHeight < documentHeight) {
        // $('header').removeClass('nav-up').addClass('nav-down');
        this.setState({
          ...this.state,
          hideUp: false,
        })
      }
    }

    this.setState({
      ...this.state,
      lastScrollTop: st,
    })
  }

  /**
   * _handleKeyPress
   * @desc This function should be fired when the input field
   * changes. It will detect when the enter key has been pressed
   * in order to submit.
   * @param {Event} e
   */

  _handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.onSubmit()
    }
  }

  render() {
    const { currentLocation } = this.props
    return (
      <div
        style={{
          top: this.state.hideUp ? '-95px' : '0px',
        }}
        className="directory-header"
        id="directory-header-nav"
      >
        <Link to="/" className="logo-container">
          <img src={config.assets.image.cirularLogo} />
        </Link>
        <div className="search-container">
          <input
            id="searchTextField"
            value={currentLocation}
            type="text"
            placeholder="Search by address or city"
            onChange={e => this.props.onChange(e.target.value)}
            onKeyPress={this._handleKeyPress}
          />
          <div onClick={this.props.onSubmit} className="enter-button">
            <img src={searchSvg} />
          </div>
        </div>

        <HeaderOverlay isOpen={this.state.isHeaderOpen} />
      </div>
    )
  }
}

DirectoryHeader.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
