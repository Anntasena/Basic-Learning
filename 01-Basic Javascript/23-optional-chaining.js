// Optional Chaining
/*
  > Optional chaining operator (?) merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property sebuah object dari data nullish
  > Jika kita mengakses propetry dari sebuah object dari data nullish tanpa menggunakan optional chainning operator, maka akan terjadi error
*/

// Kode: Error mengakses property nullish
// let person = {}
// const country = person.address.country
// console.log(country)

// Kode Pengecekan Menggunakan if
let person = {};
let country;
if (person.address !== undefined && person.address !== null) {
    say = person.address.country;
}
console.log(country);

// Kode Optional Chaining
let user = {
    address: {
        country: "Indonesia",
    },
};
console.log(user?.address?.country?.region);
