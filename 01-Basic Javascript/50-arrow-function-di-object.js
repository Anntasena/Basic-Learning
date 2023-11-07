// Arrow Function di Object
/*
  > Sebelumnya kita sudah membahas tentang arrow function
  > Arrow function juga bisa kita gunakan sebagai object method
  > Namun perlu di ketahui, arrow function tidak bisa digunakan untuk mengakses argument object, function generator, kata kunci this dan kata kunci super (OOP)
  > Jadi pastikan gunakan arrow function hanya memang ketika kita tidak butuh fitur fitur di atas
*/

// Kode: arrow function di object method
const person = {
  name: "Syahrin",
  sayHello: (name) => {
    console.log(`Hello ${name}`)
  }
}

person.sayHello("Mamat") // hasil = Hello Mamat