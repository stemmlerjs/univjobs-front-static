import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const LearnMore = props => (
  <Link
    className="learn-more"
    style={{ textDecoration: 'none' }}
    to={props.slug}
  >
    Learn more
    <i className="fa fa-angle-right" />
  </Link>
)

const CompaniesShowcaseCTA = () => (
  <div className="cta">
    <div>Want your company listed here?</div>
    <a href="mailto:contact@univjobs.ca?" target="_top">
      Talk to Charles
    </a>
  </div>
)

const CompanyShowcaseItem = props => (
  <div className="company-sc-item">
    <div
      className="sc-item-branding"
      style={{ backgroundImage: `url(${props.brandImageUrl})` }}
    />
    <div className="sc-item-logo-container">
      <img src={props.logoUrl} />
    </div>
    <h3>{props.companyName}</h3>
    <LearnMore slug={props.slug} />
    <div>{props.industry}</div>
  </div>
)

CompanyShowcaseItem.propTypes = {
  companyName: PropTypes.string.isRequired,
  brandImageUrl: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
}

const CompaniesShowcase = props => (
  <div className="companies-showcase-container">
    <h1>{props.title}</h1>
    <p>{props.subTitle}</p>

    <div className="companies-showcase-items">
      {props.companies.map((c, i) => <CompanyShowcaseItem key={i} {...c} />)}
    </div>

    <CompaniesShowcaseCTA />
  </div>
)

CompaniesShowcase.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      companyName: PropTypes.string.isRequired,
      brandImageUrl: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      industry: PropTypes.string.isRequired,
      logoUrl: PropTypes.string.isRequired,
    })
  ),
}

export default CompaniesShowcase
