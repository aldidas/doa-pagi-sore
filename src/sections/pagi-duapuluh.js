import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiTwenty = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return <Arabic>أَسْتَغْفِرُ اللهَ وَأَتُوْبُ إِلَيْهِ</Arabic>
      }}
      indonesian={() => (
        <p>
          “Aku memohon ampun kepada Allah dan bertobat kepada-Nya.” (Dibaca 100
          x dalam sehari)
        </p>
      )}
      repeat={100}
    />
  )
}

export default PagiTwenty
