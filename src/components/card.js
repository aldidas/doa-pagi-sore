import React, { useState } from "react"
import Toggle from "./toggle"

const Card = props => {
  const [isInaVis, setIsInaVis] = useState(false)
  const [isInfoVis, setIsInfoVis] = useState(false)
  const [isSourceVis, setIsSourceVis] = useState(false)
  const { number, title, arabic, indonesian, info, source, repeat } = props
  return (
    <div className="p-4 bg-secondary rounded-lg mb-4">
      <div className="flex justify-start items-center py-2">
        <span className="mr-4 italic text-4xl text-center block">{number}</span>
        <h3 className="m-0">{title}</h3>
      </div>
      <h5>dibaca {repeat || 1} kali</h5>
      {arabic ? arabic() : null}
      <div>
      {indonesian && (
        <div>
          <button
            className="px-2 py-1 rounded bg-primary flex justify-center items-center mb-1 font-bold text-sm"
            onClick={() => setIsInaVis(!isInaVis)}
          >
            <Toggle isOpen={isInaVis} className="mr-1" />
            Artinya
          </button>
          {isInaVis && <div className="text-xs">{indonesian()}</div>}
        </div>
      )}
      {info && (
        <div>
          <button
            className="px-2 py-1 rounded bg-primary flex justify-center items-center mb-1 font-bold text-sm"
            onClick={() => setIsInfoVis(!isInfoVis)}
          >
            <Toggle isOpen={isInfoVis} className="mr-1" />
            Faedah
          </button>
          {isInfoVis && <div className="text-xs">{info()}</div>}
        </div>
      )}
      {source && (
        <div>
          <button
            className="px-2 py-1 rounded bg-primary flex justify-center items-center mb-1 font-bold text-sm"
            onClick={() => setIsSourceVis(!isSourceVis)}
          >
            <Toggle isOpen={isSourceVis} className="mr-1" />
            Sumber
          </button>
          {isSourceVis && <div className="text-xs">{source()}</div>}
        </div>
      )}
      </div>
    </div>
  )
}

export default Card
