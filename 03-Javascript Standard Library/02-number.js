// Number
/* 
  > Number merupakan function yang digunakan untuk melakukan konversi ke tipe data number
  > Jika data tidak bisa di konversi ke number, secara otomatis hasilnya adalah NaN
*/

// Kode: Number
const input = "12345"   
const number = Number(input)

console.log(typeof input) // string
console.log(typeof number) // number
console.log(number) // 12345

// Number Static Properties
/*
  > Number memiliki banyak static properties, seperti: 
    - Number.MIN_Value untuk mendapat number minimal
    - Number.MAX_Value untuk mendapat number maksimal
*/

// *Static Properties adalah properties / attributs yang bisa diakses tanpa membuat objek numbernya

// Kode: Static Properties
console.log(Number.MIN_VALUE) // 5e-324
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991


// Number static method
/* 
  > Number memiliki banyak statik method, seperti:
    - Number.isNaN(value) untuk mengecek apakah value NaN atau bukan
    - Number.isInteger(value) untuk mengecek apakah value berupa integer atau bukan
*/

// Kode: static method
const data = Number("12345")

console.log(Number.isNaN(data)) // false
console.log(Number.isInteger(data)) // true

// Number instance method
/*
  > Number memiliki banyak instance method, seperti:
    - Number.toLocalString(locale) untuk mengubah string menjadi string sesuai locale
    - Number.toString(radix) untuk mengubah number menjadi string sesuai radix
*/

// Kode: number instance method
const value = Number(12345)

console.log(value.toString(2)) // 11000000111001
console.log(value.toLocaleString("id-ID")) // 12.345