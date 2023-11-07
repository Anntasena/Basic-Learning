// Switch Expression

// Switch Statement
/*
  > Kadang kita butuh menggunakan kondisi sederhana if statement, seperti hanya menggunakan perbandingan ==
  > Switch adalah statement percabangan yang sama dengan if, namum lebih sederhana cara pembuataannya
  > Kondisi switch statement hanya untuk perbandingan ==
*/

let nilai = "A";

switch (nilai) {
    case "A":
        console.log("Hebat");
        break;
    case "B":
        console.log("Lumayan Hebat");
        break;
    case "C":
        console.log("Biasa Aja");
        break;
    default:
        console.log("Salah Input");
}

let angka = 5;
switch (angka) {
    case angka >= 0:
        console.log("A");
    case angka >= 3:
        console.log("B");
    case angka >= 6:
        console.log("C");
    case angka >= 8:
        console.log("D");
    default:
        console.log("LUAR BIASA");
}
