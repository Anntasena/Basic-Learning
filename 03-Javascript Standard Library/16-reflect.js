// Reflect
/*
  > Refelct merupakan class yang digunakan untuk mengesekusi javascript function
  > Reflect tidak memiliki constructor, dan  cara penggunaan reflect tidak dengan membuat object dengan new reflect
  > Penggunaan reflect adalah menggunakan banyak sekali static methodnya
*/

// Kode: reflect
const person = {}

Reflect.set(person, 'firstName', 'Syahrin')
Reflect.set(person, 'lastName', 'Matlail')

console.log(person) // { firstName: 'Syahrin', lastName: 'Matlail' }

console.log(Reflect.has(person, 'firstName')) // true
console.log(Reflect.has(person, 'middleName')) // false