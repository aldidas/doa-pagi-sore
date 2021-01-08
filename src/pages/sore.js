import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SorePage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/pagi">Lihat Pagi</Link>
    <h1>Sore</h1>
  </Layout>
)

export default SorePage
