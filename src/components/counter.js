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
    <div className="bg-primary fixed inset-x-4 bottom-4 flex items-center p-2 space-x-2 shadow-md rounded-lg">
      <h5 className="mb-1">Counter</h5>
      <button
        className="flex h-10 justify-center items-center shadow-lg rounded-lg flex-grow bg-secondary"
        onClick={add}
      >
        <span className="block text-xl">{count}</span>
      </button>
      <button
        className="block rounded-lg w-10 shadow-lg bg-red-600"
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
  )
}

export default Counter
