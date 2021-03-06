import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiTen = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ
            وَاْلأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ، أَشْهَدُ أَنْ لاَ
            إِلَـهَ إِلاَّ أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ، وَمِنْ
            شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ
            سُوْءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Ya Allah, Yang Maha Mengetahui yang ghaib dan yang nyata, wahai Rabb
          pencipta langit dan bumi, Rabb segala sesuatu dan yang merajainya. Aku
          bersaksi bahwa tidak ada ilah yang berhak disembah kecuali Engkau. Aku
          berlindung kepadaMu dari kejahatan diriku, setan dan balatentaranya
          (godaan untuk berbuat syirik pada Allah), dan aku (berlindung
          kepada-Mu) dari berbuat kejelekan terhadap diriku atau menyeretnya
          kepada seorang muslim.”
        </p>
      )}
      info={() => (
        <p>
          Do’a ini diajarkan oleh Rasulullah shallallahu ‘alaihi wa sallam pada
          Abu Bakr Ash Shiddiq untuk dibaca pada pagi, petang dan saat beranjak
          tidur.
        </p>
      )}
      source={() => (
        <>
          <p>
            HR. Tirmidzi no. 3392 dan Abu Daud no. 5067. Al Hafizh Abu Thohir
            mengatakan bahawa sanad hadits ini shahih. Adapun kalimat terakhir
          </p>
          <Arabic small>
            (وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا أَوْ أَجُرُّهُ إِلَى
            مُسْلِمٍ)
          </Arabic>
          <p>
            adalah tambahan dari riwayat Ahmad 2: 196. Dikomentari oleh Syaikh
            Syu’aib Al Arnauth bahwa hadits tersebut shahih dilihat dari jalur
            lainnya (shahih lighoirihi).
          </p>
        </>
      )}
    />
  )
}

export default PagiTen
