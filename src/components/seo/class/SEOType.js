/**
 * SEO  
 *
 * @class that contains enum types.
 */

class SEOType {
  constructor() {
  }

  /**
   * @function seoType
   * @desc Returns all seo enum types
   *
   * @note landing page can be the about page, press, etc...
   * 
   * @return {Promise | Object}
   */

  async getSeoType() {
      return await {
        blog: 'BLOG',
        blogPost: 'BLOG_POST',
        landingPage: 'LANDING_PAGE',
        city: 'CITY',
        directoryCompany: 'DIRECTORY_COMPANY',
        company: 'COMPANY'
      }
  }
}

export default SEOType

