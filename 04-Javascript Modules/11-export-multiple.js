// Export multiple
/*
  > Sebelumnya kita selalu menggunakan kata kunci export diawal variable, function atau class
  > Sebenarnya kita bisa menggunaakn export sekaligus berberapa data sekaligus, caranya cukup gunakan perintah:
    - export {variable, function, danLainLain}
*/

// Kode: export multiple
const company = "Anonymcode"

function sum(first, second) {
  return first + second
}

class Company {

}

export {company, Company}