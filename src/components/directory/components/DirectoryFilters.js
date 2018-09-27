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
class DirectoryFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilterOpen: false
    }
  }

  toggleFilterVisible = () => {
    this.setState({
      ...this.state,
      isFilterOpen: !this.state.isFilterOpen
    })
  }

  render () {
    const { onChange, values } = this.props;
    const { isFilterOpen } = this.state;

    return (
      <div className={`directory-filters ${isFilterOpen ? "on" : "off"}`}>
        <div className={`directory-filters-container ${isFilterOpen ? "on" : "off"}`}>
          <FilterContainer title="Industry">
            <Select 
              isMulti 
              options={industries}
              onChange={(e) => onChange(e, 'industry')}
              value={values.industry}
            />
          </FilterContainer>

          <FilterContainer title="Company size">
            <Select 
              options={companySize}
              onChange={(e) => onChange(e, 'companySize')}
              value={values.companySize}
            />
          </FilterContainer>

          <FilterContainer title="Hiring">
            <Select 
              options={hiringOptions}
              onChange={(e) => onChange(e, 'hiring')}
              value={values.hiring}
            />
          </FilterContainer>
        </div>
        <div>
          <div 
            onClick={this.toggleFilterVisible} 
            className="filter-toggle">{isFilterOpen ? "Filter" : "Filter"}</div>
        </div>
      </div>
    )
  }
}

export default DirectoryFilters;

DirectoryFilters.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object
}
