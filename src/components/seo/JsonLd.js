import * as config from '../../config'
/**
 * JsonLd 
 * 
 * Returns the proper json-ld format.
 * 
 * 
 * Reference: 
 * https://jsonld.com/web-page/
 * 
 * 
 */

 export function JsonLD(type, props) {
     switch(type) {
        case type === 'BLOG_POST':
        return [
          {
            "@context": config.staticUrl,
            "@type": "NewsArticle",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": props.articleUrl
            },
            "headline": props.title,
            "image": [
              props.image
             ],
            "datePublished": props.datePublished,
            "dateModified": props.dateModified,
            "author": {
              "@type": "Person",
              "name": props.authorName
            },
             "publisher": {
              "@type": "Organization",
              "name": "Univjobs",
              "logo": {
                "@type": "ImageObject",
                "url": config.assets.image.logo
              }
            },
            "description": config.description,
          }
        ]
      default:
        return [{
          "@context": "http://schema.org", 
          "@type": "WebPage", 
          "url": props.url, 
          "name": props.title,
          "description": props.description
        }]
    }
 }
