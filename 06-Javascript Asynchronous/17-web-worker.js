// Web Worker

// Thread di Javascript
/*
  > Javascript adalah single thread (single proses), artinya walaupun proses yang kita buat adalah Async, tetapi akan dijalankan dalam thread (Proses) yang sama
  > Kemampuan satu thread dalam mengelola berberapa pekerjaan, dinamakan concurrent
  > Kemampuan menjalankan berberapa thread untuk mengelola satu atau lebih pekerjaan, dinamakan pararel
  > Dan untuk membuat proses secara pararel, kita bisa menggunakan web worker
*/

// Web Worker
/*
  > Web worker adalah kemampuan yang untuk menjalankan proses di Thread yang berbeda dibanding main thread
  > Keuntungan menggunakan web worker adalah, jika terdapat proses yang membutuhkan waktu lama, web kita tidak akan freze, karena proses tersebut bisa kita jalankan di thread yang berbeda dari main thread(yang biasa digunakan oleh UI)
*/

// Worker
/*
  > Untuk menggunakan web worker API, kita bisa membuat object worker
  > Saat kita membuat object worker, worker tidak akan secara otomatis berjalan, melainkan kita perlu memberi perintah dengan cara mengirim pesan
  > Untuk mengirim pesan, kita bisa menggunakan method postMessage()
  > Sedangkan untuk menerima balasan worker, kita bisa menggunakan event listener onmessage
  > Data yang diterima adalah object MessageEvent
*/