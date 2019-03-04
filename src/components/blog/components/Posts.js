import React from 'react'
import Link from 'gatsby-link'
import Post from './Post'
import postStyles from '../../../styles/Blog/Post.module.css'

const Posts = props => (
  <section className={postStyles.container}>
    <div
      style={{
        marginBottom: '3em',
        marginTop: '1em',
      }}
    />
    {props.posts.map((post, index) => {
      return <Post key={index} {...post} />
    })}
  </section>
)

export default Posts
