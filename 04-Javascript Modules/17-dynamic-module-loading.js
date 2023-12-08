// Dynamic Module Loading
/*
  > Saat kita menggunakan module cara import, maka semua module akan di load
  > Pada kenyataanya, kadang kita tidak ingin meload semua module diawal, kita ingin meload module ketika dibutuhkan saja, ini akan menghemat bandwith jaringan juga, karena kita tidak perlu download semua module
  > Javascript mendukung dynamic module loading, caranya kita bisa menggunakan function import(), dimana hasilnya berupa Promise<ModuleObject> (promise adalah materi yang kompleks, ini akan dibahah di javascript async)
*/

// Kode: Module
export function alertHello(name) {
    alert(`Hello ${name}`)
}

// Kod: Dynamic Module

