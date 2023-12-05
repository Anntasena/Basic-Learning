// RegExp
/*
  > RegExp merupakan implementasi dari regular expression di javascript
  > Regular expression merupakan fitur untuk mencari text dengan pola
  > Membuat regular expression di javascript bisa dilakukan dengan 2 cara, yaitu menggunakan literal notation atau membuat object RegExp
*/

// Membuat RegExp
const regex1 = /a/
const regex2 = new RegExp("[a]")
const regex3 = new RegExp(/[a]/)

// RegExp instance method
/*
Instance method ==> Keterangan

  > exec(value) : result ==> eksekusi regex, jika menemukan data sesuai pola, maka kembalikan result nya, jika tidak maka null
  > test(value) : boolean ==> eksekusi regex, jika menemukan data sesuai pola maka, return true, jika tidak maka false
*/

// Kode: RegExp instance method
const name = "Syahrin Matlail Syahrin Fajri"
const regex = /Syahrin/

console.log(" ")
let result = regex.exec(name)
console.log(result)
/*
[
  'Syahrin',
  index: 0,
  input: 'Syahrin Matlail Syahrin Fajri',
  groups: undefined
]
*/

let test = regex.test(name)
console.log(test) // true

// RegExp modifier
/*
RegExp memiliki modifier untuk mengubah sifat cara pencaharian

Modifier ==> keterangan

  > i ==> Regex menjadi incase sensitive
  > g ==> Pencarian dilakukan secara global, secara default setelah menemukan data, pencarian akan berhenti
  > m ==> Multiline, pencarian dilakukan di tiap baris (enter)
*/
{

const name = "syahrin matlail \nsyahrin fajri \nsena matlail"
const regex1 = /syahrin/g
const regex2 = /Matlail/ig

let result
while ((result = regex1.exec(name)) !== null) {
  console.log(result)
}
/*
[
  'matlail',
  index: 8,
  input: 'syahrin matlail \nsyahrin fajri \nsena matlail',
  groups: undefined
]
*/

while ((result = regex2.exec(name)) !== null) {
  console.log(result)
}
/*
[
  'matlail',
  index: 37,
  input: 'syahrin matlail \nsyahrin fajri \nsena matlail',
  groups: undefined
]
*/

}

// Fitur RegExp lainnya
/*
  > Assersions : indikasi awal dan akhir teks
  > Character classes : membedakan antara huruf dan angka
  > Group dan range : melakukan grouping atau range huruf dan angka
  > Quantifier : menentukan jumlah huruf dan angka
*/

// Advance Regex
{

  const regex = /ek[ioaeu]/ig

  const name = "eko eki eka eku eke eko eki"
  let resut
  while ((result = regex.exec(name)) !== null) {
    console.log(result)
  }
}

// Regular Expresion di String
/* 
Di javascript, tipe data string memiliki instance method yang dapat memanfaatkan RegExp untuk melakukan pencarian

String Method ==> Keterangan
  > match(regex) : array ==> Mencari semua data yang sesuai dengan regex
  > search(regex) : index ==> Mencari index data yang sesuai dengan regex
  > replace(regex, value) ==> Mengubah data dengan, value yang sesuai regex
  > replaceAll(regex, value) ==> Mengubah semua data dengan value yang sesuai regex
  > split(regex) : array ==> Memotong string dengan regex
*/
console.log("--------------------------")
{
  const string = "eka ado eki eka ejo emi elo eke"

  console.log(string.match(/ek[aiueo]/ig)) // [ 'eka', 'eki', 'eka', 'eke' ]
  console.log(string.search(/ek[aiueo]/ig)) // 0
  console.log(string.replace(/ek[aiueo]/ig, "keren")) // keren ado keren keren ejo emi elo keren
  console.log(string.replaceAll(/ek[aiueo]/ig, "keren")) // keren ado keren keren ejo emi elo keren
  console.log(string.split(/e/ig))
  /*
  [
  '',    'ka ado ',
  'ki ', 'ka ',
  'jo ', 'mi ',
  'lo ', 'k',
  ''
  ]
  */
}