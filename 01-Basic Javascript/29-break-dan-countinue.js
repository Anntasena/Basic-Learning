// Break & Countinue
/*
  > Pada switch statement, kita sudah mengenal kata kunci break, yaitu menghentikan case dalam switch
  > Sama dengan pengulangan, break juga digunakan untuk menghentikan seluruh pengulangan
  > Namun berberda dengan countinue, countinue digunakan untuk menghentikan perulangan saat ini, lalu melanjutkan perulangan selanjutnya
*/


// Kode: perulangan dengan menggunakan break
let counter = 1;

while (true) {
    console.log(`pengulangan ke: ${counter}`);
    counter++;

    if (counter > 10) {
        break;
    }
}

// Kode: Perulangan dengan menggunakan countinue
for (let i = 1; i <=100; i++) {
  if(i % 2 === 0) {
    continue
  }
  console.log(`Perulangan ganji: ${i}`)
}

// Ringkasan
/* 
  > Break : untuk menghentikan total pengulangannya
  > Continue : untuk menghentikan perulangan saat ini dan dia akan melanjutkan perulangan selanjutnya
*/