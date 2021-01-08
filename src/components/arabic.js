import React from "react"

const Arabic = ({ children }) => {
  const style = {
    lineHeight: 1.8,
    fontFamily: "Traditional Arabic",
  }
  return (
    <p dir="RTL" className="text-3xl" style={style}>
      {children}
    </p>
  )
}

export default Arabic
