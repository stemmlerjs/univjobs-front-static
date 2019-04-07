import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import * as config from '../../../config'


// const baseRequiredProps = {
//   title,
//   description
// }



// const PageTypes = {
//   REGULAR: 'REGULAR', // landing page, /blog, /categories
//   JOB: 'JOB',
//   BLOG: 'BLOG'
// }

// const regularPageRequiredProps = {
//   // 
// }

// const jobPageProps = {

// }

// const blogPostPageProps = {
//   // image
//   // authorName
// }





/**
 * getSchemaOrgJSONLD
 *
 * @class that returns the proper SEO header.
 */

class SEOSchema {
  constructor() {}


  /**
   * @function getSchemaOrgJSONLD
   * @desc Returns a particular schema for JSONLD
   *
   * @return {Promise | Array Object}
   */

  async getSchemaOrgJSONLD(
    isBlogPost,
    url,
    title,
    image,
    description,
    datePublished
  ) {
    const schemaOrgJSONLD = [
      {
        '@context': 'https://univjobs.ca',
        '@type': 'Product',
        url,
        name: title,
        alternateName: config.title,
        logo: 'https://s3.amazonaws.com/assets.univjobs/svg/univjobs_full.svg',
      },
    ]
    isBlogPost
      ? [
          ...schemaOrgJSONLD,
          {
            '@context': 'https://univjobs.ca',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@id': url,
                  name: title,
                  image,
                },
              },
            ],
          },
          {
            '@context': 'https://univjobs.ca',
            '@type': 'BlogPosting',
            url,
            name: title,
            alternateName: config.title,
            headline: title,
            image: {
              '@type': 'ImageObject',
              url: image,
            },
            description,
            author: {
              '@type': 'Person',
              name: 'Charles Javelona',
            },
            publisher: {
              '@type': 'Organization',
              url: 'https://univjobs.ca',
              logo: config.assets.image.circularLogo,
              name: 'Charles Javelona',
            },
            mainEntityOfPage: {
              '@type': 'WebSite',
              '@id': config.url,
            },
            datePublished,
          },
        ]
      : schemaOrgJSONLD

    return await schemaOrgJSONLD
  }

  /**
   * @function getSEOContainerDefinition
   * @desc Returns a particular description for the Helmet component to display
   *
   * @return {Promise | Object}
   */

  //`${config.url}${postImage}`
  // const url = postMeta.slug ? `${config.url}${postMeta.slug}` : config.url

  getSEOContainerDefinition(type) {
    debugger
    const definition = {
      STUDENT_LANDING_PAGE: {
        isBlogPost: false,
        postData: {
          title:
            'Jobs, internships, and work study for students and recent grads',
          description:
            'Find paid internship, remote work, part time, and entry-level jobs at startups and large companies',
        },
        image: config.assets.image.logo,
        url: config.url,
        datePublished: false,
        keywords: 'student jobs, part time jobs, co-op, work study, univjobs',
        canonical: {
          title:
            'Jobs, internships, and work study for students and recent grads',
          description:
            'Find paid internship, remote work, part time, and entry-level jobs at startups and large companies',
        },
      },
      EMPLOYER_LANDING_PAGE: {
        isBlogPost: false,
        postData: {
          title: 'Online campus recruitment solution for employers',
          description:
            'Reach, recruit post-secondary students and recent-grads on campus.',
        },
        image: config.assets.image.logo,
        url: config.url,
        datePublished: false,
        keywords: 'hire students, campus recruitment, co-op, univjobs',
        canonical: {
          title: 'Online campus recruitment solution for employers',
          description:
            'Reach, recruit post-secondary students and recent-grads on campus.',
        },
      },
      ABOUT: {
        isBlogPost: false,
        postData: {
          title: 'About Univjobs',
          description:
            'Follow us on helping college students recent grads get experience.',
        },
        image: config.assets.image.logo,
        url: config.url,
        datePublished: false,
        keywords:
          'college students, university students, recent grads get experience',
        canonical: {
          title: 'About Univjobs',
          description:
            'Follow us on helping college students recent grads get experience.',
        },
      },
      PRESS: {
        isBlogPost: false,
        postData: {
          title: 'Univjobs Press',
          description: 'The latest news, updates and resources on Univjobs.',
        },
        image: config.assets.image.logo,
        url: config.url,
        datePublished: false,
        keywords: 'univjobs, press, news, resources',
        canonical: {
          title: 'Univjobs Press',
          description: 'The latest news, updates and resources on Univjobs.',
        },
      },
      PRICING: {
        isBlogPost: false,
        postData: {
          title: 'Univjobs Pricing',
          description:
            'Recruit students and recent-grads from any post-secondary school in Canada.',
        },
        image: config.assets.image.logo,
        url: config.url,
        datePublished: false,
        keywords: 'univjobs, pricing, recruit recent-grads, post-secondary',
        canonical: {
          title: 'Univjobs Pricing',
          description:
            'Recruit students and recent-grads from any post-secondary school in Canada.',
        },
      },
      SMALL_BUSINESS: {
        isBlogPost: false,
        postData: {
          title: 'Find local help',
          description:
            'Browse and connect with thousands of local students to help with your business',
        },
        image: config.assets.image.logo,
        url: config.url,
        datePublished: false,
        keywords: 'univjobs, local help, students, grads',
        canonical: {
          title: 'Find local help',
          description:
            'Browse and connect with thousands of local students to help with your business',
        },
      },
    }
    return definition[type]
  }
}

export default SEOSchema
