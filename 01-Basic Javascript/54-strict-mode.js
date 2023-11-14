// Strict Mode
/*
  > Saat kita menjalankan kode program Javascript, secara default kode program kita berjalan dalam mode tidak strict, atau istilahnya sloppy mode
  > Pada ECMAScript 5, diperkenalkan mode strict, dimana ketika strict mode dijakankan, maka akan merubah berberapa cara kerja di javascript, seperti:
    - Merubah berberapa javascript error dari yang tadinya silent error menjadi throw error (terlihat)
    - Memperbaiki berberapa kesalahan engine dalam javascript untuk di optimalisasi
    - Menolak berberapa kode perintah yang kedepannya akan digunakan di ECMAScript 
*/

// Cara menyalakan Strict Mode
/*
  > Untuk menyalakan strict mode, kita bisa menambahkan `use strict` pada baris awal file javascript
  > Atau bisa juga di tambahkan di awal function kita
*/

// Kode: strict mode
{
  function useStrictMode() {
    'use strict'
    const person = {
      firstName : "Syahrin"
    }
    // with (person) {
    //   console.log(firstName) // Error
    if (person) {
      console.log(person.firstName)
    }
  }

  useStrictMode()
}

// Keuntungan menggunakan strict mode
/*
  > Mendeteksi kesalahan lebih awal
  > Menghindari prilakut ambigu
  > Peningkatan kinerja seperti meningkatkan efisiensi esekusi kode
  > Pencegahan penggunaan variable global yang tidak di sengaja
  > Penghapusan penggunaan kata kunci yang dicadangkan 
  > Menghilangkan konteks global untuk fungsi
  > Penambahan kesalahan pada oprasi yang tidak aman
  > Lebih konsisten dengan standar

  * Penggunaan strict mode sangat dianjurkan dalam pengembangan javascript modern, ini akan menghindari banyak masalah umum dalam pengembangan javascript dan meningkatkan keamanan serta kualitas kode kita
*/