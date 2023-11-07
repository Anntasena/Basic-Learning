// String Template / Template literal
/*
  > Kita sudah tau bahwa untuk menambahkan string dengan data lain, kita bisa menggunakan operator (+) plus
  > Namun pada kasus tertentu, penggunaan operator (+) sangat menyulitkan, apalagi dalam jumlah banyak
  > Javascript memiliki fitur yang bernama string template, dimana kita mensubsitusi data dari luar string ke dalam string, seperti menggambil data variable, bahkan melakukan operasi matematika 
  > Untuk menggunakan string template, cara pembuatan stringnya harus menggunakan (``) backtick
*/

// Tujuan menggunakan string template / Template literal
// > Untuk membuat string dengan cara yang lebih fleksibel dan mudah di baca
// > Meminimalisir kesalahan

const name = "Syahrin Matlail Fajri"
const dataName = `Name : ${name}`
console.log(dataName)

const age = 24;
const dataAge = `Age : ${age}`
console.log(dataAge)

const religion = "Islam"
const dataReligion = `Religion : ${religion}`
console.log(dataReligion)

const dataUser = `User : ${dataName} ${dataAge} ${dataReligion}`
console.log(dataUser)

// Kode expression di string template
const yourName = "Syahrin Matlail Fajri"
const value = 80
const nilaiLulus = `Name : ${yourName}, Lulus : ${value > 75}`
console.log(nilaiLulus)

// Multiline String
/*
  > String template juga bisa digunakaan untuk membuat multi line
  > Kita cukup menambahkan enter di textnya
*/
let multiline = `
01. Kata pertama
02. Kata kedua
03. Kata Ketiga
`

console.log(multiline)