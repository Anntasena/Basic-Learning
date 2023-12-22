// State di AJAX
/*
  > AJAX memiliki tahapan state. dimana kita bisa mendapatkan banyak sekali state di AJAX menggunakan property readyState
  > Property readyState mengembalikan nilai number, dimana tiap number merupakan representasi dari statenya
*/

// Daftar State
/*

Value ==> State ==> Description

  > 0 ==> UNSENT ==> Client has been created, open() not called yet
  > 1 ==> OPENED ==> open() has been called
  > 2 ==> HEADERS_RECEIVED ==> send() has beend called, and headers and status are available
  > 3 ==> LOADING ==> Downloading; responseText hold partial data
  > 4 ==> DONE ==> The operation is complete
*/

// Ready State Change Event
/*
  > Jika kita ingin mendengarkan perubahan yang terjadi pada state, kita bisa menggunakan event readystatechange
*/

// Kode: Ready State Change Event
/*
  *Ada di 05-state-AJAX.html
*/