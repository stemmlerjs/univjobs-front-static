import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import * as config from '../../../config'
import SEOSchema from './SEOSchema'


  
  const SEOContainer = ({ postData, postImage, isBlogPost }) => {
    const postMeta = postData || {}
    const SEO = new SEOSchema
    
  
  
    const title = postMeta.title || config.title
    const description =
      postMeta.description || postData.excerpt || config.description
    const image = `${config.url}${postImage}` || config.assets.image.logo
    const url = postMeta.slug ? `${config.url}${postMeta.slug}` : config.url
    const datePublished = isBlogPost ? postMeta.date : false
    const keywords = postData.keywords
      ? postData.keywords
      : 'student jobs, part time jobs, co-op, work study, univjobs'
    const { canonical } = postData
  
    const schemaOrgJSONLD = SEO.getSchemaOrgJSONLD({
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
        <title>{title}</title>
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

SEOContainer.propTypes = {
    isBlogPost: PropTypes.bool,
    postData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any,
    }).isRequired,
    postImage: PropTypes.string,
}
      
SEOContainer.defaultProps = {
    isBlogPost: false,
    postImage: config.assets.image.logo,
}

export default SEOContainer
