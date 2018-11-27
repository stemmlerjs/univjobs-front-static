import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import { CategoriesHeader } from '../components/blog'
import ReactDisqusComments from 'react-disqus-comments';
import { CallToAction } from '../components/shared';
import SEO from '../components/SEO'
import helpers from '../helpers'

import styles from '../styles/Blog/BlogPostPage.module.css'

function getUniquePageIdentifier () {
  return typeof window !== 'undefined' && window.location.href
      ? typeof window !== 'undefined' && window.location.href
      : 'https://nostalgic-bhaskara-eea0ad.netlify.com'
}
    

const BlogPostHeader = (props) => {
  return (
    <div className={styles.header}>
      <h1>{props.title}</h1>
      <div className={styles.subHeader}>{`${
        !!props.parentCategory == true
        ? props.parentCategory + " > "
        : ''}${props.category} • ${props.timeToRead} minute read`}</div>
      <p>By {props.author}</p>
      <div className={styles.headerImageContainer}>
        <img src={props.image}/>
      </div>
    </div>
  )
}

const BlogPostContent = (props) => {
  const PostContent = props.contentComponent || Content;
  console.log(PostContent, "content")

  return (
    <div>
      <PostContent className={styles.content} content={props.description}/>
      <br/>
      <PostContent className={styles.content} content={props.content}/>      
    </div>
  )
}

export class BlogPostTemplate extends React.Component {
  constructor () {
    super();
  }

  componentDidMount () {
  }

  render () {
    const {
      content,
      contentComponent,
      description,
      tags,
      title,
      helmet,
      image,
      timeToRead,
      frontmatter,
      category,
      author,
      parentCategory,
      categories
    } = this.props;

    return (
    <section className="blog-post">

      {helmet || ''}

      <CategoriesHeader
        categories={categories}
      />

      <div className={styles.container}>
        <BlogPostHeader 
          title={title} 
          image={image}
          timeToRead={timeToRead}
          tags={tags}
          category={category}
          parentCategory={parentCategory}
          author={author}
        />
        <BlogPostContent 
          content={content}
          description={description}
          contentComponent={contentComponent}/>

        <ReactDisqusComments
          shortname="univjobs"
          identifier={ getUniquePageIdentifier() }
          title={title}
          url={ getUniquePageIdentifier() }
          />
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


// Test

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

/**
 * @class BlogPost
 * @desc A single blog post.
 */

const BlogPost = ({ data }) => {
  let { post, categories } = data;

  post = Object.assign({}, post, post.fields, post.frontmatter)
  categories = helpers.blog.getCategoriesFromQuery(categories);

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.description}
      helmet={
        <SEO 
          isBlogPost={true}
          postData={post}
          postImage={post.image}
          title={post.title}
        />}
      tags={post.tags}
      title={post.title}
      image={post.image}
      timeToRead={post.timeToRead}
      frontmatter={post}
      category={post.category}
      parentCategory={post.parentCategory}
      author={post.author}
      categories={categories}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featured
        image
        category
        parentcategory
        author
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