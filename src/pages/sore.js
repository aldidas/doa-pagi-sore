import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SorePage = () => (
  <Layout>
    <SEO title="Do'a Sore" />
    <Link to="/pagi">Lihat Pagi</Link>
    <h1>Do'a Sore</h1>
  </Layout>
)

export default SorePage
