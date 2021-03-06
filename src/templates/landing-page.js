import React from 'react'
import PropTypes from 'prop-types'
import config from '../config'
import LandingPageHero from '../components/landing-page/components/LandingPageHero'
import '../styles/LandingTemplate/LandingTemplate.sass'
import features from '../components/landing-page/styles/FeatureStyles.module.css' // TODO: fix this

import { Backers, AltFeature, StudentTestimonials, LeftFeatures } from '../components/landing-page'
import { CallToAction } from '../components/shared/cta'
import RightFeatures from '../components/landing-page/components/RightFeatures'

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

/**
 * LandingPageTemplate
 *
 * @class The LandingPageTemplate class outlines the template for how
 * an "Explore companies" commpany page will actually look.
 *
 * @see LandingPage for the background image at the top
 * @see CompanyHeader for the header details
 * @see CompanyJobs for the jobs search
 * @see CompanyArticles for all of the articles by this company
 */

class LandingPageTemplate extends React.Component {
  componentDidMount() {}

  render() {
    const data = this.props.data.landingPages.edges[0].node
    const { fields, frontmatter } = data
    const {
      title,
      description,
      targetUserType,
      heroTitle,
      heroSubTitle,
      heroButtonText,
      heroImage,
      ctaOneHeader,
      ctaOneSubText,
      ctaOneButtonText,
      featureOneHeader,
      featureOneSubTitle,
      featureOneParagraphOne,
      featureOneParagraphTwo,
      featureTwoHeader,
      featureTwoSubTitle,
      featureTwoParagraphOne,
      featureTwoParagraphTwo,
      featureThreeHeader,
      featureThreeSubTitle,
      featureThreeParagraphOne,
      featureThreeParagraphTwo,
      ctaTwoHeader,
      ctaTwoSubText,
      ctaTwoButtonText,
      ctaThreeHeader,
      ctaThreeSubText,
      ctaThreeButtonText,
    } = frontmatter

    // const { city } = this.props.pathContext;
    // const companies = this.props.data.companies.edges.map(c => c.node);

    return (
      <div className="landing-page-template-container">
        <LandingPageHero
          heroTitle={heroTitle}
          heroSubTitle={heroSubTitle}
          options={{
            alignment: 'left',
            image: heroImage,
            buttons: {
              hasButtons: true,
              mainButtonText: heroButtonText,
              mainButtonLocation: `${config.appUrl}register`,
              alreadyOnComponentActive: false,
            },
            hero: {
              showColorMask: true,
              color: '#1C46DA',
            },
          }}
        />

        <Backers
          companies={[
            { link: 'https://www.td.com/', imageUrl: td },
            { link: 'https://www.rover.com/ca/', imageUrl: rover },
            {
              link: 'https://www.homedepot.ca/en/home.html',
              imageUrl: homeDepot,
            },
            { link: 'https://www.soti.com/', imageUrl: soti },
            { link: 'http://ymca.ca/', imageUrl: ymca },
            { link: 'https://www.airmiles.ca/arrow/Home', imageUrl: airmiles },
          ]}
        />

        <CallToAction
          header={ctaOneHeader}
          subHeader={ctaOneSubText}
          buttonText={ctaOneButtonText}
          alt={false}
          location={`${config.appUrl}register`}
        />
        <AltFeature
          header={featureOneHeader}
          subHeader={featureOneSubTitle}
          paragraphOne={featureOneParagraphOne}
          paragraphTwo={featureOneParagraphTwo}
          picture={productImage}
        />
        <section className={features.container}>
          <LeftFeatures
            header={featureTwoHeader}
            paragraphOne={featureTwoParagraphOne}
            paragraphTwo={featureTwoParagraphTwo}
            picture={mail}
          />
          <RightFeatures
            header={featureThreeHeader}
            paragraphOne={featureThreeParagraphOne}
            paragraphTwo={featureThreeParagraphTwo}
            picture={jobs}
          />
        </section>
        <CallToAction
          header={ctaTwoHeader}
          alt={true}
          subHeader={ctaTwoSubText}
          buttonText={ctaTwoButtonText}
          location={`${config.appUrl}register`}
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
          header={ctaThreeHeader}
          alt={true}
          subHeader={ctaThreeSubText}
          buttonText={ctaThreeButtonText}
          location={`${config.appUrl}register`}
        />
      </div>
    )
  }
}

LandingPageTemplate.propTypes = {}

export default LandingPageTemplate

export const pageQuery = graphql`
  query AllLandingPagesQuery($id: String) {
    landingPages: allMarkdownRemark(
      filter: {
        id: { eq: $id }
        frontmatter: { templateKey: { eq: "landing-page" } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            targetUserType
            heroTitle
            heroSubTitle
            heroButtonText
            heroImage
            ctaOneHeader
            ctaOneSubText
            ctaOneButtonText
            featureOneHeader
            featureOneSubTitle
            featureOneParagraphOne
            featureOneParagraphTwo
            featureTwoHeader
            featureTwoSubTitle
            featureTwoParagraphOne
            featureTwoParagraphTwo
            featureThreeHeader
            featureThreeSubTitle
            featureThreeParagraphOne
            featureThreeParagraphTwo
            ctaTwoHeader
            ctaTwoSubText
            ctaTwoButtonText
            ctaThreeHeader
            ctaThreeSubText
            ctaThreeButtonText
          }
        }
      }
    }
  }
`
