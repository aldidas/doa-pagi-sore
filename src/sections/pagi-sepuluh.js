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
          kepada seorang muslim.” (Dibaca 1 x)
        </p>
      )}
      info={() => (
        <p>
          Do’a ini diajarkan oleh Rasulullah shallallahu ‘alaihi wa sallam pada
          Abu Bakr Ash Shiddiq radhiyallahu ‘anhu untuk dibaca pada pagi, petang
          dan saat beranjak tidur.
        </p>
      )}
    />
  )
}

export default PagiTen
