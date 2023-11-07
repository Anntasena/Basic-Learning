// Operator Logika

/*
  > Operator logika adalah operator untuk dua buah data boolean
  > Hasil dari operator data logika adalah boolean lagi 
*/

/*
  > {&&} = dan 
  > {||} = atau
  > {!} = kebalikan
*/

let x = 5 == 5;
let y = 4 == 4;
let z = 6 == 3;

let result = x && y && z;
console.log(result);

const nilaiUjian = 76;
const nilaiAbsensi = 76;

const lulusUjian = nilaiUjian >= 75;
const lulusAbsensi = nilaiAbsensi >= 75

const lulus = lulusUjian && lulusAbsensi
console.log(lulus,"lulus")