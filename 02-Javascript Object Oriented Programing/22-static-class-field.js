// Static Class Field

// Kata kunci static
/*
  > Static adalah kata kunci yang bisa kita tambahkan sebelum field atau method, biasanya ketika kita membuat field atau method, maka secara otomatis field akan menjadi property di instance object, dan method akan menjadi function di prototype
  > Jika kita tambahkan static, maka hal itu tidak akan terjadi
*/

// Static Class Field
/*
  > Jika kita tambahkan static dalam class field, secara otomatis field tersebut bukan lagi milik instance object, melainkan milik class nya itu sendiri
  > Biasanya static digunakan jika kita ingin membuat utillity field atau function
  > Cara mengakses static class field pun tidak lagi lewat object, melainkan lewat class nya
  > Static class field bisa di artikan sifatnya global, tidak peduli diakses dimana atau siapa yang mengakses, hasilnya akan sama
*/

// Kode: tanpa static 
{
  class Configuration { // ini static class

  name = "Belajar Javascript Dasar" // ini static field
  version = 1.0 // ini static field
  author = "Syahrin Matlail" // ini static field

}

const config = new Configuration
console.log(config)

/*
  Configuration {
  name: 'Belajar Javascript Dasar',
  version: 1,
  author: 'Syahrin Matlail'
}
*/
}

// Kode: Static class field
class Configuration { // ini static class

  static name = "Belajar Javascript Dasar" // ini static field
  static version = 1.0 // ini static field
  static author = "Syahrin Matlail" // ini static field

}

const config = new Configuration
console.log(config) // Belajar Javascript Dasar {}

// Kode: mengakses static class field
/*
  Kode yang salah
  console.log(config.name)
  console.log(config.version)
  console.log(config.author)
*/

console.log(Configuration.name) // Belajar Javascript Dasar
console.log(Configuration.version) // 1
console.log(Configuration.author) // Syharin Matlail