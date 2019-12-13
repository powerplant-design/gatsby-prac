import React from 'react'
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Template({data}) {
    const post = data.markdownRemark

    return (
        <Layout>
            <div>
                <Link to="/blog">GO BACK</Link>
                <hr />
                <h2>{post.frontmatter.title}</h2>
                <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
                <div dangerouslySetInnerHTML={{__html: post.html}}></div>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path} }){
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`

