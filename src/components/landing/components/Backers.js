import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Backers.sass'

class Backers extends React.Component {
  constructor (props) {
    super(props)
  }

  render = () => {
    const { header, subHeader, companies } = this.props
    return (
      <section className="backers-container">
        <div className="inner-container">
          <h3 className="backer-header">{header}</h3>
          <div className="backer-sub-header">{subHeader}</div>
          <div className="backers-list">
            { 
              companies
              .slice(0, 6) // only accepts 6 companies
              .map((company, key) => (
              <div key={key}>
                <a href={company.link}>
                  <img style={{ maxWidth: '220px' }} src={company.imageUrl} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

Backers.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
  companies: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    imageUrl: PropTypes.string.isRequired
  }))
}

export default Backers
