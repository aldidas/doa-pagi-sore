import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const SoreFive = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            أَمْسَيْنَا وَأَمْسَى الْمُلْكُ للهِ، وَالْحَمْدُ للهِ، لَا إِلَهَ
            إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ
            الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ
            خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا،
            وَأَعُوذُبِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا
            بَعْدَهَا، رَبِّ أَعُوذُبِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ
            أَعُوذُبِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Kami telah memasuki waktu petang dan kerajaan hanya milik Allah,
          segala puji bagi Allah. Tidak ada ilah (yang berhak disembah) kecuali
          Allah semata, tiada sekutu bagi-Nya. Milik Allah kerajaan dan bagi-Nya
          pujian. Dia-lah Yang Mahakuasa atas segala sesuatu.Wahai Rabbku, aku
          mohon kepada-Mu kebaikan di malam ini dan kebaikan sesudahnya. Aku
          berlindung kepadaMu dari kejahatan malam ini dan kejahatan sesudahnya.
          Wahai Rabbku, aku berlindung kepadaMu dari kemalasan dan kejelekan di
          hari tua. Wahai Rabbku, aku berlindung kepada-Mu dari siksaan di
          neraka dan siksaan di kubur.” (Dibaca 1 x)
        </p>
      )}
      info={() => (
        <p>
          Meminta pada Allah kebaikan di malam ini dan kebaikan sesudahnya, juga
          agar terhindar dari kejelekan di malam ini dan kejelekan sesudahnya.
          Di dalamnya berisi pula permintaan agar terhindar dari rasa malas
          padahal mampu untuk beramal, juga agar terhindar dari kejelekan di
          masa tua. Di dalamnya juga berisi permintaan agar terselamatkan dari
          siksa kubur dan siksa neraka yang merupakan siksa terberat di hari
          kiamat kelak.
        </p>
      )}
    />
  )
}

export default SoreFive
