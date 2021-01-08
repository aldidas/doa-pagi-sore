import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const SoreNine = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي
            الدُّنْيَا وَاْلآخِرَةِ، اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ
            وَالْعَافِيَةَ فِي دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ
            اللَّهُمَّ اسْتُرْ عَوْرَاتِى وَآمِنْ رَوْعَاتِى. اَللَّهُمَّ
            احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِيْ، وَعَنْ يَمِيْنِيْ
            وَعَنْ شِمَالِيْ، وَمِنْ فَوْقِيْ، وَأَعُوْذُ بِعَظَمَتِكَ أَنْ
            أُغْتَالَ مِنْ تَحْتِيْ
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Ya Allah, sesungguhnya aku memohon kebajikan dan keselamatan di dunia
          dan akhirat. Ya Allah, sesungguhnya aku memohon kebajikan dan
          keselamatan dalam agama, dunia, keluarga dan hartaku. Ya Allah,
          tutupilah auratku (aib dan sesuatu yang tidak layak dilihat orang) dan
          tenteramkanlah aku dari rasa takut. Ya Allah, peliharalah aku dari
          muka, belakang, kanan, kiri dan atasku. Aku berlindung dengan
          kebesaran-Mu, agar aku tidak disambar dari bawahku (oleh ular atau
          tenggelam dalam bumi dan lain-lain yang membuat aku jatuh).” (Dibaca 1
          x)
        </p>
      )}
      info={() => (
        <p>
          Rasulullah shallallahu ‘alaihi wa sallam tidaklah pernah meninggalkan
          do’a ini di pagi dan petang hari. Di dalamnya berisi perlindungan dan
          keselamatan pada agama, dunia, keluarga dan harta dari berbagai macam
          gangguan yang datang dari berbagai arah.
        </p>
      )}
    />
  )
}

export default SoreNine
