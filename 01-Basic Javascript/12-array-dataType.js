// Array Datatype
/*
  > Array adalah tipe data yang berisikan kumpulan banyak data
  > Array dalam javascript memiliki sifat dinamis, artinya datanya bisa bertambah dengan sendirinya saat kita memasukan data array 
*/

const arrayKosong = [] // ini adalah array kosong
const arrayBerisi = ["Syahrin", "matlail", "Fajri", "umur", 25, true, null, undefined] // ini array yang sudah ada datanya
console.log(arrayBerisi)
console.table(arrayBerisi) // console.table() di gunakan untuk menampilkan kode dalam bentuk tabel cocok untuk tipe data array

// Cara Kerja Array
/*
  > Setiap tipe data array akan disimpan dalam posisi berurutan, dimana urutan yang pertama akan dimulai dari nomor 0
  > Setiap kita menambahkan data ke array, otomatis akan disimpan di urutan terakhir
  > Urutan di Array, kita sebut Index
*/

// Array method / function
/*
  > array.push(value) => menambahkan data ke array
  > array.length => mendapatkan panjang array
  > array[index] => mendapatkan data dari posisi index
  > array[index] = value => mengubah data di posisi index
  > delete array[index] => menghapus data di posisi index, namun index tidak bergeser
*/

const arrayMethod = []
arrayMethod.push("Syahrin")
arrayMethod.push("Matlail", "Fajri")
arrayMethod.push(1, true, null, undefined)
console.table(arrayMethod)

const fakeData = ["anak ke1", "anak ke2", "anak ke3", "anak ke4", "anak ke5"]

fakeData.push("anak ke6") // array.push(value)
console.log(fakeData.length) // array.lenght
console.log(fakeData[4]) // array[index]
fakeData[5] = "anak pungut" // array[index] = value
delete fakeData[2] // delete array[index]


console.table(fakeData)

// Perlu diingat 
/*
  > Data di dalam array tidak ada batasnya harus data apa
  > Jadi kita bisa memasukan data apapun ke dalam array
  > bahkan kita juga bisa memasukan array ke dalam array jika kita mau
  > Array didalam array disebut "multidimensional array"
*/

// Contoh multidimensional array
const namaPanjang = []
namaPanjang.push("nama","saya")
namaPanjang.push(["Syahrin", "Matlail", "Fajri"])
console.table(namaPanjang)
