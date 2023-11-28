// Object
/*
  > Tipe data object sering kali di bahas di javascript dasar dan javascript OOP
  > Pada kali ini kita akan membahas static method yang ada di object
*/

// Object freeze & seal
/*
  > Secara default, object bisa diubah atau dihapus propertiesnya
  > Jika ingin mengubah sebuah object menjadi object yang tidak bisa di ubah atau di hapus, kita bisa menggunakan berberapa static metbod
    - Object.freeze() => digunakan untuk mengubah object menjadi object yang tidak bisa dirubah atau dihapus attributenya
    - Object.seal() => digunakan untuk mengubah object menjadi object yang tidak bisa dihapus tetapi bisa diubah attributenya
*/

// Kode: Object freeze
const person = {
  firstName: "Syahrin",
  lastName: "Matlail"
}

Object.freeze(person) // tidak bisa diubah dan dihapus
// Object.seal(person) //  bisa diubah tetapi tidak dihapus

person.firstName = "DiUbah" // Tidak bisa diubah
delete person.firstName // Tidak bisa diubah

console.log(person) // { firstName: 'Syahrin', lastName: 'Matlail' }

// Object assign
/* 
  > Kadang kita ada kasus menggabungkan semua attribute dari sebuah object ke object lain
  > Hal ini bisa kita lakukan dengan menggunakan Object.assign(target.source)
*/

// Kode: object assign
const target = {firstName: "Syahrin"}
const source = {lastName: "Matlail"}

Object.assign(target, source) // Menggabungkan object

console.log(target) // { firstName: 'Syahrin', lastName: 'Matlail' }
console.log(source) // { lastName: 'Matlail' }

// Object property name & value
/* 
  > Object juga memiliki static method untuk digunakan mengambil semua property name dan value
    - Object.value() => digunakan untuk mengambil semua property value
    - Object.getPropertyNames() => digunakan untuk mengambilsemua property name
*/

// * Hasil yang diterima akan berbentuk array

// Kode: Object property name & value
{
  const person = {
    firstName: "Syahrin",
    lastName: "Matlail"
  }

  console.log(Object.values(person)) // [ 'Syahrin', 'Matlail' ]
  console.log(Object.getOwnPropertyNames(person)) // [ 'firstName', 'lastName' ] > bentuk data menjadi string
}