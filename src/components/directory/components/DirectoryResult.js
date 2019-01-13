import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import '../styles/DirectoryResult.sass'
import altCompanyImg from '../../../img/directory/company.svg'
import config from '../../../config'
import { doesLogoExist, doesImageExistOnServer } from '../../../utils/misc'

/**
 * @class DirectoryResult
 * @desc This a single company shown in the search results.
 */

class DirectoryResult extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }

    this.openCard = this.openCard.bind(this)
    this.closeCard = this.closeCard.bind(this)
    this.toggleCard = this.toggleCard.bind(this)
    this.renderDistance = this.renderDistance.bind(this)
  }

  openCard() {
    this.setState({
      ...this.state,
      isOpen: true,
    })
  }

  closeCard() {
    this.setState({
      ...this.state,
      isOpen: false,
    })
  }

  toggleCard(e) {
    const { isOpen } = this.state;
    if (isOpen) {
      this.closeCard()
    } else {
      this.props.onClick(e);
      this.openCard()
    }
  }
  
  renderDistance (distance) {
    if (distance < 1) {
      return `${(Math.floor(distance * 100) / 10).toFixed(0)}00 m`
    } else {
      return `${distance.toFixed(1)} km`
    }
  }

  render() {
    const {
      index,
      jobs,
      logoUrl,
      companyName,
      address,
      industries,
      feature,
      about,
      distance,
      exploreSlug,
      fields
    } = this.props
    const { isOpen } = this.state;
    return (
      <div className={`directory-result`}>
        <div
          className={`directory-result-inner-container ${
            feature ? 'featured' : ''
          }`}
          onClick={this.toggleCard}
        >
          <div className="head">
            <div className="distance">{index + 1}.</div>
            <div className="job-count">
              <span>{distance ? this.renderDistance(distance) : ''}</span>
            {jobs.length === 0 
                ? '' 
                : jobs.length === 1 
                  ? '1 job'
                  : `${jobs.length} jobs`
            }
            </div>
          </div>
          <div className="body-container">
            <div className="logo-container">
              {doesLogoExist(logoUrl) ? (
                <img src={logoUrl} />
              ) : (
                <img src={altCompanyImg} />
              )}
            </div>
            <div className="body">
              <div className="company-name">{companyName}</div>
              <div className="address">{address}</div>
              <div>
                {industries.map((industry, i) => (
                  <div className="industry" key={i}>{industry.industry_text}</div>
                ))}
                {feature ? <div className="featured">Featured</div> : ''}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`directory-result-focused-section ${
            isOpen ? 'open' : 'hidden'
          }`}
        >
          <div className="inner">
            <div>About {companyName}</div>
            <p>{about}</p>

            <Link className="link" to={fields.exploreSlug ? fields.exploreSlug : fields.slug}>

              {fields.exploreSlug ? `Explore life at ${companyName}` : `Learn more about ${companyName}`}
            </Link>
            {jobs.length !== 0 ? (
              <div>
                <div>Jobs at {companyName}</div>
                {jobs.map((job, i) => (
                  <a 
                    className="job" 
                    key={i} 
                    href={`${config.appUrl}posting/${job.slug}`}>
                    {job.title}
                  </a>
                ))}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default DirectoryResult

DirectoryResult.propTypes = {
  index: PropTypes.number.isRequired,
  companyName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  industry: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
  about: PropTypes.string.isRequired,
  featured: PropTypes.bool.isRequired,
  logoUrl: PropTypes.string,
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
  exploreSlug: PropTypes.string,
  onClick: PropTypes.func,
  distance: PropTypes.number
}
