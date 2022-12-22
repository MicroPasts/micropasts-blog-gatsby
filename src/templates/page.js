import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import {Container, Row} from "react-bootstrap";
import Seo from "../components/structure/SEO";

export default function PageTemplate({data: {markdownRemark}}) {
    const {frontmatter, html} = markdownRemark;
    return (
        <Layout>
            <Container>
                <Row className={"post-body"}>
                    <div className="px-4">
                        <h1 className="text-black fw-bold mt-4 mb-2">{frontmatter.title}</h1>

                    </div>
                    <div className="post-body bg-white text-black p-4"
                         dangerouslySetInnerHTML={{__html: html}}/>
                </Row>
            </Container>

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
            frontmatter {
                permalink
                date(formatString: "MMMM DD, YYYY")
                title
                author
            }
        }
    }
`;

export function Head({data: {markdownRemark}}) {
    const {frontmatter} = markdownRemark;
    return (
        <Seo title={frontmatter.title}  />
    )
}
