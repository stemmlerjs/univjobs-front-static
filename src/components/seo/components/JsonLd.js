import * as config from '../../../config'


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


const JsonLd = (type, props, pageProps) => {
     props.url = new URL(props.url)
     switch(type) {
        case "BLOG_POST":
         return {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${props.url.origin}${props.url.pathname}`
            },
            "headline": props.title,
            "image": [
              `${props.image}`
             ],
            "datePublished": pageProps.datePublished,
            "dateModified": pageProps.dateModified,
            "author": {
              "@type": "Person",
              "name": pageProps.authorName
            },
             "publisher": {
              "@type": "Organization",
              "name": "Univjobs",
              "logo": {
                "@type": "ImageObject",
                "url": config.assets.image.logo
              }
            },
            "description": props.description
          } 
      default:
        return {
          "@context": "http://schema.org", 
          "@type": "WebPage", 
          "url": `${props.url.origin}${props.url.pathname}`, 
          "name": props.title,
          "description": props.description
        }
    }
 }

export default JsonLd;
