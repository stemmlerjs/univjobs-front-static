import path from 'path'
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import * as config from '../config'

const getSchemaOrgJSONLD = ({
  isBlogPost,
  url,
  title,
  image,
  description,
  datePublished,
}) => {
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

  return isBlogPost
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
}

const SEO = ({ postData, postImage, isBlogPost }) => {
  const postMeta = postData || {}

  const title = postMeta.title || config.title
  const description =
    postMeta.description || postData.excerpt || config.description
  const image = `${config.url}${postImage}` || config.assets.image.circularLogo
  const url = postMeta.slug ? `${config.url}${postMeta.slug}` : config.url
  const datePublished = isBlogPost ? postMeta.date : false
  const keywords = postData.keywords
    ? postData.keywords
    : 'student jobs, part time jobs, co-op jobs, univjobs, toronto, oakville, mississauga'
  const { canonical } = postData

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost,
    url,
    title,
    image,
    description,
    datePublished,
  })

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="keywords" content={keywords} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:site" content={config.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {canonical ? <link rel="canonical" href={canonical} /> : ''}
    </Helmet>
  )
}

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any,
  }).isRequired,
  postImage: PropTypes.string,
}

SEO.defaultProps = {
  isBlogPost: false,
  postImage: 'img/u.png',
}

export default SEO
