import React from 'react'
import PropTypes from 'prop-types'
import * as config from '../../../config'

import SEO from '../components/SEO'
import SEOSchema from './SEOSchema'



  const SEOContainer = ({ type }) => {

    const Schema = new SEOSchema
    const postMeta = Schema.getSEOContainerDefinition(type)

    const title = postMeta.postData.title
    const description = postMeta.postData.description
    const image = postMeta.image
    const url = postMeta.url
    const datePublished = postMeta.datePublished
    const keywords = postMeta.keywords
    const canonical  = postMeta.canonical
    const isBlogPost = postMeta.isBlogPost
  
    const schemaOrgJSONLD = Schema.getSchemaOrgJSONLD({
      isBlogPost,
      url,
      title,
      image,
      description,
      datePublished,
    })
  
    return (
      <SEO 
        title={title} 
        description={description}
        image={image} 
        schemaOrgJSONLD={schemaOrgJSONLD}
        url={url} 
        isBlogPost={isBlogPost}
        keywords={keywords}
        canonical={canonical}
      />
    )
  }

SEOContainer.propTypes = {
    type: PropTypes.string,
}
      
SEOContainer.defaultProps = {
    type: 'LANDING_PAGE',
    postImage: config.assets.image.logo,
}

export default SEOContainer
