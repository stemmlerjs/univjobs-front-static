import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/Press.module.css'

/**
 * Mention
 *
 * A single instance of a mention from the press.
 */

const Mention = props => {
  return (
    <a
      className={styles.mention}
      href={props.link}
      style={{ textDecoration: 'none' }}
    >
      <div className={styles.mentionImageContainer}>
        <img src={props.img} />
      </div>

      <div className={styles.mentionsBody}>
        <div className={styles.mentionTitle}>{props.title}</div>
        <div className={styles.mentionAuthor}>{props.author}</div>
      </div>
    </a>
  )
}

Mention.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

/**
 * Mentions
 *
 * Lists all of the press mentions that we have.
 */

const Mentions = ({ mentions }) => {
  return (
    <section>
      <h1>Press mentions</h1>
      {mentions.map((mention, index) => {
        return (
          <Mention
            key={index}
            title={mention.title}
            img={mention.image}
            author={mention.author}
            link={mention.link}
          />
        )
      })}
    </section>
  )
}

Mentions.propTypes = {
  mentions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Mentions
