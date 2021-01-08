import React, { useState } from "react"
import Toggle from "./toggle"

const Card = props => {
  const [isInaVis, setIsInaVis] = useState(false)
  const [isInfoVis, setIsInfoVis] = useState(false)
  const { number, title, arabic, indonesian, info } = props
  return (
    <div className="p-4 bg-secondary rounded-lg mb-4">
      <div className="flex justify-start items-center py-2">
        <span className="mr-4 italic text-4xl text-center block">{number}</span>
        <h3 className="m-0">{title}</h3>
      </div>
      {arabic ? arabic() : null}
      {indonesian && (
        <div>
          <button
            className="px-2 py-1 rounded bg-primary flex justify-center items-center mb-1 font-bold"
            onClick={() => setIsInaVis(!isInaVis)}
          >
            <Toggle isOpen={isInaVis} className="mr-1" />
            Artinya
          </button>
          {isInaVis && <div className="text-sm">{indonesian()}</div>}
        </div>
      )}
      {info && (
        <div>
          <button
            className="px-2 py-1 rounded bg-primary flex justify-center items-center mb-1 font-bold"
            onClick={() => setIsInfoVis(!isInfoVis)}
          >
            <Toggle isOpen={isInfoVis} className="mr-1" />
            Faedah
          </button>
          {isInfoVis && <div className="text-sm">{info()}</div>}
        </div>
      )}
    </div>
  )
}

export default Card
