const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const {cssModulesConfig} = require('gatsby-1-config-css-modules');

/**
 * createBlogPosts
 * 
 * @function creates pages for all blog posts
 * @param {Array<Edge>} all the blog post edges.
 * @param {Function} the createPage function
 * @return {Array<Edge>} of posts
 */

const createBlogPosts = (posts, createPage) => {
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

  return posts;
}

const createCompanyPages = (companies, createPage) => {
  companies.forEach(edge => {
    const companyId = edge.node.companyId;

    // TODO: Ensure that none of the company names are taken. They need to be unique,
    // or we use the company handle.
    
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`src/templates/company.js`),
      context: {
        companyId
      }
    })
  })
}

/**
 * createTagPages
 * 
 * @function creates all tag pages
 * @param Array<String> of tags
 * @param Function to create page
 * @return Array<String>
 */

const createTagPages = (tags, createPage) => {
  return tags.forEach(tag => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags.js`),
      context: {
        tag,
      },
    })
  })
}

/**
 * createCategoryPages
 * 
 * @function creates all category pages
 * @param Array<String> of categories
 * @param Function to create pages
 * @return Array<String>
 */

const createCategoryPages = (categories, createPage) => {
  return categories.forEach(category => {
    const categoryPath = `/blog/categories/${_.kebabCase(category)}/`
    
    createPage({
      path: categoryPath,
      component: path.resolve('src/templates/category.js'),
      context: {
        category
      }
    })
  })
}

/**
 * getAllCategoriesFromPosts
 * 
 * @function that gets all categories from the post nodes
 * and returns an array of unique categories
 * @param {Array<Edge>} posts
 * @return {Array<String} of categories
 */

const getAllCategoriesFromPosts = (posts) => {
  let categories = [];
  posts.forEach(edge => {
    if (_.get(edge, `node.frontmatter.category`)) {
      categories.push(edge.node.frontmatter.category)
    }
  })
  return _.uniq(categories);
}

/**
 * getAllTagsFromPosts
 * 
 * @function that gets all the tags from the post nodes
 */

const getAllTagsFromPosts = (posts) => {
  let tags = [];
  posts.forEach(edge => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  return _.uniq(tags);
}



// exports.sourceNodes = async ({ boundActionCreators }) => {
//   const { createNode } = boundActionCreators;
//   // Create nodes here, generally by downloading data
//   // from a remote API.
//   // const data = await fetch(REMOTE_API);
//   // const data = await dataSource.getData()

//   // Process data into nodes.
//   data.forEach(datum => createNode(dataSource.processData(datum)));

//   // We're done, return.
//   return;
// };

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      posts: allMarkdownRemark(limit: 1000) {
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

      companies: allCompany(limit: 1000) {
        edges {
          node {
            id
            aboutUs
            brandImageUrl
            companyId
            companyName
            featured
            funFacts
            logoUrl
            numEmployees
            industry
            mission
            perks
            companyValues
            cultureItems {
              image
              title
              description
            }
            slogan
            socialLinks { 
              url
              type
            }
            jobs {
              title
              location
              slug
              jobTypeId
              jobType
            }
            articles {
              companyName
              employerId
              title
              sponsored
              sponsoredCompanyName
              sponsoredCompanyImage
              timeToRead
              slug
              image
            }
            offices {
              name
              street
              headquarters
              provinceOrState
              city
              country
            }
            website
            videos
            vision
            fields {
              slug
            }
            hidden
          }
        }
      }
    }
  `).then(result => {

    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    // Create all blog posts
    const posts = createBlogPosts(result.data.posts.edges, createPage);

    // Get tags and categories so that we can create pages
    const tags  = getAllTagsFromPosts(posts);
    const categories = getAllCategoriesFromPosts(posts);

    // Create tag and categories pages
    createTagPages(tags, createPage);
    createCategoryPages(categories, createPage);

    // Create pages from companies
    createCompanyPages(result.data.companies.edges, createPage)

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

  else if (node.internal.type === 'Company') {
    createNodeField({
      name: 'slug',
      node,
      value: `/companies/${_.kebabCase(node.companyName)}/`
    })
  }
}

/**
 * Modify the weback config so that we can use 
 * auto-prefixer with Sass and CSS modules.
 * https://github.com/gatsbyjs/gatsby/issues/2660
 */

exports.modifyWebpackConfig = ({config, stage}, options) => {
  options.sourceMap = true;

  const sassFiles = /\.s[ac]ss$/;
  const sassModulesFiles = /\.module\.s[ac]ss$/;
  const sassLoader = `sass?${JSON.stringify(options)}`;

  switch (stage) {
    case 'develop': {
      config.removeLoader('sass');
      config.removeLoader('sassModules');

      config.loader('sass', {
        test: sassFiles,
        exclude: sassModulesFiles,
        loaders: ['style', 'css?sourceMap', sassLoader],
      });

      config.loader('sassModules', {
        test: sassModulesFiles,
        loaders: ['style', `${cssModulesConfig(stage)}&sourceMap=true`, sassLoader],
      });

      return config;
    }
    default: {
      return config;
    }
  }
};
