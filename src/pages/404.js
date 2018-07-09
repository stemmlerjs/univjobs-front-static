import React from 'react'

class NotFoundPage extends React.Component {
  constructor() {
    super()
  }

  componentWillMount () {
    debugger;
    if (typeof window !== undefined) {
      if (window.location.href.indexOf('posting') !== -1) {
        let lastIndexSlash = window.location.href.lastIndexOf("/");
        let postingSlug = window.location.href.substring(lastIndexSlash + 1);
        window.location.href = `${config.appUrl}${postingSlug}`
      }
    }
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
