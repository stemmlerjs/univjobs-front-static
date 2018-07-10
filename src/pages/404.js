import React from 'react'

class NotFoundPage extends React.Component {
  constructor() {
    super()
  }

  componentDidMount () {
    if (typeof window !== undefined) {
      let url = window.location.href;

      if (url.indexOf('posting') !== -1) {
        let lastIndexSlash = url.lastIndexOf("/");
        let postingSlug = url.substring(lastIndexSlash + 1);

        if (typeof window !== undefined) {
          window.location.href = `${config.appUrl}posting/${postingSlug}`
        }
        
      }

      if (url.indexOf('register/employer')) {
        if (typeof window !== undefined) {
          window.location.href = `${config.appUrl}register/employer`
        }
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
