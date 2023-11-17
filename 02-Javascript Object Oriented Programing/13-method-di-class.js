// Method di Class
/*
  > Membuat method di class sebenarnya bisa dilakukan seperti dengan cara menambahkan method di constructur function
  > Namum, hal tersebut sebenarnya menambahkan method ke instance object
  > Khusus untuk method sebaiknya kita menambahkan ke prototype, bukan ke instance object
  > Untungnya di class, ada cara mudah menambahkan method dan secara otomatis di tambahkan ke prototype
*/

// Kode: method di class
class Person {
  
  constructor(name) {
    this.name = name
  }

  sayHello(name) {
    console.log(`Hi ${name}, my name is ${this.name}`)
  }
}

const user = new Person("Syahrin")
console.log(user) // Person { name: "Syahrin" } > Method tersimpan di prototype

// Kode: method di class yang tidak di anjurkan
{
  class Person {
  
    constructor(name) {
      this.name = name
      this.sayHello = function (name) {
        console.log(`Hi ${name}, my name is ${this.name}`)
      }
    }

  }
  
  const user = new Person("Syahrin")
  console.log(user) // Person { name: 'Syahrin', sayHello: [Function (anonymous)] } > Method tersimpan di object
}