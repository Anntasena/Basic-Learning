// Function Generator
/*
  > Function generator adalah function yang digunakan untuk membuat data generator
  > Generator adalah data yang bisa di iterasi seperti array
  > Untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function
  > Dan untuk mengembalikan data di tiap iterasi, kita bisa menggunakan kata kunci yield diikuti datanya
*/

// Kode: function generator sederhana
function* createNames() {
  yield "Syarhin",
  yield "Matlail",
  yield "Fajri",
  yield 21,
  yield undefined,
  yield null
}

console.log(createNames()) // hasil = Object [Generator] {}

const names = createNames()
for (const name of names) {
  console.log(name) // hasil = semua yang tertulis di yield dalam function createNames
}
console.log(names[1]) // hasil = undefined karna tidak bisa mengakses index walaupun bentuknya seperti array ini disebut iterable

// PENTING!!! data generator hanya bisa di iterasi

// Lazy Evaluation
/*
  > Generator itu sifatnya lazy
  > Jadi artinya jika kita belum ambil dari generator, maka yield selanjutnya tidak akan diesekusi
*/

// Kode: function generator kompleks

// ini lazy evaluation
function* buatGanjil(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.log(`Yield ${i}`)
      yield i
    }
  }
}

const angkaGanjil = buatGanjil(20)
for (const angka of angkaGanjil) {
  console.log(angka)
}


// ini eager evaluation
function* buatGanjilArray(value) {
  const res = []
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.log(`Yield ${i}`)
      res.push(i)
    }
  }
}

const angkaGanjilArray = buatGanjilArray(20)
for (const angka of angkaGanjilArray) {
  console.log(angka)
}

console.log(" ") // hanya sebagai pemisah
// Kode: lazy generator
function* bikinGanjil(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.log(`Perulangan ke: ${i}`)
      yield i
    }
  }
}

const numGanjil = bikinGanjil(20)
console.log(numGanjil.next().value)
console.log(numGanjil.next().value)
console.log(numGanjil.next().value)