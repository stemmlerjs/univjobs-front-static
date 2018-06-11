import React from 'react'

import Link from 'gatsby-link'

const FeaturedBlogPost = (props) => {
  console.log(props, "prop")
  return (
    <div>
      <Link to={props.post.slug}>
        <div>
          <img src={props.post.image}/>
        </div>
      </Link>
    </div>
  )
}

export default FeaturedBlogPost