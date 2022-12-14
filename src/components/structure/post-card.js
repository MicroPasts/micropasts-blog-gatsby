import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

const PostCard = ({ post }) => (

  <Card className="border-0 my-3">
    <Row className="row g-0">
      <Col md={4}>
          {post.frontmatter.featuredImage !== null ?
            <GatsbyImage image={getImage(post.frontmatter.featuredImage)} alt={post.frontmatter.title}
                         className={"img-fluid rounded-start"} />
            :
            <StaticImage src={"../../images/img.png"} alt="A stand in image" width={400} height={250}
                         placeholder={"BLURRED"} className={"img-fluid rounded-start"} />
          }
      </Col>
      <Col md={8}>
        <Card.Body className="bg-white">
          <Link to={post.frontmatter.permalink} className="stretched-link stretched-link__blog_post">
            <h1 className="lead text-black fw-bold mb-3 mt-0">{post.frontmatter.title}</h1>
            <h2
              className="text-primary small">{post.frontmatter.date} Authors: {post.frontmatter.author && post.frontmatter.author.map(writer => (
              `${writer} `
            ))}</h2>
            <p className={"text-dark"} >{post.excerpt}</p>
          </Link>
        </Card.Body>
      </Col>
    </Row>


  </Card>
);

export default PostCard;