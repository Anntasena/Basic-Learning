// With Statement
/*
  > With Statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data
  > Dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebutnya data
*/

// Kode: tanpa with statement
const person = {
  firstname : "Syahrin",
  middlename : "Matlail",
  lastname : "Fajri"
}

console.log(person.firstname)
console.log(person.middlename)
console.log(person.lastname)

// Kode: dengan with statement
const drink = {
  firstname: "Good",
  middlename: "Day",
  lastname: "Coffee"
}

with(drink) {
  console.log(firstname)
  console.log(middlename)
  console.log(lastname)
}

// Catatan
/*
  > Meskipun di javascript ada fitur with statement tetapi tidak di rekomendasikan
  > Bahkan di javascript baru bahkan dianggap tidak boleh digunakan
*/

// Mengapa with statement tidak direkomendasikan
/*
  > Walaupun fitur ini menarik, namun terkadang with statement membuat kode menjadi ambigu
*/

// Contoh kode yang membuat ambigu
const user = {
  name: "Mamat",
  age: 22,
  country: "Indonesia"
}

const age = 17
const country = "America"

with (user) {
  console.log(age) // ini membuat ambigu
  console.log(country) // ini membuat ambigu
}