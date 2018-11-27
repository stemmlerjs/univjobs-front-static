import React from 'react'
import Link from 'gatsby-link'
import { CategoriesHeader, Post } from '../components/blog'
import { CallToAction } from '../components/shared';
import helpers from '../helpers'
import "../components/blog/styles/BlogIndex.sass"

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

class CategoryPage extends React.Component {
  render() {
    const category = this.props.pathContext.category;
    const posts = this.props.data.posts
      .edges.map((edge) => edge.node)
      .map((node) => Object.assign(
        {}, { excerpt: node.excerpt }, node.frontmatter, node.fields, 
        { timeToRead: node.timeToRead })
      )
      .filter((post) => post.category == category);
    const categories = helpers.blog.getCategoriesFromQuery(this.props.data.categories);

    return (
      <section>
        {
          posts.length == 0
            ? <NotFound/>
            : (<div className="blog-page-content-container">
                <CategoriesHeader
                  categories={categories}
                  currentCategory={category}
                />
                <div className="posts-container">
                  {posts.map((post, i) => (
                    <Post key={i} {...post}/>
                  ))}
                  <div style={{ height: '0px', width: '30%'}}></div>
                  <div style={{ height: '0px', width: '30%'}}></div>
                </div>
              </div>)
          }
          <CallToAction
            header={'Find your next job'}
            subHeader={'Students are already finding meaningful employment. Create your profile today!'}
            buttonText={'Sign up'}
            alt={true}
          />
      </section>
    )
  }
}

export default CategoryPage

export const categoryPageQuery = graphql`
  query CategoryPage($category: String) {
    posts: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { 
          frontmatter:  { 
            templateKey: {eq: "blog-post"},
            category: { eq: $category },
            category: { ne: null }
            public: { eq: true }
          } 
        }
      ){
          edges {
            node {
              excerpt(pruneLength: 250)
              timeToRead
              frontmatter {
                title
                date 
                description
                tags
                featured
                image
                category
              }
              fields {
                slug
              }
            }
          }
      }

      categories: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { 
          frontmatter: { 
            templateKey: { eq: "blog-post" }
            category: { ne: null }
            public: { eq: true }
          }
        }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              category
              parentcategory
            }
          }
        }
      }
    }
`