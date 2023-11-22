// String
/*
  > Tipe data string sudah kita bahas di javascript dasar 
  > Namun kita belum membahas instance method atau juga instance properties yang terdapat di string
*/

// String instance method
/*
  > String sendiri memiliki banyak sekali instance method dan properties
  > Hal ini menjadikan untuk manipulasi data string sangat mudah di javascript, seperti mengubah menjadi lowercase, UPPERCASE, memotong string menjadi array dan lain lain
*/

const name = "Syahrin Matlail Fajri"

console.log(name.length) // 21 > Jumlah karakter beserta spasi
console.log(name.toLowerCase()) // syahrin matlail fajri > mengubah karakter menjadi huruf kecil semua
console.log(name.toUpperCase()) // SYAHRIN MATLAIL FAJRI > mengubah karakter menjadi huruf besar semua
console.log(name.split(" ")) // [ 'Syahrin', 'Matlail', 'Fajri' ] > memisahkan data sring menjadi berberapa string menjadi array

const input = "      input data        "
console.log(input.trim()) // input data > menghilangkan spasi kiri dan kanan