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

      let settings = {
        options: {
          centerHeroContainer:true,
          image: null,
          hasPolygon: false,
          buttons: {
            hasButtons: true,
            reRouteButtonText: "I'm a student",
         },
         hero: {
           showHeroMask: false,
           color: '#555555'
         }
       }
      }

      settings = Object.assign({}, settings, this.props)

      return (
        <section style={{ marginTop: '0px !important'}} className={landingePageStyles.backgroundFallback}>
          <div 
            style={{ 
              backgroundImage: `url(${settings.options.image})`, 
              backgroundColor: settings.options.hero ? settings.options.hero.color : '' }} 
            className={landingePageStyles.hero}></div>
          <div className={settings.options.hero.showHeroMask ? landingePageStyles.heroMask : landingePageStyles.darkMask}></div>
          <div className={settings.options.centerHeroContainer ? landingePageStyles.centeredHeroContainer : landingePageStyles.heroContainer}>
            <h1 className={landingePageStyles.title}>{settings.heroTitle}</h1>
            <div className={landingePageStyles.subTitle}>{settings.heroSubTitle}</div>
    
          { settings.options.buttons.hasButtons ? 
            <div className={settings.options.centerHeroContainer ? landingePageStyles.centeredCtaContainer : landingePageStyles.ctaContainer}>
              <div className={landingePageStyles.buttonContainer}>
                <button className={landingePageStyles.getStartedButton}>GET STARTED</button>
                <div className={landingePageStyles.alreadyOn}>Already on Univjobs? <span>Sign in.</span></div>
              </div>
              <div className={settings.options.centerHeroContainer ? landingePageStyles.centeredButtonContainer : landingePageStyles.buttonContainer}>
                <button className={landingePageStyles.reRouteButton}>{settings.options.buttons.reRouteButtonText}</button>
              </div>
            </div> : ''
          }

          </div>
          { settings.options.hasPolygon ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" preserveAspectRatio="none">
                <polygon fill="white" points="0,200 200,0 200,200"></polygon>
              </svg>
            : '' 
          }
        </section>
      )
    }
}


/**
 * Variables for options:
 *    heroTitle="Early access to young talent from any post-secondary school"
 *     heroSubTitle="A network of affordable qualified students for your growing team"
 *     options={{
 *        centerHeroContainer:true,
 *        image: gotJob,
 *        hasPolygon: false,
 *         buttons: {
 *          hasButtons: true,
 *          reRouteButtonText: "I'm a student",
 *        },
 *        hero: {
 *          showHeroMask: false,
 *          color: '#555555'
 *        }
 *      }}
 *   
 */
LandingPage.defaultProps = {
  heroTitle: '',
  heroSubTitle: '',
  options: {}
 
};

export default LandingPage