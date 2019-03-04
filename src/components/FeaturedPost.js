import React from 'react'
import Link from 'gatsby-link'

import styles from '../styles/Blog/FeaturedPost.module.css'

const FeaturedPost = ({ posts }) => {
  // If there aren't any featured posts, we'll just return nothing.
  if (posts.length == 0) return <div />

  // If there are posts, then we'll choose one at random.
  let min = 0
  let max = posts.length - 1
  let rand = Math.floor(Math.random() * (max - min + 1) + min)

  let post = posts[rand]

  return (
    <Link
      style={{
        textDecoration: 'none',
      }}
      to={post.slug}
    >
      <div
        style={{
          backgroundImage: `url("${post.image}")`,
        }}
        className={styles.container}
      >
        <div className={styles.content}>
          <div className={styles.mask} />
          <div className={styles.content}>
            <div className={styles.featured}>Featured</div>
            <h2 className={styles.title}>{post.title}</h2>
            <button className={styles.readMore}>Read</button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedPost
