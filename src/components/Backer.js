import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import backers from '../styles/BackersStyles.module.css'

/**
 * NOTE: We can use this for other logos such as employers who use us
 */
class Backer extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render = () => {
    const { header, logos } = this.props
    return (
      <section className={backers.container}>
        <div className={backers.innerContainer}>
          <div className="backer-header">{header}</div>
          <div className={backers.backersList}>
            {Object.values(logos).map((logo, key) => (
              <div key={key}>
                <a href={logo[0]}>
                  <img style={{ maxWidth: '220px' }} src={logo[1]} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

/**
 * NOTE: For this, we want to limit the logos to six
 */
Backer.defaultProps = {
  header: '',
  logos: [],
}

Backer.propTypes = {
  header: PropTypes.string,
  logos: PropTypes.array
}

export default Backer
