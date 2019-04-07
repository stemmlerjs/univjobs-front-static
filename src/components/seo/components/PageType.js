const PageType = {
  REGULAR: 'REGULAR', // landing page, /blog, /categories
  JOB: 'JOB',
  CITY: 'CITY', //NOTE: Cities may have different images or keywords 
  BLOG_POST: 'BLOG_POST',
  COMPANY: 'COMPANY',
  PERSON: 'PERSON'
}


/**
 * TODO: 
 * - company.js
 *   - JSON-LD format
 *   - Twitter format
 *   - OG format
 * - city.js
 *   - JSON-LD format
 *   - Twitter format
 *   - OG Format
 * - team.js
 *   - JSON-LD format
 *   - Twitter format
 *   - OG format
 * - jobs
 *   - JSON-LD format
 *   - Twitter format
 *   - OG format
 * NOTE: We will only do basic formats for now. We had broken JSON-LD and meta tags not working properly
 */

export default PageType;
