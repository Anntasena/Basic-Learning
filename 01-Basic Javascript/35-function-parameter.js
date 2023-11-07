// Function Parameter
/*
  > Kita bisa mengirim informasi ke function yang ingin di panggil
  > Untuk melakukan hal tersebut, kita perlu menambahkan parameter atau argument di function yang sudah di buat
  > Parameter di tempatkant pada tanda kurung "()" dan di deklarasi sebagai method
  > Parameter bisa lebih dari satu, jika lebih dari satu harus dipisahkan dengan tanda koma ","
*/

// Membuat Function dengan parameter
function sayHello(firstname,middlename,lastname) {
  console.log(`${firstname} ${middlename} ${lastname}`)
}

// Memanggil fucntion dengan parameter
sayHello("Syahrin", "Matlail") // Jika data dari parameternya kurang akan menjadi tipe data Undefined
sayHello("Syahrin", "Matlail", "fajri")