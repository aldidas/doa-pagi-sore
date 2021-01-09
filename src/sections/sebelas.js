import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiEleven = ({ number }) => {
  return (
    <Card
      number={number}
      title=""
      arabic={() => {
        return (
          <Arabic>
            بِسْمِ اللَّهِ الَّذِى لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِى الأَرْضِ
            وَلاَ فِى السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
          </Arabic>
        )
      }}
      indonesian={() => (
        <p>
          “Dengan nama Allah yang bila disebut, segala sesuatu di bumi dan
          langit tidak akan berbahaya, Dia-lah Yang Maha Mendengar lagi Maha
          Mengetahui.”
        </p>
      )}
      info={() => (
        <p>
          Barangsiapa yang mengucapkan dzikir tersebut sebanyak tiga kali di
          pagi hari dan tiga kali di petang hari, maka tidak akan ada bahaya
          yang tiba-tiba memudaratkannya.
        </p>
      )}
      source={() => (
        <p>
          HR. Abu Daud no. 5088, 5089, Tirmidzi no. 3388, dan Ibnu Majah no.
          3869. Al Hafizh Abu Thohir mengatakan bahwa sanad hadits ini hasan.
        </p>
      )}
      repeat={3}
    />
  )
}

export default PagiEleven
