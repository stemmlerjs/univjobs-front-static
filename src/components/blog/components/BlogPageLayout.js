import React from 'react'
import PropTypes from 'prop-types'
import { CallToAction } from '../../shared'
import CategoriesHeader from './CategoriesHeader'
import BlogPostTemplate from './BlogPostTemplate'
import Post from './Post'
import Link from 'gatsby-link'
import SEO from '../../../components/SEO'
import '../styles/BlogIndex.sass'

import popular from '../../../img/blog/ic_trending_up_24px.svg'
import tools from '../../../img/blog/ic_tag_faces_24px.svg'

const NotFound = () => {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingLeft: '1em',
        paddingRight: '1em',
      }}
    >
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
        {post ? (
          // Blog post page
          <SEO
            postData={{
              title: `${post.title} | Univjobs Blog`,
              description: post.description,
              slug: post.slug,
            }}
            postImage={post.image}
            isBlogPost={true}
          />
        ) : (
          // Main blog page, categories pages, etc.
          <SEO
            postData={{
              title: 'Univjobs Blog | Updates, Guides and Resources',
              description:
                'Get the latest announcements from Univjobs. Stay up to date, get inspired, read tips and success stories.',
            }}
            isBlogPost={false}
          />
        )}
        <CategoriesHeader categories={categories} currentCategory={category} />
        <div className="content-flex">
          {post ? (
            <BlogPostTemplate post={post} categories={categories} />
          ) : posts.length === 0 ? (
            <NotFound />
          ) : (
            <div className="posts-container">
              {posts.map((post, i) => (
                <Post key={i} {...post} />
              ))}
              <div
                className="post-container"
                style={{ height: '0px', width: '30%' }}
              />
              <div
                className="post-container"
                style={{ height: '0px', width: '30%' }}
              />
            </div>
          )}
          <div className="sidebar-container">
            <section>
              <div className="sidebar-element-title-container">
                <img src={popular} />
                Popular
              </div>
              <Link
                to="/blog/top-3-jobs-you-can-do-while-at-school-in-the-gta/"
                className="sidebar-element"
              >
                Top 3 Jobs You Can Do While At School in the GTA
              </Link>
              {/* <a className="sidebar-element">How to Land a Recent Grad Job</a> */}
              <Link to="/about" className="sidebar-element">
                What is Univjobs?
              </Link>
              {/* <a className="sidebar-element">How to Survive Working a Part-Time Job While Studying Full-Time</a> */}
            </section>
            <section>
              <div className="sidebar-element-title-container">
                <img src={tools} />
                Tools for Students
              </div>
              <Link to="/companies/directory" className="sidebar-element">
                Companies Near Me
              </Link>
              <Link
                to="/blog/here-s-a-simple-resume-format"
                className="sidebar-element"
              >
                Build a Resume
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
    <CallToAction
      header={'Find your next job'}
      subHeader={
        'Students are already finding meaningful employment. Create your profile today!'
      }
      buttonText={'Sign up'}
      alt={true}
    />
  </section>
)

BlogPageLayout.propTypes = {
  post: PropTypes.object,
  posts: PropTypes.array,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string,
}

export default BlogPageLayout
