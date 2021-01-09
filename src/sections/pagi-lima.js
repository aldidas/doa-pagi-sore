import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiFive = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ
            إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
            وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ. رَبِّ
            أَسْأَلُكَ خَيْرَ مَا فِيْ هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ،
            وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ هَذَا الْيَوْمِ وَشَرِّ مَا
            بَعْدَهُ، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ،
            رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي
            الْقَبْرِ
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Kami telah memasuki waktu pagi dan kerajaan hanya milik Allah, segala
          puji bagi Allah. Tidak ada ilah (yang berhak disembah) kecuali Allah
          semata, tiada sekutu bagi-Nya. Milik Allah kerajaan dan bagi-Nya
          pujian. Dia-lah Yang Mahakuasa atas segala sesuatu. Wahai Rabbku, aku
          mohon kepada-Mu kebaikan di hari ini dan kebaikan sesudahnya. Aku
          berlindung kepada-Mu dari kejahatan hari ini dan kejahatan sesudahnya.
          Wahai Rabbku, aku berlindung kepada-Mu dari kemalasan dan kejelekan di
          hari tua. Wahai Rabbku, aku berlindung kepada-Mu dari siksaan di
          neraka dan siksaan di alam kubur.”
        </p>
      )}
      info={() => (
        <p>
          Meminta pada Allah kebaikan di hari ini dan kebaikan sesudahnya, juga
          agar terhindar dari kejelekan di hari ini dan kejelekan sesudahnya. Di
          dalamnya berisi pula permintaan agar terhindar dari rasa malas padahal
          mampu untuk beramal, juga agar terhindar dari kejelekan di masa tua.
          Di dalamnya juga berisi permintaan agar terselamatkan dari siksa kubur
          dan siksa neraka yang merupakan siksa terberat di hari kiamat kelak.
        </p>
      )}
    />
  )
}

export default PagiFive
