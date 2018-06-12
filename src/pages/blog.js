
import React from 'react'
import Link from 'gatsby-link'


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
    const featuredPosts = data.allMarkdownRemark
      .edges.map((edge) => edge.node)
      .map((node) => Object.assign(
        {}, { excerpt: node.excerpt }, node.frontmatter, node.fields, 
        { timeToRead: node.timeToRead })
      )
      .filter((node) => node.featured)

    const regularPosts = data.allMarkdownRemark
      .edges.map((edge) => edge.node)
      .map((node) => Object.assign(
        {}, { excerpt: node.excerpt }, node.frontmatter, node.fields, 
        { timeToRead: node.timeToRead })
      )
      .filter((node) => !node.featured)

    return (
      <section>
        <BlogCategoriesHeader/>
        <FeaturedPosts
          posts={featuredPosts}
        />
        
        <Posts
          posts={regularPosts}
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
  query Blog {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { 
      frontmatter:  { templateKey: {eq: "blog-post" } } }
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