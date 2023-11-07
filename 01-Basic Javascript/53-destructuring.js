// Destructuring
/*
  > Destructuring adalah fitur yang digunakan untuk membongkar value-value di array atay object ke dalam variable-variable
  > Fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengembalian data satu persatu
*/

// Kode: mengambil data di array tanpa destructuring
const names = ["Syahrin", "Matlail", "Fajri"]
const firstname = names[0]
const middlename = names[1]
const lastname = names[2]


console.log(firstname) // Syahrin
console.log(middlename) // Matlail
console.log(lastname) // Fajri

// Kode: destructuring array
const nama = ["Donald", "Duck", "Bebek", "Ayam", "Kucing"]
const [namaDepan, namaTengah, namaBelakang, ...others] = nama

console.log(namaDepan) // Donald
console.log(namaTengah) // Duck
console.log(namaBelakang) // Bebek
console.log(others) // [ 'Ayam', 'Kucing' ]


// Kode: mengambil data di object

const person = {
  namaAwal : "Prabowo",
  namaAkhir : "Subianto",
  address : {
    street : "Perum Kedaung",
    city : "Tangerang",
    country : "Indonesia"
  },
  hobby : "Berpolitik",
  channel : "Gerindra"
}

// Kode: tanpa destructuring object
// const namaAwal = person.namaAwal
// const namaAkhir = person.namaAkhir

// console.log(namaAwal) // Prabowo
// console.log(namaAkhir) // Subianto

// Kode: destructuring object
const {namaAwal, namaAkhir,address, ...lainnya} = person
console.log(namaAwal) // Prabowo
console.log(namaAkhir) // Subianto
console.log(address) // { street: 'Perum Kedaung', city: 'Tangerang', country: 'Indonesia' }
console.log(address.city) // Tangerang
console.log(lainnya) // { hobby: 'Membaca', channel: 'Gerindra' }

/* 
{
  alamat: { jalan: 'Perum Kedaung', kota: 'Tangerang', negara: 'Indonesia' },
  hobby: 'Membaca',
  kanal: 'Gerindra'
}
* Hasil ketika objek dua dimensi tanpa dipisah
*/

// Kode: Destructuring Nested Object
{
  const person = {
    namaAwal : "Prabowo",
    namaAkhir : "Subianto",
    address : {
      street : "Perum Kedaung",
      city : "Tangerang",
      country : "Indonesia"
    },
    hobby : "Berpolitik",
    channel : "Gerindra"
  }

  const {namaAwal,namaAkhir, address: {country, city, street}, ...others} = person
  console.log(namaAwal) // Prabowo
  console.log(namaAkhir) // Subianto
  console.log(country) // Indonesia
  console.log(city) // Tangerang
  console.log(street) // Perum Kedaung
  console.log(others) // { hobby: 'Berpolitik', channel: 'Gerindra' }
}

// Destructuring Function Parameter
/*
  > Destructuring tidak hanya bisa dilakukan di variable, tetapi juga bisa dilakukan di function parameter
  > Hal ini membuat kita mudah ketika ingin mengambil nested data dalam array atau object dalam function
*/
{
  // >> Cara Lama
  // function displayPerson(person) {
  //   console.log(person.firstname)
  //   console.log(person.middlename)
  //   console.log(person.lastname)
  // }

  function displayPerson({firstname, middlename, lastname}) {
    console.log(firstname)
    console.log(middlename)
    console.log(lastname)
  }

  const person = {
    firstname: "Syahrin",
    middlename: "Matlail",
    lastname: "Fajri"
  }

  displayPerson(person) // Syahrin , Matlial, Fajri
}

{
  // Dengan Destructuring
  function sum([first, second]) {
    return first + second
  }
  
  console.log(sum[10,10]) // undefined
  console.log(sum([20,10])) // 30

  // Tanpa Destructuring
  function pertambahan(array) {
    return array[0] + array[1]
  }
  
  console.log(pertambahan([4, 5])) // 9
}

// Default Value
/*
  > Yang paling menarik di destructuring adalah, kita bisa menambahkan default value
  > Jadi misalnya kita melakukan destructuring terhadap array, ternyata tidak ada datanya, maka kita bisa menambahkan default value
  > Begitu juga pada object, jika ternyata propertynya tidak ada, maka kita bisa menambahkan default value
*/

// Kode: default value destructuring array
{
  const names = ["Syahrin", "Matlail"]
  const [firstName, middleName, lastName = "Mamat"] = names

  console.log(firstName) // Syharin
  console.log(middleName) // Matlail
  console.log(lastName) // Mamat

  const nama  = ["Donald"]
  const [namaAwal = "Belum di isi", namaTengah = "Nama tengah belum di isi", namaAkhir = "Nama akhir belum di isi" ] = nama

  console.log(namaAwal) // Donald
  console.log(namaTengah) // Nama tengah belum di isi
  console.log(namaAkhir) // Nama akhir belum di isi
}

// Menggunakan Nama Variable Lain
/*
  > Saat menggunakan destructuring di array, kita bisa dengan mudah membuat nama variable sesuka kita
  > Namun pada saat melakukan destructuring, kita harus membuat nama variable sama dengan nama property
  > Kita bisa menggunakan nama variable lain saat melakukan destructuring object jika kita mau
*/

{
  const {
    firstName: namaDepan,
    middleName: namaTengah = "Matlail",
    lastName: namaBelakang
  } = person

  console.log(namaDepan) // undefined
  console.log(namaTengah) // Matlail
  console.log(namaBelakang) // udefined
  // console.log(firstName) // error
}