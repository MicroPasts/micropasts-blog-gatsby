import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import {Container, Row} from "react-bootstrap";
import Seo from "../components/structure/SEO";
import {formatReadingTime} from "../utils/helpers";
import Authors from "../components/structure/authors";
import Tags from "../components/structure/tag";

export default function BlogPageTemplate({data: {markdownRemark}}) {
    const {frontmatter, timeToRead, html} = markdownRemark;
    return (
        <Layout>
            <Container>
                <Row className={"post-body"}>
                    <div className="px-4">
                        <h1 className="text-black fw-bold mt-4 mb-2">{frontmatter.title}</h1>
                        <Authors author={frontmatter.author}/>
                        <h3 className="text-primary lead small">{`${formatReadingTime(timeToRead)}`}</h3>
                    </div>
                    <div className="post-body bg-white text-black p-4"
                         dangerouslySetInnerHTML={{__html: html}}/>
                </Row>
            </Container>
            {frontmatter.tag && <Tags tags={frontmatter.tag}/>}

        </Layout>
    );
}


export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            id
            timeToRead
            wordCount {
              words
             }
            excerpt(format: PLAIN, pruneLength: 30)
            frontmatter {
                permalink
                date(formatString: "MMMM DD, YYYY")
                title
                author
                tag
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            height: 600
                            formats: [AUTO, WEBP]
                            width: 600
                            quality: 80
                            transformOptions: { grayscale: false, fit: COVER, cropFocus: CENTER }
                        )
                    }
                }
            }
        }
    }
`;

export function Head({data: {markdownRemark}}) {
    const {frontmatter,excerpt} = markdownRemark;
    return (
        <Seo title={frontmatter.title} description={excerpt} featured={frontmatter.featuredImage} />
    )
}
