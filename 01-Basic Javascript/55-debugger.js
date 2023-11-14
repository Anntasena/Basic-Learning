// Debugger
/*
  > Debugger digunakan untuk melakukan proses debugging
  > Debbuging adalah proses mencari bug (masalah) yang biasa terjadi di kode program kita
  > Dengan debugger kita bisa menghentikan kode program di posisi yang kita inginkan (Breakpoint), lalu melihat isi variable yang ada pada saat kode program sedang berhenti 
*/

// Catatan > Fitur debugger hanya ada di browser

//Kode: debbugger
function createFullName(firstName, middleName, lastName) {
    debugger;
    const fullName = `${firstName} ${lastName} ${lastName}`; // terjadi kesalahan disini karna middleName tidak di tambahkan
    return fullName;
}

const name = createFullName("Syahrin", "Matlail", "Fajri");
console.log(name); // Syahrin Fajri Fajri

function sum(...numbers) {
    debugger;
    let total = 0;
    for (const number of numbers) {
        total = number; // terjadi kesalahan disini (kurang mendambahkan tanda `+`)
    }
    return total;
}

console.log(sum(1, 1, 1, 1, 1)); // 1

// Keuntungan menggunakan fitur debugger
/*
  > Pemecahan masalah lebih cepat
  > Inspeksi variable
  > Penelusuran panggilan fungsi
  > Set titik henti (breakpoints)
  > Memahami aliran esekusi
  > Simulasi keadaan (state simulation)
  > Menyelidiki masalah kompleks
  > Menghemat waktu
  > Peningkatan kualitas kode

  * Debugger adalah alat yang sangat berguna dalam proses pengembangan perangkat lunak, dan penggunaanya di anjurkan untuk mempermudah pemecahan masalah dan pengembangan yang lebih efisien
  * Debbuger yang umum digunakan dalam lingkungan pengembangan javascript adalah yang terintergrasi dalam peramban web(seperti chrome DevTools atau firefox Developer Tools), tetapi ada juga debugger yang tersedia sebagai perangkat lunak pihak ketiga
*/
