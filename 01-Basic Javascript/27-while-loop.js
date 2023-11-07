// While Loop
/* 
  > While Loop adalah versi pengulangan yang lebih sederhana dibanding for loop
  > Di while loop, hanya terdapat kondisi pengulangan, tanpa ada init dan post statement
*/

// Kode: While Loop
let counter = 1
while (counter <= 5) {
  console.log(`Perulangan ke: ${counter}`)
  counter++
}

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// Catatan
/* 
  > While Loop lebih cocok untuk situasi dimana kita tidak tau berapa kali loop akan dijalankan
  > For Loop umumnya digunakan ketika kita tau seberapa banyak iterasi yang diperlukan
*/