// Pengenalan Asynchronous

// Apa itu synchronous
/*
  > Program dalam javascript secara default akan diesekusi baris per baris
  > Secara default, proses di javascript akan diesekusi secara synchronous, artinya baris selanjutnya akan diesekusi setelah baris sebelumnya selesai dikerjakan
  > Proses synchornous juga biasa disebut blocking, karena harus menunggu tiap proses selesai, baru proses selanjutnya bisa dilakukan
*/

// Contoh Synchronous
/*
  [Main Thread] // artinya: Sebuah proses
      |
  Get product By Id
      |
  Show Product
      |
  Show Header
      |
  Show Footer
      |
  [Main Therad]

 *arti mudahnya adalah dikerjakan secara bertahap
*/

// Apa itu Asynchronous
/*
  > Walaupun secara default proses di javascript diesekusi secara synchonous, namun kita bisa membuatnya menjadi asynchronous
  > Berbeda dengan proses synchronous, pada proses async, javascript tidak akan menunggu proses tersebut selesai, melainkan javascript akan melanjutkan beris selanjutnya, tanpa harus menunggu proses async selesai
  > Proses Asynchronous juga biasa disebut non-blocking
*/