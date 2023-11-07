// Function Dalam Function
/*
  > Tidak ada batasan dimana kita membuat function
  > Termasuk jika kita ingin membuat function di dalam sebuah function, kita bisa melakukannya
  > Function yang terdapat di dalam kita sebut inner function
  > Inner function hanya bisa diakses di tempat kita membuat functionnya tidak bisa di akses dari luar functionnya
*/

// Kode: function dalam function
function outer() {
  function inner() {
    console.log("Inner")
  }

  inner()
  inner()
}

outer()
// inner() hasil error karna tidak bisa mengakses function di dalam function

// Catatan
/*
  > Bisanya digunakan untuk membreakdown kode program di dalam function yang terlalu panjang tetapi cuma digunakan di dalam function tersebut
*/