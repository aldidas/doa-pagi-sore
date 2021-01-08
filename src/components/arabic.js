import React from "react"

const Arabic = ({ children }) => {
  const style = {
    fontFamily: "Traditional Arabic",
  }
  return (
    <p dir="RTL" className="text-2xl" style={style}>
      {children}
    </p>
  )
}

export default Arabic
