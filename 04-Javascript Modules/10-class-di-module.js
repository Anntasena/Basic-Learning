// Class di Module
/*
  > Selain function dan juga variable, di module juga kita bisa menambahkan class
  > Secara default, class tersebut hanya bisa diakses dari dalam modulenya saja, tidak bisa diluar module
  > Jika kita ingin mengekspos class yang kita buat, kita juga bisa menggunakan kata kunci export diawal deklarasinya
*/

// Kode: export class di module
export class Person {
  constructor(name) {
    this.name = name
  }

  sayHello(name) {
    console.log(`Hello ${name}, my name is ${this.name}`)
  }
}

// Kode: menggunakan class di module
/*
import {person} from "filenya dimana"

const person = new Person("Syahrin")
person.sayHello("Mamat")
*/