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
  centerMode:true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};


class Slidy extends React.Component {
    constructor () {
      super();
      this.state = {
      };
    }

  render = () => {

    const instanceSettings = Object.assign({}, settings, this.props.settings)

    switch (this.props.component) {

      case "Featured posts":
        return (
          <section className={
            this.props.class 
              ? `${this.props.class} ${slidy.container}` 
              : slidy.container
          }>
            <Slider {
              ...instanceSettings
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