import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PagiOne from "../sections/ayat-kursi"
import PagiTwo from "../sections/al-ikhlash"
import PagiThree from "../sections/al-falaq"
import PagiFour from "../sections/an-naas"
import PagiFive from "../sections/pagi-lima"
import PagiSix from "../sections/pagi-enam"
import PagiSeven from "../sections/sayyidul-istighfar"
import PagiEight from "../sections/pagi-delapan"
import PagiNine from "../sections/pagi-sembilan"
import PagiTen from "../sections/pagi-sepuluh"
import PagiEleven from "../sections/sebelas"
import PagiTwelve from "../sections/duabelas"
import PagiThirteen from "../sections/tigabelas"
import PagiFourteen from "../sections/pagi-empatbelas"
import PagiFifteen from "../sections/subhanallah"
import PagiSixteen from "../sections/laailaahailallaah"
import PagiSeventeen from "../sections/pagi-tujuhbelas"
import PagiEighteen from "../sections/pagi-delapanbelas"
import PagiNineteen from "../sections/pagi-sembilanbelas"
import PagiTwenty from "../sections/pagi-duapuluh"

const PagiPage = () => (
  <Layout>
    <SEO title="Do'a Pagi" />
    <div className="mb-2">
      <div className="inline-block">
        <Link to="/sore" className="flex justify-center items-center">
          <div style={{ width: 20, height: 20 }}>
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          Lihat Sore
        </Link>
      </div>
    </div>
    <h2>Do'a Pagi</h2>
    <div className="section">
      <PagiOne number={1} />
      <PagiTwo number={2} />
      <PagiThree number={3} />
      <PagiFour number={4} />
      <PagiFive number={5} />
      <PagiSix number={6} />
      <PagiSeven number={7} />
      <PagiEight number={8} />
      <PagiNine number={9} />
      <PagiTen number={10} />
      <PagiEleven number={11} />
      <PagiTwelve number={12} />
      <PagiThirteen number={13} />
      <PagiFourteen number={14} />
      <PagiFifteen number={15} />
      <PagiSixteen number={16} />
      <PagiSeventeen number={17} />
      <PagiEighteen number={18} />
      <PagiNineteen number={19} />
      <PagiTwenty number={20} />
    </div>
  </Layout>
)

export default PagiPage
