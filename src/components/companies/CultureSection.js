import React from 'react'
import PropTypes from 'prop-types'
import withSection from './withSection'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import '../../styles/company/CultureItem.sass'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 2500,
  autoplay: true,
  autoplaySpeed: 3000,
}

const CultureItem = props => (
  <div className="culture-item">
    <div style={{ backgroundImage: `url(${props.image})` }} />
    <div>{props.title}</div>
    <div>{props.description}</div>
  </div>
)

CultureItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

/**
 * CultureSection
 *
 * @class Display a series of videos.
 * Should be composed withSlider
 */

class CultureSection extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { cultureItems } = this.props

    return (
      <div>
        <Slider {...sliderSettings}>
          {cultureItems.map((cultureItem, i) => (
            <CultureItem key={i} {...cultureItem} />
          ))}
        </Slider>
      </div>
    )
  }
}

CultureSection.propTypes = {
  title: PropTypes.string.isRequired,
  cultureItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
  size: PropTypes.string.isRequired,
}

export default withSection(CultureSection)
