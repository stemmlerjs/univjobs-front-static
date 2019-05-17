import React from 'react'
import PropTypes from 'prop-types'
import { Content } from '../../shared/content'

import styles from '../styles/BlogPostPage.module.css'

const BlogPostContent = props => {
  const PostContent = props.contentComponent || Content
  return (
    <div>
      <PostContent className={styles.content} content={props.description} />
      <br />
      <PostContent className={styles.content} content={props.content} />
    </div>
  )
}

export default BlogPostContent;