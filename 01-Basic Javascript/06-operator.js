// Operator matematika ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
  > Javascript mendukung banyak sekali operator matematika untuk tipe data Number, seperti:
    - Operator aritmatika
    - Operator Augmented Assisment
    - Operator Unary
    - Dan lain-lain
*/

// Operator aritmatika
/*
  > (+) = pertambahan
  > (-) = pengurangan
  > (*) = perkalian
  > (**) = exponensial / pangkat
  > (/) = pembagian
  > (%) = modulo / sisa bagi
*/

console.log(12 + 12);
console.log(15 - 12);
console.log(15 * 3);
console.log(2 ** 3);
console.log(10 / 2);
console.log(10 % 2);

// Operator Augmented Assigngment ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
  > Operator Augmented Assignment adalah teknik dalam Javascript yang memungkinkan kita untuk menggabungkan operator aritmatika atau operator lain dengan operator penugasan(assignment) dalam satu ekspresi.
  > Operator Assignment sangat dianjurkan ketika sebuah nilai melakukan oprasi terhadap dirinya sendiri
*/

// Penambahan (`+=`)
let x = 5;
let y = 7;
// x = x + y  >> ini bisa di persingkat
x += y;
console.log(x); // hasil 12

// Pengurangan (`-=`)
let x1 = 5;
let y1 = 7;
// x1 = x1 - y1
x1 -= y1;
console.log(x1); // hasil -2

// Perkalian (`*=`)
let x2 = 5;
let y2 = 4;
// x2 = x2 * y2 // hasilnya 20
x2 *= y2;
console.log(x2);

// Exponensial / pangkat
let x3 = 5;
let y3 = 2;
// x3 = x3 ** y2
x3 **= y3;
console.log(x3);

// Pembagian (`/=`)
let x4 = 10;
let y4 = 2;
// x4 = x4 / y4
x4 /= y4;
console.log(x4);

// modulo / sisa bagi (`%=`)
let x5 = 10;
let y5 = 3;
// x5 = x5 % y5
x5 %= y5;
console.log(x5);

// Operator Unary ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
  > Operator Unary adalah operator yang cukup menggunakan satu data
  > Operator Unary digunakan untuk melakukan oprasi matematis atau logis pada operand tunggal dan menghasilkan hasilnya 
*/

// Unary Plus (+) : mengkonversi oprand menjadi datatype Number jika memungkinkan
let unaryX = "5";
let unaryY = +unaryX;
console.log(unaryY); // hasil 5 (oprasi unaryX diubah datatypenya menjadi "number")

// Unary Negitation (-) : mengubah operand menjadi nilai negatif
let unaryX1 = 10;
let unaryY1 = -unaryX1;
console.log(unaryY1); // hasil -10

// Unary Increment (++) : menambahkan nilai 1 ke operand
let unaryX2 = 5;
unaryX2++;
console.log(unaryX2); // hasil 6

// Unary Decrement (--) : mengurangi nilai 1 ke operand
let unrayX3 = 6;
unrayX3--;
console.log(unrayX3); // hasil 5

// Logical Not(!) : mengubah nilai operand manjadi nilai kebalikan boolean-nya
let logical = true;
let logicalNot = !logical;
console.log(logicalNot); // hasil false 

// Bitwise (NOT) : mengubah setiap bit operand menjadi kebalikannya
let bitWise = 5; // biner 0101
let bitWiseNot = ~bitWise
console.log(bitWiseNot) // hasil -6 (hasil dari biner: 1010)

// Typeof : mengembalikan tipe data operand 
let type = 42;
let typeOf = typeof type
console.log(typeOf) // hasil number

// Void : mengembalikan undifined 
let xVoid = 10;
let yVoid = void xVoid;
console.log(yVoid) // hasil akan memiliki nilai undifined