import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiEight = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            اَللَّهُمَّ إِنِّيْ أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ
            عَرْشِكَ، وَمَلاَئِكَتَكَ وَجَمِيْعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللهُ
            لاَ إِلَـهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيْكَ لَكَ، وَأَنَّ
            مُحَمَّدًا عَبْدُكَ وَرَسُوْلُكَ
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Ya Allah, sesungguhnya aku di waktu pagi ini mempersaksikan Engkau,
          malaikat yang memikul ‘Arys-Mu, malaikat-malaikat dan seluruh
          makhluk-Mu, bahwa sesungguhnya Engkau adalah Allah, tiada ilah yang
          berhak disembah kecuali Engkau semata, tiada sekutu bagi-Mu dan
          sesungguhnya Muhammad adalah hamba dan utusan-Mu.”
        </p>
      )}
      info={() => (
        <p>
          Barangsiapa yang mengucapkan dzikir ini ketika pagi dan petang hari
          sebanyak empat kali, maka Allah akan membebaskan dirinya dari siksa
          neraka.
        </p>
      )}
      source={() => (
        <p>
          HR. Abu Daud no. 5069. Al Hafizh Abu Thohir mengatakan bahwa hadits
          ini hasan.
        </p>
      )}
      repeat={4}
    />
  )
}

export default PagiEight
