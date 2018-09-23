import React from 'react'
import PropTypes from 'prop-types'
import DirectoryResult from './DirectoryResult'
import "../styles/DirectoryResultsList.sass"

class DirectoryResultsList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { companies } = this.props;
    return (
      <div className="directory-results-list">
        { companies.map((company, i) => (
          <DirectoryResult key={i} index={i} {...company}/>
        ))}
      </div>
    )
  }
}

export default DirectoryResultsList;

DirectoryResultsList.propTypes = {
  companies: PropTypes.array
}