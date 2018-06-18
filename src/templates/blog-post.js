import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

import BlogCategoriesHeader from '../components/BlogCategoriesHeader'
import Divider from '../components/Divider'

import styles from '../styles/Blog/BlogPostPage.module.css'

import ReactDisqusComments from 'react-disqus-comments';
import CallToAction from '../components/CallToAction';

import SEO from '../components/SEO'

import helpers from '../helpers'

function getUniquePageIdentifier () {
  return typeof window !== 'undefined' && window.location.href
      ? typeof window !== 'undefined' && window.location.href
      : 'https://nostalgic-bhaskara-eea0ad.netlify.com'
}

const BlogPostHeader = (props) => {
  console.log("blog post header props", props)
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
  const PostContent = props.contentComponent;
  console.log(PostContent, "content")

  return (
    <div>
      <div 
        className={styles.content} 
        dangerouslySetInnerHTML={{ __html: props.description }} 
      />
      <br/>
      <div 
        className={styles.content} 
        dangerouslySetInnerHTML={{ __html: props.content }} 
      />
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
    <section>

      {helmet || ''}

      <BlogCategoriesHeader
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
// Test again and compress all images

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data, pathContext }) => {
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