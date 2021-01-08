import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PagiPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/sore">Lihat Sore</Link>
    <h1>Pagi</h1>
    <div className="section">
        One
        </div>
  </Layout>
)

export default PagiPage
