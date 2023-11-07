// If Expression
/*
  > Dalam Javascript, if adalah salah satu kata kunci yang digunakan untuk percabangan
  > Percabangan artinya kita bisa mengesekusi kode program tertentu ketika suatu kondisi terpenuhi
  > Hampir disemua bahasa perograman mendukung if expression
*/

// Kode If Expression
const examValue = 55
if (examValue > 75) {     // ini bisa diisi dengan logika matematika
  console.log("lulus")    // hasil akan di tampilkan jika hasilnya true
} 

const SIM = 15
if (SIM >= 17) {
  console.log("Anda bisa punya SIM")
}
if (SIM < 17) {
  console.log("Anda masih dibawah umur")
}

// Else Expression
/*
  > Blok if akan diesekusi ketika kondisi if bernilai true
  > Kadang kita ingin melakukan esekusi program tertentu jika kondisi if bernilai false
  > Hal ini bisa dilakukan menggunakan else expression
*/

const nilaiProject = 74
if (nilaiProject >= 75) {
  console.log("Lulus") 
} else {
  console.log("Tidak Lulus")
}

// Else If Expressioni
/*
  > Kadang dalam if, kita membutuhkan berberapa kondisi
  > Kasus seperti ini, di javascript kita menggunakan if else expression
*/

const nilai = 45
if (nilai <= 20) {
  console.log("D")
} else if (nilai <= 40) {
  console.log("C")
} else if (nilai <= 60) {
  console.log("C")
} else if (nilai <= 80) {
  console.log("B")
} else {
  console.log("A")
}