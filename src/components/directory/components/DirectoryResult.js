import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import '../styles/DirectoryResult.sass'
import altCompanyImg from '../../../img/directory/company.svg'
import config from '../../../config'

function doesLogoExist(logoUrl) {
  if (
    logoUrl == false ||
    logoUrl == '' ||
    logoUrl == 'null' ||
    logoUrl == null
  ) {
    return false
  }
  return true
}

function doesImageExistOnServer(logoUrl) {
  var image = new Image()
  image.src = logoUrl;

  return new Promise((resolve, reject) => {
    image.onload = function() {
      return resolve(true)
    }
    image.onerror = function() {
      return resolve(false)
    }
  })
}

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

  render() {
    const {
      index,
      jobs,
      logoUrl,
      companyName,
      address,
      industry,
      featured,
      about,
    } = this.props
    const { isOpen } = this.state
  
    return (
      <div className={`directory-result`}>
        <div
          className={`directory-result-inner-container ${
            featured ? 'featured' : ''
          }`}
          onClick={this.toggleCard}
        >
          <div className="head">
            <div>{index + 1}.</div>
            <div className="job-count">
              {jobs.length === 0 
                ? '' 
                : jobs.length === 1 
                  ? '1 job'
                  : `${jobs.length} jobs`}
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
                <div className="industry">{industry.label}</div>
                {featured ? <div className="featured">Featured</div> : ''}
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
  onClick: PropTypes.func
}
