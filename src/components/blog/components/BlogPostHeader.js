import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/Blog/BlogPostPage.module.css'

const BlogPostHeader = props => {
  return (
    <div className={styles.header}>
      <h1>{props.title}</h1>
      <div className={styles.subHeader}>{`${
        !!props.parentCategory == true ? props.parentCategory + ' > ' : ''
      }${props.category} • ${props.timeToRead} minute read`}</div>
      <p>By {props.author}</p>
      <div className={styles.headerImageContainer}>
        <img src={props.image} />
      </div>
    </div>
  )
}

export default BlogPostHeader;

