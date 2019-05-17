
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import '../styles/LatestJobs.sass'
import LogoCard from '../../company/components/LogoCard';

const TEMPJOBS = [
  {
    companyName: 'IBM',
    companySlug: '/companies/4242-ibm',
    logoUrl: 'https://logo.clearbit.com/ibm.com?size=400',
    cities: ['Brampton', 'Toronto', "Richmond Hill"],
    title: 'Marketing Intern',
    salary: '$60-75k / year',
    jobType: { id: 1, name: 'Internships' },
    description: `Work directly on product and services that affect 
      our clients, while having access to cutting edge blah blah blah technical stuff
      that people don't care about.
    `
  },
  {
    companyName: 'IBM',
    companySlug: '/companies/4242-ibm',
    logoUrl: 'https://logo.clearbit.com/ibm.com?size=400',
    cities: ['Brampton', 'Toronto', "Richmond Hill"],
    title: 'Marketing Intern',
    salary: '$60-75k / year',
    jobType: { id: 1, name: 'Internships' },
    description: `Work directly on product and services that affect 
      our clients, while having access to cutting edge blah blah blah technical stuff
      that people don't care about.
    `
  },{
    companyName: 'IBM',
    companySlug: '/companies/4242-ibm',
    logoUrl: 'https://logo.clearbit.com/ibm.com?size=400',
    cities: ['Brampton', 'Toronto', "Richmond Hill"],
    title: 'Marketing Intern',
    salary: '$60-75k / year',
    jobType: { id: 1, name: 'Internships' },
    description: `Work directly on product and services that affect 
      our clients, while having access to cutting edge blah blah blah technical stuff
      that people don't care about.
    `
  },{
    companyName: 'IBM',
    companySlug: '/companies/4242-ibm',
    logoUrl: 'https://logo.clearbit.com/ibm.com?size=400',
    cities: ['Brampton', 'Toronto', "Richmond Hill"],
    title: 'Marketing Intern',
    salary: '$60-75k / year',
    jobType: { id: 1, name: 'Internships' },
    description: `Work directly on product and services that affect 
      our clients, while having access to cutting edge blah blah blah technical stuff
      that people don't care about.
    `
  },{
    companyName: 'IBM',
    companySlug: '/companies/4242-ibm',
    logoUrl: 'https://logo.clearbit.com/ibm.com?size=400',
    cities: ['Brampton', 'Toronto', "Richmond Hill"],
    title: 'Marketing Intern',
    salary: '$60-75k / year',
    jobType: { id: 1, name: 'Internships' },
    description: `Work directly on product and services that affect 
      our clients, while having access to cutting edge blah blah blah technical stuff
      that people don't care about.
    `
  },{
    companyName: 'IBM',
    companySlug: '/companies/4242-ibm',
    logoUrl: 'https://logo.clearbit.com/ibm.com?size=400',
    cities: ['Brampton', 'Toronto', "Richmond Hill"],
    title: 'Marketing Intern',
    salary: '$60-75k / year',
    jobType: { id: 1, name: 'Internships' },
    description: `Work directly on product and services that affect 
      our clients, while having access to cutting edge blah blah blah technical stuff
      that people don't care about.
    `
  }
]

class LatestJobs extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="latest-jobs">
        <h3>Latest jobs for students and recent grads</h3>

        <div className="latest-jobs--inner-container">
          {TEMPJOBS.map((job, i) => (
            <div>
              <div className="minimal-job-listing" key={i}>
                <div className="minimal-job-listing--logo-container">
                  <LogoCard 
                    companySlug={job.companySlug}
                    logoUrl={job.logoUrl}
                  />
                </div>
                <div className="minimal-job-listing--body-container">
                  <div className="header">
                    <div className="summary">
                      <div className="title">{job.title}</div>
                      <Link className="company-name" to={job.companySlug}>{job.companyName}</Link> - <span className="cities">Toronto, Mississauga</span>
                      <div>
                      <div className="job-type">{job.jobType.name}</div>
                      </div>
                    </div>
                    <div className="salary">{job.salary}</div>
                  </div>
                  <div className="description">{job.description}</div>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    )
  }
}

export default LatestJobs;

LatestJobs.propTypes = {

}