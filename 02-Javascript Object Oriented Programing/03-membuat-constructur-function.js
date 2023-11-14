// Membuat Constructur Function

// Membuat Object
/*
  > Sebenarnya kita sudah belajar tipe data object, dengan cara membuat variable dengan tipe data object
  > Namun pembuatan object menggunakan tipe data object, akan membuat object yang selalu unik, sedangkan OOP, biasanya kita akan membuat class sebagai cetakan sehingga bisa membuat object dengan karakteristik yang sama berkali kali tanpa harus mendeklarasikan object berkali kali seperti menggunakan tipe data object
*/

// Kode: Membuat object dengan object
const syahrin = {
  firstName: "Syahrin",
  lastName: "Matlail"
}

const donald = {
  firstName: "Donald",
  lastName: "Bebek"
}

console.log(syahrin) // { firstName: 'Syahrin', lastName: 'Matlail' }

// Membuat constructur function
/*
  > Sebelum ECMAScript versi 6, pembuatan class, biasanya menggunakan function. Hal ini dikarnakan sebenarnya javascript bukanlah bahasa pemrograman yang fokus ke OOP
  > Untuk membuat class di javascript lama, kita bisa membuat function
  > Function ini kita sebut dengan constructur function
*/

// Kode: constructor function
/*
  > Constructor function seperti function pada umumnya, tetapi
  > Best practice dalam membuat constructor function huruf pertama di nama functionnya harus menggunakan huruf besar (kapital)
*/
function Person() {

}

// Membuat object dari constructur function
/*
  > Setelah kita membuat class
  > Jika ingin membuat object dari class tersebut, kita bisa menggunakan kata kunci new, lalu diikuti dengan nama constructur functionnya
*/

// Kode: membuat object
const mamat = new Person()
const fajri = new Person()