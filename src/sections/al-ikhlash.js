import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiTwo = ({ number }) => {
  return (
    <Card
      number={number}
      title="Membaca Surat Al-Ikhlash"
      arabic={() => {
        return (
          <>
            <Arabic>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</Arabic>
            <Arabic>
              قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ
              يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ
            </Arabic>
          </>
        )
      }}
      indonesian={() => (
        <p>
          “Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.
          Katakanlah: Dialah Allah, Yang Maha Esa. Allah adalah ilah yang
          bergantung kepada-Nya segala urusan. Dia tidak beranak dan tiada pula
          diperanakkan, dan tidak ada seorang pun yang setara dengan Dia.” (QS.
          Al Ikhlas: 1-4)
        </p>
      )}
      info={() => (
        <p>
          Siapa yang mengucapkannya masing-masing tiga kali ketika pagi dan
          petang, maka segala sesuatu akan dicukupkan untuknya.
        </p>
      )}
      source={() => (
        <p>
          HR. Abu Daud no. 5082, Tirmidzi no. 3575. Al Hafizh Abu Thohir
          mengatakan bahwa sanad hadits ini hasan.
        </p>
      )}
      repeat={3}
    />
  )
}

export default PagiTwo
