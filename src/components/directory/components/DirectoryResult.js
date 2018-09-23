import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import '../styles/DirectoryResult.sass'

/**
 * @class DirectoryResult
 * @desc This a single company shown in the search results.
 */

class DirectoryResult extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    }

    this.openCard = this.openCard.bind(this);
    this.closeCard = this.closeCard.bind(this);
    this.toggleCard = this.toggleCard.bind(this);
  }

  openCard () {
    this.setState({
      ...this.state,
      isOpen: true
    })
  }

  closeCard () {
    this.setState({
      ...this.state,
      isOpen: false
    })
  }

  toggleCard () {
    const { isOpen } = this.state;
    if (isOpen) {
      this.closeCard();
    } else {
      this.openCard();
    }
  }

  render () {
    const { index, jobs, logoUrl, companyName, address, industry, featured, about } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={`directory-result`}>
        <div className={`directory-result-inner-container ${featured ? 'featured': ''}`} onClick={this.toggleCard}>
          <div className="head">
            <div>{index + 1}.</div>
            <div className="job-count">{jobs.length === 0 ? '' : `${jobs.length} jobs`}</div>
          </div>
          <div className="body-container">
            <div className="logo-container"><img src={logoUrl}/></div>
            <div className="body">
              <div className="company-name">{companyName}</div>
              <div className="address">{address}</div>
              <div>
                <div className="industry">{industry.label}</div>
                { featured ? <div className="featured">Featured</div> : ''}
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className={`directory-result-focused-section ${isOpen ? 'open' : 'hidden'}`}>
          <div className="inner">
            <div>About {companyName}</div>
            <p>{about}</p>
            { jobs.length !== 0 ? (
              <div>
                <div>Jobs at {companyName}</div>
                {jobs.map((job, i) => (
                  <Link className="job" key={i} to={job.slug}>{job.title}</Link>
                ))}
              </div>
            ) : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default DirectoryResult;

DirectoryResult.propTypes = {
  index: PropTypes.number.isRequired,
  companyName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  industry: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
  }), 
  about: PropTypes.string.isRequired,
  featured: PropTypes.bool.isRequired,
  logoUrl: PropTypes.string,
  jobs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  })).isRequired,
  exploreSlug: PropTypes.string
}