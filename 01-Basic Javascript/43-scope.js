// Scope
/*
  > Scope merupakan area akses sebuah data
  > Ada dua jenis scope, global scope dan local scope
  > Setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut
  > Data dari global scope bisa kita akses dari local scope, namun data dari local scope hanya bisa diakses dari local scope tersebut atau di scope local dibawahnya (dalam kasus function dalam function)
*/

// Kode: global scope
// global scope
let counter = 0
function hitMe() {
  // local function hitMe
  counter++ 
}

hitMe()
hitMe()
hitMe()

console.log(counter) // hasil = 3 karna ada tiga hitMe()


// Kode: local scope
function first() {
  let firstVariable = "First"
  console.log(firstVariable) // jika seperti ini baru bisa di akses
}

function second() {
  let secondVariable = "Second"
}

first() // hasil = First
second() // tidak ada hasil
// console.log(firstVariable) // akan terjadi error karna tidak bisa mengakses local scope

// Kode: nested fucntion scope
function third() {
  let thirdVariable = "Third"

  function fourth() {
    console.log(thirdVariable)
  }
  fourth()
}

third() //hasil = Third
