import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiFifteen = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return <Arabic>سُبْحَانَ اللهِ وَبِحَمْدِهِ</Arabic>
      }}
      indonesian={() => <p>“Maha suci Allah, aku memuji-Nya.”</p>}
      info={() => (
        <p>
          Barangsiapa yang mengucapkan kalimat ‘subhanallah wa bi hamdih’ di
          pagi dan petang hari sebanyak 100 x, maka tidak ada yang datang pada
          hari kiamat yang lebih baik dari yang ia lakukan kecuali orang yang
          mengucapkan semisal atau lebih dari itu.
        </p>
      )}
      source={() => <p>HR. Muslim no. 2692.</p>}
      repeat={100}
    />
  )
}

export default PagiFifteen
