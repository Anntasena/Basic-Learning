// Kata Kunci Class

// Membuat class
/*  
  > Sejak ECMAScript 6, diperkenalkan kata kunci baru, yaitu class, ini merupakan kata kunci yang digunakan untuk membuat class di javascript
  > Dengan kata kunci class, kita tidak perlu lagi menggunakan constructur function untuk membuat class
*/

// Kode: membuat class
class Person {

}

Person.prototype.sayHello = function() {

}

const syahrin = new Person()
console.log(syahrin) // Person {}

// Catatan 
/* 
  > Secara implementasi tidak ada yang berbeda dengan constructur function
  > ini juga berbasis prototype
*/