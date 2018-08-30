import React from 'react'
import PropTypes from 'prop-types'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1200,
  autoplay: false,
}

function withSlider(WrappedComponent) {
  return class WithSliderClass extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <Slider {...sliderSettings}>
          <WrappedComponent {...this.props} />
        </Slider>
      )
    }
  }
}

export default withSlider
