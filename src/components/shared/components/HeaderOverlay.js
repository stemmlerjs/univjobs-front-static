import React from 'react'

import styles from "../styles/HeaderStyles.module.css";

import config from '../../../config'
import { redirectTo } from '../../../helpers'


const routeConfig = [
  {
    sectionName: "App",
    routes: [
      { name: 'Sign in', route: `${config.appUrl}login` },
      { name: 'Create account', route: `${config.appUrl}register` },
      { name: 'Companies Near Me', route: '/companies/directory' },
      { name: "Featured companies", route: '/companies' },
      { name: 'Blog & Resources', route: "/blog/categories/student-life" }
    ]
  },

  {
    sectionName: "Employers",
    routes: [
      { name: "Create business account", route: `${config.appUrl}register/employer` },
      { name: "Pricing", route: "/pricing" }
    ]
  }
]

const HeaderOverlay = ({ isOpen }) => {
  return (
    <div className={isOpen
      ? styles.mobileNavOverlay
      : `${styles.mobileNavOverlay} ${styles.overlayClosed}`}>

      {
        /**s
         * Overlay options
         */
      }
      <div className={styles.mobileNavOverlayOptionsContainer}>
        {
          routeConfig.map((section, i) => (
            <div style={{ display: 'flex',
              flexDirection: 'column' }} key={i}>
              <div className={styles.overlaySection}>{section.sectionName}</div>  
              { section.routes.map((route, j) => (
                <a 
                  key={j} 
                  className={`${styles.overlayItem} ${styles.overlay}`} 
                  href={route.route}>{route.name}</a>
              ))}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HeaderOverlay;