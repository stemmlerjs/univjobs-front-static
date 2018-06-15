
import React from 'react'
import Link from 'gatsby-link'

import helpers from '../helpers'

import Divider from '../components/Divider'
import Slidy from '../components/Slidy'
import CallToAction from '../components/CallToAction'
import BlogCategoriesHeader from '../components/BlogCategoriesHeader'
import Posts from '../components/Posts'

import styles from '../styles/Blog.module.css'

const FeaturedPostsItems = [
  { image: '' }
]

const FeaturedPosts = (props) => {
  return (
    <div>
      <Slidy
        class={styles.sliderOverride}
        elements={props.posts}
        component={'Featured posts'}
        settings={{
          centerMode: false
        }}
      />
    </div>
  )
}

class Blog extends React.Component {
  constructor () {
    super();
  }

  render () {

    /**
     * Extract the featured posts, posts, tags, etc.
     */

    const data = this.props.data;
    console.log(data)

    const featuredPosts = data.featuredPosts
      .edges.map((edge) => edge.node)
      .map((node) => Object.assign(
        {}, { excerpt: node.excerpt }, node.frontmatter, node.fields, 
        { timeToRead: node.timeToRead })
      )

    const posts = data.posts
      .edges.map((edge) => edge.node)
      .map((node) => Object.assign(
        {}, { excerpt: node.excerpt }, node.frontmatter, node.fields, 
        { timeToRead: node.timeToRead })
      )

    const tags = helpers.blog.getTagsFromQuery(data.tags);

    const categories = helpers.blog.getCategoriesFromQuery(data.categories);

    return (
      <section>
        <BlogCategoriesHeader/>
        
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
    )
  }
}

export default Blog

export const blogPagesQuery = graphql`
  query BlogsPageMain {
    featuredPosts: allMarkdownRemark ( 
    	sort: { order: DESC, fields: [frontmatter___date]},
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post"},
          featured: { eq: true }
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
        frontmatter:  { 
          templateKey: {eq: "blog-post"},
          featured: { ne: true }
        } 
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
        }
      }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            category
          }
        }
      }
    }
    
    tags: allMarkdownRemark(
      filter: { 
        frontmatter: { 
          templateKey: { 
            eq: "blog-post" 
          }
          tags: {
            ne: null
          }
          tags: {
            ne: ""
          }
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