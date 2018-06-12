import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import BlogCategoriesHeader from '../components/BlogCategoriesHeader'
import Posts from '../components/Posts'
import styles from '../styles/Blog/Category.module.css'

const NotFound = () => {
  return (
    <div style={{
          maxWidth: '1200px',
    margin: '0 auto',
    paddingLeft: '1em',
    paddingRight: '1em'
    }}>
      <div>There aren't any posts in this category yet!</div>
      <Link to="/blog">Browse all posts</Link>
    </div>
  )
}

class CategoryPage extends React.Component {
  render() {
    console.log(this.props, "got categories page props")

    const category = this.props.pathContext.category;
    const posts = this.props.data.allMarkdownRemark
      .edges.map((edge) => edge.node)
      .map((node) => Object.assign(
        {}, { excerpt: node.excerpt }, node.frontmatter, node.fields, 
        { timeToRead: node.timeToRead })
      )
      .filter((post) => post.category == category);

    return (
      <section>
        <BlogCategoriesHeader/>
        <section>
          {
            posts.length == 0
              ? <NotFound/>
              : <h1 className={styles.title}>{category}</h1>
          }
          
          <Posts
            posts={posts}
          />
        </section>
      </section>
    )
  }
}

export default CategoryPage

export const categoryPageQuery = graphql`
  query CategoryPage($category: String) {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { 
          frontmatter:  { 
            templateKey: {eq: "blog-post"},
            category: { eq: $category },
            category: { ne: null }
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
              }
              fields {
                slug
              }
            }
          }
      }
    }
`