// Import
/*
  > Export digunakan untuk mengekspos kode di module, jika kita ingin menggunakan kode yang sudah di ekspos dimodule, kita bisa menggunakan kata kunci import
  > Cara menggunakan kata kunci import adalah sebagai berikut:
    - import {namaFunction, namaVariable, namaClass} from "lokasi-module.js"
  > Module hanya bisa digunakan dimodule lain, jadi pastikan ketika membuat script, kita harus menggunakan type module
  > Saat menggunakan import, kita tidak perlu lagi menambahkan script module src satu per satu, karna sudah dihandle oleh browser secara otomatis ketika menggunakan module
*/

// Kode: Import module
import { sayHello, sayGoodbye } from "./07-export";