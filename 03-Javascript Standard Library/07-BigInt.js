// BigInt
/*
  > BigInt merupakan tipe data number yang bisa mencakup data angka lebih dari Number.MAX_SAFE_INTEGER
  > Untuk kasus number yang lebih dari itu, sangat disarankan menggunakan tipe data bigInt
  > Cara penggunaan BigInt sama saja dengan pengunaan number juga operatornya
*/

// Kode: BigInt
const a = BigInt(Number.MAX_SAFE_INTEGER)
const b = BigInt(Number.MAX_SAFE_INTEGER)

const c = a + b

console.log(c) // 18014398509481982n > tanda n dibelakang angka untuk menindentifikasi jika itu BigInt
console.log(typeof c) // bigint