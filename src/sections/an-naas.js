import React from "react"
import Arabic from "../components/arabic"
import Card from "../components/card"

const PagiFour = ({ number }) => {
  return (
    <Card
      number={number}
      title="Membaca Surat An-Naas"
      arabic={() => {
        return (
          <>
            <Arabic>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</Arabic>
            <Arabic>
              قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِن
              شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ
              النَّاسِ مِنَ الْجِنَّةِ وَ النَّاسِ
            </Arabic>
          </>
        )
      }}
      indonesian={() => (
        <p>
          “Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.
          Katakanlah: Aku berlindung kepada Rabb manusia. Raja manusia. Sembahan
          manusia, dari kejahatan (bisikan) syaitan yang biasa bersembunyi, yang
          membisikkan (kejahatan) ke dalam dada manusia, dari jin dan manusia.”
          (QS. An Naas: 1-6) (Dibaca 3 x)
        </p>
      )}
      info={() => (
        <p>
          Siapa yang mengucapkannya masing-masing tiga kali ketika pagi dan
          petang, maka segala sesuatu akan dicukupkan untuknya.
        </p>
      )}
    />
  )
}

export default PagiFour
