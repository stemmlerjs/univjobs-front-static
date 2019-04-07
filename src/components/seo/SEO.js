import path from 'path'
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import JsonLd from './JsonLd'
import config from '../../config';

const returnBaseUrl = (url) => {
  const t = new URL(url)
  return `${t.origin}${t.pathname}`
}  


const SEO = ({ requiredProps, type, pageProps }) => (
  <Helmet>
    <title>{requiredProps.title}</title>
    <meta name="description" content={requiredProps.description} />
    <meta name="image" content={requiredProps.image} />

    <script type="application/ld+json">
    {
       JSON.stringify(JsonLd(type, requiredProps, pageProps))
    }
    </script>

    {/* OpenGraph tags 
      * TODO: 
      * - Create a module with returnable objects mapping to different OG tags such as articles, etc..
      *   Refer to http://ogp.me/
      *   For now we will do a basic OG tag. 
      * 
    */}
     <meta property="og:url" content={requiredProps.url} />
     <meta property="og:title" content={requiredProps.title} />
     <meta property="og:description" content={requiredProps.description} />
     <meta name="image" content={requiredProps.image} />

     {/* Twitter Card tags */}
       <meta name="twitter:card" content="summary_large_image" />
       <meta name="twitter:creator" content={config.twitter} />
       <meta name="twitter:site" content={config.twitter} />
       <meta name="twitter:title" content={requiredProps.title} />
       <meta name="twitter:description" content={requiredProps.description} />
       <meta name="twitter:image" content={requiredProps.image} /> 

      {/**Canonical Tags
        TODO: 
          - Monitor Google Search Console for the next few months. Adjust accordingly.
          - Add mobile variant at some point.
            Refer to <link rel="alternate" media="only screen and (max-width: 640px)"  href="http://m.example.com/dresses/green-dresses">
      */}
       <link rel="canonical" href={returnBaseUrl(requiredProps.url)} />


  </Helmet>
)

export default SEO;

SEO.propTypes = {
  requiredProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  type: PropTypes.string.isRequired,
  pageProps: PropTypes.object.isRequired
}
