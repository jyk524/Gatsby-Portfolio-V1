import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
  }
`
