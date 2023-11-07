// Nullish Coalescing Operator
/*
  > Nullish value adalah null dan undefined
  > Nullish coalescing opeartor (??) adalah operator yang mirip dengan ternary operator, yang membedakaa adalah pada kondisi, jika bernilai null atau undefined, baru value defaultnya diambil
*/


// kode tanpa Coalescing operator
let parameter

let data = parameter
if (data === undefined || data === null) {
  data = "Nilai Default"
}
console.log(data)

// Kode dengan Coalescing operator
let parameter1 
let data1 = parameter1 ?? "Nilai Undefined / null"
console.log(data1)

//
let parameter2 
let data2 = parameter2 === 1 ? "satu" : parameter2 === 2 ? "dua" : parameter2 <= Infinity ? "banyak" : parameter2 ?? "nilai tak terbaca"
console.log(data2)
