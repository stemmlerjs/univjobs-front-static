import React from 'react'
import Link from 'gatsby-link'
import shortHero from '../styles/ShortHero.module.css'


class ShortHero extends React.Component {
    constructor () {
      super();
      this.state = {
      };
    }


render = () => {
    return (
      <section className={shortHero.backgroundFallback}>
        <div className={shortHero.hero}>
        <div className={shortHero.centeredHeroContainer}>
          <h1 className={shortHero.title}>{this.props.heroTitle}</h1>
          <div className={shortHero.subTitle}>{this.props.heroSubTitle}</div>
        </div>
        </div>
      </section>
    )
  }
}

ShortHero.defaultProps = {
    heroTitle: '',
    heroSubTitle: '',
    image: '',
  };
export default ShortHero