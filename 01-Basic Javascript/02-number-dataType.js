// Tipe Data Number
/* 
  > Javascript hanya mendukung satu tipe data number, dimana tipe data number di Javascript bisa berupa bilangan bulat atau desimal
  > Tipe seperti di bahasa pemrograman lain yang biasanya membedakan tipe data number bilangan bulat dan bilangan desimal, di Javascript semuanya di satukan
*/

console.log(100) // ini tipe data number berbentuk bilangan bulat
console.log(100.123) // ini tipe data number berbentuk bilangan desimal (koma dalam javascirpt harus di tulis dekan simbol titik ".")

// Number Notation
/*
  Dalam JavaScript, terdapat beberapa notasi yang dapat digunakan untuk merepresentasikan angka, termasuk notasi desimal, heksadesimal, oktal, dan eksponensial. 

  > Javascript mendukung number notation, defaultnya ada basis 10, Javascript juga mendukung binary, hexadesimal, dan octal
  > Hexadecimal : 0xFF
  > Binary: 0b10101
  > Octal: 0o10
*/

/*
  Notasi Desimal
  >Ini adalah notasi paling umum untuk angka dalam JavaScript. Ini adalah notasi dasar untuk angka dalam bahasa pemrograman, seperti 42   untuk angka empat puluh dua.
*/
let angkaDesimal = 42;
console.log(angkaDesimal);

/*
  Notasi Heksadesimal
  Dalam notasi heksadesimal, angka direpresentasikan dalam basis 16 dengan awalan "0x" diikuti oleh angka-angka heksadesimal.
*/
let angkaHexadesimal = 0x1A; // ini adalah angka desimal 26
console.log(angkaHexadesimal)

/*
  Notasi Oktal
  Notasi oktal digunakan untuk merepresentasikan angka dalam basis 8 dengan awalan "0o" atau "0O".
*/
let angaOktal = 0o52; // ini sama dengan angka desimal 42
console.log(angaOktal)

/*
  Notasi Eksponensial
  Notasi eksponensial digunakan untuk merepresentasikan angka dalam bentuk eksponensial, yang berguna untuk angka yang sangat besar atau sangat kecil. Dalam notasi ini, "e" digunakan untuk menunjukkan pangkat 10.
*/
let angkaEkspenensial = 3.2e6 // ini sama dengan 3.2 x 10^6 atau 3200000
console.log(angkaEkspenensial)

/*
  Selain itu, Anda juga dapat menggunakan metode parseInt untuk mengubah string dengan notasi lain menjadi angka desimal. Contohnya
*/
let stringHexadesimal = "1A"; 
let angkaDariString = parseInt(stringHexadesimal, 16);
console.log(angkaDariString); // Mengubah string heksadesimal menjadi angka desimal (26)