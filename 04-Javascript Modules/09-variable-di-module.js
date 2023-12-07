// Varibale di Module
/*
  > Salah satu yang membingungkan para variable dijavascript adalah ketika kita membuat variable di global scope, maka variable tersebut bisa diubah nilainya oleh file javascript lain
  > Saat kita menggunakan module, ketika kita buat variable, maka variable tersebut hanya berada pada module tersebut, tidak bisa digunakan di module lain
*/

// Kode: variable di module
const name = "Syahrin Matlail Fajri"

// Export variable di module
/*
  > Jika kita ingin mengekspos variable diluar module, kita juga bisa menggunakan kata kunci export di awal deklarasi varialbenya
*/
{
  // export const name = "Syahrin Matlail Fajri"
}