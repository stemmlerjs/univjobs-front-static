
import _ from 'underscore'
import config from '../config'

export default {

  /**
   * redirectTo
   * 
   * Redirects the user to the url passed in.
   * 
   * 
   * @param {String} url 
   * @return void
   */

  redirectTo: (url) => {
    if (typeof window !== undefined) {
      //Strip away certain url params from url string and pass them to window.AnalyticsEvent
      //Strip button_id
      
      const buttonIdPresent = url.indexOf('button_id=') !==1; 
      const pathArray = url.split('?button_id=');

      if(buttonIdPresent) {
        window.AnalyticsEvent('Button_click',{
          type: pathArray[1]
        })
        window.location.href = `${pathArray[0]}?dev_id=${window.AmplitudeInstance.options.deviceId}`;
      } else {
        window.location.href = `${url}?dev_id=${window.AmplitudeInstance.options.deviceId}`;
      }
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
      if (categories) {
        categories = _.uniq(
          categories.edges.map((edge) => edge.node)
          .map((node) => Object.assign(
            {}, node.frontmatter
          ))
          .map((c) => {
            return c.category
          })
        )

        return categories;

        // for (let obj of categories) {
        //   if (!map.hasOwnProperty(obj.parent)) map[obj.parent] = [];
        //   if (!!~map[obj.parent].indexOf(obj.parent) == false) map[obj.parent].push(obj.category);
        //   map[obj.parent] = _.uniq(map[obj.parent])
        // }

        // delete map.null;
      }
      return [];
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
