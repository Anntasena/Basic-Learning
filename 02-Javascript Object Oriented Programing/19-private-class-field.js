// Private Class Field
/* 
  > Secara default, saat kita menambahkan field, maka field tersebut bisa diakses dari manapun
  > Jika kita ingin membuat field yang bersifat private (hanya bisa di akses didalam class) kita bisa menggunakan tanda # sebelum nama field nya
  > Ini dinamakan private class field, dan hanya bisa diakses dari dalam class saja 
*/

// *Fitur ini masih developmet terakhir di cek nov 2023

// Kode: private class field
class Counter {
  #counter = 0

  increment() {
    this.#counter++
  }

  decrement() {
    this.#counter--
  }

  get() {
    return this.#counter
  }
}

const counter = new Counter
counter.increment() // 1
counter.increment() // 2
counter.increment() // 3
counter.increment() // 4
counter.increment() // 5
counter.decrement() // 4

console.log(counter.get()) // 4 
console.log(counter) // Counter {}
counter.counter = 100 // tidak bisa di akses karna couter bersifat private class filed