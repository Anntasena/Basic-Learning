// Label
/*
  > Label merupakan penanda yang bisa digunakan dengan kata kunci break and continue 
  > Secara default saat kita melakukan break atau continue, dia akan melakukan terhadap pengulangan dimana kode break dan continue digunakan 
  > Dengan menggunakan label, kita bisa melakukan break dan continue terhadap pengulangan yang kita inginkan, asal pada pengulangannya kita menggunakan label
  > Untuk membuat label, kita bisa gunakan nama label lalu di ikuti dengan tanda :(titik dua)
*/

// Kode: label
loopi: for (let i = 0; i < 100; i++) {
    loopj: for (let j = 0; j < 10; j++) {
        console.log(`${i} - ${j}`);
    }
}

// Kode: Continue dan break di label
loopa: for (let a = 0; a < 10; a++) {
    loopb: for (let b = 0; a < 100; b++) {
        if (b > 10) {
            continue loopa;
        }
    console.log(`${a} - ${b}`);
    }
}

// label sangat jarang sekali digunakan dalam real case saat pengembangan website
