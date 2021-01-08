import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiThirteen = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ، وَأَصْلِحْ لِيْ
            شَأْنِيْ كُلَّهُ وَلاَ تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ عَيْنٍ
            أَبَدًا
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Wahai Rabb Yang Maha Hidup, wahai Rabb Yang Berdiri Sendiri (tidak
          butuh segala sesuatu), dengan rahmat-Mu aku minta pertolongan,
          perbaikilah segala urusanku dan jangan diserahkan kepadaku sekali pun
          sekejap mata (tanpa mendapat pertolongan dariMu).” (Dibaca 1 x)
        </p>
      )}
      info={() => (
        <p>
          Dzikir ini diajarkan oleh Nabi shallallahu ‘alaihi wa sallam pada
          Fathimah supaya diamalkan pagi dan petang.
        </p>
      )}
    />
  )
}

export default PagiThirteen
