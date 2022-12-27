import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout";
// Components
import {Link, graphql} from "gatsby"
import PostCard from "../components/structure/post-card";
import {Container, Row, Col} from "react-bootstrap";
// Utilities
import {startCase} from "lodash"
import Seo from "../components/structure/SEO";

const Authors = ({pageContext, data}) => {
  const {author} = pageContext
  const {edges, totalCount} = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } authored by ${startCase(author)}`

  return (
    <Layout>
      <Container>
        <Row>
          <h1 className="ml-4 mt-4">{tagHeader}</h1>
          <Row>
            {edges.map(({node}) => {
              return (
                <PostCard key={node.id} post={node}/>
              )
            })}
          </Row>
          <Col md={4}>
            <Link className="my-3 btn-dark btn" to="/authors">All authors</Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )

}

Authors.propTypes = {
  pageContext: PropTypes.shape({
    author: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Authors

export const pageQuery = graphql`
    query($author: String) {
        allMarkdownRemark(
            limit: 2000
            filter: { frontmatter: { author: { in: [$author] } } }
        ) {
            totalCount
            edges {
                node {
                    excerpt(format: PLAIN, pruneLength: 400)
                    frontmatter {
                        title
                        permalink
                        author
                        tag
                        featuredImage {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    height: 250
                                    formats: [AUTO, WEBP]
                                    width: 400
                                )
                            }
                        }   
                    }
                }
            }
        }
    }
`
export function Head({pageContext}) {
  return (
    <Seo title={"Pages authored by " + pageContext.author} />
  )
}