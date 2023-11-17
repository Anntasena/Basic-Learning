// Constructur di Class
/*
  > Karna bentuk constructur function mirip dengan function, kita bisa menambah parameter pada constructur function, lantas bagaimana dengan class?
  > Di class juga kita bisa menambahkan constructur, dimana dengan menggunakan constructur kita bisa juga menambahkan parameter saat pertama kali membuat objectnya
  > Untuk membuat constructur di class, kita bisa menggunakan kata kunci constructur
*/

// Kode: constructur di class
class Person {

  constructor(name) {
    // Kode apapun
    console.log(`Membuat person ${name}`)
  }
}

const syahrin = new Person("Syahrin") // Membuat person Syahrin
const matlail = new Person("Matlail") // Membuat person Matlail
console.log(syahrin) // Person {}