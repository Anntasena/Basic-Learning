// Masalah Variable Var
/*
  > Sebelumnya sudah dijelaskan bahwa penggunaan var sudah tidak di rekomendasikan lagi, dan diganti dengan let
  > Pertanyaannya kenapa?
  > Alasan tidak direkomendasikan lagi adalah, karna var tidak memiliki block scope, artinya dia tidak mengikat ke local scope yang sebelumnya sudah kita bahas
  > Karna masalah ini var tidak terprediksi 
  > Kita akan buat contoh penggunaan var dan let
*/

// Kode: menggunakan let

// Global scope
let i = 20
for (let i = 0; i < 10; i++) {
  // Local scope
  console.log(`Local ${i}`) // hasil = local 0 - local 9
}

console.log(`Global ${i}`) // hasil = Global 20


// Kode: menggunakan var
var x = 20
for (var x = 0; x < 10; x++) {
  console.log(`Local var ${x}`) // hasil = Local var 0 - Local var 9
}

console.log(`Global var ${x}`) // hasil = Global var 10