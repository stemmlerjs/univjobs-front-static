import * as config from '../../config'
/**
 * JsonLd 
 * 
 * Returns the proper json-ld format based on type passed.
 * 
 * Checkout PageType.js for more Pagetypes
 * 
 * Reference: 
 * https://jsonld.com/web-page/
 * 
 * 
 */

 export function JsonLd(type, props, pageProps) {
     switch(type) {
        case type === 'BLOG_POST':
         return [
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": props.url
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
                "url": config.image.assets.logo
              }
            },
            "description": config.description
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
