// Object Method
/*
  > Pada tipe data object, kita sudah membahas tentang property di object
  > Karena sebenernya function juga merupakan salah satu tipe data, jadi function pun sebenernya bisa ditambahkan sebagai propety di object
  > Cara pembuatannya pun sama dengan function sebagai value
  > Function di object kadang disebut juga sebagai object method
*/

// Kode: membuat object dengan method
function sayWOW(name) {
  console.log(`WOW ${name}`)
}

const person = {
  name : "Syahrin",
  sayHello : function (name) {
    console.log(`Hello ${name}`)
  },
  sayAWOW : sayWOW
}

console.log(person) // hasil = { name: 'Syahrin', sayHello: [Function: sayHello], sayAWOW: [Function: sayWOW]  }
console.log(person.name) // hasil = Syahrin
person.sayHello("Mamat") // hasil = Hello Mamat
person.sayAWOW("Donald") // hasil = WOW Donland


// Kode: menambahkan method ke object
const user = {
  name: "Syahrin",
}

user.sayHola = function (name) {
  console.log(`Hola ${name}`)
}

user.sayHola("Duck") // hasil = Hola Duck