import React from 'react'
import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'
import '../styles/CategoriesHeader.sass'
import PropTypes from 'prop-types'

/**
 * @class CategoriesHeader
 * @desc The different types of categories that the blog
 * contains.
 */

const CategoriesHeader = ({ categories, currentCategory }) => {
  console.log(categories, 'categories')
  return (
    <div className="categories-header-container">
      {categories.map((category, i) => (
        <Link
          className={category === currentCategory ? 'active' : ''}
          key={i}
          to={`/blog/categories/${kebabCase(category)}`}
        >
          {category}
        </Link>
      ))}
    </div>
  )
}

CategoriesHeader.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCategory: PropTypes.string,
}

export default CategoriesHeader
