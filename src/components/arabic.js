import React from "react"
import classnames from "classnames"

const Arabic = ({ children, small }) => {
  const style = {
    lineHeight: 1.8,
    fontFamily: "Traditional Arabic",
  }
  const arabicClass = classnames({
    "text-3xl": !small,
    "text-lg": small,
  })
  return (
    <p dir="RTL" style={style} className={arabicClass}>
      {children}
    </p>
  )
}

export default Arabic
