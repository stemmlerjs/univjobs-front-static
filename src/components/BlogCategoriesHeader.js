
import React from 'react'

import Divider from './Divider'

import headerStyles from '../styles/Blog/Header.module.css'

const Tags = [
  { tag: 'All', menu: null }, 
  { tag: 'Adulting 101', 
    menu: [
      { tag: 'Communication & Relationships' },
      { tag: "How To's"},
      { tag: 'Personal Finance' },
      { tag: 'Productivity'}
    ] 
  }, 
  { tag: 'Guides', menu: null }, 
  { tag: "Employer's Corner", menu: null }
]

const BlogTagItem = (props) => {
  return (
    <div>{ props.tag.tag }</div>
  )
}

const BlogCategoriesHeader = (props) => (
  <div className={headerStyles.outerContainer}>
    <div className={headerStyles.container}>
      {
        Tags.map((tag, index) => {
          return <BlogTagItem key={index} tag={tag}/>
        })
      }
    </div>
    <Divider/>
  </div>
)

export default BlogCategoriesHeader