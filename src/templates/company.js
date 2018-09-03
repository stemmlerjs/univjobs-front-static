import React from 'react'
import PropTypes from 'prop-types'
import LandingPage from '../components/LandingPage'
import CompanyHeader from '../components/companies/CompanyHeader'
import CompanyJobs from '../components/companies/CompanyJobs'
import CompanyArticles from '../components/companies/CompanyArticles'
import TextSection from '../components/companies/TextSection'
import ListSection from '../components/companies/ListSection'
import Videos from '../components/companies/Videos'
import SocialMediaSection from '../components/companies/SocialMediaSection'
import OfficesSection from '../components/companies/OfficesSection'
import CultureSection from '../components/companies/CultureSection'
import helpers from '../helpers'

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
    { title: 'Dog walker', location: 'Oakville, ON', slug: '/posting/535', jobTypeId: 2, description: 'Freelance' },
    { title: 'System Administrator', location: 'Toronto, ON', slug: '/posting/536', jobTypeId: 4, description: 'Co-op' },
    { title: 'System Administrator', location: 'Toronto, ON', slug: '/posting/536', jobTypeId: 4, description: 'Co-op' }
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
  ],
  offices: [
    { 
      name: 'Rover HQ', 
      street: '1428 White Oaks Blvd', 
      headquarters: true, 
      city: 'Oakville', 
      provinceOrState: 'Ontario', 
      country: 'Canada' 
    },
    {
      name: null,
      street: '53 Front Street West', 
      headquarters: false, 
      city: 'Toronto', 
      provinceOrState: 'Ontario', 
      country: 'Canada' 
    }
  ],
  cultureItems: [
    {
      image: 'https://images.unsplash.com/photo-1528083855824-d49e61c27bbf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a7b6f6275b15c4b1b2b278504db251c&auto=format&fit=crop&w=1350&q=80',
      title: "New Beginnings",
      description: "To celebrate our new merger, we ran into something cool."
    },
    {
      image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=58321e04954daa3a0e2d3b1dc2a927da&auto=format&fit=crop&w=1350&q=80',
      title: "Best friends every day",
      description: "This is some sample text but honestly, wouldn't it be awesome to just get to hang out with animals every damn day? I think so."
    }
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
    const { data } = this.props;
    let company = helpers.companies.getCompaniesFromQuery(data.company);
  
    if (company.length !== 0) {
      company = company[0];
    }

    return (
      <div>
        <LandingPage
          options={{
            alignment: 'center',
            image: company.brandImageUrl,
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
          companyName={company.companyName}
          industry={company.industry}
          slogan={company.slogan}
          logoUrl={company.logoUrl}
          numEmployees={company.numEmployees}
          socialLinks={company.socialLinks}
        />

        {
          !company.jobs || company.jobs.length === 0
           ? ""
           :
            <CompanyJobs
              companyName={company.companyName}
              jobs={company.jobs}
            />

        }
        {
          !company.articles || company.articles.length === 0 
          ? ""
          :
          <CompanyArticles
            companyName={company.companyName}
            articles={company.articles}
          />
        }
        <section className="company-sections-container">
          <TextSection 
            title="About us" 
            text={company.aboutUs} 
            size="half"
          />
          {
            !company.funFacts || company.funFacts.length === 0 
            ? ""
            : 
            <ListSection 
              title="Fun facts" 
              list={company.funFacts} 
              size="half"/>
          }
          {
            !company.videos || company.videos.length === 0
            ? ""
            :
            <Videos
              title="Videos"
              urls={company.videos}
              size="full"
            />
          }
          {
            !company.vision || company.vision === 0 
            ? "" 
            :
          <TextSection 
            title="Vision" 
            text={company.vision} 
            size="half"
          />
          }
          {
            !company.mission || company.mission === 0 
            ? "" 
            :
            <TextSection 
              title="Mission" 
              text={company.mission} 
              size="half"
            />
          }
          {
            !company.perks || company.perks.length === 0 
            ? "" 
            :
            <ListSection
              title="Company perks"
              list={company.perks}
              size="half"
              alt="true"
            />
          }
          {
            !company.companyValues || company.companyValues.length === 0 
            ? "" 
            :
            <ListSection
              title="Company values"
              list={company.companyValues}
              size="half"
            />
          }
          {
            !company.socialLinks || company.socialLinks.length === 0 
            ? ""
            :
            <SocialMediaSection
              title="Social Media"
              links={company.socialLinks}
              size="half"
          />
          }
          {
            !company.offices || company.offices.length === 0 
            ? ""
            :
            <OfficesSection
              title="Offices"
              offices={company.offices}
              size="half"
            />
          }
          {
            !company.cultureItems || company.cultureItems.length === 0
            ? ""
            :
            <CultureSection
              title={`Life at ${company.companyName}`}
              cultureItems={company.cultureItems}
              size="half"
            />
          }
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
      hidden: { eq: false }
    }) {
      edges {
        node {
          id
          aboutUs
          brandImageUrl
          companyId
          companyName
          featured
          funFacts
          logoUrl
          numEmployees
          industry
          mission
          perks
          companyValues
          cultureItems {
            image
            title
            description
          }
          slogan
          socialLinks { 
          	url
            type
          }
          jobs {
            title
            location
            slug
            jobTypeId
            jobType
          }
          articles {
            companyName
            employerId
            title
            sponsored
            sponsoredCompanyName
            sponsoredCompanyImage
            timeToRead
            slug
            image
          }
          offices {
            name
            street
            headquarters
            provinceOrState
            city
            country
          }
          website
          videos
          vision
          fields {
            slug
          }
          hidden
        }
      }
    }
  }
`
