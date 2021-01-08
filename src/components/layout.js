/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import classnames from "classnames"
import { ThemeContext } from "../context/themeContext"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, isFullHeight }) => {
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
    "font-serif": true,
    "min-h-screen": true,
    flex: isFullHeight,
    "flex-col": isFullHeight,
    "theme-light": theme === "light",
    "theme-dark": theme === "dark",
  })

  const mainClass = classnames({
    container: true,
    "mx-auto": true,
    "px-4": true,
    "py-4": !isFullHeight,
    "h-screen": isFullHeight,
  })

  return (
    <div className={themeClass}>
      <Header
        isFulHeight={isFullHeight}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <main
        style={{ paddingTop: isFullHeight ? 0 : 100 }}
        className={mainClass}
      >
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
