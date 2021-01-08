/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "../context/themeContext"
import classnames from "classnames"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const themeClass = classnames({
    "bg-primary": true,
    "text-main-text": true,
    "transition-all": true,
    "duration-300": true,
    "m-0": true,
    "p-0": true,
    "min-h-screen": true,
    "theme-light": theme === "light",
    "theme-dark": theme === "dark",
  })

  return (
    <div className={themeClass}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container mx-auto">
        <main className="py-4">{children}</main>
        <footer className="pt-2">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
