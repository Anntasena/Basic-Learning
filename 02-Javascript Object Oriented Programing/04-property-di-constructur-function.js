// Property di Constuctur Function
/*
  > Sebenarnya setelah kita membuat object, kita bisa dengan mudah menambahkan property ke dalam object tersebut hanya dengan menggunakan nama variablenya, di ikuti tanda titik dan nama property
  > Namun jika seperti itu, alhasil, consturctur function yang sudah kita buat tidak terlalu berguna, karna proprty nya hanya ada di object yang kita tambahkan ke property
  > Untuk menambahkan property di dalam sebuah object yang dibuat dari constructur function, kita bisa menggunakan kata kunci this lalu di ikuti dengan nama propertynya
*/

// Kode: property di constructur function
// *Penulisan property bertujuan agar data konsisten 
function Person() {
  this.firstName = ""
  this.lastName = ""
}

const syahrin = new Person()
syahrin.firstName = "Syahrin"

const matlail = new Person()
matlail.firstName = "Matlail"
matlail.lastName = "Fajri"

console.log(syahrin) // Person { firstName: 'Syahrin', lastName: '' }
console.log(matlail) // Person { firstName: 'Matlail', lastName: 'Fajri' }