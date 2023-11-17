// Private Method
/*
  > Sama seperti field, terdapat proposal juga untuk menambahkan fitur private method di ECMAScript
  > Dengan demikian, access modifier private juga bisa digunakan di method
  > Caranya sama, dengan menambahkan tanda # di awal method, maka secara otomatis method tersebut adalah private
  > Ingat fitur ini masih dalam tahapan, belum menjadi standart ECMAScript, mungkin tidak semua browser mendukung fitur ini
*/

// Kode: private method
class Person {

  say(name) {
    if (name) {
      this.#sayWithName(name)
    } else {
      this.#sayWithoutName()
    }
  }

  #sayWithoutName() {
    console.log("Hello")
  }

  #sayWithName(name) {
    console.log(`Hello ${name}`)
  }
}

const user = new Person() // Hello Syahrin
user.say("Syahrin")
// user.sayWithoutName() // Error > dikarnakan ini bersifat private