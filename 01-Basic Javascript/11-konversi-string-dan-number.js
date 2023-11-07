// Konversi String dan Number
/*
  > Saat membuat aplikasi, kadang kita input dari pengguna selalu dalam bentuk string
  > Sedangkan kita ingin mengolahnya dalam bemtuk tipe data number
  > Maka sangat disarankan untuk melakukan konversi tipe data
*/

// method
/*
  > parseInt(string) = mengkonversi dari string ke number (bilangan bulat)
  > parseFloat(string) = mengkonversi dari string ke number (bilangan pecahan)
  > Number(string) = mengkonversi dari string ke number (bilangakn bulat atau pecahan)\
  > number.toString() = mengkonversi dari number ke string
*/


const value1 = "1.42";
const value2 = 1;
const sum1 = parseInt(value1) + value2 // bilangan koma akan dihiraukan
const sum2 = parseFloat(value1) + value2
const sum3 = Number(value1) + value2
const sum4 = value1 + value2.toString()
console.log(`${sum1} ${sum2} ${sum3} ${sum4}`)

// NaN (Not a Number)
/*
  > NaN adalah nilai khusus dalam javascript yang digunakan untuk mewakili hasil operasi matematika yang tidak valid atau tidak dapat di hitung
*/

console.log(0/0) // ini dianggap NaN 
console.log(parseInt("abc")) // ini dianggap NaN 
console.log("abc" * 5) // ini dianggap NaN

console.log(parseFloat("1.23mamat")) // ini bukan NaN karna javascript membaca dari awal karakter
console.log(parseFloat("mamat12.3")) // ini dianggap NaN karna awal karakter bukanlah tipedata Number
// Kode di atas juga berlaku pada function / method parseInt kecuali Number

console.log(Number("1mamat")); // ini di anggap NaN, karna method / function Number tidak mentolelir karakter meskipun dari depan

// FUN FACT
// NaN jika di oprasikan dengan tipe data Number akan tetap menjadi NaN
const value3 = parseInt("abc");
const value4 = 100
const sum5 = value3 + value4
console.log(sum5) // hasilnya NaN

// NaN jika di oprasikan dengan tipe data boolean akan tetap menjadi NaN
const value5 = parseInt("abc");
const value6 = true
const sum6 = value3 + value4
console.log(sum6) // hasilnya NaN

// NaN jika di oprasikan dengan tipe data string akan tetap menjadi string dengan catatan NaN akan berubah menjadi string
const value7 = parseInt("abc");
const value8 = " mejadi string"
const sum7 = value7 + value8
console.log(sum7) // hasilnya string "Nan menjadi string"

// NaN jika di oprasikan dengan tipe data null akan tetap menjadi NaN
const value9 = parseInt("abc");
const value10 = null
const sum8 = value9 + value10
console.log(sum8) // hasilnya NaN

// NaN jika di oprasikan dengan tipe data undifined akan tetap menjadi NaN
const value11 = parseInt("abc");
const value12 = undefined
const sum9 = value11 + value12
console.log(sum9) // hasilnya NaN


// isNaN() function / method
/*
  > Kadang kita ingin mengecek apakah sebuah number itu NaN atau bukan
  > Untuk melakukan pengecekan tersebut, kita bisa menggunakan function isNaN(tipe data Number)
  > Hasilnya akan berupa tipe data boolean, true jika NaN dan false jika bukan
*/

console.log(isNaN(sum9)) // hasil true karna sum9 adalah NaN
console.log(isNaN(100)) // hasil false karna 100 tipe data number