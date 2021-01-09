import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const add = () => setCount(count + 1)
  const reset = () => {
    const yakin = window.confirm("Yakin akan mereset hitungan?")
    if (yakin) {
      setCount(0)
    }
  }
  return (
    <div className="bg-primary rounded-lg mr-2 mb-2 shadow-md text-center p-4 fixed right-0 bottom-0">
      <h5 className="mb-1">Counter</h5>
      <div className="flex justify-center space-x-2 items-center">
        <button
          className="flex justify-center items-center shadow-lg rounded-full w-12 h-12 block bg-white"
          onClick={add}
        >
          <span className="block text-xl text-black">{count}</span>
        </button>
        <button
          className="right-0 top-0 block rounded-full w-8 h-8 bg-red-600"
          onClick={reset}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FFFFFF"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Counter
