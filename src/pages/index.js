import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const size = {
  maxWidth: 520,
  width: "100%",
  height: 80,
}

const IndexPage = () => (
  <Layout isFullHeight>
    <SEO title="Dzikir Pagi Petang" />
    <div className="flex flex-col justify-center items-center space-y-4 min-h-full">
      <Link
        to="/pagi"
        style={size}
        className="text-2xl border-2 block rounded-lg"
      >
        <div className="h-full flex justify-start items-center">
          <div className="w-10 mr-2 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <div>Dzikir Pagi</div>
        </div>
      </Link>
      <Link
        to="/sore"
        style={size}
        className="text-2xl border-2 block rounded-lg"
      >
        <div className="h-full flex justify-start items-center">
          <div className="w-10 mr-2 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>
          <div>Dzikir Petang</div>
        </div>
      </Link>
    </div>
  </Layout>
)

export default IndexPage
