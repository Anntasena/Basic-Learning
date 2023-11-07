// Popup
// Alert, Prompt dan Confirm
/*
  > Javascript memiliki fitur yang bernama alert, prompt dan confirm
  > Alert digunakan untuk memberi peringatan berupa popup text dibrowser
  > Prompt digunakan untuk meminta input string dari pengguna browser dalam bentuk popup input text 
  > Confirm digunakan untuk meminta input boolean dari pengguna browser dalam bentuk popup input pilihan
*/

// Kode alert
alert("Hello World!")

// Kode prompt
const name = prompt("Siapa Nama Anda?")
alert(`Hello ${name}`)

// Kode confirm
const login = confirm("Anda yakin mau login?")
if (masuk) {
  const userName = prompt("Tulis nama anda")
  alert(`Hello ${userName}`)
} else {
  alert("Bye Bye")
}

// FITUR INI CUMA BISA JALAN DI BROWSER