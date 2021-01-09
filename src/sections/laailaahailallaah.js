import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiSixteen = ({ number }) => {
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
          berkuasa atas segala sesuatu.”
        </p>
      )}
      info={() => (
        <p>
          Barangsiapa yang membaca dzikir tersebut di pagi hari sebanyak sepuluh
          kali, Allah akan mencatatkan baginya 10 kebaikan, menghapuskan baginya
          10 kesalahan, ia juga mendapatkan kebaikan semisal memerdekakan 10
          budak, Allah akan melindunginya dari gangguan setan hingg petang hari.
          Siapa yang mengucapkannya di petang hari, ia akan mendapatkan
          keutamaan semisal itu pula.
        </p>
      )}
      source={() => <p>HR. An Nasai Al Kubra 6: 10.</p>}
      repeat={10}
    />
  )
}

export default PagiSixteen
