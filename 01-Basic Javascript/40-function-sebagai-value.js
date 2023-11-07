// Function Sebagai Value
/*
  > Function tidak hanya digunakan sebagai program yang diesekusi, tetapi bisa juga sebagai value
  > Artinya, function bisa disimpan di variable, bisa juga di kirim melalui parameter ke function lainnya
*/


// Kode: Function ke variable
function sayHello(name) {
  console.log(`Name ${name}`)
}

let say = sayHello

sayHello("Syahrin") // hasil = Name Syahrin
say("Matlail")  // hasil = Name Matlail

// Kode: Function ke paramter
function giveMyName(callback) {
  callback("Donald Duck") // sayHello("Donald Duck")
}

giveMyName(sayHello) // hasil = Name Donald Duck
giveMyName(say) // hasil = Name Donald Duck