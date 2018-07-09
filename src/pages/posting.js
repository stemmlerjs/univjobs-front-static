import React from 'react'
import config from '../config'

export default class Posting extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    let lastIndexSlash = window.location.href.lastIndexOf("/");
    let postingSlug = window.location.href.substring(lastIndexSlash + 1);
    window.location.href = `${config.appUrl}${postingSlug}`
  }

  render () {
    return (
      <div></div>
    )
  }
}