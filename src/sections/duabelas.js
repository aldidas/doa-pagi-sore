import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiTwelve = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            رَضِيْتُ بِاللهِ رَبًّا، وَبِاْلإِسْلاَمِ دِيْنًا، وَبِمُحَمَّدٍ
            صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Aku ridha Allah sebagai Rabb, Islam sebagai agama dan Muhammad
          shallallahu ‘alaihi wa sallam sebagai nabi.” (Dibaca 3 x)
        </p>
      )}
      info={() => (
        <p>
          Barangsiapa yang mengucapkan dzikir ini sebanyak tiga kali di pagi
          hari dan tiga kali di petang hari, maka pantas baginya mendapatkan
          ridha Allah.
        </p>
      )}
    />
  )
}

export default PagiTwelve
