// Function Return Value 
/*
  > Secara default, function itu tidak menghasilkan value apapun, namun jika kita ingin, kita bisa membuat sebuah function yang mengembalikan value
  > Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam functionnya
  > Dan didalam blok function, untuk menghasilkan nilai tersebut, kita harus menggunakan kata kunci return, lalu diikuti dengan data yang ingin dihasilkan
  > Function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan berberapa data sekaligus, kita bisa menggunakan array sebagai return valuenya
*/

// Kode: Function return value

// Membuat function dengan parameter dan value
function sayHello(firstname,lastname) {
  const say = `Hello ${firstname} ${lastname}`
  return say
}

// Memanggil function dan menangkap return valuenya
const result = sayHello("Syahrin", "Matlail")
console.log(result) 
console.log(`${result}`)


// Kode: function return value lebih dari satu
function getFinalScore(value) {
  if (value > 90) {
    return "A"
  } else if (value >  80) {
    return "B"
  } else if (value > 70) {
    return "C"
  } else if (value > 60) {
    return "D"
  } else {
    return "E"
  }
}

const score = getFinalScore(66)
console.log(score)

getFinalScore(96) // harus di beri wadah dahulu jika ingin menampilkan value

// Menghentikan esekusi dengan kata kunci return
/*
  > Saat kita menggunakan kata kunci return, maka kode setelah return tersebut tidak akan diesekusi
  > Kita bisa menggunakan return untuk menghentikan esekusi sebuah function
*/

// Kode: Menghentikan esekusi dengan return
function isContains(array, searchValue) {
  for (const element of array) {
    if (element === searchValue) {
      return true
    }
  }
  return false
}

const array = [1,34,353,12,33,21,234,234,33,2134,14]
const search = 34
const found = isContains(array, search)

console.log(found)

console.log(isContains([1,2,3,4,5,6,7,8,9],2))