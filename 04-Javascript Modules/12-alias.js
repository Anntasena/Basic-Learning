// Alias
/*
  > Saat kita membuat aplikasi javascript, semakin lama kemungkinan module akan semakin banyak
  > Dan bisa saja akan ada nama variable atau nama function atau nama class yang sama antar module
  > Hal ini akan menyulitkan ketika ada module yang menggunakan berberapa module, namun ternyata variable, function atau classnya memiliki nama yang sama
  > Untungnya, module memiliki fitur alias, dimana kita mengubah nama variable, function atau classnya
*/

// Alias di export
/*
  > Kita dapat menggunakan ketika melakukan export dimodule
  > Caranya menggunakan kata kunci as, lalu diikuti dengan nama alias:
    - export {variable as variableLain, function as functionLain, class as classLain}
*/

// Kode: alias di export
const company = "Anonymcode"

function sum(first, second) {
  return first + second
}

class Company {

}

export {company as perusahaan, sum as total, Company as perusahaan} // ini yang diubah

// Alias di import 
/*
  > Atau direkomendasikan sebenarnya melakukan alias ketika melakukan import
  > Sehingga ketika di export, nama tidak perlu berubah
  > Untuk melakukan alias ketika di import, kita bisa gunakan kata kunci as, diikuti dengan nama alias:
    - import {function as functionLain} from "./module.js"
*/

// Kode: alias di import
/*
import {company as perusahaan, sum as total, Company as Perusahaan}
  from "./fileKalian.js"
*/