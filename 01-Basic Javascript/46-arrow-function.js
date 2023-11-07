// Arrow Function
/*
  > Arrow function adalah alternatif pembuatan fucntion yang lebih sederhana dari function bisanaya
  > Namun terdapat limitasi dan juga tidak bisa digunakan disemua situasi
  > Dinamakan arrow function karna menggunakan tanda => (Seperti panah)
  > Berikut contoh berberapa kekurangan arrow function
    - tidak memiliki fitur argument object
    - tidak bisa menggunaka function generator
    - tidak bisa mengakses this
    - tidak bisa mengakses super (OOP)
*/

// Kode: membuat arrow function
const sayHello = (name) => {
    const say = `Hello ${name}`;
    console.log(say);
};

sayHello("Syahrin"); // hasil = Hello Syahrin

// Arrow function tanpa blok
/*
  > Jika sebuah arrow function isinya sederhana, misal hanya satu baris
  > Kita bisa menggunakan arrow function tanpa harus menggunakan blok
*/

// Kode: arrow function tanpa block
const sebutNama = (name) => console.log(`Hai ${name}`);
sebutNama("Mamat"); // hasil = Hai Mamat

// Arrow Function Return Value
/*
  > Arrow function bisa mengembalikan value, sama seperti function biasanya
  > Jika menggunakan block, maka kita perlu menggunakan kata kunci return
  > Jika tidak menggunakan block, kita tidak perlu menggunakan kata kunci return
*/

const sum = (first, second) => {
    return first + second;
};

console.log(sum(2, 6)); // hasil = 8

const plus = (angka1, angka2) => angka1 + angka2;
console.log(plus(100, 200)); // hasil = 300


// Arrow Function Tanpa Kurung Parameter
// > Jika parameter di arrow function hanya satu bukan kosong, kita bisa tidak menggunakan kurung pada perameter

const menyapa = nama => console.log(`Hallo ${nama}`)
menyapa("Donald Duck") // hasil = Hallo Donald Duck

// Kode: arrow function sebagai parameter
/*
  > Karna arrow function sama seperti anonymous function
  > Jadi kita bisa menggunakan arrow function sebagai parameter di fucntion lain
*/

function giveMyName(callback) {
  callback("Syahrin")
}

giveMyName((name) => console.log(`Hello ${name}`)) // hasil = Hello Syahrin
giveMyName(name => console.log(`Hello ${name}`)) // hasil = Hello Syahrin bisa tanpa kurung untuk parameter