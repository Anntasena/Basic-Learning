// Property di Class
/*
  > Sama seperti pada constructur function, dalam class pun kita bisa menambahkan property
  > Karna hasil akhirnya adalah sebuah object, jadi menambahkan property di class juga bisa dilakukan di instance objectnya
*/

// Kode: property di class
class Person {
  constructor(name) {
    this.name = name
  }
}

const syahrin = new Person("Syahrin")
console.log(syahrin) // Person { name: "Syahrin" }