// Document
/*
  > Document menrupakan representasi dari object di halaman web
  > Dalam satu halaman web, terdapat satu document, dan kita tidak perlu membuatnya secara manual, karna akan otomatis akan ada di browser
  > Untuk mengakses document, kita bisa gunakan object document
*/

// Document Object
/*
  > Document secara otomatis dibuat dalam browser ketika membuka halaman web, sehingga kita tidak perlu membuat object Document secara manual
  > Kita bisa langsung menggunakan kata kunci document
*/

// Kode: document
/*

<script>
  console.log(document)
</script>

*/

// Document property
/*
  > Document memiliki banyak sekali property
  > Property dalam document bisa kita gunakan untuk melihat semua data yang terdapat dalam document halaman web
*/

// Kode: document property

console.log(document.title)
console.log(document.body)
console.log(document.head)
console.log(document.image)
console.log(document.contentType)

// Document method
/*
  > Document memiliki banyak sekali method
  > Banyak method yang terdapat di document digunakan untuk memanipulasi data DOM misal, membuat Node, Element, Attribute atau mengambil dan menyeleksi Node di dalam document
*/

// Kode: document method
/*
<div>
  <p id="tulisan">Ini adalah tulisan</p>
</div>

<script>
  const tulisan = document.getElementById("tulisan")
  console.log(tulisan)
</script>
*/