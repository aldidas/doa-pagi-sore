import React, { useState, useEffect, createContext } from "react"

export const ThemeContext = createContext({
  theme: "",
  setTheme: () => {},
})

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark")
  useEffect(() => {
    const loadTheme = () => {
      const theme = localStorage.getItem("dps_theme")
      return theme || "dark"
    }
    setTheme(loadTheme())
  }, [])
  useEffect(() => {
    localStorage.setItem("dps_theme", theme)
  }, [theme])
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
