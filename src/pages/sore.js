import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SoreOne from "../sections/ayat-kursi"
import SoreTwo from "../sections/al-ikhlash"
import SoreThree from "../sections/al-falaq"
import SoreFour from "../sections/an-naas"
import SoreFive from "../sections/sore-lima"
import SoreSix from "../sections/sore-enam"
import SoreSeven from "../sections/sayyidul-istighfar"
import SoreEight from "../sections/sore-delapan"
import SoreNine from "../sections/sore-sembilan"
import SoreTen from "../sections/sore-sepuluh"
import SoreEleven from "../sections/sebelas"
import SoreTwelve from "../sections/duabelas"
import SoreThirteen from "../sections/tigabelas"
import SoreFourteen from "../sections/subhanallah"
import SoreFifteen from "../sections/laailaahailallaah"
import SoreSixteen from "../sections/sore-enambelas"

const SorePage = () => (
  <Layout>
    <SEO title="Do'a Sore" />
    <div className="mb-2">
      <div className="inline-block">
        <Link to="/pagi" className="flex justify-center items-center">
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
          Lihat Pagi
        </Link>
      </div>
    </div>
    <h2>Do'a Sore</h2>

    <div className="section">
      <SoreOne number={1} />
      <SoreTwo number={2} />
      <SoreThree number={3} />
      <SoreFour number={4} />
      <SoreFive number={5} />
      <SoreSix number={6} />
      <SoreSeven number={7} />
      <SoreEight number={8} />
      <SoreNine number={9} />
      <SoreTen number={10} />
      <SoreEleven number={11} />
      <SoreTwelve number={12} />
      <SoreThirteen number={13} />
      <SoreFourteen number={14} />
      <SoreFifteen number={15} />
      <SoreSixteen number={16} />
    </div>
  </Layout>
)

export default SorePage
