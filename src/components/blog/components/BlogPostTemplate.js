import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'
import moment from 'moment'
import Content, { HTMLContent } from '../../../components/Content'
import '../styles/BlogPostTemplate.sass'

import charles from '../../../img/authors/charles.png'
import khalil from '../../../img/authors/khalil.jpg'

const postAuthors = {
  'Khalil Stemmler': {
    imageUrl: khalil,
    linkedIn: 'https://www.linkedin.com/in/khalilstemmler/',
  },
  'Charles Javelona': {
    imageUrl: charles,
    linkedIn:
      'https://www.linkedin.com/in/charles-javelona-3863296a/?originalSubdomain=ca',
  },
}

const getUniquePageIdentifier = () => {
  return typeof window !== 'undefined' && window.location.href
    ? typeof window !== 'undefined' && window.location.href
    : 'https://nostalgic-bhaskara-eea0ad.netlify.com'
}

/**
 * @class PostAuthor
 * @desc Post author picture, date and time of post.
 */

const PostAuthor = ({ date, author }) => (
  <div className="post-credits">
    {postAuthors[author] ? (
      <div className="author-image-container">
        <a href={postAuthors[author].linkedIn}>
          <img src={postAuthors[author].imageUrl} />
        </a>
      </div>
    ) : (
      ''
    )}
    <div className="credits-and-date">
      By&nbsp;
      <span className="author-name">{author}</span>{' '}
      <span className="date">
        •&nbsp;
        {moment(date).format('MMM Do, YYYY')}
      </span>
    </div>
  </div>
)

PostAuthor.propTypes = {
  date: PropTypes.string,
  author: PropTypes.string,
}

/**
 * @class BlogPostContent
 * @desc This is the blog post content. It contains the HTML,
 * the description, the title, everything.
 */

const BlogPostContent = props => {
  return (
    <div className="post-content-container">
      <div className="post-header">
        {/* <div className="post-category">{props.category}</div> */}
        <h1>{props.title}</h1>
        <PostAuthor date={props.date} author={props.author} />
      </div>
      <br />
      <img src={props.image} />
      <div>{props.description}</div>
      <br />
      <HTMLContent className="post-content" content={props.html} />
    </div>
  )
}

BlogPostContent.propTypes = {
  description: PropTypes.string,
  html: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  author: PropTypes.string,
}

/**
 * @class BlogPostTemplate
 * @desc This is the actual blog post template.
 * It will render a blog post properly.
 */

const BlogPostTemplate = props => {
  const { post } = props
  console.log(props)
  return (
    <div className="blog-post-container ">
      <BlogPostContent {...post} />
      <ReactDisqusComments
        shortname="univjobs"
        identifier={getUniquePageIdentifier()}
        title={post.title}
        url={getUniquePageIdentifier()}
      />
    </div>
  )
}

BlogPostTemplate.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default BlogPostTemplate
