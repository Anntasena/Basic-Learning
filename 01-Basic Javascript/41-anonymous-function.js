// Anonymous Function
/*
  > Sebelumnya kita selalu membuat function dengan nama
  > Kita juga bisa membuat function tanpa nama function, atau istilahnya adalah anonymous function
  > Kita bisa buat anonymous function dalam sebuah variable atau bisa juga kita buat ketika mengisi parameter
*/

// Kode: Anonymous function di varibale
let say = function(name) { // jika di perhatikan di baris ini tidak ada nama functionnya
  console.log(`Hello ${name}`)
}

say("Syahrin") // hasil = Hello Syahrin

// Kode: Anonymous function di paramter
function giveMyName(callback) {
  callback("Mamat")
}

giveMyName(function(name) {
  console.log(`Hello ${name}`) // hasil = Hello Mamat
})