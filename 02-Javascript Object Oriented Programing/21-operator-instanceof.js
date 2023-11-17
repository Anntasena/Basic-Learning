// Operator Instanceof
/*
  > Kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan
  > Kita tidak bisa menggunakan operator typeof, karna dari class, jika kita gunakan operator typeof, hasilnya adalah "object"
  > Operator instanceof akan menghasilkan boolean, true jika benar object tersebut adalah instance objectnya, atau false jika bukan
*/

// Kode: operator instanceof
class Employee {}

class Manager {}

const userEmployee = new Employee();
const userManager = new Manager();

console.log(userEmployee instanceof Employee); // true
console.log(userEmployee instanceof Manager); // false
console.log(userManager instanceof Employee); // false
console.log(userManager instanceof Manager); // true

console.log(" ") // hanya pembatas di log
// Operator instaceof di class inheritance
/*
  > Operator instanceof mendukung class inheritance, artinya instanceof juga bisa digunakan untuk mengecek, apakah sebuah object adalah instance dari class tertentu, atau turunan dari class tertentu?
*/

// Kode: oparator instanceof di inheritance
{
    class Employee {}

    class Manager extends Employee {}

    const userEmployee = new Employee();
    const userManager = new Manager();

    console.log(userEmployee instanceof Employee); // true
    console.log(userEmployee instanceof Manager); // false
    console.log(userManager instanceof Employee); // true
    console.log(userManager instanceof Manager); // true
}

// Ini mirip seperti fitur instanceof di bahasa pemrograman java