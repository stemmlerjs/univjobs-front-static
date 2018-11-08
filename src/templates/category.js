import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import BlogCategoriesHeader from '../components/BlogCategoriesHeader'
import Posts from '../components/Posts'
import styles from '../styles/Blog/Category.module.css'

import { CallToAction } from '../components/shared';

import helpers from '../helpers'

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
    const posts = this.props.data.posts
      .edges.map((edge) => edge.node)
      .map((node) => Object.assign(
        {}, { excerpt: node.excerpt }, node.frontmatter, node.fields, 
        { timeToRead: node.timeToRead })
      )
      .filter((post) => post.category == category);
    
    const categories = helpers.blog.getCategoriesFromQuery(this.props.data.categories);

    return (
      <section>
        <BlogCategoriesHeader
          categories={categories}
        />
        <section>
          {
            posts.length == 0
              ? <NotFound/>
              : <h1 className={styles.title}>{category}</h1>
          }
          
          <Posts
            posts={posts}
          />
          <CallToAction
            header={'Find your next job'}
            subHeader={'Students are already finding meaningful employment. Create your profile today!'}
            buttonText={'Sign up'}
            alt={true}
          />
        </section>
      </section>
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