import React from 'react'
import PropTypes from 'prop-types'
import "../styles/PackCTA.sass"
import { Button } from '../../shared/button';
import SocialShareButtons from '../../shared/social/components/SocialShareButtons';

const PackCTA = ({ onClick, registered, url }) => !registered ? (
  <div className="pack-cta">
    <h2>...and more!</h2>
    <p>Check back often for more deals!</p>
    <Button text="Get your pack" onClick={onClick}/>
  </div>
) : (
  <div className="pack-cta">
    <p>Scroll up to <b>see the deals!</b>☝️ </p>
    <p>Please share if this was useful 😇</p>
    <SocialShareButtons 
      message={'I just got the student discount pack from Univjobs! Check it out.'} 
      url={url}
      facebookShareCount={88}
    />
  </div>
)

export default PackCTA;

PackCTA.propTypes = {
  onClick: PropTypes.func.isRequired
}