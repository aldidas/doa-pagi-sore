import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiNineteen = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا،
            وَعَمَلاً مُتَقَبَّلاً
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Ya Allah, sungguh aku memohon kepada-Mu ilmu yang bermanfaat (bagi
          diriku dan orang lain), rizki yang halal dan amal yang diterima (di
          sisi-Mu dan mendapatkan ganjaran yang baik).” (Dibaca setelah
          salam dari shalat Shubuh)
        </p>
      )}
    />
  )
}

export default PagiNineteen
