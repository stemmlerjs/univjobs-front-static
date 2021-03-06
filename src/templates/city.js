import React from 'react'
import PropTypes from 'prop-types'
import LandingPageHero from '../components/landing-page/components/LandingPageHero'
import DirectoryResultsList from '../components/directory/components/DirectoryResultsList'

import toronto from '../img/cities/toronto.jpg'
import brampton from '../img/cities/brampton.jpg'
import oakville from '../img/cities/oakville.jpg'
import mississauga from '../img/cities/mississauga.jpg'

import {SeoLayout, PageType} from '../components/seo'
import config from '../config'
import '../styles/City/CityTemplate.sass'

const getLandingPageImage = city => {
  switch (city) {
    case 'Toronto':
      return toronto
    case 'Brampton':
      return brampton
    case 'Oakville':
      return oakville
    case 'Mississauga':
      return mississauga
    default:
      return toronto
  }
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

class CityTemplate extends React.Component {
  componentDidMount() {}

  render() {
    // const { city } = this.props.pathContext
    // const companies = this.props.data.companies ? this.props.data.companies.edges.map(c => c.node) : null;

    // // TODO: Look into what's going on here.
    // if (!!companies === false) {
    //   return <div></div>;
    // }

    return (
      <div className="city-template-container">
        {/* <SeoLayout
          requiredProps={{
            title: `${city} student and grad jobs | Univjobs`,
            description: `Student jobs, part-time, co-op and recent-grad jobs at companies in ${city}.`,
            url: `${config.url}jobs/student-jobs-in-${city}`,
            image: config.assets.image.logo
          }}
          type={PageType.REGULAR}
          pageProps={{
          }}
        />
        <LandingPageHero
          heroTitle={`${city}`}
          subTitle=""
          options={{
            alignment: 'center',
            hasPolygon: false,
            hero: {
              showHeroMask: true,
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
            image: getLandingPageImage(city),
          }}
        />
        <div className="page-description">
          <h2>
            Student jobs, part-time jobs and recent-grad jobs at companies in{' '}
            {city}.
          </h2>
        </div>
        <DirectoryResultsList
          companies={companies ? companies : []}
          isMobile={false}
        /> */}
      </div>
    )
  }
}

CityTemplate.propTypes = {}

export default CityTemplate

// export const pageQuery = graphql`
//   query CompaniesByCity($city: String) {
//     companies: allDirectoryCompany(
//       filter: { city: { eq: $city } }
//       sort: { fields: [companyName] }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           id
//           industries {
//             industry_text
//           }
//           jobs {
//             title
//             slug
//           }
//           companyId
//           companyName
//           about
//           logoUrl
//           address
//           companySize {
//             value
//             label
//           }
//           feature
//           exploreSlug
//           position {
//             lat
//             lng
//           }
//           hiring
//         }
//       }
//     }
//   }
// `
