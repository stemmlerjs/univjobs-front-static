import React from 'react'
import PropTypes from 'prop-types'
import "../styles/RecentBlogPosts.sass"
import helpers from '../../../helpers';
import Post from '../../blog/components/Post';
import Link from 'gatsby-link'
import arrow from '../../../img/icons/left-arrow.svg'


class RecentBlogPosts extends React.Component {
  constructor (props) {
    super(props);
  }

  filterRawPosts () {
    const { rawPosts } = this.props;
    const posts = helpers.blog.getPostsFromQuery(rawPosts);
    return posts.filter((post) => [
      "Recruitment"
    ].indexOf(post.category) === -1)
    .splice(0, 3)
  }

  render () {
    const recentPosts = this.filterRawPosts();
    
    return (
      <div className="recent-blog-posts">
        <h3>Recent articles</h3>
        <p>The freshest guides and resources on how to land the job, keep the job and keep on growin' 🌱</p>
        <Link to="/blog">See more <img src={arrow}></img></Link>

        <div className="posts-container">
          {recentPosts.map((post, i) => (
            <Post key={i} {...post}/>
          ))}
        </div>
      </div>
    )
  }
}

export default RecentBlogPosts;

RecentBlogPosts.propTypes = {
  rawPosts: PropTypes.array.isRequired
}

export const recentBlogPostsQuery = graphql`
  query RecentBlogPosts {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { 
          templateKey: { eq: "blog-post" }, 
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
            author
          }
        }
      }
    }
  }
`
