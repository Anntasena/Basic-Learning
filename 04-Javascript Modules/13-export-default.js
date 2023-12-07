// Export Default
/*
  > Sampai saati ini, kita selalu malakukan export dengan nama, baik itu nama variable, function dan lainnya
  > Ada juga fitur yang bernama export default, ini adalah fitur yang digunakan untuk mempermudah membuat default data di module,dan membantu javascript agar kompatible dengan commonJS dan AMD module system
*/

// Cara menggunakan export Default
/*
  > export default namaFunction
  > export default function(){...}
  > export default namaVariable
  > export default namaVariable = value
  > export default NamaClass
  > export default class{...}
*/

// Cara import default
/*
  > import aliasFunction from "/module-default.js"
  > import {default as aliasVariable} from "/module-default.js"
  > import aliasVariable from "/module-default.js"
  > import {default as aliasVariable} from "module-default.js"
  > import AliasClass from "/module-default.js"
  > import {default as AliasClass} from "/module-default.js"
*/

// Kode: export default function
export default function (name) {
  console.log(`Hello ${name}, from export default function`)
}

// Kode: import default function
/*
import sayHelloDefault from "./filekalian.js"

sayHello("Syahrin")
*/

// Kode: export default variable
// export default name = "Syahrin"

// Kode: export default class
/*
  export default class {
    constructor(name) {
      this.name = name
    }
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name}`)
  } 
*/

// Default dan Named Export
/*
  > Dalam satu module, kita bisa menggabungkan export default dan exoport named
  > Yang tidak boleh adalah, dalam satu module, membuat lebih dari satu default
  > Cara import default dan named secara bersamaan bisa menggunakan perintah:
    - import defaultAlias, {named1, named2} from "/module.js"
    - import {default as defaultAlias, named1, named2} from "/module.js"
*/

// Kode: export default dan named
export const title = "Belajar Javascript Module"

const content = "Content Belajar Javascript Module"

const author = "Syahrin Matlail Fajri"

export{content}
// export default author // satu file hanya bisa satu

// Rekomendasi
/*
  > Bedakan antara default dan named, karena jika digabungkan kadang akan membingungkan ketika melakukan import
  > Sebisa mungkin selalu gunakan export named dibandingkan export default
*/