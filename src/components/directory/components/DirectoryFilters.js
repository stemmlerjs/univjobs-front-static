import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import industries from '../../../support/industries'
import companySize from '../../../support/companySize'
import '../styles/DirectoryFilters.sass'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const hiringOptions = [
  { value: true, label: 'Yes' },
  { value: false, label: 'No' }
]

/**
 * @class FilterContainer
 * @desc This component wraps any filter for styles.
 */

const FilterContainer = ({ title, children }) => (
  <div className="filter-container">
    <div className="filter-title">{title}</div>
    {children}
  </div>
)

FilterContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any
}

/**
 * @class DirectoryFilters
 * @desc This component allows us to filter the search
 * results.
 */

const DirectoryFilters = () => (
  <div className="directory-filters">
    <FilterContainer title="Industry">
      <Select 
        isMulti 
        options={industries}
      />
    </FilterContainer>

    <FilterContainer title="Company size">
      <Select 
        options={companySize}
      />
    </FilterContainer>

    <FilterContainer title="Hiring">
      <Select 
        options={hiringOptions}
      />
    </FilterContainer>
    
  </div>
)

export default DirectoryFilters;

DirectoryFilters.propTypes = {

}
