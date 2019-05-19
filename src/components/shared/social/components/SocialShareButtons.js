import React from 'react'
import PropTypes from 'prop-types'
import "../styles/SocialShareButtons.sass"
import {
  FacebookShareButton
} from 'react-share';
import { createTwitterShareURL } from '../../../../utils/social';
import fbIcon from '../../../../img/social/fb.svg'
import twitterIcon from '../../../../img/social/twitter.svg'

const SocialShareButtons = ({ url, message, facebookShareCount }) => (
  <div className="social-share-buttons">
    <a 
      className="share-button twitter-button" 
      href={createTwitterShareURL(message, url)} 
      target="_blank">
      <div className="button-inner">
        <img src={twitterIcon}/>
        <div>Tweet</div>
      </div>
    </a>
    <FacebookShareButton 
      className="share-button facebook-button" 
      // quote={url} 
        url={url}>
        <div className="button-inner">
        <img src={fbIcon}/>
        <div>Share</div>
        { facebookShareCount ? <div>{facebookShareCount}</div> : ''}
      </div>
    </FacebookShareButton>
  </div>
)


SocialShareButtons.propTypes = {
  url: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  facebookShareCount: PropTypes.number
}

export default SocialShareButtons
