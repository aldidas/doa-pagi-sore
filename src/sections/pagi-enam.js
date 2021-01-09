import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiSix = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            اَللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا،
            وَبِكَ نَمُوْتُ وَإِلَيْكَ النُّشُوْرُ
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi,
          dan dengan rahmat dan pertolongan-Mu kami memasuki waktu petang.
          Dengan rahmat dan pertolongan-Mu kami hidup dan dengan kehendak-Mu
          kami mati. Dan kepada-Mu kebangkitan (bagi semua makhluk).”
        </p>
      )}
    />
  )
}

export default PagiSix
