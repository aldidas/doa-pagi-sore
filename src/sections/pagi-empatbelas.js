import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiFourteen = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            أَصْبَحْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ
            اْلإِخْلاَصِ، وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ
            عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ،
            حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Di waktu pagi kami memegang agama Islam, kalimat ikhlas (kalimat
          syahadat), agama Nabi kami Muhammad shallallahu ‘alaihi wa sallam, dan
          agama bapak kami Ibrahim, yang berdiri di atas jalan yang lurus,
          muslim dan tidak tergolong orang-orang musyrik.” (Dibaca 1 x di pagi
          hari saja)
        </p>
      )}
    />
  )
}

export default PagiFourteen
