
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import "../styles/FrontPagePromotedCompanies.sass"
import LogoCard from '../../shared/company/components/LogoCard';

/**
 * companyName: 'Air Miles',
          companySlug: '/companies/4242-air-miles',
          numOpenJobs: 1,
          logoUrl: airmiles,
          cities: ['Toronto']
 */

class FrontPagePromotedCompanies extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    const { companies } = this.props;
    return (
      <div className="front-page-promoted-companies">
        {companies.map((company, i) => (
          <div className="promoted-company-container" key={i}>
            <LogoCard 
              logoUrl={company.logoUrl}
              companySlug={company.companySlug}
            />
            <p className="company-name">{company.companyName}</p>
            <p className="company-message">23 open jobs</p>

          </div>
        ))}
      </div>
    )
  }
}

export default FrontPagePromotedCompanies;

FrontPagePromotedCompanies.propTypes = {
  companies: PropTypes.array.isRequired
}