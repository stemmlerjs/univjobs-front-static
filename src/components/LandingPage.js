import React from 'react'
import Link from 'gatsby-link'
import landingePageStyles from '../styles/LandingPageStyles.module.css'

class LandingPage extends React.Component {
    constructor () {
      super();
      this.state = {
      };
    }

    render = () => {
      return (
        <section className={landingePageStyles.backgroundFallback}>
          <div style={{backgroundImage: `url(${this.props.image})`}} className={landingePageStyles.hero}></div>
          <div className={this.props.showHeroMask ? landingePageStyles.heroMask : landingePageStyles.darkMask}></div>
          <div className={this.props.centerHeroContainer ? landingePageStyles.centeredHeroContainer : landingePageStyles.heroContainer}>
            <h1 className={landingePageStyles.title}>{this.props.heroTitle}</h1>
            <div className={landingePageStyles.subTitle}>{this.props.heroSubTitle}</div>
    
            <div className={this.props.centerHeroContainer ? landingePageStyles.centeredCtaContainer : landingePageStyles.ctaContainer}>
              <div className={landingePageStyles.buttonContainer}>
                <button className={landingePageStyles.getStartedButton}>GET STARTED</button>
                <div className={landingePageStyles.alreadyOn}>Already on Univjobs? <span>Sign in.</span></div>
              </div>
              <div className={this.props.centerHeroContainer ? landingePageStyles.centeredButtonContainer : landingePageStyles.buttonContainer}>
                <button className={landingePageStyles.reRouteButton}>{this.props.reRouteButton}</button>
              </div>
            </div>
          </div>
          { this.props.hasPolygon ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" preserveAspectRatio="none">
                <polygon fill="white" points="0,200 200,0 200,200"></polygon>
              </svg>
            : '' 
          }
        </section>
      )
    }
}

LandingPage.defaultProps = {
  heroTitle: '',
  heroSubTitle: '',
  reRouteButton: '',
  image: '',
  showHeroMask: true,
  centerHeroContainer: false,
  hasPolygon: true
};

export default LandingPage