// Method di Constructur Function
/*
  > Sama seperti pada tipe data object biasanya, kita juga menambahkan method di dalam constuctur function
  > Jika tambahan method di constructur function, secara otomatis object yang dibuat akan memilliki method tersebut
*/

// Kode: method di constructur function
function Person() {
  this.firstName = "",
  this.lastName = "",
  this.sayHello = function (name) {
    console.log(`Hello ${name}, my name is ${this.firstName}`)
  }
}

const syahrin = new Person()
syahrin.firstName = "Syahrin"
syahrin.lastName = "Matlail"
syahrin.sayHello("Mamat") // Hello Mamat, my name is Syahrin

const donald = new Person()
donald.firstName = "Donald"
donald.lastName = "Bebek"
donald.sayHello("Silento") // Hello Silento, my name is Donald