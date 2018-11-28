import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import postStyles from '../../../styles/Blog/Post.module.css'
import '../styles/Post.sass';
import moment from 'moment'

const TimeToRead = props => {
  if (!!props.timeToRead == false) return <div />
  return <div className={postStyles.timeToRead}>{props.time} minute read</div>
}

/**
 * PostImage
 *
 * @function The large image that gets shown.
 * @prop Image url
 */

const PostImage = ({ image }) => (
  <div className="image-container">
    <div
      style={{
        backgroundImage: `url('${image}')`,
      }}
    />
  </div>
)

PostImage.propTypes = {
  image: PropTypes.string.isRequired,
}

/**
 * Sponsor
 *
 * @function Sponsored user.
 */

const Sponsor = ({ image, companyName }) => (
  <div className="sponsored-company-blog-post-contianer">
    Sponsored by {companyName}
    <div className="sponsored-company-image-container">
      <div style={{ backgroundImage: `url(${image})` }} />
    </div>
  </div>
)

Sponsor.propTypes = {
  image: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
}

/**
 * @class Post
 * @desc Renders a single post
 */

const Post = props => {
  const { category, date } = props;
  return (
    <Link
      to={props.slug}
      style={{textDecoration: 'none'}}
      className="post-container"
    >
      <PostImage image={props.image} />
      <div className="text-container">
        {props.sponsored ? (
          <Sponsor
            image={props.sponsoredCompanyImage}
            companyName={props.sponsoredCompanyName}
          />
        ) : (
          ''
        )}
        <div className="post-category">{category}</div>
        <h3>{props.title}</h3>
        <div className="credits-and-date">By <span className="author-name">{props.author}</span> <span className="date">• {moment(date).format('MMM Do, YYYY')}</span> </div>
      </div>
    </Link>
  )
}

Post.propTypes = {
  category: PropTypes.string,
  date: PropTypes.string,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timeToRead: PropTypes.string,
  sponsored: PropTypes.bool,
  sponsoredCompanyName: PropTypes.string,
  sponsoredCompanyImage: PropTypes.string,
}

export default Post
