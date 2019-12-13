import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
    <Layout>
      <SEO title="Home" />
      <h2>Latest Posts</h2>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id }>
      <h3>{ post.node.frontmatter.title }</h3>
      <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
      <br />
      <br />
      {/* !NEED TO FIX THIS LINK */}
      {/* <link to="{post.node.frontmatter.path}">READ MORE</link> */}
      <br />
      <br />
      <hr />
      </div>
      ))}
    </Layout>
  )
  
  export const pageQuery = graphql`
    query BlogIndexQeury {
        allMarkdownRemark {
            edges {
            node {
                frontmatter {
                path
                title
                date
                author
                }
                excerpt
            }
            }
        }
    }
    
  `
  export default BlogPage
