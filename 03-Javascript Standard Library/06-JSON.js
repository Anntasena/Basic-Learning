// JSON

// Pengenalan JSON
/* 
  > JSON singkatan dari JavaScript Object Notation
  > JSON merupakan data string yang bentuknya mirip dengan javascirpt Object
  > Saat ini JSON banyak sekali digunakan untuk komunikasi antara server dan client
*/

// JSON
/*
  > Javascript mendukung konversi data dari string json ke object ataupun sebaliknya
    - JSON.stringfy() => digunakan untuk melakukan konversi dari object ke string
    - JSON.parse() => digunakan untuk melakukan konversi dari string ke object
*/

// Kode: JSON
const person = {
  firstName : "Syahrin", 
  lastName : "Matlail",
  address : {
    country : "Indonesia",
    city : "Tangerang"
  }
}

const json = JSON.stringify(person)
const personAgain = JSON.parse(json)

console.log(json) // {"firstName":"Syahrin","lastName":"Matlail","address":{"country":"Indonesia","city":"Tangerang"}} > menjadi string
console.log(personAgain) // menjadi object
/* 
{
  firstName: 'Syahrin',
  lastName: 'Matlail',
  address: { country: 'Indonesia', city: 'Tangerang' }
}
*/