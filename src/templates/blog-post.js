import React from 'react'
import PropTypes from 'prop-types'
import { BlogPageLayout } from '../components/blog'
import helpers from '../helpers'
import { HotCompaniesExitModal } from '../components/shared/hot-companies-exit-modal';

/**
 * @class BlogPost
 * @desc A single blog post.
 */

export default ({ data }) => {
  let { post, categories } = data

  post = Object.assign({}, post, post.fields, post.frontmatter)
  categories = helpers.blog.getCategoriesFromQuery(categories)

  return (
    <div>
      <HotCompaniesExitModal/>
      <BlogPageLayout
        post={post}
        category={post.category}
        categories={categories}
      />
    </div>
   
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featured
        image
        category
        parentcategory
        author
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
  }
`
