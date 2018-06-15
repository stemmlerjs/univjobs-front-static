
import React from 'react'
import Divider from '../components/Divider'
import Link from 'gatsby-link'
import postStyles from '../styles/Blog/Post.module.css'

const TimeToRead = (props) => {
  return (
    <div className={postStyles.timeToRead}>
      {props.time} minute read
    </div>
  )
}

const Post = (props) => {
  console.log(props, "post props")
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
      </div>
    </Link>
  )
}

const Posts = (props) => (
  <section className={postStyles.container}>
    <div style={{
          marginBottom: '3em',
          marginTop: '1em'
    }}/>
    {
      props.posts.map((post, index) => {
        return <Post 
          key={index} 
          post={post}
        />
      })
    }
  </section>
)

export default Posts;