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
      <div className={styles.subHeader}>{`${props.tags[0]} • ${props.timeToRead} minute read`}</div>
      <div>
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
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
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
      frontmatter
    } = this.props;

    return (
    <section>

      {helmet || ''}

      <SEO
        isBlogPost={true}
        postData= {{
          frontmatter: frontmatter,
          excerpt: description,
        }}
        postImage={image}
      />

      <BlogCategoriesHeader/>

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
          identifier={ getUniquePageIdentifier() }
          title={title}
          url={ getUniquePageIdentifier() }
          />
=
        
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

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data, pathContext }) => {
  const { markdownRemark: post } = data
  console.log(data, 'data')

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
      frontmatter={post.frontmatter}
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
        category
      }
    }
  }
`