
import React from 'react'
import { CallToAction } from '../components/shared';
import { Post, CategoriesHeader } from '../components/blog'
import helpers from '../helpers';
import "../components/blog/styles/BlogIndex.sass"

/**
 * @class Blog
 * @desc The main blog class. Responsible for holding all blog posts
 * in a 3x3 fashion, all popular posts, tools and categories.
 */

class Blog extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { data } = this.props;
    const posts = data.posts 
      ? data.posts
      .edges.map((edge) => edge.node)
      .map((node) => Object.assign(
        {}, { excerpt: node.excerpt }, node.frontmatter, node.fields, 
        { timeToRead: node.timeToRead })
      )
      : [];
    const categories = helpers.blog.getCategoriesFromQuery(data.categories);

    return (
      <section>
        <div className="blog-page-content-container">
          <CategoriesHeader
            categories={categories}
          />
          <div className="posts-container">
            {posts.map((post, i) => (
              <Post key={i} {...post}/>
            ))}
            <div style={{ height: '0px', width: '30%'}}></div>
            <div style={{ height: '0px', width: '30%'}}></div>
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
  }
}

export default Blog

export const blogPagesQuery = graphql`
  query BlogsPageMain {
    featuredPosts: allMarkdownRemark ( 
    	sort: { order: DESC, fields: [frontmatter___date]},
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post"},
          featured: { eq: true }
          public: { eq: true }
        }
      }
    ) {
      edges {
        node {
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title 
            date 
            description 
            tags
            featured 
            image 
            category
          }
        }
      }
    }
    
    posts: allMarkdownRemark( 
    	sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter:  { 
          templateKey: {eq: "blog-post"},
          public: { eq: true }
        } 
      }
      
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date 
            description
            tags
            featured
            image
            category
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
    
    tags: allMarkdownRemark(
      filter: { 
        frontmatter: { 
          templateKey: { 
            eq: "blog-post" 
          }
          tags: {
            ne: null
          }
          tags: {
            ne: ""
          }
        }
      }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
