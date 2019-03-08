import React from 'react'
import PropTypes from 'prop-types'
import '../styles/MobilePagePicture.sass'
import mobilePicture from '../../../img/directory/directory-mobile.jpeg'

const MobilePagePicture = () => (
  <div
    style={{ backgroundImage: `url(${mobilePicture})` }}
    className="mobile-page-picture"
  >
    <div>Companies hiring near you!</div>
  </div>
)

export default MobilePagePicture

MobilePagePicture.propTypes = {}
