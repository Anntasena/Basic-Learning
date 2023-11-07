// Recursive Function
/*
  > Recursive function adalah kemampuan function memanggil function dirinya sendiri
  > Kadang memang ada banyak problem yang lebih mudah diselesaikan menggunakan recursive function, contohnya seperti kasus factorial
*/

// Kode: factorial loop
function factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}

factorial(5) // ini tidak bisa berfungsi
console.log(factorial(5)) // hasil = 120

// Kode: factorial recursive
function factorialRecursive(value) {
  if (value === 1) {
    return 1
  } else {
    return value * factorialRecursive(value - 1)
  }
}

console.log(factorialRecursive(5))
