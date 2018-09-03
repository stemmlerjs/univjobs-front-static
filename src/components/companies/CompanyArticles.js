import React from 'react'
import PropTypes from 'prop-types'
import Post from '../blog/Post'

const CompanyArticles = (props) => {
  //if (props.articles != true) return <div/>;
  //if (props.articles.length === 0) return <div/>;
  return (
    <div className="company-articles">
      <div className="company-articles-container">
        <h3>Articles by {props.companyName}</h3>
        <div className="company-articles-list-wrapper">
          {
            props.articles.map((article, i) => (
              <Post key={i} {...article}/>
            ))        
          }
        </div>
      </div>
    </div>
  )
}

export default CompanyArticles;

CompanyArticles.propTypes = {
  companyName: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    timeToRead: PropTypes.string,
    sponsored: PropTypes.bool,
    sponsoredCompanyName: PropTypes.string,
    sponsoredCompanyImage: PropTypes.string,
  }))
}
