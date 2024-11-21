import * as React from "react"
import { Link } from "gatsby"
// import ThemeSwitch from "./structure/switch"
import { StaticImage } from "gatsby-plugin-image";
const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: `var(--color-footer-bg)`,
    }}
  >
    <div>
    <a href="https://micropasts.org" style={{
      fontSize: `var(--font-lg)`,
      textDecoration: `none`,
      color: `white`,
      marginRight: `var(--space-4)`,
    }} rel="noreferrer">MicroPasts: A Crowdfuelled Research Project</a>
    <Link
      to="/"
      style={{
        fontSize: `var(--font-lg)`,
        textDecoration: `none`,
        color: `white`,
      }}
    >
      Blog
    </Link>
    </div>
    <StaticImage src={"../images/logos/MP_SOCIALMEDIA.jpg"} alt={"Micropasts square logo"}
                 height={60} placeholder={'NONE'} style={{margin: 0}}/>

  </header>
)

export default Header
