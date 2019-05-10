import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'
import moment from 'moment'
import { HTMLContent } from '../../../components/Content'
import Link from 'gatsby-link'
import "../styles/BlogPostTemplate.sass"

import charles from '../../../img/authors/charles.png'
import khalil from '../../../img/authors/khalil.png'
import trevor from '../../../img/authors/trevor.jpeg'
import Tag from '../../shared/tags/components/Tag';
import Tags from '../../shared/tags/components/Tags';

const postAuthors = {
  'Khalil Stemmler': {
    imageUrl: khalil,
    linkedIn: "https://www.linkedin.com/in/khalilstemmler/",
    github: 'https://github.com/stemmlerjs',
    instagram: 'https://instagram.com/stemmlerjs',
    about: `Full-stack JavaScript'r wizard, cat-lover and lifelong learner. Helping students and recent-grads find their first jobs @ Univjobs.`
  },
  'Charles Javelona': {
    imageUrl: charles,
    linkedIn: "https://www.linkedin.com/in/charles-javelona-3863296a/?originalSubdomain=ca",
    about: `Relentlessly resourceful. CEO @ Univjobs.`
  },
  "Trevor Dewan": {
    imageUrl: trevor,
    linkedIn: "https://www.linkedin.com/in/trevor-dewan-b2b74091?originalSubdomain=ca",
    about: `Marketing Consultant | Digital Certified | CMDC-Young Bloods Award Winner`
  }
}

const AuthorBlurb = ({ authorContent, author }) => (
  <div className="author-blurb">
    <div><img src={authorContent.imageUrl}/></div>
    <div className="author-blurb--content">
      <span>Written by</span>
      <h4>{author}</h4>
      <div>{authorContent.about}</div>
      <a href={authorContent.linkedIn}>Follow</a>
    </div>
  </div>
)

AuthorBlurb.propTypes = {
  authorContent: PropTypes.any,
  author: PropTypes.string.isRequired
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
        <Tags tags={props.tags}/>
        <PostAuthor date={props.date} author={props.author} />
        
      </div>
      <br/>
      <img src={props.image}/>

      <div className="post-description">{props.description}</div>
      <br/>
      <HTMLContent className="post-content" content={props.html}/>      
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

const BlogPostTemplate = (props) => {
  const { post } = props;
  const { author } = post;
  const authorContent = postAuthors[author];
  return (
    <div className="blog-post-container ">
        <BlogPostContent 
          {...post}
        />
        <br></br>
        {authorContent && <AuthorBlurb 
          authorContent={postAuthors[author]} 
          author={author}
        />}
        <br></br>
        <br></br>
        <ReactDisqusComments
          shortname="univjobs"
          identifier={ getUniquePageIdentifier() }
          title={post.title}
          url={ getUniquePageIdentifier() }
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
