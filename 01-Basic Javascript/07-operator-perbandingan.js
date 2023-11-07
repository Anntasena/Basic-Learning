// Operator Perbandingan
/*
  > Operasi perbandingan adalah operasi untuk membandingkan dua buah data
  > Operasi perbandingan adalah operasi yang menghasilkan nilai boolean (benar atau salah)
  > Jika hasil perbandingannya adalah benar, maka nilainya adalah true
  > JIka hasil perbandingannya adalah salah, maka nilainya adalah false
*/

/*
  > {>} = lebih dari
  > {<} = kurang dari
  > {>=} = lebih dari sama dengan
  > {<=} = kurang dari sama dengan
  > {==} = sama dengan 
  > {===} = sama dengan dan sama tipe
  > {!=} = tidak sama dengan
  > {!==} = tidak sama dengan dan tidak sama tipe 
*/

let result1 = 5 == "5";
console.log(result1) // hasilnya true, karna tipe datanya tidak di cek

let result2 = 5 === "5";
console.log(result2) // hasilnya false, karna tipe datanya di cek

let result3 = 5 != "5";
console.log(result3) // hasilnya false, karna nilainya sama tetapi tipe datanya tidak di cek

let result4 = 5 !== "5";
console.log(result4) // hasilnya true, walaupun nilainya sama tetapi tipe datanya berbeda 