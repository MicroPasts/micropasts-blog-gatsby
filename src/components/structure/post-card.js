import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "gatsby";

const PostCard = ({ post }) => (

  <Card className="border-0">
    <Card.Body className="bg-white border-0 rounded-0">
      <div className="h-100">
        <Link to={post.frontmatter.permalink} className="stretched-link stretched-link__blog_post">
          <h1 className="lead text-black fw-bold mb-1">{post.frontmatter.title}</h1>
          <h2 className="text-primary small">{post.frontmatter.date} Authors: {post.frontmatter.author && post.frontmatter.author.map(writer => (
            `${writer} `
          ))}</h2>
          <p className={'text-dark'}>{post.excerpt}</p>
        </Link>
      </div>

    </Card.Body>
  </Card>
);

export default PostCard;