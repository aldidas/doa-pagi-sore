import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const SoreSix = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا،وَبِكَ نَحْيَا،
            وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيْرُ
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu
          petang, dan dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi.
          Dengan rahmat dan pertolonganMu kami hidup dan dengan kehendakMu kami
          mati. Dan kepada-Mu tempat kembali (bagi semua makhluk).”
        </p>
      )}
      source={() => (
        <p>
          HR. Tirmidzi no. 3391 dan Abu Daud no. 5068. Al Hafizh Abu Thohir
          mengatakan bahwa sanad hadits ini shahih.
        </p>
      )}
    />
  )
}

export default SoreSix
