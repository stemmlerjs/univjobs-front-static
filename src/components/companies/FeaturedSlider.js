import React from 'react'
import PropTypes from 'prop-types'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const sliderSettings = {
  arrows: true,
  infinite: true,
  speed: 1200,
  pauseOnFocus: true,
  autoplay: true,
  autoplaySpeed: 6000
}

/**
 * FeaturedCompanySliderItem
 * 
 * @desc The FeaturedCompanySliderItem is an instance of a
 * featured company that gets rendered in the slider on the 
 * explore companies page.
 */

const FeaturedCompanySliderItem = ({ company }) => (
  <div className="featured-explore-company">
    <div className="featured-explore-company-desc">
      <div>
        <p>Featured Company</p>
        <h2>{company.companyName}</h2>
        <div>{company.slogan}</div>
        <a href={company.fields.slug}>LEARN MORE</a>
      </div>
    </div>
    <div className="featured-explore-company-image" style={{
      backgroundImage: `url(${company.brandImageUrl})`
    }}>
    </div>
  </div>
)

FeaturedCompanySliderItem.propTypes = {
  company: PropTypes.shape({
    companyName: PropTypes.string,
    slogan: PropTypes.string,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    brandImageUrl: PropTypes.string
  })
}

/**
 * FeaturedSlider
 * 
 * @desc The FeaturedSlider component takes an array
 * of featured companies and renders a slider of them
 * to be displayed on the explore companies front page.
 */

const FeaturedSlider = ({ companies }) => (
  <div className="featured-explore-slider-container">
    <Slider {...sliderSettings}>
      { companies.map((c, i) => <FeaturedCompanySliderItem key={i} company={c}/>)}
    </Slider>
  </div>
)

FeaturedSlider.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({
    companyName: PropTypes.string,
    slogan: PropTypes.string,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    brandImageUrl: PropTypes.string
  }))
}

export default FeaturedSlider
