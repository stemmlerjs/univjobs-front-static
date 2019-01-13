const axios = require('axios')

/**
 * Public Companies
 *
 * @class that's used to handle getting all explore companies
 */

class PublicCompanies {
  constructor(url) {
    this.url = url
  }

  /**
   * getExploreCompanies
   *
   * @function that gets all of the explore companies based on
   * some criteria:
   *
   * > has filled out all required early adopter explore company details
   * > they're an early adopter plan companies
   *
   * @return {Promise | Array}
   */

  async getExploreCompanies() {
    console.log(`Getting explore companies...`)
    const response = await axios.get(
      `${this.url}/api/v1/public/companies/explore`
    )
    const exploreCompanies = response.data.companies;
    console.log(exploreCompanies);
    return exploreCompanies.map(company => {
      return {
        companyId: company.employer_id,
        companyName: company.company_name,
        brandImageUrl: company.brand_image_url,
        industries: company.industries,
        logoUrl: company.logo_url,
        hidden: false,
      }
    })
  }

  /**
   * getFeaturedCompanies
   *
   * @function that returns all featured companies.
   *
   * @return {Promise | Array}
   */

  async getFeaturedCompanies() {
    let featuredCompanies;
    console.log('Getting featured companies from UnivJobs API...')
    const response = await axios.get(
      this.url + '/api/v1/public/companies/featured'
    )

    featuredCompanies = response.data.companies;
    console.log(featuredCompanies)
    
    return featuredCompanies.map(company => {
      return {
        companyId: company.employer_id,
        companyName: company.company_name,
        slogan: company.slogan,
        brandImageUrl: company.brand_image_url,
        industries: company.industries,
        logoUrl: company.logo_url,
        hidden: false,
      }
    })
  }

  /**
   * getExploreCompanyById
   *
   * @function that returns a company object.
   *
   * @return {Promise | Object}
   */

  async getExploreCompanyById(companyId) {
    console.log(`\nGetting a company id=${companyId} from UnivJobs API...`)
    const response = await axios.get(
      `${this.url}/api/v1/public/companies/${companyId}`
    )
    response.data.company.hidden = false
    return response.data.company
  }

  /**
   * @function getDirectoryCompanies
   * @desc Returns all companies
   *
   * @return {Promise | Object}
   */

  async getDirectoryCompanies() {
    console.log(`\nGetting all companies from UnivJobs API...`)
    const response = await axios.get(
      `${this.url}/api/v1/public/companies/directory`
    )
    return response.data.directory
  }

  async addDummyCompany() {
    return {
      companyId: 100001,
      companyName: 'UneedJobs',
      brandImageUrl:
        'https://user-images.githubusercontent.com/6892666/44449999-c2c6a380-a5bd-11e8-8a96-6b01c2020fb3.png',
      slug: '/companies/uneedjobs',
      industries: [
        { industry_text: 'hi', industry_id: 2 }
      ],
      logoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYel_hiMcSbl4mTNc0sOIAAOeyluy54xudTWQHSwsU8tKQolLA',
      slogan: 'Replace traditional career fair digitally',
      numEmployees: '10 - 100',
      featured: false,
      socialLinks: [
        { url: 'https://www.facebook.com/RoverDotCom/', type: 'facebook' },
        { url: 'https://www.facebook.com/RoverDotCom/', type: 'instagram' },
        { url: 'https://www.facebook.com/RoverDotCom/', type: 'twitter' },
        { url: 'https://rovker.com', type: 'website' },
      ],
      jobs: [
        {
          title: 'Dog walker',
          location: 'Oakville, ON',
          slug: '/posting/535',
          jobTypeId: 2,
          jobType: 'Freelance',
        },
        {
          title: 'System Administrator',
          location: 'Toronto, ON',
          slug: '/posting/536',
          jobTypeId: 4,
          jobType: 'Co-op',
        },
        {
          title: 'System Administrator',
          location: 'Toronto, ON',
          slug: '/posting/536',
          jobTypeId: 4,
          jobType: 'Co-op',
        },
      ],
      articles: [
        {
          companyName: 'uneedjobs.com', // needs to be added in the frontmatter for blog post template
          employerId: 20,
          title: 'How to get started Dog Walking',
          sponsored: true,
          sponsoredCompanyName: 'Rover',
          sponsoredCompanyImage:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYel_hiMcSbl4mTNc0sOIAAOeyluy54xudTWQHSwsU8tKQolLA',
          timeToRead: 3,
          slug: '/blog/how-to-get-started-dog-walking',
          image:
            'https://user-images.githubusercontent.com/6892666/44449999-c2c6a380-a5bd-11e8-8a96-6b01c2020fb3.png',
        },
        {
          companyName: 'uneejobs.com',
          employerId: 20,
          title: 'Top 10 Places to Walk Your Pup',
          sponsored: true,
          sponsoredCompanyName: 'Rover',
          sponsoredCompanyImage:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYel_hiMcSbl4mTNc0sOIAAOeyluy54xudTWQHSwsU8tKQolLA',
          timeToRead: 3,
          slug: '/blog/how-to-get-started-dog-walking',
          image:
            'https://user-images.githubusercontent.com/6892666/44449999-c2c6a380-a5bd-11e8-8a96-6b01c2020fb3.png',
        },
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
        "You're awesome and we love you",
      ],
      perks: [
        'Remote working outside every day',
        'New friends',
        'Work on your own terms',
        'Great opportunity to make lots of money',
        'Free snacks at Rover HQ',
        'Co-working space',
      ],
      companyValues: [
        'Remote working outside every day',
        'New friends',
        'Work on your own terms',
        'Great opportunity to make lots of money',
        'Free snacks at Rover HQ',
        'Co-working space',
      ],
      vision: 'Our vision is to create something awesome',
      mission:
        'Our mission is to make it accessible for people to own pets and their lives.',
      videos: [
        'https://www.youtube.com/watch?v=6IFR3WYSBFM',
        'https://www.youtube.com/watch?v=MevKTPN4ozw',
      ],
      offices: [
        {
          name: 'UneedJobs HQ',
          street: '1428 White Oaks Blvd',
          headquarters: true,
          city: 'Oakville',
          provinceOrState: 'Ontario',
          country: 'Canada',
        },
        {
          name: 'UneedJobs Toronto',
          street: '53 Front Street West',
          headquarters: false,
          city: 'Toronto',
          provinceOrState: 'Ontario',
          country: 'Canada',
        },
      ],
      cultureItems: [
        {
          image:
            'https://images.unsplash.com/photo-1528083855824-d49e61c27bbf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a7b6f6275b15c4b1b2b278504db251c&auto=format&fit=crop&w=1350&q=80',
          title: 'New Beginnings',
          description:
            'To celebrate our new merger, we ran into something cool.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=58321e04954daa3a0e2d3b1dc2a927da&auto=format&fit=crop&w=1350&q=80',
          title: 'Best friends every day',
          description:
            "This is some sample text but honestly, wouldn't it be awesome to just get to hang out with animals every damn day? I think so.",
        },
      ],
      hidden: true,
    }
  }
}

module.exports = url => {
  return new PublicCompanies(url)
}
