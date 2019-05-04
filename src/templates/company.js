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
import {SeoLayout, PageType} from '../components/seo'
import config from '../config'
import get from 'lodash/get'
import { univjobsAPI } from '../api'

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

  constructor (props) {
    super(props);
    this.state = {
      isFetchingCompanyProfile: false,
      isFetchingCompanyProfileSuccess: false,
      isFetchingCompanyProfileFailure: false,
      company: {}
    }
  }

  updateFetchStatus (isFetchingCompanyProfile, isFetchingCompanyProfileSuccess, isFetchingCompanyProfileFailure) {
    this.setState({
      ...this.state,
      isFetchingCompanyProfile,
      isFetchingCompanyProfileSuccess,
      isFetchingCompanyProfileFailure
    })
  }

  async fetchCompanyProfile (companyId) {
    try {
      this.updateFetchStatus(true, false, false)
      const company = await univjobsAPI.getCompanyByCompanyId(companyId);
      this.setState({ ...this.state, company })
      this.updateFetchStatus(false, true, false)
    } catch (err) {
      console.error(err);
      this.updateFetchStatus(false, false, true)
    }
  }

  componentDidMount () {
    const { data } = this.props
    let company = helpers.companies.getCompaniesFromQuery(data.company)

    if (company.length !== 0) {
      company = company[0]
    }

    const companyId = company.companyId
    logExploreCompanyView(companyId);
    this.fetchCompanyProfile(companyId)
  }

  getCompany () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;

    return Object.keys(companyFromState) !== 0 ? companyFromState : companyFromProps;
  }

  getCompanyFromQuery () {
    const { data } = this.props;
    const companies = helpers.companies.getCompaniesFromQuery(data.company);
    if (companies.length !== 0) {
      return companies[0]
    } else {
      return {};
    }
  }

  getCompanyName () {
    // We need to always return this from props in order to build
    // things for SEO.
    const companyFromProps = this.getCompanyFromQuery();
    return companyFromProps.companyName;
  }

  getCompanyBrandImage () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.brandImageUrl || companyFromProps.brandImageUrl;
  }

  getCompanyIndustries () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.industries || companyFromProps.industries;
  }

  getCompanySlogan () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.slogan || companyFromProps.slogan;
  }

  getLogoUrl () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.logoUrl || companyFromProps.logoUrl;
  }

  getCompanyNumEmployees () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.numEmployees || companyFromProps.numEmployees;
  }

  getSocialLinks () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.socialLinks || companyFromProps.socialLinks;
  }

  getJobs () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.jobs || companyFromProps.jobs;
  }

  getArticles () {
    const { data } = this.props
    const company = this.getCompany();
    const articlesFromProps = helpers.companies.getCompaniesFromQuery(data.posts)
    let articles = articlesFromProps;

    if (articles.length !== 0) {
      articles = articles.filter(
        article =>
          get(article, 'frontmatter.employerId') === company.companyId
      )
    }

    return articles;
  }

  getAboutUs () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.aboutUs || companyFromProps.aboutUs;
  }

  getFunFacts () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.funFacts || companyFromProps.funFacts;
  }

  getVideos () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.videos || companyFromProps.videos;
  }

  getCompanyVision () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.vision || companyFromProps.vision;
  }

  getCompanyMission () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.mission || companyFromProps.mission;
  }

  getCompanyPerks () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.perks || companyFromProps.perks;
  }

  getCompanyValues () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.companyValues || companyFromProps.companyValues;
  }

  getOffices () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.offices || companyFromProps.offices;
  }

  getCultureItems () {
    const companyFromProps = this.getCompanyFromQuery();
    const companyFromState = this.state.company;
    return companyFromState.cultureItems || companyFromProps.cultureItems;
  }

  getStaticProps () {
    return this.getCompanyFromQuery();
  }

  render() {
    const { data } = this.props

    const companyName   = this.getCompanyName();
    const brandImageUrl = this.getCompanyBrandImage();
    const industries    = this.getCompanyIndustries();
    const slogan        = this.getCompanySlogan();
    const logoUrl       = this.getLogoUrl();
    const numEmployees  = this.getCompanyNumEmployees();
    const socialLinks   = this.getSocialLinks();
    const jobs          = this.getJobs();
    const articles      = this.getArticles();
    const aboutUs       = this.getAboutUs();
    const funFacts      = this.getFunFacts();
    const videos        = this.getVideos();
    const vision        = this.getCompanyVision();
    const mission       = this.getCompanyMission();
    const perks         = this.getCompanyPerks();
    const companyValues = this.getCompanyValues();
    const offices       = this.getOffices();
    const cultureItems  = this.getCultureItems();

    return (
      <div>
        <SeoLayout
          requiredProps={{
            title: `Jobs at ${companyName}` ,
            description: `Apply to student and recent grad jobs at ${companyName}`,
            url: `${config.url}companies/${companyName}`,
            image: brandImageUrl
          }}
          type={PageType.REGULAR}
          pageProps={{
          }}
        />
        <LandingPage
          options={{
            alignment: 'center',
            image: brandImageUrl,
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
          companyName={companyName}
          industries={industries}
          slogan={slogan}
          logoUrl={logoUrl}
          numEmployees={numEmployees}
          socialLinks={socialLinks}
        />

        {!jobs || jobs.length === 0 ? (
          ''
        ) : (
          <CompanyJobs companyName={companyName} jobs={jobs} />
        )}

        {!articles || articles.length === 0 ? (
          ''
        ) : (
          <CompanyArticles
            companyName={companyName}
            articles={articles}
          />
        )}
        <section className="company-sections-container">
          <TextSection title="About us" text={aboutUs} size="half" />
          {!funFacts || funFacts.length === 0 ? (
            ''
          ) : (
            <ListSection
              title="Fun facts"
              list={funFacts}
              size="half"
            />
          )}
          {!videos || videos.length === 0 ? (
            ''
          ) : (
            <Videos title="Videos" urls={videos} size="full" />
          )}
          {!vision || vision === 0 ? (
            ''
          ) : (
            <TextSection title="Vision" text={vision} size="half" />
          )}
          {!mission || mission === 0 ? (
            ''
          ) : (
            <TextSection title="Mission" text={mission} size="half" />
          )}
          {!perks || perks.length === 0 ? (
            ''
          ) : (
            <ListSection
              title="Company perks"
              list={perks}
              size="half"
              alt="true"
            />
          )}
          {!companyValues || companyValues.length === 0 ? (
            ''
          ) : (
            <ListSection
              title="Company values"
              list={companyValues}
              size="half"
            />
          )}
          {!socialLinks || socialLinks.length === 0 ? (
            ''
          ) : (
            <SocialMediaSection
              title="Social Media"
              links={socialLinks}
              size="half"
            />
          )}
          {!offices || offices.length === 0 ? (
            ''
          ) : (
            <OfficesSection
              title="Offices"
              offices={offices}
              size="half"
            />
          )}
          {!cultureItems || cultureItems.length === 0 ? (
            ''
          ) : (
            <CultureSection
              title={`Life at ${companyName}`}
              cultureItems={cultureItems}
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
