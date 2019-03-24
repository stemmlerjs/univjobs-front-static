import path from 'path'
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
// import * as config from '../../../config'


const SEO = ({ requiredProps, type, pageProps }) => (
  <Helmet>
    <title>{requiredProps.title}</title>
  </Helmet>
)

export default SEO;

SEO.propTypes = {
  requiredProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  pageProps: PropTypes.object.isRequired
}

//NOTE: Make this into a component where it only renders the component
// Move the programmatic aspect to class
// Seperate SEO Schema to it's own class
// Only render SEOContainer aka SEO Component
// const SEO = ({ 
//   title, 
//   description, 
//   image, 
//   schemaOrgJSONLD, 
//   url, 
//   isBlogPost,
//   keywords,
//   canonical
 
// }) => {
  
//   return (
//     <Helmet>
//       {/* General tags */}
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <meta name="image" content={image} />

//       {/* Schema.org tags */}
//       <script type="application/ld+json">
//         {JSON.stringify(schemaOrgJSONLD)}
//       </script>

//       {/* OpenGraph tags */}
//       <meta property="og:url" content={url} />
//       {isBlogPost ? <meta property="og:type" content="article" /> : null}
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:image" content={image} />
//       <meta property="keywords" content={keywords} />

//       {/* Twitter Card tags */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:creator" content={config.twitter} />
//       <meta name="twitter:site" content={config.twitter} />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={image} />

//       {canonical ? <link rel="canonical" href={canonical} /> : ''}
      
//     </Helmet>
//   )
// }

// SEO.propTypes = {
//   isBlogPost: PropTypes.bool,
//   postData: PropTypes.shape({
//     title: PropTypes.string,
//     description: PropTypes.string,
//     frontmatter: PropTypes.any,
//     excerpt: PropTypes.any,
//   }).isRequired,
//   postImage: PropTypes.string,
// }

// SEO.defaultProps = {
//   isBlogPost: false,
//   postImage: config.assets.image.logo,
// }

// export default SEO
