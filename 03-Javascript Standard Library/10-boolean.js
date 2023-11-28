// Boolean
/*
  > Boolean merupakan wrapper class untuk tipe primitif boolean
  > Boolean memiliki method toString() untuk menkonversi ke tipe data string
  > Dan memiliki method valueOf() untuk mengkonversi ke tipe boolean primitif
*/

// Kode: boolean
const boolean = Boolean(true)

console.log(boolean) // true
console.log(boolean.toString()) // true => tetapi bentuk data tipe string
console.log(boolean.valueOf()) // true => primitif boolean
console.log(typeof boolean) // boolean