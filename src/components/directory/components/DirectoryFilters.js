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
      isFilterOpen: true
    }
  }

  toggleFilterVisible = () => {
    this.setState({
      ...this.state,
      isFilterOpen: !this.state.isFilterOpen
    })
  }

  render () {
    const { onChange } = this.props;
    const { isFilterOpen } = this.state;
    return (
      <div className="directory-filters">
        <div className={`directory-filters-container ${isFilterOpen ? "on" : "off"}`}>
          <FilterContainer title="Industry">
            <Select 
              isMulti 
              options={industries}
              onChange={(e) => onChange(e, 'industry')}
            />
          </FilterContainer>

          <FilterContainer title="Company size">
            <Select 
              options={companySize}
              onChange={(e) => onChange(e, 'companySize')}
            />
          </FilterContainer>

          <FilterContainer title="Hiring">
            <Select 
              options={hiringOptions}
              onChange={(e) => onChange(e, 'hiring')}
            />
          </FilterContainer>
        </div>
        <div>
          <div 
            onClick={this.toggleFilterVisible} 
            className="filter-toggle">{isFilterOpen ? "Hide filters" : "Show filters"}</div>
        </div>
      </div>
    )
  }
}

export default DirectoryFilters;

DirectoryFilters.propTypes = {
  onChange: PropTypes.func.isRequired
}
