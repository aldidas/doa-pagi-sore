import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Toggle from "react-toggle"
import classnames from "classnames"
import { ThemeContext } from "../context/themeContext"

const Header = ({ siteTitle, isFullHeight }) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  const headerClass = classnames({
    fixed: true,
    "w-screen": true,
    "bg-blue-500": true,
    "py-4": true,
    "flex-grow-0": isFullHeight,
  })
  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 flex items-center place-content-between">
        <h1 className="m-0">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div className="flex justify-center items-center">
          {theme === "light" ? "LIGHT" : "DARK"}
          <Toggle
            id="theme-toggle"
            icons={false}
            className="ml-2"
            checked={theme === "light"}
            onChange={handleThemeToggle}
          />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
