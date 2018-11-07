import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import landingePageStyles from '../styles/LandingPageStyles.module.css'
import styles from '../styles/NewLandingPageStyles.module.css'

import config from '../config'
import { redirectTo } from '../helpers'
import get from 'lodash/get'

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
const LandingPageButtons = ({ buttons }) => {
  console.log("landing page buttons", buttons)
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.buttonContainer}>
        <button
          className={styles.getStartedButton}
          onClick={() => redirectTo(buttons.mainButtonLocation)}>
          {buttons.mainButtonText}
        </button>
        
        {
          buttons.alreadyOnComponentActive
            ? <div className={styles.alreadyOn}>Already on Univjobs? 
                <span 
                  onClick={() => redirectTo(`${config.appUrl}login`)}
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
                onClick={() => redirectTo(buttons.reRouteButtonLocation)}>
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
  constructor () {
    super();
  }
  render () {
    let settings = {
      options: {
        alignment: 'left',
        centerHeroContainer:true,
        image: null,
        hasPolygon: false,
        buttons: {
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

    return (
      <div style={get(settings,'options.styles.container')} className={styles.container}>
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