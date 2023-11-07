// Object Datatype
/* 
  > Associative Array
    - Di bahasa pemrograman lain seperti PHP, kita bisa menggunakan index berupa tipe data lain selain Number, misal string
    - Fitur ini biasanya disebut Associative Array atau Hash
    - Di Javascript Associative Array tidak didukung
    - Jika kita memaksakaan data bukan number di index array, maka javascript akan merubah tipe data array tersebut menjadi object, dan ini bisa berbahaya, karna berberapa oprasi di array mungkin bisa berubah hasilnya
*/

// Tipe data Object
/*
  > Tipe data object adalah tipe data yang mirip dengan array
  > Yang membedakan adalah index pada tipe data object bisa menggunakan string
  > Index di object biasanya disebut attributes atau properties, bukan index
*/

const object = {} // ini object kosong

// Menambah atau mengubah attributs / property
object["nama"] = "Syahrin Matlail"
object["umur"] = 26
object["alamat"] = "Tangerang"
object["agama"] = "Islam"
console.table(object)

// Menghapus
delete object["agama"]
console.table(object)

// Kode membuat Object dengan property
const kodeObject = {
  nama : "Anntasena",
  umur : 24,
  "alamat di indoenesia" : "tangerang", // jika property membutuhkan spasi gunakan kutip ganda
  pria : true,
  nikah : undefined,
  sukses : null,
  25 : true
}

// sintaks
// console.log(`${namaVariable.namaAttribute}`)
// console.log(`${namaVarriable["nama attribute"]}`)

console.table(kodeObject)
console.log(`Nama: ${kodeObject.nama}`) // di gunakan jika ingin mengambil salah satu data dari array
console.log(`Umur: ${kodeObject.umur}`)
console.log(`Alamat di Indonesia: ${kodeObject["alamat di indoenesia"]}`) // jika ada spasi di dalam object di anjurkan menggunakan kurung kotak
console.log(`${kodeObject.umur}`) // harus menggunakan backtick
console.log(`${kodeObject["nikah"]}`) // bisa juga menggunakan kurung kotak dengan catatan datatypenya harus sesuai 
console.log(`${kodeObject[25]}`) // jika tipe data number tidak perlu tanda kutip