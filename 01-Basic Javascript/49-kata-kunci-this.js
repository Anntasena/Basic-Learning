// Kata Kunci This
/*
  > Kata kunci this adalah refrensi ke object milik siapa
  > Tiap lokasi kata kunci this, bisa berbeda beda refrensi pemiliknya
  > Dalam object method, this merupakan refrensi ke object pemilik functionnya
  > Di global scope, this merupakan refrensi ke global object (di browser biasanya window)
  > Dalam function, this merupakan refrensi global object (di browser biasaya window)
  > Di function dengan strict mode, this adalah undefined
  > Dalam event, this merupakan refrensi ke element yang menerima event dalam OOP
*/

// Kode: this di global scope
console.log(this) //hasil = {} jika di browser keluar kata "window"

function sample() {
  console.log(this)
}
// sample() // hasil = window jika di browser

// Kode: this di object method
const person = {
  name : "Syarhin",
  sayHelllo: function (value) {
    //this = person
    console.log(this) // hasil =  { name: 'Syarhin', sayHelllo: [Function: sayHelllo] }
    console.log(`Hi ${value}, my name is ${this.name}`)
  }
}

person.sayHelllo("Mamat") // hasil = Hi Mamat, my name is Syarhin