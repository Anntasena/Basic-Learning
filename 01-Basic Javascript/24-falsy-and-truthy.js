// Falsy And Truthy
/*
  > Falsy atau di tulis falsey, adalah value yang ketika dalam konteks boolean, dia dianggap false
  > Ini adalah salah satu fitur unik dari javascript, yang berguna, namun kadang juga sering membingungkan
  > Jadi di javascript, kondisi itu tidak hanya bisa booleanm tetapi di luar boolean pun bisa, namun kita harus tau berberapa data falsy atau dianggap false
*/

// Data Falsy
/*
  > false                 = boolean false
  > 0, -0                 = Number 0 dan -0 dianggap false
  > "", '', ``            = Semua string kosong dianggap false
  > null                  = null dianggap false
  > undefined             = undefined dianggap false
  > NaN                   = NaN dianggap false
*/

// Data Truty
/*
  > Truty adalah kebalikan dari falsy, dimana datanya dianggap bernilai true
  > Data truty adalah data yang bukan bernilai falsy
*/

let dataFalse = false
let dataNumber = 0
let dataString = ""
let dataNull = null
let dataUndefined = undefined
let dataNaN = NaN

if(dataFalse) {
  console.log("Data Truty")
} else {
  console.log("Data Falsy")
}
if(dataNumber) {
  console.log("Data Truty")
} else {
  console.log("Data Falsy")
}
if(dataString) {
  console.log("Data Truty")
} else {
  console.log("Data Falsy")
}
if(dataNull) {
  console.log("Data Truty")
} else {
  console.log("Data Falsy")
}
if(dataUndefined) {
  console.log("Data Truty")
} else {
  console.log("Data Falsy")
}
if(dataNaN) {
  console.log("Data Truty")
} else {
  console.log("Data Falsy")
}