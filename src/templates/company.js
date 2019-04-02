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
import { logExploreCompanyView } from '../utils/logging'
import {SEO, PageType} from '../components/seo'
import get from 'lodash/get'

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
  componentDidMount() {
    const { data } = this.props
    let company = helpers.companies.getCompaniesFromQuery(data.company)

    if (company.length !== 0) {
      company = company[0]
    }

    const companyId = company.companyId
    logExploreCompanyView(companyId)
  }

  render() {
    const { data } = this.props

    let company = helpers.companies.getCompaniesFromQuery(data.company)
    let articles = helpers.companies.getCompaniesFromQuery(data.posts)

    if (company.length !== 0) {
      company = company[0]

      if (articles.length !== 0) {
        company.articles = articles.filter(
          article =>
            get(article, 'frontmatter.employerId') === company.companyId
        )
      }
    }

    return (
      <div>
        <SEO
          requiredProps={{
            title: `Jobs at ${company.companyName}` ,
            description: `Apply to student and recent grad jobs at ${company.companyName}`,
            url: window.location.href,
            image: company.brandImageUrl
          }}
          type={PageType.REGULAR}
          pageProps={{
          }}
        />
        
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
          industries={company.industries}
          slogan={company.slogan}
          logoUrl={company.logoUrl}
          numEmployees={company.numEmployees}
          socialLinks={company.socialLinks}
        />

        {!company.jobs || company.jobs.length === 0 ? (
          ''
        ) : (
          <CompanyJobs companyName={company.companyName} jobs={company.jobs} />
        )}
        {!company.articles || company.articles.length === 0 ? (
          ''
        ) : (
          <CompanyArticles
            companyName={company.companyName}
            articles={company.articles}
          />
        )}
        <section className="company-sections-container">
          <TextSection title="About us" text={company.aboutUs} size="half" />
          {!company.funFacts || company.funFacts.length === 0 ? (
            ''
          ) : (
            <ListSection
              title="Fun facts"
              list={company.funFacts}
              size="half"
            />
          )}
          {!company.videos || company.videos.length === 0 ? (
            ''
          ) : (
            <Videos title="Videos" urls={company.videos} size="full" />
          )}
          {!company.vision || company.vision === 0 ? (
            ''
          ) : (
            <TextSection title="Vision" text={company.vision} size="half" />
          )}
          {!company.mission || company.mission === 0 ? (
            ''
          ) : (
            <TextSection title="Mission" text={company.mission} size="half" />
          )}
          {!company.perks || company.perks.length === 0 ? (
            ''
          ) : (
            <ListSection
              title="Company perks"
              list={company.perks}
              size="half"
              alt="true"
            />
          )}
          {!company.companyValues || company.companyValues.length === 0 ? (
            ''
          ) : (
            <ListSection
              title="Company values"
              list={company.companyValues}
              size="half"
            />
          )}
          {!company.socialLinks || company.socialLinks.length === 0 ? (
            ''
          ) : (
            <SocialMediaSection
              title="Social Media"
              links={company.socialLinks}
              size="half"
            />
          )}
          {!company.offices || company.offices.length === 0 ? (
            ''
          ) : (
            <OfficesSection
              title="Offices"
              offices={company.offices}
              size="half"
            />
          )}
          {!company.cultureItems || company.cultureItems.length === 0 ? (
            ''
          ) : (
            <CultureSection
              title={`Life at ${company.companyName}`}
              cultureItems={company.cultureItems}
              size="half"
            />
          )}
        </section>
      </div>
    )
  }
}

CompanyTemplate.propTypes = {}

export default CompanyTemplate

export const pageQuery = graphql`
  query blogsPageAndCompanyTemplateQuery($companyId: Int) {
    company: allCompany(
      filter: { companyId: { eq: $companyId }, hidden: { eq: false } }
    ) {
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
          mission
          perks
          companyValues
          industries {
            industry_text
            industry_id
          }
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
          videos
          vision
          fields {
            slug
          }
          hidden
        }
      }
    }

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { templateKey: { eq: "blog-post" }, public: { eq: true } }
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
            employerId
            title
            date
            description
            tags
            featured
            image
            category
            sponsored
            sponsoredCompanyName
            sponsoredCompanyImage
          }
        }
      }
    }
  }
`
