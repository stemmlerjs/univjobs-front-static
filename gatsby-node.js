const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              category
            }
          }
        }
      }
    }
  `).then(result => {

    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    let categories = [];

    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)


        /**
         * Additionally, add all categories to an array
         */

        let category = edge.node.frontmatter.category

        if (category) {
          categories.push(category)
        }
        
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)
    categories = _.uniq(categories)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })

    // Make categories pages
    categories.forEach(category => {
      const categoryPath = `/blog/categories/${_.kebabCase(category)}/`
      
      createPage({
        path: categoryPath,
        component: path.resolve('src/templates/category.js'),
        context: {
          category
        }
      })
    })

  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    
    /**
     * Create slugs
     */

    let value = createFilePath({ node, getNode })

    /**
     * Create category slugs.
     * 
     * They exist in /blog/category/{category} rather
     * than /category/{category}.
     */

    if (node.frontmatter.templateKey == "category") {
      value = "/blog" + value;
    }
    
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
