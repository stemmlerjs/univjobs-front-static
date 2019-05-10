import React from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag';
import "../styles/Tags.sass"

const Tags = (props) => {
  if (props.tags && props.tags.length !== 0) {
    return (
      <div className="tags">
        { props.tags.map((tag, i) => <Tag name={tag} key={i}/>) }
      </div>
    )
  } else {
    return <div/>
  }
}

export default Tags;

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
}