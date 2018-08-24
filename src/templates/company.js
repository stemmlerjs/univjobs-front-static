import React from 'react'
import PropTypes from 'prop-types'
import LandingPage from '../components/LandingPage'
import CompanyHeader from '../components/companies/CompanyHeader'
import CompanyJobs from '../components/companies/CompanyJobs'
import CompanyArticles from '../components/companies/CompanyArticles'
import TextSection from '../components/companies/TextSection'
import ListSection from '../components/companies/ListSection'
import Videos from '../components/companies/Videos'

const defaultProps = {
  companyName: 'Rover.com',
  brandImageUrl: 'https://user-images.githubusercontent.com/6892666/44449999-c2c6a380-a5bd-11e8-8a96-6b01c2020fb3.png',
  slug: '/companies/rover-com',
  industry: 'Start-up',
  logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYel_hiMcSbl4mTNc0sOIAAOeyluy54xudTWQHSwsU8tKQolLA',
  slogan: 'Earn up to $1000/month dog-sitting',
  numEmployees: '10 - 100',
  socialLinks: [
    { url: 'https://www.facebook.com/RoverDotCom/', type: 'facebook' },
    { url: 'https://www.facebook.com/RoverDotCom/', type: 'instagram' },
    { url: 'https://www.facebook.com/RoverDotCom/', type: 'twitter' },
    { url: 'https://rover.com', type: 'website' }
  ],
  jobs: [
    { title: 'Dog walker', location: 'Oakville, ON', slug: '/posting/535', jobTypeId: 2, jobType: 'Freelance' },
    { title: 'System Administrator', location: 'Toronto, ON', slug: '/posting/536', jobTypeId: 4, jobType: 'Co-op' },
    { title: 'System Administrator', location: 'Toronto, ON', slug: '/posting/536', jobTypeId: 4, jobType: 'Co-op' }
  ],
  articles: [
    { 
      title: 'How to get started Dog Walking',
      sponsored: true,
      sponsoredCompanyName: 'Rover',
      sponsoredCompanyImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYel_hiMcSbl4mTNc0sOIAAOeyluy54xudTWQHSwsU8tKQolLA',
      timeToRead: 3,
      slug: '/blog/how-to-get-started-dog-walking',
      image: 'https://user-images.githubusercontent.com/6892666/44449999-c2c6a380-a5bd-11e8-8a96-6b01c2020fb3.png'
    }, {
      title: 'Top 10 Places to Walk Your Pup',
      sponsored: true,
      sponsoredCompanyName: 'Rover',
      sponsoredCompanyImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYel_hiMcSbl4mTNc0sOIAAOeyluy54xudTWQHSwsU8tKQolLA',
      timeToRead: 3,
      slug: '/blog/how-to-get-started-dog-walking',
      image: 'https://user-images.githubusercontent.com/6892666/44449999-c2c6a380-a5bd-11e8-8a96-6b01c2020fb3.png'
    }
  ],
  aboutUs: `Whether you need in-home dog boarding, pet sitting, dog walking, or day care, Rover connects pet parents with dog people who’ll treat their pets like family.
    Rover sitters are your rainy-day-dog-walkers. Your every-day-belly-rubbers. Your tug-of-war players. Your middle-of-the-night-pee-breakers. Because we get it—your dog is family. And when you can’t be there, you can trust us to keep your dog happy, healthy, and sweet as ever.
    But it’s not just about dog love. Rover is also an award-winning technology business committed to making pet care safe, easy, and affordable so that everyone can experience the unconditional love of a dog.
    So for the frequent butt-sniffers, the sock-stealers, the table-side beggars and the clicker-trained champions: We’re your people.
    And for the world travelers, the long-day-at-work-ers, the business-trip jetsetters, the swing-shift survivors: We’re your people, too.
    Whatever you and your dog are into, we’re into it, too. And we’ve got your back. Anytime. Anywhere.`,
  funFacts: [
    "We're the very first to do this",
    "We've in a bunch of different cities",
    "You're awesome and we love you"
  ],
  perks: [
    'Remote working outside every day',
    'New friends',
    'Work on your own terms',
    'Great opportunity to make lots of money',
    'Free snacks at Rover HQ',
    'Co-working space'
  ],
  companyValues: [
    'Remote working outside every day',
    'New friends',
    'Work on your own terms',
    'Great opportunity to make lots of money',
    'Free snacks at Rover HQ',
    'Co-working space'
  ],
  vision: 'Our vision is to create something awesome',
  mission: 'Our mission is to make it accessible for people to own pets and their lives.',
  videos: [
    'https://www.youtube.com/watch?v=6IFR3WYSBFM',
    'https://www.youtube.com/watch?v=MevKTPN4ozw'
  ]
}

/**
 * CompanyTemplate
 * 
 * @class The CompanyTemplate class outlines the template for how
 * an "Explore companies" commpany page will actually look.
 * 
 * @see LandingPage for the background image at the top
 * @see CompanyHeader for the header details
 * @see CompanyJobs for the jobs search
 * @see CompanyArticles for all of the articles by this company
 */

class CompanyTemplate extends React.Component {
  render () {
    return (
      <div>
        <LandingPage
          options={{
            alignment: 'center',
            image: defaultProps.brandImageUrl,
            hasPolygon: false,
            hero: {
              showHeroMask: false,
              showDarkMask: false,
              color: '',
            },
            styles: {
              container: {
                maxHeight: '40vh',
                minHeight: '40vh',
                textAlign: 'center',
              },
            },
          }}
        />
        <CompanyHeader
          companyName={defaultProps.companyName}
          industry={defaultProps.industry}
          slogan={defaultProps.slogan}
          logoUrl={defaultProps.logoUrl}
          socialLinks={defaultProps.socialLinks}
        />
        <CompanyJobs
          companyName={defaultProps.companyName}
          jobs={defaultProps.jobs}
        />
        <CompanyArticles
          companyName={defaultProps.companyName}
          articles={defaultProps.articles}
        />
        <section className="company-sections-container">
          <TextSection 
            title="About us" 
            text={defaultProps.aboutUs} 
            size="half"
          />
          <ListSection 
            title="Fun facts" 
            list={defaultProps.funFacts} 
            size="half"/>
          <Videos
            title="Videos"
            urls={defaultProps.videos}
            size="full"
          />
          <TextSection 
            title="Vision" 
            text={defaultProps.vision} 
            size="half"
          />
          <TextSection 
            title="Mission" 
            text={defaultProps.mission} 
            size="half"
          />
          <ListSection
            title="Company perks"
            list={defaultProps.perks}
            size="half"
            alt="true"
          />
          <ListSection
            title="Company values"
            list={defaultProps.companyValues}
            size="half"
          />
        </section>
      </div>
    )
  }
}

CompanyTemplate.propTypes = {

}

export default CompanyTemplate;

export const pageQuery = graphql`
  query CompanyTemplateQuery($companyId: Int) {
    company: allCompany(filter: {
      companyId: { eq: $companyId }
    }) {
    
      edges {
        node { 
          id
          companyName
          companyId
          industry
          logoUrl
          earlyAdopter
          brandImageUrl
          fields {
            slug
          }
        }
      }
    }
  }
`
