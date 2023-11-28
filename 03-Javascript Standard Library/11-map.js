// Map
/*
  > Map merupakan representasi dari struktur data key-value
  > Map mirip dengan tipe data object, hanya saja pada map, semua method untuk manipulasi data sudah disediakan
  > Map mengikuti kontrak iterable, sehingga bisa di iterasi secara default
*/

// Perbedaan Map dan Object
/*
Map ==> Object

  > Pertama di buat tidak memiliki key ==> karena memiliki prototype, jadi memiliki default key ketika pertama dibuat
  > Key bisa tipe data apapun ==> key hanya bisa string atau symbol
  > Jumlah key bisa diketahui dengan mudah dengan attributes size ==> tidak bisa diketahui, harus manual menggunakan iterasi
  > Secara default tidak bisa di konversi ke JSON ==> bisa dikonversi ke JSON secara otomatis 
*/

// Map instance method & property
/*
Method & Property

  > size ==> panjang map
  > clear() ==> menghapus semua isi map
  > delete(key) ==> manghapus data map bedasarkan key
  > get(key) : value ==> mendapatkan data map bedasarkan key
  > has(key) : boolean ==> mengecek apakah map berisi data key
  > set(key, value) ==> mengubah data map dengan key = value
  > forEach((value, key) => ) ==> melakukan iterasi map
*/

// Kode: map
const map = new Map()
map.set("Name", "Syahrin")
map.set("Address", "Indonesia")

console.log(map) // Map(2) { 'Name' => 'Syahrin', 'Address' => 'Indonesia' }
console.log(map.get("Name")) // Syahrin
console.log(map.get("Address")) // Indonesia
console.log(map.get("Hobby")) // undefined

for (const element of map) {
  console.log(element) // [ 'Name', 'Syahrin' ] => [ 'Address', 'Indonesia' ]
  console.log(`${element[0]} : ${element[1]}`)
}
/*
Name : Syahrin
Address : Indonesia
*/

// Dibandingkan menggunakan forOf, forEach lebih sederhana jika ditulis
map.forEach((value, key) => console.log(`${key} : ${value}`))
/*
Name : Syahrin
Address : Indonesia  
*/