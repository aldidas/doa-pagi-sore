import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiThree = ({ number }) => {
  return (
    <Card
      number={number}
      title="Membaca Surat Al-Falaq"
      arabic={() => {
        return (
          <>
            <Arabic>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</Arabic>
            <Arabic>
              قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ
              غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
              وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
            </Arabic>
          </>
        )
      }}
      indonesian={() => (
        <p>
          “Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.
          Katakanlah: Aku berlindung kepada Rabb yang menguasai Shubuh, dari
          kejahatan makhluk-Nya, dan dari kejahatan malam apabila telah gelap
          gulita, dan dari kejahatan-kejahatan wanita tukang sihir yang
          menghembus pada buhul-buhul, dan dari kejahatan orang yang dengki
          apabila ia dengki”. (QS. Al Falaq: 1-5)
        </p>
      )}
      info={() => (
        <p>
          Siapa yang mengucapkannya masing-masing tiga kali ketika pagi dan
          petang, maka segala sesuatu akan dicukupkan untuknya.
        </p>
      )}
      repeat={3}
    />
  )
}

export default PagiThree
