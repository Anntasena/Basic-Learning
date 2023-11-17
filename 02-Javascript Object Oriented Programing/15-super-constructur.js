// Super Construtur
/*
  > Class inheritance sifatnya mirip seperti prototype inheritance
  > Bagaimana dengan constructur inheritance? sebenarnya constructur inheritance hanyalah melakakukan esekusi constructur lain dengan tujuan agar property di constructur lain bisa ditambahkan ke instance object ini
  > Dalam kasus ini, jika kita ingin mencapai hasil yang sama, kita bisa menggunakan kata kunci super di dalam consturctur 
  > Kata kunci super digunakan untuk memanggil constructur super class
  > Jika di child class kita memmbuat construtur, maka kita wajib memamnggil constructur, walaupun di parent tidak ada constructur
*/

// Kode: super constructur (1)
class Employee {
  constructor(firstName) {
    this.firstName = firstName
  }

  sayHello(name) {
    console.log(`Hi ${name}, my name is employee ${this.firstName}`)
  }
}

// Kode: super constructur (2)
class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName)
    this.lastName = lastName
  }

  sayHello(name) {
    console.log(`Hi ${name}, my name is manager ${this.firstName} ${this.lastName}`)
  }
}

const userEmployee = new Employee("Syarhin") // Hi Mamat, my name is employee Syarhin
userEmployee.sayHello("Mamat")

const userManager = new Manager("Donald", "Bebek") // Hi Disney, my name is manager Donald Bebek
userManager.sayHello("Dinsey")

console.log(userEmployee) // Employee { firstName: 'Syarhin' }
console.log(userManager) // Manager { firstName: 'Donald', lastName: 'Bebek' }
