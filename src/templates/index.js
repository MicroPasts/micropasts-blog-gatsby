import * as React from "react"
import Layout from "../components/layout"
import PostCard from "../components/structure/post-card";
import {graphql} from "gatsby"
import {Container, Row} from 'react-bootstrap';
import Pagination from '../components/structure/pagination';
import Seo from "../components/structure/SEO";

const BlogPage = (props) => {
    const Posts = props.data.allMarkdownRemark.edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge => <PostCard key={edge.node.id} post={edge.node}/>)
    return (
        <Layout>
            <Container>
                <Row>
                    <h1 className="ml-4 mt-4">Posts, stories and more</h1>
                    <Row>
                        {Posts}
                    </Row>
                </Row>
            </Container>
            <Container fluid className={"mx-auto text-center bg-white"}>
                <Pagination pageContext={props.pageContext} />
            </Container>
        </Layout>
    );
}
export default BlogPage

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: {frontmatter: {type: {eq: "post"}}}
            sort: {frontmatter: {date: DESC}}
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    excerpt(format: PLAIN, pruneLength: 400)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        permalink
                        title
                        author
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

export const Head = () => (
    <Seo title={"Blog and news"} description={"A sporadically populated blog; news, stories, tips"} />
)