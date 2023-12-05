// Symbol 
/*
  > Symbol merupakan tipe data yang digaransi akan selalu unique setiap kali kita membuat data symbol
  > Symbol kadang banyak digunakan untuk membuat key pada object
*/

// Kode: symbol
const firstName = Symbol()
const lastName = Symbol()

const person = {}
person[firstName] = "Syahrin"
person[lastName] = "Matlail"

console.log(person) // { [Symbol()]: 'Syahrin', [Symbol()]: 'Matlail' }
console.log(person[firstName]) // Syahrin
console.log(person[lastName]) // Matlail

// Symbol for
/*
  > Kadang agak sulit membuat symbol harus selalu menggunakan variable
  > Pembuatan symbol juga bisa menggunakan static method symbol.for(key)
  > Jika kita menggunakan key yang sama, symbol yang sama akan selalu dikembalikan
*/

const person1 = {}
person[Symbol.for("firstName")] = "Donald"
person[Symbol.for("lastName")] = "Bebek"

console.log(person1) // {}
console.log(person1[Symbol.for("firstName")]) // undefined
console.log(person1[Symbol.for("lastName")]) // undefined

console.log(Symbol.for("firstName")) === Symbol.for("firstName") // Symbol(firstName)

