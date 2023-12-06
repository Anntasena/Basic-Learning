// Eval
/*
  > Eval merupakan function yang digunakan untuk mengesekusi kode javascript dari string
  > Fitur ini sangat menarik, namun perlu hati-hati ketika menggunakannya
  > Jika sampai salah penggunaan, maka bisa jadi kita malah mengesekusi kode program yang bisa menyebabkan masalah keamanan di website kita
*/

// *Fitur ini tidak direkomendasikan untuk digunakan karna dapat membuat celah di keamanan

// Kode: eval
const script = "alert('ups, Anda di Heck')";

eval(script);
