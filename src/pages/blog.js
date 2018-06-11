
import React from 'react'
import Link from 'gatsby-link'


import Divider from '../components/Divider'
import Slidy from '../components/Slidy'

import styles from '../styles/Blog.module.css'
import headerStyles from '../styles/Blog/Header.module.css'
import postStyles from '../styles/Blog/Post.module.css'

const Tags = [
  { tag: 'All', menu: null }, 
  { tag: 'Adulting 101', 
    menu: [
      { tag: 'Communication & Relationships' },
      { tag: "How To's"},
      { tag: 'Personal Finance' },
      { tag: 'Productivity'}
    ] 
  }, 
  { tag: 'Guides', menu: null }, 
  { tag: "Employer's Corner", menu: null }
]

const FeaturedPostsItems = [
  { image: '' }
]

const BlogTagItem = (props) => {
  return (
    <div>{ props.tag.tag }</div>
  )
}

const Header = (props) => (
  <div className={headerStyles.container}>
    {
      props.tags.map((tag, index) => {
        return <BlogTagItem key={index} tag={tag}/>
      })
    }
  </div>
)

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
          <img src={props.post.image}/>
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
        <Header 
          tags={Tags}
        />
        <FeaturedPosts
          posts={featuredPosts}
        />

        <div>
          <Divider/>
          <Posts
            posts={regularPosts}
          />
        </div>
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
            }
            fields {
              slug
            }
          }
        }
    }
  }
`