import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Toggle from "react-toggle"
import { ThemeContext } from "../context/themeContext"

const Header = ({ siteTitle }) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex items-center place-content-between">
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
        <Toggle
          id="theme-toggle"
          icons={false}
          checked={theme === "light"}
          onChange={handleThemeToggle}
        />
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
