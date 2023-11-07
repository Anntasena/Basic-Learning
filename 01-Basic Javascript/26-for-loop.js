// For Loop
/*
  > For Loop adalah salah satu kata kunci yang bisa digunakan untuk pengulangan
  > Blok kode yang terdapat dalam for akan selalu di ulangi selama kondisi for terpenuhi
*/

// Sintak perulangan for
/* 

for(init statement; kondisi; post statement) {
   // blok pengulangan
}


  > init statement akan di esekusi hanya sekai di awal sebelum pengulangan
  > kondisi akan melakukan pengecekan dalam setiap pengulangan, jika true akan melakukan pengulangan, jika false pengulangan akan berhenti
  > post statement akan di esekusi setiap kali diakhiri pengulangan 
  > init stetement, kondisi dan post statement tidak wajib di isi, jika tidak di isi kondisi akan selalu berniali true 
*/

// Kode pengulangan tanpa henti
// for (; ;) {
//   console.log("coba")
// }

// Bisa tapi tidak best practice
let counter = 1
for (; counter <= 5;) {
  console.log(`Perulangan ke: ${counter} `)
  counter++
}

// Bisa tapi kurang best practice
let counters = 1
for (; counters <= 5; counters++) {
  console.log(`Perulangan Baru: ${counters}`)
}

// Best practice!
for (let newCounter = 1; newCounter <= 5; newCounter++) {
  console.log(`Perulangan best practice: ${newCounter}`)
}
