// Module Object
/*
  > Ketika sebuah module berisikan banyak sekali export data, maka melakukan import satu persatu akan terlihat berantakan
  > Rekomendasinya ketika kita ingin mengimport module yang sangat banyak export datanya, gunakan module object
  > Module object sederhananya adalah object javascript yang berisi atribute hasil yang diexport pada module
  > Cara membuat module object bisa kita lakukan misal seperti ini:
    - import*n as NamaModule from "/module.js"
  > Selanjutnya kita bisa gunakan NamaModule sebagai object untuk module tersebut
*/

// Kode: Contoh module
export const firstName = "Syahrin"
export const middleName = "Matlail"
export const lastName = "Fajri"

export function hello() {
  console.log("Hello from Mamat")
}

export class Person {
    constructor() {
      this.name = "Syahrin"
    }
}

// Kode: memanggil module
/*
import * as Module from "../uji-coba-javascript-module/moduleObject.js" 

    console.log(Module.firstName)
    console.log(Module.middleName)
    console.log(Module.lastName)

    const person = new Module.Person()
    console.log(person.name)
*/