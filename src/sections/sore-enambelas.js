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
          kejahatan makhluk yang diciptakanNya.” (Dibaca 3 x pada waktu petang)
        </p>
      )}
      info={() => (
        <p>
          Siapa yang mengucapkannya di petang hari, niscaya tidak ada racun atau
          binatang (seperti: kalajengking) yang mencelakakannya di malam itu.
        </p>
      )}
    />
  )
}

export default SoreSixteen
