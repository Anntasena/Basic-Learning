// Array
/* 
  > Tipe data array sudah kita bahas di materi javascript dasar
  > Namum kita hanya membahas berberapa instance method yang ada di array
  > sebenarnya, terdapat banyak sekali instance method yang ada di array
*/

// Array Loop
/* 
  > Sebelumnya kita biasa menggunakan for in dan for of untuk melakukan iterasi array, namum array juga memiliki method yang bernama forEach()
  > Method forEach() bisa digunakan juga untuk melakukan iterasi data array
*/

const array =["Syarhrin", "Matlail", "Fajri"]

array.forEach(function (value, index) {
  console.log(`${index} : ${value}`)
})
/*
0 : Syarhrin
1 : Matlail
2 : Fajri 
*/

array.forEach((value, index) => console.log(`${index} ${value}`))
/* 
0 Syahrin
1 Matlail
2 Fajri
*/

array.forEach(value => console.log(value))
/* 
Syahrin
Matlail
Fajri
*/

// Array Queue
/* 
  > Dalam structur data, terdapat tipe structur data bernama Queue(antrian)
  > Dimana data masuk akan diposisikan di urutan paling belakang
  > Sedangkan data keluar akan diposisikan dari urutan paling dalam
  > Mirip sekali dengan antrian, atau istilahnya FIFO(first in first out)
  > Kita bisa menggunakan array dengan bantuan function push() untuk menambah data dibelakang, dan shift() untuk mengambil dan menghapus data paling depan
*/

// Kode: array queue
const queue = []
queue.push("Syahrin")
queue.push("Matlail")
queue.push("Fajri")

console.log(queue) // [ 'Syahrin', 'Matlail', 'Fajri' ]

console.log(queue.shift()) // Syahrin
console.log(queue.shift()) // Matlail
console.log(queue.shift()) // Fajri

console.log(queue) // [] > menjadi kosong kembali karna dihapus menggunakan shift

// Array stack
/*
  > Struktur data stack(tumpukan) kembalikan dari queue, dimana aturannya mirip dengan tumpukan kartu
  > Saat kita memasukan data, kita akan memasukan di urutan paling belakang (atau atas)
  > Sedangkan saat kita mengambil data, kita mengambil data dari paling belakang (atau atas) terlebih dahulu
  > Stack ini bersifat LIFO(last in first out)
  > Untuk menambah urutan di belakang, kita bisa menggunakan function push()
  > Dan untuk mengambil dan menghapus paling belakang, kita bisa menggunakan function pop()
*/

// Kode: Array stack
const stack = []

stack.push("Syahrin")
stack.push("Matlail")
stack.push("Fajri")

console.log(stack) // [ 'Syahrin', 'Matlail', 'Fajri' ]

console.log(stack.pop()) // Fajri
console.log(stack.pop()) // Matlail
console.log(stack.pop()) // Syahrin
console.log(stack.pop()) // undefined

// Array search
/*
  > find(value => boolean) : value ==> mencari data sesuai dengan kondisi
  > findIndex(value => boolean) : number ==> mencari data index sesuai dengan kondisi
  > includes(value) : boolean ==> mengecek apakah terdapat data
  > indexOf(value) : number ==> mengecek posisi index data
  > lastIndexOf(value) : number ==> mengecek posisi data terakhir
*/

// Kode: array search
const source = [1,2,3,1,4,5,6,7,7,8,5]

console.log(source.find(value => value > 3)) // 4 --> 4 karna angka pertama yang di dapat dari lebih dari 3
console.log(source.findIndex(value => value > 3)) // 4 --> 4 karna angka 4 ada di index 4
console.log(source.includes(7)) // true --> karna di data source ada data 7 jadi true
console.log(source.indexOf(5)) // 5 --> index ke 5 ada di index 5
console.log(source.lastIndexOf(5)) // 10 --> 10 karna index 5 yang terakhir berada di index 10

// Array filter
/* 
  > filter(value => boolean) : array ==> melakukan filter data yang kondisinya bernilai true
*/

const numbers = [1,2,3,4,5,6,7,8,9,10]

console.log(numbers.filter(value => value % 2 === 1)) // [ 1, 3, 5, 7, 9 ] => ganjil
console.log(numbers.filter(value => value % 2 === 0)) // [ 2, 4, 6, 8, 10 ] => genap

// Array transform

/* 
  > map(value => result) : Array<result> ==> melakukan transform tiap value dan menghasilkan array result
  > reduce(resultBefore, value => result) : result ==> melakukan transform dengan melakukan value array dan value selanjutnya, lalu hasilnya dilanjutkan ke iterasi selanjutnya
  > reduceRight(resultBefore, value => result) ==> Sama seperti reduce(), namun dilakukan dari belakang
*/

const names = "Syahrin Matlail Fajri".split(" ")
console.log(names.map(value => value.toUpperCase())) // [ 'SYAHRIN', 'MATLAIL', 'FAJRI' ]

const angka = [1,2,3,4,5,6,7,8,9,10]
console.log(angka.reduce((result, value) => result + value)) // 55
console.log(angka.reduceRight((result, value) => result + value)) // 55