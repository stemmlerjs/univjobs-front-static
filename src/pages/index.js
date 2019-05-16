import React from 'react'
import { CallToAction } from '../components/shared/cta'
import landingePageStyles from '../styles/StudentLandingPageStyles.module.css'
import features from '../components/landing-page/styles/FeatureStyles.module.css'

import grad from '../img/gradphotos.jpeg'
import { LandingPageHero } from '../components/landing-page'

import config from '../config'

import { SeoLayout, PageType } from '../components/seo'

import { 
  Backers, 
  AltFeature, 
  StudentTestimonials, 
  LeftFeatures, 
  RightFeatures 
} from '../components/landing-page'

import soti from '../img/companies/soti.png'
import td from '../img/companies/td.svg'
import rover from '../img/companies/rover.png'
import homeDepot from '../img/companies/homedepot.png'
import ymca from '../img/companies/ymca.svg'
import airmiles from '../img/companies/airmiles.svg'

import productImage from '../img/product-image.svg'
import mail from '../img/undraw-mail.svg'
import jobs from '../img/undraw-jobs.svg'

import haltech from '../img/haltech.png'
import icube from '../img/icube.png'
import startupschool from '../img/startupschool.png'
import edge from '../img/edge_hires-400x143.png'
import LatestJobs from '../components/shared/jobs/components/LatestJobs';
import RecentBlogPosts from '../components/landing-page/components/RecentBlogPosts';
import LatestJobsFragment from '../components/shared/jobs/fragments/LatestJobsFragment'
import helpers from '../helpers';
import FeaturedCompanies from '../components/shared/company/components/FeaturedCompanies';
import FeaturedCompanyFragment from '../components/shared/company/fragments/FeaturedCompanyFragment';

/**
 * @class Index
 * @desc This is the index page. It's the main page
 * for univjobs.ca.
 */

class IndexPage extends React.Component {
  constructor (props) {
    super(props);
  }

  getLatestJobs () {
    const { props } = this;
    const { data } = props;
    const { latestJobs } = data;
    return helpers.jobs.getJobsFromQuery(latestJobs);
  }

  getFeaturedCompanies () {
    const { props } = this;
    const { data } = props;
    const { featuredCompanies } = data;
    return helpers.jobs.getJobsFromQuery(featuredCompanies);
  }

  render () {
    const { props } = this;
    const { data } = props;
    const { recentPosts } = data;
    const latestJobs = this.getLatestJobs()
    const featuredCompanies = this.getFeaturedCompanies();
    
    return (
      <div>
        <SeoLayout
          requiredProps={{
            title: 'Jobs, internships and work study for students and recent grads',
            description: 'Find paid internship, remote work, part time, and entry-level jobs at startups and large companies.',
            url: `${config.url}`,
            image: config.assets.image.logo
          }}
          type={PageType.REGULAR}
          pageProps={{
          }}
        />
        <LandingPageHero
          heroTitle="Get a student or recent grad job"
          heroSubTitle="The marketplace to find part time, co-op, entry-level jobs and internships."
          options={{
            alignment: 'left',
            image: grad,
            buttons: {
              hasButtons: true,
              mainButtonText: 'Get hired',
              mainButtonLocation: `${config.appUrl}register?button_id=hero`,
              reRouteButtonText: "I'm an employer",
              reRouteButtonLocation: '/employers?button_id=reroute_hero',
              alreadyOnComponentActive: false,
            },
            hero: {
              showColorMask: true,
              color: '#1C46DA',
            },
            overrideClass: landingePageStyles.overrideLandingPage,
          }}
        />
        <FeaturedCompanies
          companies={featuredCompanies}
        />
        <CallToAction
          header="Get matched with hundreds of 🔥 companies"
          subHeader={`Apply to student and recent-grad jobs with a single profile ·
          Find a job for you · Get daily job recommendations`}
          buttonText="Apply to student-friendly jobs"
          alt={false}
          location={`${config.appUrl}register?button_id=cta1`}
        />

        <LatestJobs latestJobs={latestJobs}/>

        <AltFeature
          header="One profile, one resume"
          subHeader="No more cover letters"
          paragraphOne="Making multiple cover letters and 
            resumes, while balancing exams and
            projects is stressful and time
            consuming."
          paragraphTwo="Next time you need a job, you can relax. 
            Univjobs eliminates you having to create multiple cover 
            letters and resumes. That way, you can get back 
            to your studies."
          paragrapThree=""
          picture={productImage}
        />

        <section className={features.container}>
          <LeftFeatures
            header="Get personally invited to jobs by employers"
            paragraphOne="Your next job is right around the corner."
            paragraphTwo="We encourage employers to invite you to jobs and let you build meaningful connections, fast."
            picture={mail}
          />
          <RightFeatures
            header="Track all your job applications"
            paragraphOne={`Going to career fairs can be time-consuming and costly, especially when you have limited time and budget.`}
            paragraphTwo={`Univjobs can reduce this anxiety by showing you the "progress" of your job applications whether you're being considered, whether you're invited for an interview or whether you get hired.`}
            picture={jobs}
          />
        </section>
        
        <hr/>
        <RecentBlogPosts
          rawPosts={recentPosts}
        />

        <CallToAction
          header="Start your career journey now"
          alt={true}
          subHeader=""
          buttonText="Browse jobs"
          location={`${config.appUrl}register?button_id=cta2`}
        />
        <StudentTestimonials />
        <Backers
          header="Our community support"
          subHeader="Thank you for supporting us in changing the way students find meaningful employment."
          companies={[
            { link: 'http://haltech.ca/', imageUrl: haltech },
            { link: 'http://icubeutm.ca/', imageUrl: icube },
            { link: 'https://www.startupschool.org/', imageUrl: startupschool },
            { link: 'https://edge.sheridancollege.ca/', imageUrl: edge },
          ]}
        />
        <CallToAction
          header="Explore new job opportunities meant for students and recent grads"
          alt={true}
          subHeader=""
          buttonText="Start applying"
          location={`${config.appUrl}register?button_id=cta3`}
        />
      </div>
    )
  }
}

export default IndexPage

export const indexQuery = graphql`
  query IndexQuery {
    latestJobs: allLatestJob {
      edges {
        node {
          ...LatestJobProps
        }
      }
    }

    featuredCompanies: allFeaturedCompany {
      edges {
        node {
          ...FeaturedCompanyProps
        }
      }
    }

    recentPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { 
          templateKey: { eq: "blog-post" }, 
          public: { eq: true } 
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            tags
            featured
            image
            category
            author
          }
        }
      }
    }
  }
`