// Proxy
/*
  > Proxy merupakan fitur yang bisa digunakan sebagai wakil sebuah data
  > Dengan menggunakan proxy, semua interaksi ke data akan selalu melalui proxy terlebih dahulu
  > Dengan ini, kita bisa melakukan apapun sebelum interaksi dilakukan ke data yang dituju
*/

// Proxy Handler
/*
  > Pembuatan proxy perlu menggunakan handler, dimana dalam handler, kita bisa membuat function yang dinamakan interceptor yang digunakan ketika mengambil data atau mengubah data ke target
  > Untuk membuat proxy, kita bisa menggunakan new Proxy(target, handler)
*/

// Kode: membuat handler
const target = {}

const handler = {
  get: function (target, property) {
    return target[property]
  },
  set: function (target, property, value) {
    target[property] = value
  }
}

// Kode: membuat proxy
const proxy = new Proxy(target, handler)
proxy.firstName = "Syahrin"
proxy.lastName = "Matlail"

console.log(proxy.firstName) // Syahrin
console.log(proxy.lastName) // Matlail
console.log(target) // { firstName: 'Syahrin', lastName: 'Matlail' }

// Proxy dan halder
/*
  > Saat kita mengubah data proxy, secara otomatis data akan dikirim ke target melalui handler dengan memanggil function set(target, proprty, value)
  > Saat kita mengambil data proxy, secara otomatis data akan diambil dari target melalui handler dengan memamnggil function get(target, property)
  > Artinya, jika kita ingin melakukan sesuatu sebelum dan setelahnya, bisa kita lakukan di handler
*/

// Kode: log handler
{
  const handler = {
    get: function (target, property) {
      console.log(`Access property ${property}`)
      return target[property]
    },
    set: function (target, property, value) {
      console.log(`Change property ${property} : ${value}`)
      target[property] = value
    }
  }

  const proxy = new Proxy(target, handler)
  proxy.firstName = "Eko"
  proxy.lastName = "Khannedy"

  console.log(proxy.firstName) // Change property firstName : Eko => Access property firstName => Eko
  console.log(proxy.lastName) // Change property firstName : Khannedy => Access property lasttName => Khannedy
  console.log(target) // { firstName: 'Eko', lastName: 'Khannedy' }
}