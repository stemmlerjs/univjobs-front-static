import React from 'react'
import PropTypes from 'prop-types'
import Job from './Job'
import { ClipLoader } from "react-spinners";


const Searching = () => {
  return (
    <div style={{ margin: '0 auto' }}>
      <ClipLoader color={"#53a7d8"} loading={true} />
    </div>
  );
};

class CompanyJobs extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      isSearching: false,
      filteredJobs: []
    }
  }

  /**
   * updateSearch
   * 
   * @function that when a user starts typing, it will start the
   * re-update the timeout for when the deferred search needs to
   * dispatch and set isSearching to true.
   */

  updateSearch = (newValue) => {
    clearTimeout(this.interval);
    this.interval = setTimeout(this.handleSearch, 1000);

    this.setState({
      ...this.state,
      search: newValue,
      isSearching: true
    })
  }

  handleSearch = () => {
    const search = this.state.search.toLowerCase();
    let filteredJobs = [];

    // If there was a search query, we will filter through the title,
    // location and job type.
    if (!!search == true) {
      filteredJobs = this.props.jobs.filter((job) => {
        const matchTitle = job.title.toLowerCase().indexOf(search) >= 0;
        const matchJobType = job.jobType.toLowerCase().indexOf(search) >= 0;
        const matchLocation = job.location.toLowerCase().indexOf(search) >= 0;
        return matchTitle || matchJobType || matchLocation;
      })
    } 

    this.setState({
      ...this.state,
      isSearching: false,
      filteredJobs: filteredJobs
    })
  }

  render() {
    const { jobs, companyName } = this.props;
    const { filteredJobs } = this.state;

    const currentJobs = filteredJobs.length !== 0 ? filteredJobs : jobs;

    // In the case that there are no current jobs at all,
    // we simply won't render anything at all.
    if (typeof jobs === undefined) return <div/>;
    if (jobs.length === 0) return <div/>;

    return (
      <div className="company-jobs">
        <div className="company-jobs-container">
          <h3>Current jobs at {companyName}</h3>
          <input 
            placeholder="Search by job title and location" 
            type="text"
            onChange={e => this.updateSearch(e.target.value)}
          />
          <div className="jobs-list-container">
            {
              this.state.isSearching
              ? <Searching/>
              : currentJobs.map((job, i) => (
                  <Job key={i} {...job}/>
                ))
            }
          </div>
        </div>
      </div>
    )
  }
}

CompanyJobs.propTypes = {
  companyName: PropTypes.string.isRequired,
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ),
}

export default CompanyJobs
