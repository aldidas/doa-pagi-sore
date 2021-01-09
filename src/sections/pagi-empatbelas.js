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
          muslim dan tidak tergolong orang-orang musyrik.”
        </p>
      )}
      source={() => (
        <>
          <p>
            HR. Ahmad (3: 406). Syaikh Syu’aib Al Arnauth mengatakan bahwa sanad
            hadits ini shahih sesuai syarat Bukhari Muslim. Lihat pula As
            Silsilah Ash Shahihah no. 2989.
          </p>
          <p>
            Catatan: Dzikir ini hanya dibaca di pagi hari. Riwayat yang
            menyatakan dibaca juga saat petang hari adalah riwayat yang lemah.
            Sebagaimana dinyatakan oleh guru penulis, Syaikh ‘Abdul ‘Aziz Ath
            Thorifi dalam Adzkar Ash Shobaah wal Masaa’, hal. 65.
          </p>
        </>
      )}
    />
  )
}

export default PagiFourteen
