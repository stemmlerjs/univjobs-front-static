import React from 'react'
import { BlogPageLayout } from '../components/blog'
import helpers from '../helpers'

/**
 * @class Blog
 * @desc The main blog class. Responsible for holding all blog posts
 * in a 3x3 fashion, all popular posts, tools and categories.
 */

class Blog extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props
    const posts = data.posts
      ? data.posts.edges
          .map(edge => edge.node)
          .map(node =>
            Object.assign(
              {},
              { excerpt: node.excerpt },
              node.frontmatter,
              node.fields,
              { timeToRead: node.timeToRead }
            )
          )
      : []
    const categories = helpers.blog.getCategoriesFromQuery(data.categories)

    return <BlogPageLayout posts={posts} categories={categories} />
  }
}

export default Blog

export const blogPagesQuery = graphql`
  query BlogsPageMain {
    featuredPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          featured: { eq: true }
          public: { eq: true }
        }
      }
    ) {
      edges {
        node {
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            tags
            featured
            image
            category
          }
        }
      }
    }

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { templateKey: { eq: "blog-post" }, public: { eq: true } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            tags
            featured
            image
            category
            author
          }
        }
      }
    }

    categories: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          category: { ne: null }
          public: { eq: true }
        }
      }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            category
            parentcategory
          }
        }
      }
    }

    tags: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          tags: { ne: null }
          tags: { ne: "" }
        }
      }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
