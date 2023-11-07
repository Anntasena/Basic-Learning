// Looping

// Exercise 1
/*
Masukkan angka: 5
Hasil perkalian ke-1: 10
Hasil perkalian ke-2: 20
Hasil perkalian ke-3: 40
Hasil perkalian ke-4: 80
Hasil perkalian ke-5: 160
Hasil perkalian ke-6: 320
Hasil perkalian ke-7: 640
Hasil perkalian ke-8: 1280
Hasil perkalian ke-9: 2560
Hasil perkalian ke-10: 5120
*/

let angka = 5;

if (!isNaN(angka)) {
    for (let i = 1; i <= 10; i++) {
        const hasil = angka * 2 ** i;
        console.log(`Hasil perkalian ke-${i}: ${hasil}`);
    }
} else {
    console.log("Masukan tidak valid. Mohon masukkan angka yang benar.");
}

for (let x = 1; x <= 50; x++) {
    if (x % 2 === 0 || x % 3 === 0 || x % 4 === 0 ) {
        continue;
    }
    console.log(x)
}


