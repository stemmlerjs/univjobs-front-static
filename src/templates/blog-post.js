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
import CallToAction from '../components/CallToAction'

const BlogPostHeader = (props) => {
  console.log("blog post header props", props)
  return (
    <div className={styles.header}>
      <h1>{props.title}</h1>
      <div className={styles.subHeader}>{`${props.tags[0]} • ${props.timeToRead} minute read`}</div>
      <div>
        <img src={props.image}/>
      </div>
    </div>
  )
}

const BlogPostContent = (props) => {
  const PostContent = props.contentComponent;

  return (
    <div>
      <PostContent content={props.content} />
    </div>
  )
}

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  image,
  timeToRead
}) => {
  return (
    <section>

      {helmet || ''}

      <BlogCategoriesHeader/>
      <Divider/>

      <div className={styles.container}>
        <BlogPostHeader 
          title={title} 
          image={image}
          timeToRead={timeToRead}
          tags={tags}
        />
        <BlogPostContent 
          content={content}
          contentComponent={contentComponent}/>

        <ReactDisqusComments
          shortname="univjobs"
          identifier={title}
          title={title}
          url="https://nostalgic-bhaskara-eea0ad.netlify.com"
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

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      timeToRead={post.timeToRead}
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
    markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featured
        image
      }
    }
  }
`