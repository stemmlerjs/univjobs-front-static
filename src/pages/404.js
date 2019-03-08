import React from 'react'
import config from '../config/index'

class NotFoundPage extends React.Component {
  constructor() {
    super()
  }

  componentDidMount () {
    window.location.replace(config.staticUrl)
  }

  render() {
    return (
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    )
  }
}

export default NotFoundPage
