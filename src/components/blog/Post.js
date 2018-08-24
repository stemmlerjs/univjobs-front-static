import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import postStyles from '../../styles/Blog/Post.module.css'

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
  <div className={postStyles.imageContainer}>
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
  <div className={postStyles.sponsoredCompanyImage}>
    Sponsored by {companyName}
    <div style={{ backgroundImage: `url(${image})` }} />
  </div>
)

Sponsor.propTypes = {
  image: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
}

const Post = props => {
  return (
    <Link
      to={props.slug}
      style={{ textDecoration: 'none' }}
      className={postStyles.postContainer}
    >
      <PostImage image={props.image} />
      <div className={postStyles.textContainer}>
        {props.sponsored ? (
          <Sponsor
            image={props.sponsoredCompanyImage}
            companyName={props.sponsoredCompanyName}
          />
        ) : (
          ''
        )}
        <TimeToRead time={props.timeToRead} />
        <h3>{props.title}</h3>
        <div className={postStyles.readButton}>Read</div>
      </div>
    </Link>
  )
}

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timeToRead: PropTypes.string,
  sponsored: PropTypes.bool,
  sponsoredCompanyName: PropTypes.string,
  sponsoredCompanyImage: PropTypes.string,
}

export default Post
