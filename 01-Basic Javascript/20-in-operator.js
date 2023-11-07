// In Operator
/*
  > In operator adalah operator yang bisa dilakukan untuk mengecek apakah sebuah property ada didalam object atau tidak 
  > Jika property tidak ada di object, maka hasilnya true, sedangkan jika tidak maka hasilnya false
  > In juga bisa digunakan untuk mengecek index di array
*/

// mengecek di object
const data ={
  name: "Syahrin Matlail",
  age: 25
}
const dataUser = "name" in data // cek property / attribut
console.log(dataUser)

// mengecek di array
const dataArray = [1,2,3,4,5]
const indexArray = 8 in dataArray // cek index
console.log(indexArray)

// Peringatan!
/*
  > In oparator hanya akan mengecek apakah sebuah property atau index ada atau tidak, walaupun valuenya undefined atau null
  > Jadi walaupun nilai property atau index nya undefined atau null, maka akan tetap akan dianggap ada
*/

const fakeData = {
  fullName : undefined,
  age : 12
}
const cekFakeData = "fullName" in fakeData
console.log(cekFakeData)

if (cekFakeData) {
  console.log(`Hello: ${fakeData.fullName}`)
} else {
  console.log("bye bye")
}
