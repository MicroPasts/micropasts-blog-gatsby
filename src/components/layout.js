import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logos from "./structure/logos";
import Footer from "./structure/footer";
import BackToTop from 'react-back-to-top';

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>

      </div>
      <Logos style={{
        margin: `0 auto`,
        width: '100%',
      }}/>
      <Footer style={{
        margin: `0 auto`,
        width: '100%',
      }}/>
      <BackToTop
        mainStyle={{
          width: '100%',
          height: '100%',
          backgroundColor: '#192036',
          color: 'white'
        }}
        percentStyle={{
          width: '100%',
          height: '100%',
          display: 'none'
        }}
        animate='rotate'
        offsetTop={20}
        step={50}
        percent={false}
        visiblePercent={50}
      />

    </>
  )
}

export default Layout
