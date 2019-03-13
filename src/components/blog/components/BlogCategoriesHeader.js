import React from 'react'

import Divider from '../../Divider'
import Link from 'gatsby-link'

import styles from '../../../styles/Blog/Header.module.css'

import kebabCase from 'lodash/kebabCase'

const Tags = [
  { tag: 'All', url: '/blog', menu: null },
  {
    tag: 'Adulting 101',
    menu: [
      {
        tag: 'Communication & Relationships',
        url: '/blog/categories/communication-relationships/',
      },
      { tag: "How To's", url: '/blog/categories/how-to-s/' },
      { tag: 'Personal Finances', url: '/blog/categories/personal-finances/' },
      {
        tag: 'Productivity',
        url: '/blog/categories/communication-relationships/',
      },
    ],
  },
  { tag: 'Guides', url: '/blog/categories/guides', menu: null },
  // { tag: "Employer's Corner", menu: null }
]

const BlogTagItem = props => {
  return (
    <div className={styles.navItem}>
      {!!props.tag.url == true ? (
        <Link to={props.tag.url}>{props.tag.tag}</Link>
      ) : (
        <span>{props.tag.tag}</span>
      )}
      {!!props.tag.menu == true ? (
        <ul className={styles.subList}>
          {props.tag.menu.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url}>{item.tag}</Link>
              </li>
            )
          })}
        </ul>
      ) : (
        ''
      )}
    </div>
  )
}

const MobileCategoriesNav = ({ categories, navOpen, handleToggleNav }) => {
  return (
    <div className={styles.mobileCategoriesNav}>
      <div
        onClick={() => handleToggleNav()}
        className={styles.mobileCategoryHeader}
      >
        Categories <i className={'fa fa-angle-down'} />
      </div>

      <div
        className={
          navOpen
            ? `${styles.mobileCategoryListContainer} ${styles.open}`
            : styles.mobileCategoryListContainer
        }
      >
        <div className={styles.mobileCategoryListParent}>
          <Link to={`/blog`} className={styles.parentTitle}>
            All
          </Link>
        </div>

        {!!categories == true
          ? Object.keys(categories)
              .sort()
              .map((key, index) => {
                return (
                  <div key={index} className={styles.mobileCategoryListParent}>
                    <div className={styles.parentTitle}>{key}</div>
                    <div>
                      {categories[key].map((childKey, index) => {
                        return (
                          <Link
                            to={`/blog/categories/${kebabCase(childKey)}`}
                            className={styles.childTitle}
                            key={index}
                          >
                            {childKey}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              })
          : ''}
      </div>
    </div>
  )
}

class BlogCategoriesHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      navOpen: false,
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState({
      ...this.state,
      navOpen: !this.state.navOpen,
    })
  }

  render() {
    return (
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          {this.props.categories ? (
            <MobileCategoriesNav
              categories={this.props.categories}
              navOpen={this.state.navOpen}
              handleToggleNav={this.toggleNav}
            />
          ) : (
            ''
          )}
        </div>
        <Divider />
      </div>
    )
  }
}

export default BlogCategoriesHeader
