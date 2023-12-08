// Aggregating Modules
/*
  > Ada waktunya kadang kita ingin meng aggregate (menyatukan) berberapa module menjadi satu agar penggunaanya lebih sederhana
  > Jika module sudah banyak, maka ketika butuh banyak kode dari banyak module, kita harus sebutkan nama module tersebut tiap import
  > Dengan melakukan aggregate, kita bisa membuat module aggregate, yang isinya menggabungkan export dari module lain
  > Caranya sangat mudah cukup gunakan perintah:
    - export{a,b,c} from "/module.js"
*/

// Kode: aggregate module
export {person} from "/filekalian.js"
export {sayHello, sayGoodbye} from "filekalian.js"
export {sum} from "/filekalian.js"