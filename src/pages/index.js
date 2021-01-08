import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const size = {
  width: 200,
  height: 200,
}

const IndexPage = () => (
  <Layout isFullHeight>
    <SEO title="Pagi Sore" />
    <div className="flex justify-center items-center space-x-4 flex-grow min-h-full">
      <Link
        to="/pagi"
        style={size}
        className="text-2xl border-2 block flex justify-center items-center rounded-full"
      >
        Pagi
      </Link>
      <Link
        to="/sore"
        style={size}
        className="text-2xl border-2 block flex justify-center items-center rounded-full"
      >
        Sore
      </Link>
    </div>
  </Layout>
)

export default IndexPage
