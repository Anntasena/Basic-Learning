// Operator Logika Non Boolean
/*
  > Sebelummya kita sudah tau bahwa operator logika AND(&&) dan OR (||) digunakan untuk dua data boolean
  > Namum berbeda di javascript, Kita bisa menggunakan operatro AND dan OR untuk tipe data non boolean
*/

// Operator OR (||) di Non Boolean
/*
  > Operator logika OR (||), membaca dari kiri ke kanan
  > Operator ini akan mengambil nilai pertama yang truthy
  > Jika tidak ada satupun yang bernilai truthy, maka yang terakhir yang akan di ambil
*/

console.log("Hello" || ""); // Hello
console.log("" || []); // []
console.log("0" || "NOL"); // 0
console.log(0 || "NOL"); // NOL
console.log(null || "NULL"); // NULL
console.log(undefined || "UNDEFINED"); // UNDEFINED
console.log(0 || false) // Jika keduanya boolean false maka akan diambil value yang terakhir

const person = {
  firstName : "Syahrin",
  lastName : "Matlail"
}

const name = person.firstName || person.lastName
console.log(name)

// Operator AND (&&) di Non Boolean
/*
  > Operator logika AND (||), membaca dari kiri ke kanan 
  > Operator ini akan mengambil nilai pertama dari falsy
  > Jika tidak ada satupun yang bernilai falsy, maka nilai terakhir yang diambil
*/

console.log("Hello" && "") // " " sting kosong
console.log("" && []); // " " string kosong
console.log("0" && "NOL") // NOL karna value yang terakhir yang di ambil
console.log(0 && "NOL") // 0
console.log(null && "NULL") // null
console.log(undefined && "UNDEFINED") // undefined
console.log(undefined && null); // undefined
