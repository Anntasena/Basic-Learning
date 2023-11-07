// Rest Paramter
/*
  > Rest paramter adalah fitur dimana kita bisa mengirim data sebanyak banyaknya pada satu parameter, dan secara otomatis akan di konversi menjadi array
  > Untuk membuat rest parameter, ada ketentuannya
  > Rest parameter hanya boleh ada di satu function, tidak boleh lebih dari satu
  > Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh depan atau tengah, kecuali memang cuma ada satu parameter
  > Di bahasa pemrogramman lain, ada juga yang bilang ini adalah variable argument
*/

function sum(name, ...data) {
  let total = 0
  for(const item of data) {
    total += item 
  }
  console.log(`Total ${name} is ${total}`)
}

sum("Orange", 2, 3, 4, 5, 6) // hasil = Orange 20
sum("Apple", 1, 2, 3, 4, "piece") // hasil = Apple 10piece


// Spread Syntax
/*
  > Kadang kita terlanjur memiliki data berupa array
  > Tapi untungnya kita juga bisa mengirim array ke rest parameter
  > Kita bisa gunakan ...(titik tiga kali) diikuti dengan array nya ketika memanggil function
  > Fitur ini dinamakan Spread Syntax
*/

const values = [10, 10, 10, 10]
sum("Price", values) // hasil = Price is 010,10,10,10
sum("Real Price", ...values) // hasil = Total Real Price is 40 

// Argument Object
/*
  > Sebelum ada fitur rest parameter, di javascript ada fitur yang bernama argument object
  > Ini adalah fitur dimana kita bisa mengambil semua parameter dalam bentuk array dengan object bernama arguments
  > Namum perlu diingat, bahwa untuk javascript saat ini, lebih baik disarankan untuk menggunakan rest parameter dibanding object paramter
*/

function oldSum () {
  console.log(arguments) // Mengecek argments
  let total = 0
  for(const argument of arguments) {
    total += argument
  }
  console.log(`Total is ${total}`);
}

oldSum(1,2,3,4,5,6,7,8,9,10) // hasil = Total is 55