import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiSeven = ({ number }) => {
  return (
    <Card
      number={number}
      title="Membaca Sayyidul Istighfar"
      arabic={() => {
        return (
          <Arabic>
            اَللَّهُمَّ أَنْتَ رَبِّيْ لاَ إِلَـهَ إِلاَّ أَنْتَ، خَلَقْتَنِيْ
            وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ،
            أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ لَكَ بِنِعْمَتِكَ
            عَلَيَّ، وَأَبُوْءُ بِذَنْبِيْ فَاغْفِرْ لِيْ فَإِنَّهُ لاَ يَغْفِرُ
            الذُّنُوْبَ إِلاَّ أَنْتَ.
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Ya Allah, Engkau adalah Rabbku, tidak ada ilah yang berhak disembah
          kecuali Engkau, Engkaulah yang menciptakanku. Aku adalah hamba-Mu. Aku
          akan setia pada perjanjianku pada-Mu (yaitu aku akan mentauhidkan-Mu)
          semampuku dan aku yakin akan janji-Mu (berupa surga untukku). Aku
          berlindung kepada-Mu dari kejelekan yang kuperbuat. Aku mengakui
          nikmat-Mu kepadaku dan aku mengakui dosaku. Oleh karena itu, ampunilah
          aku. Sesungguhnya tiada yang mengampuni dosa kecuali Engkau.”
        </p>
      )}
      info={() => (
        <p>
          Barangsiapa mengucapkan dzikir ini di siang hari dalam keadaan penuh
          keyakinan, lalu ia mati pada hari tersebut sebelum petang hari, maka
          ia termasuk penghuni surga. Barangsiapa yang mengucapkannya di malam
          hari dalam keadaan penuh keyakinan, lalu ia mati sebelum pagi, maka ia
          termasuk penghuni surga.
        </p>
      )}
      source={() => <p>HR. Bukhari no. 6306.</p>}
    />
  )
}

export default PagiSeven
