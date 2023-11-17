// Constructur Inheritance
/*
  > Dalam constructur bisanya kita membuat property baik itu berisi value ataupun function 
  > Di dalam constuctur, kita bisa memanggil constructur lain, dengan begitu kita bisa mewarisi semua property yang dibuat di constructur lain tersebut
  > Untuk membuat consturctur lain, kita bisa menggunakan NamaConstructur.call(this.parameter)
*/

// Kode: constructur inheritance
function Employee(firstName) {
  this.firstName = firstName
  this.sayHello = function (name) {
    console.log(`Hi ${name}, my name is ${this.firstName}`)
  }
}

function Manager(firstName,lastName) {
  Employee.call(this, firstName)
  this.lastName = lastName
}

const mamat = new Manager("Syahrin","Matlail")
mamat.sayHello("Manager") // Hi manager, my name is Syahrin

const donald = new Employee("Bebek")
donald.sayHello("Employee") // 

console.log(mamat) /*
Manager {
  firstName: 'Syahrin',
  sayHello: [Function (anonymous)],
  lastName: 'Matlail'
}
*/