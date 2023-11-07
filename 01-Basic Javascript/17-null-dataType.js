// Null
/*
  > Null merupakan representasi data yang kosong
  > Null berbeda dengan undefined, null berarti variable sudah terisi hanya saja value datanya kosong (null)
  > Sedangkan undefined adalah variable yang belum ditambahkan value apapun
*/

let data = null
console.log(data) // hasil null

let objek = {nama: "Syahrin", usia: null}
console.log(objek.usia) // hasil null

// Ringkasan
/*
  > Undefined = menunjukan ketidaksediaan nilai atau ketidakpastian, sering kali karna variable belum di inisialisasi
  > Null = menunjukan bahwa nilai sengaja kosong atau tidak ada, sering digunakan untuk menghapus nilai dari variable atau objek
  > Kedua nilai ini menmpunyai konteks yang berbeda dan memiliki makna yang berbeda dalam javascript
*/