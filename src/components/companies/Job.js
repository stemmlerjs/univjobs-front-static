import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import config from '../../config'

const JobTypeColorCodes = {
  1: { color: 'rgb(255, 255, 255)', background: 'rgb(144, 137, 205)' },
  2: { color: 'rgb(255, 255, 255)', background: '#EE4266' },
  3: { color: 'rgb(255, 255, 255)', background: '#EE4266' },
  4: { color: 'rgb(255, 255, 255)', background: '#A60067' },
  5: { color: 'rgb(255, 255, 255)', background: '#EE4266' },
  6: { color: 'rgb(255, 255, 255)', background: '#26D0CE' },
  7: { color: 'rgb(255, 255, 255)', background: 'rgb(51, 197, 101)' },
  8: { color: 'rgb(255, 255, 255)', background: 'rgb(181, 197, 51)' },
  9: { color: 'rgb(255, 255, 255)', background: 'rgb(53, 51, 197)' },
  10: { color: 'rgb(255, 255, 255)', background: 'rgb(51, 129, 197)' },
  11: { color: 'rgb(255, 255, 255)', background: 'rgb(148, 51, 197)' },
  default: { color: 'rgb(255, 255, 255)', background: 'rgb(144, 137, 205)' },
}

function getJobTypeColor(jobTypeId) {
  if (jobTypeId >= 1 && jobTypeId <= 11) {
    return JobTypeColorCodes[jobTypeId].background
  } else {
    return JobTypeColorCodes.default.background
  }
}

/**
 * Job
 *
 * @class that returns a Job posting.
 */

const Job = props => (
  <a
    className="job"
    style={{
      textDecoration: 'none',
      color: 'inherit',
      borderTop: `solid 10px ${getJobTypeColor(props.jobTypeId)}`,
    }}
    href={`${config.appUrl}${props.slug}`}
  >
    <div>{props.title}</div>
    <div>{props.location}</div>
    <div>{props.jobType}</div>
  </a>
)

Job.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  jobTypeId: PropTypes.number.isRequired,
  jobType: PropTypes.string.isRequired,
}

export default Job
