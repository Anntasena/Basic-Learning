// For In
/*
  > For in merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property di object atau index di array
  > Walaupun for bisa digunakan untuk array, namun tidak direkomendasikan untuk array, karba biasanya kita jarang sekali butuh data index untuk array, kita bisa menggunakan for of (setelah meteri ini)
*/

// sintaks
/*

for (const (nama variable) in (variable object)) {

}

*/

// Kode: For in di Object
const person = {
  firstname: "Syahrin",
  middlename: "Matlail",
  lastname: "Fajri"
}

for (const property in person) {
  console.log(`Ini Nama Propertynya: ${property}, Ini Value Propertynya: ${person[property]}`)
}

// Kode: For in di array
const names = ["Syahrin", "Matlail", "Fajri"]

for (const index in names) {
  console.log(`Ini Indexnya: ${index}, Ini data per Indexnya: ${names[index]}`)
}