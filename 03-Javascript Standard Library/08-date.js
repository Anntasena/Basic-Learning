// Date
/*
  > Javascript memiliki tipe data untuk merepresentasikan waktu dan tanggal, yaitu Date
  > Date merupakan representasi millisecond sejak tanggal 1 januari 1970, atau dikenal dengan Epoch & Unix Timestamp
*/

// Membuat Object Date
/*
  > Untuk membuat object Date, kita bisa menggunakan new Date(), dimana terdapat constructor parameter

  > new Date() ==> membuat date saat ini
  > new Date(year, month, date) ==> membuat date dengan tanggal
  > new Date(year, month, date?, hour?, minute?, second?, milis?) ==> membuat date dengan parameter sampai milis
  > new Date(timestamp) ==> membuat date dari epoch atau unix timestamp
*/

// Kode: membuat object date
const date1 = new Date()
console.log(date1) // 2023-11-28T10:00:35.474Z

const date2 = new Date(2020, 10, 10)
console.log(date2) // 2020-11-09T17:00:00.000Z

const date3 = new Date(2019, 10, 10, 1, 0, 0, 0)
console.log(date3) // 2019-11-09T18:00:00.000Z

const date4 = new Date(1701165865716)
console.log(date4) // 2023-11-28T10:04:25.716Z

// Epoch & Unix Timestamp
/*
  > Dalam menggunakan tipe data waktu, biasanya disemua bahasa pemrograman akan mendukung yang namanya epoch & unix timestamp
  > Epoch & unix timestamp merupakan hitungan milisecond setelah tanggal 1 januari 1970
  > Javascript pun mendukung pembuatan waktu dalam bentuk epoch dan unix timestamp
  > Untuk mendapatkan waktu saat ini dalam epoch & unix timestamp, kita bisa menggunakan Date.now()
  > Untuk mengubah dari object date ke epoch & unix timestamp, kita bisa menggunakan function getTime()
*/

// Kode: unix timestamp
const timestamp = Date.now()
console.log(timestamp) // 1701166286924

const dateUnix = new Date(timestamp)
console.log(dateUnix) // 2023-11-28T10:11:26.924Z

console.log(dateUnix.getTime()) // 1701166343379

// Parsing date
/* 
  > Kita juga bisa melakukan parseing membuat date dari string menggunakan method Date.parse(value)
  > Format string harus YYYY-MM-DDTHH:mm:ss:sssZ 
  > Dimana jika kita hanya membuat date berisi tanggal saya, kita cukup gunakan YYYY-MM-DD
  > Jika date dengan tanggal dan waktu, gunakan YYYY-MM-DDTTH:mm:ss:sssZ
  > Jika date dengan tanggal, waktu dan timezone, gunakan YYYY-MM-DDTTH:mm:ss:sssZ
  > Hasil parseing adalah unix timestamp, bukan object date
*/

// Format Date
/*
  > YYYY ==> tahun
  > MM ==> bulan
  > DD ==> tanggal
  > T ==> pemisah tanggal dan waktu
  > HH ==> jam
  > mm ==> menit
  > ss ==> detik
  > sss ==> mili detik
  > z ==> timezone
*/

// Kode: parseing date
const parseTimestamp = Date.parse("2020-12-18T10:10:10.123+07:00")
console.log(parseTimestamp) // 1608261010123 => format apoch millis

const parseDate = new Date(parseTimestamp)
console.log(parseDate) // 2020-12-18T03:10:10.123Z

// Date getter dan setter
/*
  > Date juga memiliki banyak sekali method untuk mendapatkan informasi date dan juga mengubah informasi date, atau istilahnya adalah getter dan setter
*/

// Kode: date getter and setter
const date = new Date()
date.getFullYear(2020)

console.log(date.getFullYear()) // 2023
console.log(date.getMonth()) // 10
console.log(date.getDate()) // 28
console.log(date.getHours()) // 17
console.log(date.getMinutes()) // 32
console.log(date.getSeconds()) // 43
console.log(date.getMilliseconds()) // 799
console.log(date.getTimezoneOffset()) // -420