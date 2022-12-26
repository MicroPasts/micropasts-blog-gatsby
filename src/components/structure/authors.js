import React from "react"
import {kebabCase, startCase} from "lodash";
import PropTypes from "prop-types"
import {Col, Row} from "react-bootstrap";
import {Link} from "gatsby";

const Authors = ({author}) => (
  <Row>
        {author && <Col md={12} className="mb-2">
          {author.map((item, i) => (
            <Link to={`/authors/${kebabCase(item)}/`} className="btn btn-dark mx-1 my-1 p-2 text-white"
                  key={i}>{startCase(item)}</Link>
          ))}
        </Col>}
  </Row>
)

Authors.propTypes = {
  author: PropTypes.array
}

Authors.defaultProps = {
  author: ``,
}

export default Authors;