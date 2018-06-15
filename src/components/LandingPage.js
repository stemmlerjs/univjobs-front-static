import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import landingePageStyles from '../styles/LandingPageStyles.module.css'
import styles from '../styles/NewLandingPageStyles.module.css'

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
            mainButtonText: 'GET STARTED',
            reRouteButtonText: "",
            reRouteButtonLocation: null
         },
         hero: {
           showHeroMask: false,
           color: '#555555'
         },
         overrideClass: null
       }
      }

      settings = Object.assign({}, settings, this.props)

      console.log(settings.options.overrideClass)

      return (
        <section style={{ marginTop: '0px !important'}} 
          className={settings.options.overrideClass 
            ? `${landingePageStyles.backgroundFallback} ${settings.options.overrideClass }`
            : landingePageStyles.backgroundFallback }>
          <div 
            style={{ 
              backgroundImage: `url(${settings.options.image})`, 
              backgroundColor: settings.options.hero ? settings.options.hero.color : '' }} 
            className={landingePageStyles.hero}></div>
          <div className={settings.options.hero 
              ? settings.options.hero.showHeroMask 
                ? landingePageStyles.heroMask 
                : landingePageStyles.darkMask
              : ''}></div>
          <div className={settings.options.centerHeroContainer ? landingePageStyles.centeredHeroContainer : landingePageStyles.heroContainer}>
            <h1 className={landingePageStyles.title}>{settings.heroTitle}</h1>
            <div className={landingePageStyles.subTitle}>{settings.heroSubTitle}</div>
    
          { settings.options.buttons
            ? settings.options.buttons.hasButtons 
              ? <div className={settings.options.centerHeroContainer ? landingePageStyles.centeredCtaContainer : landingePageStyles.ctaContainer}>
                <div className={landingePageStyles.buttonContainer}>
                  <button 
                    onClick={() => {
                      if (typeof window !== undefined && settings.options.buttons.mainButtonLocation) {
                        window.location.href = settings.options.buttons.mainButtonLocation;
                      }
                    }}
                    className={landingePageStyles.getStartedButton}>{settings.options.buttons ? settings.options.buttons.mainButtonText : ''}</button>
                  <div className={landingePageStyles.alreadyOn}>Already on Univjobs? 
                    <span 
                      onClick={() => {
                        if (typeof window !== undefined) {
                          window.location.href = "https://app.univjobs.ca/login/"
                        }
                      }}
                    > Sign in.</span>
                  </div>
                </div>
                <div className={settings.options.centerHeroContainer ? landingePageStyles.centeredButtonContainer : landingePageStyles.buttonContainer}>
                  <button 
                    onClick={() => {
                      if (typeof window !== undefined && settings.options.buttons.reRouteButtonLocation) {
                        window.location.href = settings.options.buttons.reRouteButtonLocation;
                      }
                    }}
                    className={landingePageStyles.reRouteButton}>{settings.options.buttons.reRouteButtonText}
                  </button>
                </div>
              </div> 
              : ''
            : ''
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

function shouldShowMask (options) {
  if (options.hero) {
    if (options.hero.showHeroMask) {
      return styles.mask;
    }

    if (options.hero.showDarkMask) {
      return styles.darkMask;
    }
  }

  return '';
}

function redirect (location) {
  if (typeof window !== undefined && location) {
    window.location.href = location;
  }
}

const LandingPageButtons = ({ buttons }) => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.buttonContainer}>
        <button
          className={styles.getStartedButton}
          onClick={() => redirect(buttons.mainButtonLocation)}>
          {buttons.mainButtonText}
        </button>
        
        {
          buttons.alreadyOnComponentActive
            ? <div className={styles.alreadyOn}>Already on Univjobs? 
                <span 
                  onClick={() => redirect("https://app.univjobs.ca/login/")}
                > Sign in.</span>
              </div>
            : ''
        }

      </div>
      {
        buttons.reRouteButtonText && buttons.reRouteButtonLocation
          ? <div className={styles.buttonContainer}>
              <button 
                className={styles.reRouteButton}
                onClick={() => redirect(buttons.reRouteButtonLocation)}>
                {buttons.reRouteButtonText}
            </button>
            </div>
          : ''
      }
    </div>
  )
}

LandingPageButtons.propTypes = {
  buttons: PropTypes.shape({
    mainButtonText: PropTypes.string,
    mainButtonLocation: PropTypes.string,
    reRouteButtonText: PropTypes.string,
    reRouteButtonLocation: PropTypes.string,
    alreadyOnComponentActive: PropTypes.bool,
  })
}

const LandingPageContent = ({ title, subTitle, alignment, buttons }) => {
  return (
    <div className={alignment == "center" ? `${styles.content} ${styles.centeredContent}` : styles.content }>
      <h1 className={styles.title}>{ title }</h1>
      {
        subTitle
          ? <div className={styles.subTitle}>{subTitle}</div>
          : ''
      }

      {
        buttons
          ? <LandingPageButtons buttons={buttons}/>
          : ''
      }
    </div>
  )
}

LandingPageContent.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  alignment: PropTypes.string,
  buttons: PropTypes.shape({
    mainButtonText: PropTypes.string,
    mainButtonLocation: PropTypes.string,
    reRouteButtonText: PropTypes.string,
    reRouteButtonLocation: PropTypes.string,
    alreadyOnComponentActive: PropTypes.bool,
  })
}

class NewLandingPage extends React.Component {
  super() {}

  render () {
    let settings = {
      options: {
        alignment: 'left',
        centerHeroContainer:true,
        image: null,
        hasPolygon: false,
        buttons: {
          hasButtons: true,
          mainButtonText: 'GET STARTED',
          reRouteButtonText: "",
          reRouteButtonLocation: null,
          alreadyOnComponentActive: false
        },
        hero: {
          showHeroMask: false,
          showDarkMask: false,
          color: '#555555'
        },
        overrideClass: null
      }
    }

    settings = Object.assign({}, settings, this.props);

    console.log(settings)

    return (
      <div className={styles.container}>
        <div  
          style={{ 
            backgroundImage: `url(${settings.options.image})`, 
            backgroundColor: settings.options.hero ? settings.options.hero.color : '' }}  
          className={styles.imageOrColour}>
          <div className={shouldShowMask(settings.options)}></div>
          <LandingPageContent
            title={settings.heroTitle}
            subTitle={settings.heroSubTitle}
            buttons={settings.options.buttons}
            alignment={settings.options.alignment}
          />
        </div>
      </div>
    )
  }
}

export default NewLandingPage