import React from 'react'
import PropTypes from 'prop-types'
import withSection from './withSection'
import YouTube from 'react-youtube';

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import '../../styles/company/Videos.sass'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1200,
  autoplay: false,
}

/**
 * Video
 * 
 * @class component of one YouTube video
 */

const Video = ({ videoId }) => (
  <div className="youtube-video-container">
    <YouTube videoId={videoId}/>
  </div>
)

Video.propTypes = {
  videoId: PropTypes.string.isRequired
}

/**
 * getVideoIdFromUrl
 * 
 * @param {String} url 
 * @return {String} youtube video id
 */

const getVideoIdFromUrl = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}

/**
 * Videos
 * 
 * @class Display a series of videos.
 * Should be composed withSlider
 */

class Videos extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { urls } = this.props;
    return (
      <div>
        <Slider {...sliderSettings}>
          { urls.map((url, i) => (
            <Video 
              key={i} 
              videoId={getVideoIdFromUrl(url)}
            />
          ))}
        </Slider>
      </div>
    )
  }
}

Videos.propTypes = {
  title: PropTypes.string.isRequired,
  urls: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.string.isRequired
}

export default withSection(Videos);
