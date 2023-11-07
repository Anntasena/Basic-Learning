// Operator Typeof
/*
  > Typeof merupakan operator yang bisa digunakan untuk melihat tipe data sebuah value atau variable
  > Karna Javascript merupakan dynamic language, jadi kadang kita perlu mengecek tipe data sebuah value atau variable menggunakan operator typeof
  > Hasil dari oprator typeof adalah tipe data string
*/

let data = ["nama", "alamat"]

if (typeof data === "number") {
  console.log("Number")
} else if (typeof data === "string") {
  console.log("string")
} else if (typeof data === "boolean") {
  console.log("boolean")
} else if (typeof data === "null") {
  console.log("null")
} else if (typeof data === "object") {
  console.log("Object")
} else {
  console.log("Array")
}

let dataless = 12
const typedata = typeof data 
console.log(typedata)