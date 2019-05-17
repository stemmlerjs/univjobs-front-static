
import React from 'react'
import Link from 'gatsby-link'
import "../styles/404Page.sass"

export default () => (
  <div className="four-oh-four-page">
    <h1 className="title">Oh snap.</h1>
    <p className="message">We couldn't find the page you were looking for. It might have been moved.</p>
    <p>...or perhaps it never existed 😨</p>
    <div className="image-container">
      <img src="https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif" />
    </div>
    <Link className="return-button" to="/">Go back</Link>
  </div>
)
