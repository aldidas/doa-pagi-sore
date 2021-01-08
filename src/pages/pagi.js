import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PagiOne from "../sections/ayat-qursi"
import PagiTwo from "../sections/al-ikhlash"
import PagiThree from "../sections/al-falaq"
import PagiFour from "../sections/an-naas"
import PagiFive from "../sections/pagi-lima"
import PagiSix from "../sections/pagi-enam"
import PagiSeven from "../sections/sayyidul-istighfar"
import PagiEight from "../sections/pagi-delapan"

const PagiPage = () => (
  <Layout>
    <SEO title="Do'a Pagi" />
    <div className="mb-2">
      <Link to="/sore">&laquo; Lihat Sore</Link>
    </div>
    <h1>Do'a Pagi</h1>
    <div className="section">
      <PagiOne number={1} />
      <PagiTwo number={2} />
      <PagiThree number={3} />
      <PagiFour number={4} />
      <PagiFive number={5} />
      <PagiSix number={6} />
      <PagiSeven number={7} />
      <PagiEight number={8} />
    </div>
  </Layout>
)

export default PagiPage
