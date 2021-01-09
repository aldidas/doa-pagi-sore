import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const SoreSixteen = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            أَعُوْذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari
          kejahatan makhluk yang diciptakanNya.”
        </p>
      )}
      info={() => (
        <p>
          Siapa yang mengucapkannya di petang hari, niscaya tidak ada racun atau
          binatang (seperti: kalajengking) yang mencelakakannya di malam itu.
        </p>
      )}
      source={() => (
        <p>
          HR. Ahmad 2: 290. Syaikh Syu’aib Al Arnauth mengatakan bahwa sanad
          hadits ini shahih sesuai syarat Muslim. Lihat komentar Syaikh Syu’aib
          Al Arnauth terhadap hadits ini untuk pengertian hummah diartikan
          dengan racun atau sengatan kalajengking.
        </p>
      )}
      repeat={3}
    />
  )
}

export default SoreSixteen
