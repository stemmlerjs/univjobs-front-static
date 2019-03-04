import React from 'react'
import PropTypes from 'prop-types'
import { Post } from '../blog'

const CompanyArticles = props => {
  let articles = props.articles.map(article => {
    article.slug = article.fields.slug
    article.image = article.frontmatter.image
    article.title = article.frontmatter.title
    article.sponsored = article.frontmatter.sponsored
    article.sponsoredCompanyName = article.frontmatter.sponsoredCompanyName
    article.sponsoredCompanyImage = article.frontmatter.sponsoredCompanyImage
    article.description = article.excerpt

    delete article.frontmatter
    delete article.fields
    delete article.excerpt

    return article
  })

  return (
    <div className="company-articles">
      <div className="company-articles-container">
        <h3>Articles by {props.companyName}</h3>
        <div className="company-articles-list-wrapper">
          {articles.map((article, i) => (
            <Post key={i} {...article} />
          ))}
          <div style={{ width: '30%', height: 0 }} />
          <div style={{ width: '30%', height: 0 }} />
        </div>
      </div>
    </div>
  )
}

export default CompanyArticles

CompanyArticles.propTypes = {
  companyName: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      timeToRead: PropTypes.string,
      sponsored: PropTypes.bool,
      sponsoredCompanyName: PropTypes.string,
      sponsoredCompanyImage: PropTypes.string,
    })
  ),
}
