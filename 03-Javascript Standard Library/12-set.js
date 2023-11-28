// Set
/*
  > Set merupakan implementasi dari struktur data yang berisikan data-data unique
  > Set mirip seperti array, hanya saja isi datanya selalu unique
  > Jika kita menambahkan data yang sama, maka data akan diterima satu saja
  > Set mengimplementasikan kontak iterable, sehingga bisa di iterasi secara default
*/

// Set instance method & property
/*
Method & Property

  > size ==> panjang set
  > add(value) ==> mendambah data ke set
  > has(value) ==> mengecek apakah set memiliki value
  > delete(value) ==> menghapus value dari set
  > forEach(value => ) ==> melakukan iterasi set
*/

// Kode: set
const set = new Set()

set.add("Syahrin")
set.add("Syahrin")
set.add("Matlail")
set.add("Fajri")

console.log(set) // Set(3) { 'Syahrin', 'Matlail', 'Fajri' }
set.forEach(value => console.log(value))
/*
Syahrin
Matlail
Fajri
*/