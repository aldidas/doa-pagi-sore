import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiEightteen = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            سُبْحَانَ اللهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ،
            وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Maha Suci Allah, aku memujiNya sebanyak makhluk-Nya, sejauh
          kerelaan-Nya, seberat timbangan ‘Arsy-Nya dan sebanyak tinta tulisan
          kalimat-Nya.” (Dibaca 3 x di waktu pagi saja)
        </p>
      )}
      info={() => (
        <p>
          Nabi shallallahu ‘alaihi wa sallam mengatakan pada Juwairiyah bahwa
          dzikir di atas telah mengalahkan dzikir yang dibaca oleh Juwairiyah
          dari selepas Shubuh sampai waktu Dhuha.
        </p>
      )}
    />
  )
}

export default PagiEightteen
