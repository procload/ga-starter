import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data.allContentfulBlogPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={`/blog/${node.slug}`}>
                                <h2>{node.title}</h2>
                                <p>{node.publishedDate}</p>
                            </Link>
          </div>
        ))}
    </Layout>
  )
}

export const query = graphql`
query {
  allContentfulBlogPost (
    sort: {
      fields: publishedDate,
      order:DESC
    }
  ) {
    edges {
      node {
        title
        slug
        publishedDate(formatString:"MMMM Do, YYYY")
      }
    }
  }
}
`