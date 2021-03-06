import React from 'react'

import Link from 'gatsby-link'
import styles from '../styles/FeaturedBlogPost.module.css'

const FeaturedBlogPost = props => {
  return (
    <div className={styles.container}>
      <Link style={{ textDecoration: 'none' }} to={props.post.slug}>
        <div className={styles.mask} />
        <div className={styles.textContent}>
          <h2>{props.post.title}</h2>
          <p>{props.post.description}</p>
        </div>
        <div
          className={styles.imageContainer}
          style={{
            backgroundImage: `url("${props.post.image}")`,
          }}
        />
      </Link>
    </div>
  )
}

export default FeaturedBlogPost
