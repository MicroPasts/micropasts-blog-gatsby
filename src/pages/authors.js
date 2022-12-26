import React from "react"
import PropTypes from "prop-types"
import Seo from "../components/structure/SEO";

// Utilities
import {kebabCase, startCase} from "lodash"

// Components
import { Link, graphql } from "gatsby"
import Layout  from "../components/layout"
import {Container,Row} from "react-bootstrap"

const AuthorsPage = ({
                    data: {
                      allMarkdownRemark: { group },
                      site: {
                        siteMetadata: { title },
                      },
                    },
                  }) => (
  <Layout>
    <Container>
      <Row className={"post-body"}>
        <h1 className="ml-4 mt-4">Tags</h1>
        <ul className="list-group-flush row">
          {group.map(author => (
            <li key={author.fieldValue} className="list-item col-md-4 border-top py-2 d-flex justify-content-between align-items-start">
              <Link to={`/authors/${kebabCase(author.fieldValue)}/`}>
                {startCase(author.fieldValue)}
              </Link>
              <span className="badge bg-dark">{author.totalCount}</span>
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  </Layout>
)

AuthorsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default AuthorsPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(limit: 2000) {
            group(field: {frontmatter: {author: SELECT}}) {
                fieldValue
                totalCount
            }
        }
    }
`

export const Head = () => (
  <Seo title={"An index of authors on this site"} description={"An indexed view of authors who have written on this site, with counts"}/>
)