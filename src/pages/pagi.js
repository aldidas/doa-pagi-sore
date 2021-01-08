import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PagiPage = () => (
  <Layout>
    <SEO title="Do'a Pagi" />
    <Link to="/sore">Lihat Sore</Link>
    <h1>Do'a Pagi</h1>
    <div className="section">
        One
        </div>
  </Layout>
)

export default PagiPage
