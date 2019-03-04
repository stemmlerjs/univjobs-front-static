import React from 'react'
import PropTypes from 'prop-types'
import './styles/CompanyIndustryTags.sass'

const CompanyIndustryTags = ({ industries }) => {
  if (!industries) return <div />
  return (
    <div className="company-industry-tags-container">
      {industries.map((industry, i) => (
        <div className="industry-tag" key={i}>
          {industry.industry_text}
        </div>
      ))}
    </div>
  )
}

export default CompanyIndustryTags

CompanyIndustryTags.propTypes = {
  industries: PropTypes.arrayOf(
    PropTypes.shape({
      industry_id: PropTypes.number.isRequired,
      industry_text: PropTypes.string.isRequired,
    })
  ).isRequired,
}
