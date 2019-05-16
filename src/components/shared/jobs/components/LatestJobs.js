
import React from 'react'
import PropTypes from 'prop-types'
import '../styles/LatestJobs.sass'
import MinimalJobCard from './MinimalJobCard';
import { univjobsAPI } from '../../../../api';
import Loading from '../../loading/components/Loading';

class LatestJobs extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      jobs: [],
      isFetchingJobs: false,
      isFetchingJobsFailure: false
    }
  }

  async componentDidMount () {
    this.setState({ ...this.state, isFetchingJobs: true })
    try {
      const jobs = await univjobsAPI.getLatestJobs(6);
      this.setState({ ...this.state, jobs, isFetchingJobs: false })
    } catch (err) {
      console.log(err);
      this.setState({ ...this.state, isFetchingJobs: false, isFetchingJobsFailure: true })
    }
  }

  getJobs () {
    const { isFetchingJobs, isFetchingJobsFailure } = this.state;
    if (isFetchingJobs) {
      return [];
    }

    if (isFetchingJobsFailure) {
      return this.props.latestJobs;
    } else {
      return this.state.jobs;
    }
  }

  render () {
    const { isFetchingJobs } = this.state;
    const jobs = this.getJobs();
    console.log(jobs)

    return (
      <div className="latest-jobs">
        <h3>Latest jobs for students and recent grads</h3>

        {isFetchingJobs ? (
          <Loading/>
        ) : (
          <div className="latest-jobs--inner-container">
            {jobs.map((job, i) => (
              <div>
                <MinimalJobCard key={i} job={job}/>
              </div>
            ))}
          </div>
        ) }

        <div className="results-count">
          <span>Showing 6 of 823 recent jobs. <a href="https://app.univjobs.ca/register">Create a profile</a> to see them all.</span>
        </div>
      </div>
    )
  }
}

export default LatestJobs;

LatestJobs.propTypes = {
  latestJobs: PropTypes.array
}