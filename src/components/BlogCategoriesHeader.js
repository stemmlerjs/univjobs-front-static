
import React from 'react'

import Divider from './Divider'
import Link from 'gatsby-link'

import styles from '../styles/Blog/Header.module.css'

const Tags = [
  { tag: 'All', url: '/blog', menu: null },
  { tag: 'Adulting 101', 
    menu: [
      { tag: 'Communication & Relationships', url: '/blog/categories/communication-relationships/' },
      { tag: "How To's", url: '/blog/categories/how-to-s/'},
      { tag: 'Personal Finances', url: '/blog/categories/personal-finances/' },
      { tag: 'Productivity', url: '/blog/categories/communication-relationships/' }
    ] 
  }, 
  { tag: 'Guides', url: '/blog/categories/guides', menu: null }, 
  // { tag: "Employer's Corner", menu: null }
]

const BlogTagItem = (props) => {

  return (
    <div className={styles.navItem}>
      {
        !!props.tag.url == true
          ? <Link to={props.tag.url}>{props.tag.tag}</Link>
          : <span>{props.tag.tag}</span>
      }
      {
        !!props.tag.menu == true
          ? <ul className={styles.subList}>
              {
                props.tag.menu.map((item, index) => {
                  return <li key={index}><Link to={item.url}>{item.tag}</Link></li>
                })
              }
            </ul>
          : ''
      }
    </div>
  )
}


const BlogCategoriesHeader = (props) => (
  <div className={styles.outerContainer}>
    <div className={styles.container}>
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