// For Of
/*
  > Jika For of digunakan untuk melakukan iterasi property atau index, berbeda dengan For of, ini digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti array, string dan lain lain
  > For of tidak bisa digunakan untuk melakukan iterasi data di object, karna object bukanlah iterable
*/

// sintaks
/*

for (const (nama variable) of (variable array)) {

}

*/


// Kode: For of di array
const names = ["Syahrin", "Matlail", "Fajri"]

for(const name of names) {
  console.log(`${name}`)
}

// Kode: For of di string
const fullname = "Syahrin Matlail Fajri"

for(const character of fullname) {
  console.log(character)
}

// Kode: For of di Map
const myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// Kode: For of di set
const mySet = new Set([1, 2, 3, 2, 1]);

for (const value of mySet) {
  console.log(value);
}

// Kode: For of di Nodelist (DOM)
// const elements = document.querySelectorAll(".my-element");

// for (const element of elements) {
//   console.log(element.textContent);
// }