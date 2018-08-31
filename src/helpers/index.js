
import _ from 'underscore'
import config from '../config'

export default {

  /**
   * redirectTo
   * 
   * Redirects the user to the url passed in.
   * 
   * @param {String} url 
   * @return void
   */

  redirectTo: (url) => {
    if (typeof window !== undefined) {
      window.location.href = url;
    }
  },

  blog: {

     /**
     * getPostsFromQuery
     * 
     * Returns all the data that we need
     * from frontmatter and fields for blog posts.
     * 
     */

    getPostsFromQuery: (posts) => {
      if (posts) {
        return posts.edges.map((edge) => edge.node)
        .map((node) => Object.assign(
          {}, node.frontmatter, node.fields)
        );
      }

      return [];
    },

    getCategoriesFromQuery: (categories) => {
      let map = {};

      if (categories) {
        categories = _.uniq(
          categories.edges.map((edge) => edge.node)
          .map((node) => Object.assign(
            {}, node.frontmatter
          ))
          .map((c) => {
            return {
              category: c.category,
              parent: c.parentcategory
            }
          })
          // .filter((c) => !!c == true)
          // .sort()
        )

        for (let obj of categories) {
          if (!map.hasOwnProperty(obj.parent)) map[obj.parent] = [];
          if (!!~map[obj.parent].indexOf(obj.parent) == false) map[obj.parent].push(obj.category);
          map[obj.parent] = _.uniq(map[obj.parent])
        }

        delete map.null;
      }
      return map;
    },

    getTagsFromQuery: (tags) => {
      if (tags) {
        return _.uniq(tags.edges.map((edge) => edge.node)
          .map((node) => Object.assign(
            {}, node.frontmatter
          ))
          .reduce((acc, e) => acc.concat(e.tags), [])
          .filter((t) => !!t == true)
          .sort()
        )
      }

      return [];
    },
  },

  companies: {
    getCompaniesFromQuery: (companies) => {
      if (companies) {
        return companies.edges.map((edge) => edge.node)      
      }

      return [];
      
    }
  }

}
