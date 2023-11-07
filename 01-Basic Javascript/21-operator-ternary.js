// Operator Ternary
/*
  > Ternary operator adalah operator sederhana dari if statement
  > Ternary operator terdiri dari kondisi yang dievaluasi, jika menghasilkan true maka nilai pertama diambil, jika false maka nilai kedua yang di ambil
*/

// Kode tanpa ternary operator
const nilai = 75
let ucapan 

if (nilai >= 75) {
  ucapan = "Selamat anda lulus"
} else {
  ucapan = "Silahkan coba lagi"
}

console.log(ucapan)

// Kode dengan ternary operator
const value = 75
const message = value >= 75 ? "Good Job" : "Try Again"
console.log(message)

// Kode Ternary dengan lebih dari 2 kondisi
const angka = 6
const hasil = angka === 1 ? "satu" : angka === 2 ? "dua" : angka === 3 ? "tiga" : "tulis sendiri"
console.log(hasil)