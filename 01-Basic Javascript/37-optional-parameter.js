// Optional Parameter
/*
  > Secara default, parameter di function itu optional
  > Artinya tidak wajib mengisi valuenya ketika mengambil function
  > Jika tidak ada value yang kita kirim ke paramter ketika memanggil function, maka secara otomatis parameter tersebut bernilai undefined
*/

// Kode: optional parameter
function sayHello(firstname,middlename,lastname) {
  console.log(firstname)
  console.log(middlename)
  console.log(lastname)
}

sayHello("Syahrin") // hasil = Syahrin undefined undefined
sayHello("Syahrin","Matlial") // hasil = Syahrin Matlail undefined
sayHello("Syahrin", "Matlail", "Fajri") // hasil = Syahrin Matlail Fajri