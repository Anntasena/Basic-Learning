// Prototype
/*
  > Javascript sebelumnya di kenal dengan pemrograman berbasis prototype
  > Memang agak sedikit membingungkan, dan tidak di pungkiri, banyak sekali yang bingung dengan konsep prototype di javascript
*/

// Prototype Inheritance
/*
  > Saat kita membuat object dari constructur function, object tersebut disebut instance, semua property (baik itu value atau method), akan berada di dalam instance objectnya
  > Setiap kita membuat sebuah constructur fucntion, maka secara otomatis akan dibuatkan prototypenya, misal ketika kita membuat constructur function Person, maka akan ada Person.prototype
  > Saat kita membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari Constructur.prototype nya
  > Untuk mengakses prototype milik sebuah instance, kita bisa menggunakan __proto__ (dobble underscore)
*/

// Kode: object instance
function Person(firstName,lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.sayHello = function (name) {
    console.log(`Hi ${name}, my name is ${firstName}`)
  }
}

const syahrin = new Person("Syahrin", "Matlail")
const donald = new Person("Donlad", "Bebek")

console.log(syahrin)
console.log(donald)

// Menambah propterty ke prototype
/*
  > Protperty mirip seperti object, dimana kita bisa menambah propety baik itu value ataupun method
  > Saat kita menambahkan sebuah propety ke prototype, secara otomatis, semua object instance yang turunan dari prototype tersebut memiliki property tersebut
*/

// Kode: menambahkan property ke instance object
const eko = new Person("Eko", "Khannedy")

// ini hanya untuk instance object eko
eko.sayBye = function() {
  console.log("Good Bye")
}

// Kode: menambahkan property ke prototype
Person.prototype.sayBye = function() {
  console.log("Good Bye All")
}

Person.prototype.run = function() {
  console.log(`${this.firstName} is running`)
}

// Cara kerja prototype inheritance
/*
  > Bagaimana bisa property di prototype diakses dari object inheritance?
  > Ketika kita mengakses property di object inheritance, pertama akan di cek apakah object tersebut terdapat property tersebut atau tidak, jika masih tidak ada, akan di cek lagi __proto__ (prototype) yang lebih tinggi, begitu seterusnya, sampai berakhir di Object Prototype
*/