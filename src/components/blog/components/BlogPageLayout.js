import React from 'react'
import PropTypes from 'prop-types'
import { CallToAction } from '../../shared';
import CategoriesHeader from './CategoriesHeader'
import BlogPostTemplate from './BlogPostTemplate'
import Post from './Post'
import Link from 'gatsby-link'
import "../styles/BlogIndex.sass"

import popular from '../../../img/blog/ic_trending_up_24px.svg'
import tools from '../../../img/blog/ic_tag_faces_24px.svg'

const NotFound = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      paddingLeft: '1em',
      paddingRight: '1em'
    }}>
      <div>There aren't any posts in this category yet!</div>
      <Link to="/blog">Browse all posts</Link>
    </div>
  )
}

/**
 * @class BlogPage
 * @desc This component can be used on:
 * - main blog page
 * - categories blog page
 * - blog template page.
 * 
 * It's pretty much the blog page LAYOUT template.
 */

const BlogPageLayout = ({ post, posts, categories, category }) => (
  <section style={{ padding: 0 }}>
    <div className="blog-page-content-container">
      <div className="blog-page-content-container-inner">
        <CategoriesHeader
          categories={categories}
          currentCategory={category}
        />
        <div className="content-flex">
          {post ? (
            <BlogPostTemplate 
              post={post} 
              categories={categories}
            />
          ) : posts.length === 0 ? (
            <NotFound/>
          ) : (
            <div className="posts-container">
              {posts.map((post, i) => (
                <Post key={i} {...post}/>
              ))}
              <div className="post-container" style={{ height: '0px', width: '30%'}}></div>
              <div className="post-container" style={{ height: '0px', width: '30%'}}></div>
            </div>
          )}
          <div className="sidebar-container">
            <section>
              <div className="sidebar-element-title-container">
                <img src={popular}/>Popular
              </div>
              <a className="sidebar-element">How to Land a Recent Grad Job</a>
              <a className="sidebar-element">What is Univjobs?</a>
              <a className="sidebar-element">How to Survive Working a Part-Time Job While Studying Full-Time</a>
            </section>
            <section>
              <div className="sidebar-element-title-container">
                <img src={tools}/>Tools for Students
              </div>
              <a className="sidebar-element">Companies Near Me</a>
              <a className="sidebar-element">Build a Resume</a>
            </section>
            
          </div>
        </div>
      </div>
    </div>
      <CallToAction
        header={'Find your next job'}
        subHeader={'Students are already finding meaningful employment. Create your profile today!'}
        buttonText={'Sign up'}
        alt={true}
      />
  </section>
)

BlogPageLayout.propTypes = {
  post: PropTypes.object,
  posts: PropTypes.array,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string
}

export default BlogPageLayout;