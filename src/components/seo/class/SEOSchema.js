import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import * as config from '../../../config'

/**
 * getSchemaOrgJSONLD
 *
 * @class that returns the proper SEO header.
 */

class SEOSchema {
    constructor() {
    }

   /**
   * @function getSchemaOrgJSONLD
   * @desc Returns a particular schema for JSONLD
   *    
   * @return {Promise | Array Object}
   */

    async getSchemaOrgJSONLD (
        isBlogPost,
        url,
        title,
        image,
        description,
        datePublished,
    ) {
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
        isBlogPost
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

        return await schemaOrgJSONLD; 
    }


        /**
     * @function getSEOContainerDefinition
     * @desc Returns a particular description for the Helmet component to display 
     *    
     * @return {Promise | Object}
     */
    async getSEOContainerDefinition (type) {
        const definition = {
            LANDING_PAGE: {
                isBlogPost: false,
                postData: {
                    title: 'Jobs, internships, and work study for students and recent grads',
                    description: 'Find paid internship, remote work, part time, and entry-level jobs at startups and large companies',
                }
            }
        }
        return await definition[type] 
    }
}

export default SEOSchema;
  