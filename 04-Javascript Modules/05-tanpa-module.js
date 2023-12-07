// Tanpa module
/*
  > Sebelum kita membahas javascript module, sekarang kita akan coba dulu tanpa menggunakan module
  > Saat kita membuat file javascript, lalu kita load file javascript tersebut di web, secara default semua kode javascript di file tersebut bisa diakses, baik itu variable, function atau class
*/

// Kode: Javascirpt library
function sayHello(name) {
  console.log(`Hello ${name}`)
}

function sayGoodbye(name) {
  console.log(`Good Bye ${name}`)
}

// Kode: menggunakan library
// <script> src="file library yang ingin dipakai"</script>

// Dengan module
/*
  > Namun jika kita menggunakan module, kita bisa secara selektif memilih bagian kode yang mana ingin kita ekspose keluar
  > Secara default kode yang kita buat menggunakan javascript, module tidak bisa digunakan diluar file, kecuali kita memintanya mengekspos keluar
*/