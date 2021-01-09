import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiSeventeen = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
            وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Tidak ada ilah yang berhak disembah selain Allah semata, tidak ada
          sekutu bagiNya. Bagi-Nya kerajaan dan segala pujian. Dia-lah yang
          berkuasa atas segala sesuatu.” (Dibaca 100 x dalam sehari)
        </p>
      )}
      info={() => (
        <p>
          Barangsiapa yang mengucapkan dzikir tersebut dalam sehari sebanyak 100
          x, maka itu seperti membebaskan 10 orang budak, dicatat baginya 100
          kebaikan, dihapus baginya 100 kesalahan, dirinya akan terjaga dari
          gangguan setan dari pagi hingga petang hari, dan tidak ada seorang pun
          yang lebih baik dari yang ia lakukan kecuali oleh orang yang
          mengamalkan lebih dari itu.
        </p>
      )}
      repeat={100}
    />
  )
}

export default PagiSeventeen
