// Getter dan Setter
/*
  > Getter dan setter adalah kemampuan membuat function yang berbeda untuk mengambil data (Getter) dan mengubah data (Setter) pada sebuah property di object
  > Dengan menggunakan getter dan setter, kita bisa melakukan apapun dalam function sebelum property di akses atau di ubah, misal menambah validasi dan lain lain
*/

// Kode: getter
const person = {
  firstname: "Syahrin",
  middlename: "Matlail",
  get fullname() {
    return `${this.firstname} ${this.middlename}`
  }
}

// Otomatis memanggil get fullname()
console.log(person.fullname) // hasil = Syahrin Matlail

// Kode: setter
const user = {
  firstname: "Donlad",
  middlename: "Duck",
  set fullname(value) {
    const array = value.split(" ")
    this.firstname = array[0]
    this.lastname = array[1]
  }
}

user.fullname = "Donald bebek"
console.log(user.firstname) // hasil = Donald
console.log(user.middlename) // hasil = Duck

// Getter dan Setter tidak populer di kalangan programmer javascript