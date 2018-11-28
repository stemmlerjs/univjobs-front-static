import React from 'react'
import Link from 'gatsby-link'
import { BlogPageLayout } from '../components/blog'
import helpers from '../helpers'

class CategoryPage extends React.Component {
  render() {
    const category = this.props.pathContext.category;
    const posts = this.props.data.posts
      .edges.map((edge) => edge.node)
      .map((node) => Object.assign(
        {}, { excerpt: node.excerpt }, node.frontmatter, node.fields, 
        { timeToRead: node.timeToRead })
      )
      .filter((post) => post.category == category);
    const categories = helpers.blog.getCategoriesFromQuery(this.props.data.categories);

    return (
      <BlogPageLayout
        categories={categories}
        posts={posts}
        category={category}
      />
    )
  }
}

export default CategoryPage

export const categoryPageQuery = graphql`
  query CategoryPage($category: String) {
    posts: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { 
          frontmatter:  { 
            templateKey: {eq: "blog-post"},
            category: { eq: $category },
            category: { ne: null }
            public: { eq: true }
          } 
        }
      ){
          edges {
            node {
              excerpt(pruneLength: 250)
              timeToRead
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
              fields {
                slug
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
    }
`