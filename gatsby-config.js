/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
const siteUrl = `https://blog.micropasts.org`

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `MicroPasts: Blog`,
    description: `Crowdfuelled archaeological research - a blog detailing our adventures.`,
    twitterHandle: '@micropasts',
    author: 'The MicroPasts Collective',
    image: `/img.png`,
    og: {
      siteName: 'MicroPasts - Crowd fuelled archaeology',
      twitterCreator: '@micropasts',
    },
    siteUrl: `https://blog.micropasts.org`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
              withWebp: true,
              showCaptions: true,
              quality: 90,
              linkImagesToOriginal: true,
              backgroundColor: `gray`,
              loading: `lazy`,
            },
          },
          {
            resolve: `gatsby-remark-images-remote`,
            options: {
              /**
               * @param {'lazy' | 'eager' | 'auto'} loading
               * Set the output markup's 'loading' attribute. Default: 'lazy'
               */
              loading: 'lazy',

              /**
               * @param {string} backgroundColor
               * Background color. Default: '#fff'
               */
              backgroundColor: '#fff',

              /**
               * @param {boolean} linkImagesToOriginal
               * If enabled, wraps the default markup with an <a> tag pointing to the original image.
               * Default: false
               */
              linkImagesToOriginal: false,

              /**
               * @param {string | Function} wrapperStyle
               * Inject styles to the image wrapper.
               * Also accept a function that receives all image data as arguments, i.e
               * ({ aspectRatio, width, height }) => `padding-bottom: ${height/2}px;`
               * Alternatively you can also attach additional class to `.gria-image-wrapper`
               */
              wrapperStyle: 'padding-bottom: 0.5rem;',


              /**
               * ...imageOptions
               * and any sharp image arguments (quality, maxWidth, etc.)
               */
              maxWidth: 1000,
              quality: 90,
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/src/content/uploads`,
      },
      __key: "uploads"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/page`,
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/post`,
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: "#000000",
        // Height of the scroll indicator
        height: "10px",
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-twitter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/,
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape']
        }
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
         
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
                         allSitePage: { nodes: allPages }
                       }) => {

          return allPages.map(page => {
            return { ...page };
          });
        },
        serialize: ({ path }) => {
          return {
            url: path
          };
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-MRBHPT2C54",
        ],
        pluginConfig: {
          head: true
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.frontmatter.permalink,
                  guid: site.siteMetadata.siteUrl + node.frontmatter.permalink,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    frontmatter {
                      title
                      date
                      permalink
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "MicroPasts Blog RSS Feed"
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `micropasts-blog`,
        short_name: `micropasts`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
