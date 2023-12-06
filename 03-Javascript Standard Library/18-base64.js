// Base64
/*
  > Base64 merupakan binary to text encodeing, representasi binary data dalam format string
  > Base64 merupakan format text data yang aman untuk dikirimkan di web
  > Base64 merupakan encodeing yang biasanya digunakan ketika perlu mengirim data dari client ke server
  > Karna encodeing Base64 merupakan text, oleh karena itu sangat aman digunakan pada query param URL atau text body dalam form
*/

// Base64 function
/*
Javascript memiliki fucntion bawaan untuk melakukan encode base64 atau decode base64

Function ==> Keterangan
  > btoa(value) ==> encode ke base64 dari value
  > atob(encoded) ==> docode dari base64 ke value
*/

// Kode: Base64
const original = "Syahrin&Matlail=Fajri"

const encoded = btoa(original)
console.log(encoded) // U3lhaHJpbiBNYXRsYWlsIEZhanJp

const decoded = atob(encoded)
console.log(decoded) // Syahrin&Matlail=Fajri