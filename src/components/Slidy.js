import React from 'react'
import Link from 'gatsby-link'

import FeaturedBlogPost from '../components/FeaturedBlogPost'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slidy from '../styles/Slidy.module.css';

var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  className:"center",
  centerMode:true
};


class Slidy extends React.Component {
    constructor () {
      super();
      this.state = {
      };
    }

  render = () => {
    switch (this.props.component) {

      case "Featured posts":
        return (
          <section className={slidy.container}>
            <Slider {
              ...settings
            }>
              {
                this.props.elements.map((element, index) => {
                  return <FeaturedBlogPost
                    key={index}
                    post={element}
                  />
                })
              }
            </Slider>
          </section>
        )

      default:
        return (
          <section className={slidy.container}>
            <Slider {...settings}>
            <div>
              <img className={slidy.picture}
                src="https://s3.amazonaws.com/assets.univjobs/images/front/fb-review-one.png"
                />
            </div>
            <div>
            <img className={slidy.picture}
              src="https://s3.amazonaws.com/assets.univjobs/images/front/fb-review-two.png"
                />
            </div>
            <div>
            <img className={slidy.picture}
              src="https://s3.amazonaws.com/assets.univjobs/images/front/fb-review-three.png"
                />
            </div>
          </Slider>
            
        </section>
      )
    }
    
  }
}

Slidy.defaultProps = {
    
};


export default Slidy