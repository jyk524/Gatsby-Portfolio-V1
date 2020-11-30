import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node} />
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
// With this GraphQL query in place, Gatsby, fortunately, does all the remaining work behind the scenes. At build time, it will run the query, retrieve the content, and passes it as props to our index.js component.
