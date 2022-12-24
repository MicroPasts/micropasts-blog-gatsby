const _ = require("lodash")
const {paginate} = require("gatsby-awesome-pagination");
exports.createPages = async ({ actions,graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/blog-page.js`)
  const blogPostPagedTemplate = require.resolve(`./src/templates/index.js`)
  const pageTemplate = require.resolve(`./src/templates/page.js`)

  return graphql(`
     {
     tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: {frontmatter: {tag: SELECT}}) {
          fieldValue
        }
      }
  blogPosts: allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "post"}}}
    sort: {frontmatter: {date: DESC}}
    limit: 1000
  ) {
    edges {
      node {
        id
        frontmatter {
          date
          permalink
          title
        }
      }
    }
  }
  blogPages: allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "page"}}}
    sort: {frontmatter: {date: DESC}}
    limit: 1000
  ) {
    edges {
      node {
        id
        frontmatter {
          date
          permalink
          title
        }
      }
    }
  }
}

  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.blogPosts.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.permalink,
        component: blogPostTemplate,
        context: {
          slug: node.frontmatter.permalink,
          id: node.id
        },
      });
    });
    result.data.blogPages.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.permalink,
        component: pageTemplate,
        context: {
          slug: node.frontmatter.permalink,
          id: node.id
        },
      });
    });
    const tags = result.data.tagsGroup.group
    const tagTemplate = require.resolve("./src/templates/tags.js")

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    });

    paginate({
      createPage: createPage,
      component: blogPostPagedTemplate,
      items: result.data.blogPosts.edges,
      itemsPerPage: 12,
      itemsPerFirstPage: 12,
      pathPrefix: '/'
    })
  });
}
