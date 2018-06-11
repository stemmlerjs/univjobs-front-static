
import React from 'react'
import Link from 'gatsby-link'


import Divider from '../components/Divider'
import Slidy from '../components/Slidy'
import CallToAction from '../components/CallToAction'
import BlogCategoriesHeader from '../components/BlogCategoriesHeader'

import styles from '../styles/Blog.module.css'

import postStyles from '../styles/Blog/Post.module.css'

const FeaturedPostsItems = [
  { image: '' }
]



const FeaturedPosts = (props) => {
  return (
    <div>
      <Slidy
        elements={props.posts}
        component={'Featured posts'}
      />
    </div>
  )
}

const TimeToRead = (props) => {
  return (
    <div className={postStyles.timeToRead}>
      {props.time} minute read
    </div>
  )
}

const Post = (props) => {
  console.log('post', props.post)
  return (
    <Link 
      to={props.post.slug} 
      style={{ textDecoration: 'none' }}
      className={postStyles.postContainer}>
      <div 
        className={postStyles.imageContainer}>
        <div style={{
          backgroundImage: `url('${props.post.image}')`
        }}>
        </div>
      </div>
      <div className={postStyles.textContainer}>
        <TimeToRead time={props.post.timeToRead}/>
        <h3>{props.post.title}</h3>
        <div>{ props.post.description }</div>
      </div>
    </Link>
  )
}

const Posts = (props) => (
  <section className={postStyles.container}>
    <Divider/>
    <div style={{
          marginBottom: '3em',
          marginTop: '1em'
    }}/>
    {
      props.posts.map((post, index) => {
        return <Post key={index} post={post}/>
      })
    }
  </section>
)

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
    allMarkdownRemark(filter: { 
      frontmatter:  { templateKey: {eq: "blog-post"} } }
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