
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import "../styles/FrontPagePromotedCompanies.sass"
import LogoCard from './LogoCard';
import { univjobsAPI } from '../../../../api';
import FEATURED_COMPANIES_LIST from '../../../../../data/FeaturedCompanies'
import Loading from '../../loading/components/Loading';

/**
 * companyName: 'Air Miles',
          companySlug: '/companies/4242-air-miles',
          numOpenJobs: 1,
          logoUrl: airmiles,
          cities: ['Toronto']
 */

class FeaturedCompanies extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      companies: [],
      isFetchingCompanies: false,
      isFetchingCompaniesFailure: false
    }
  }

  async componentDidMount () {
    this.setState({ ...this.state, isFetchingCompanies: true })

    let companies = [];
    for (let companyName of FEATURED_COMPANIES_LIST) {
      try {
        const company = await univjobsAPI.getCompanySummary(companyName);
        companies.push(company)
      } catch (err) {
        console.log(`Couldn't retrieve featured company => ${companyName}`)
      }
    }

    this.setState({ ...this.state, companies, isFetchingCompanies: false })
  }

  getCompanies () {
    const { isFetchingCompanies, isFetchingCompaniesFailure } = this.state;
    if (isFetchingCompanies) {
      return [];
    }

    if (isFetchingCompaniesFailure || this.state.companies.length === 0) {
      return this.props.companies;
    } else {
      return this.state.companies;
    }
  }

  getCompanyMessage (company) {
    const hasOpenJobs = company.numOpenJobs !== 0;
    if (hasOpenJobs) {
      return company.numOpenJobs === 1 
        ? "1 job"
        : `${company.numOpenJobs} jobs`
    }
    return `Hiring in ${company.city}`;
  }

  render () {
    const { isFetchingCompanies } = this.props;
    const companies = this.getCompanies();

    return isFetchingCompanies ? (
      <Loading/>
    ) : (
      <div className="front-page-promoted-companies">
        {companies.map((company, i) => (
          <div className="promoted-company-container" key={i}>
            <LogoCard 
              logoUrl={company.logoUrl}
              companySlug={`/companies/${company.companySlug}`}
            />
            <p className="company-name">{company.companyName}</p>
            <p className="company-message">{this.getCompanyMessage(company)}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default FeaturedCompanies;

FeaturedCompanies.propTypes = {
  companies: PropTypes.array.isRequired
}