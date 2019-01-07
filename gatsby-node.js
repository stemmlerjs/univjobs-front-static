const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const {cssModulesConfig} = require('gatsby-1-config-css-modules');

/**
 * createCityJobsSlug
 * @desc Creates the city job slug.
 * @param {String} city
 * @param {String} job type
 * @return {String}
 */

const createCityJobsSlug = (city, jobType) => {
  switch (jobType) {
    case "Part-time work":
      return `/jobs/${_.kebabCase('part time jobs')}-in-${_.kebabCase(city)}/`
    case "Volunteer":
      return `/jobs/${_.kebabCase('volunteer-jobs')}-in-${_.kebabCase(city)}/`
    case "Summer 2018":
      return `/jobs/${_.kebabCase('summer jobs')}-in-${_.kebabCase(city)}/` 
    case "Campus Rep & Brand Ambassador":
      return `/jobs/${_.kebabCase('campus rep jobs')}-in-${_.kebabCase(city)}/`
    case "Entry-level":
      return `/jobs/${_.kebabCase('entry-level-jobs')}-in-${_.kebabCase(city)}/`
    default:
      return `/jobs/${_.kebabCase(jobType)}-in-${_.kebabCase(city)}/`
  }
}

/**
 * @class createLandingPages
 */

const createLandingPages = (landingPages, createPage) => {
  landingPages.forEach(edge => {
    const id = edge.node.id;
    
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`src/templates/landing-page.js`),
      context: {
        id
      }
    })
  })
}

const createCityPages = (cities, createPage) => {
  cities.forEach(edge => {
    const city = edge.node.name;
    
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`src/templates/city.js`),
      context: {
        city
      }
    })
  })
}

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

/**
 * createDirectoryCompanyPages
 * 
 * @function create all directory company nodes
 */

const createDirectoryCompanyPages = (companies, createPage) => {
  companies.forEach(edge => {
    const companyId = edge.node.companyId;
    
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`src/templates/directory-company.js`),
      context: {
        companyId
      }
    })
  })
}

/**
 * createCompanyPages
 * 
 * @function creates all company pages
 * @param {Array<Edge>}
 */

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

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      landingPages: allMarkdownRemark(filter: {
        frontmatter: {
          templateKey: {
            eq: "landing-page"
          }
        }
      }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              templateKey
              targetUserType
              heroTitle
              heroSubTitle
              heroButtonText
              heroImage
              ctaOneHeader
              ctaOneSubText
              ctaOneButtonText
              featureOneHeader
              featureOneSubTitle
              featureOneParagraphOne
              featureOneParagraphTwo
              featureTwoHeader
              featureTwoSubTitle
              featureTwoParagraphOne
              featureTwoParagraphTwo
              featureThreeHeader
              featureThreeSubTitle
              featureThreeParagraphOne
              featureThreeParagraphTwo
              ctaTwoHeader
              ctaTwoSubText
              ctaTwoButtonText
              ctaThreeHeader
              ctaThreeSubText
              ctaThreeButtonText
            }
          }
        }
      } 
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

      directoryCompanies: allDirectoryCompany(limit: 1000) {
        edges {
          node {
            fields {
              slug
              exploreSlug
            }
            id
            industries {
              industry_id
              industry_text
            }
            jobs {
              title
              slug
              active
            }
            companyId
            companyName
            about
            logoUrl
            address
            companySize {
              value
              label
            }
            feature
            exploreSlug
            position {
              lat
              lng
            }
            hiring
          }
        }
      }

      cities: allCity(limit: 1000) {
        edges {
          node {
            name
            id
            fields {
              slug
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
            industries {
              industry_text
              industry_id
            }
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

    // Create directory company pages
    createDirectoryCompanyPages(result.data.directoryCompanies.edges, createPage)

    // Create city pages
    createCityPages(result.data.cities.edges, createPage);

    // Create landing pages
    createLandingPages(result.data.landingPages.edges, createPage);

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

  else if (node.internal.type === "DirectoryCompany") {
    createNodeField({
      name: 'slug',
      node,
      value: `/companies/directory/${_.kebabCase(node.companyName)}/`
    })
    if (node.feature) {
      createNodeField({
        name: 'exploreSlug',
        node,
        value: `/companies/${_.kebabCase(node.companyName)}/`
      })
    }
  }

  else if (node.internal.type === "City") {
    // If the city has jobs, then we're going to create slugs
    // for all of those cities and all of the job types for
    // those cities.

    if (node.jobs) {
      const jobSlugs = [];
      for (let job of node.jobs) {
        jobSlugs.push(createCityJobsSlug(node.name, job.job_type));
      }

      for (let slug of _.uniq(jobSlugs)) {
        createNodeField({
          name: 'slug',
          node,
          value: createCityJobsSlug(slug)
        })
      }
    } 

    // We're also going to keep it basic.
    console.log(`/jobs/student-jobs-in-${_.kebabCase(node.name)}/`)
      createNodeField({
        name: 'slug',
        node,
        value: `/jobs/student-jobs-in-${_.kebabCase(node.name)}/`
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

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat(
    ['transform-regenerator'],
    ['transform-runtime']
  ),
})

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /univjobs-ui-components/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}