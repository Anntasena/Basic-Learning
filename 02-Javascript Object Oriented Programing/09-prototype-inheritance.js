// Prototype Inheritance
/*
  > Sekarang kita sudah tau, bahwa prototype selalu memiliki parent, artinya dia adalah turunan, parent tertinggi adalah object prototype
  > Pertanyaannya bagaimana jika kita ingin melakukan inheritance ke prototype lain?
  > Hal ini juga bisa dilakukan, namun agak sedikit tricky, karna hal ini, sebenarnya untuk javascript moderen, tidak direkomendasikan lagi menggunakan OOP menggunakan prototype, karna di ES6 sudah dikenalkan kata kunci class 
*/

// Kode: Prototype inhertitance salah (1)
function Employee(name) {
  this.name = name
}

function Manager(name) {
  this.name = name
}

Manager.prototype = Employee.prototype // ini adalah cara pewarisan yang salah

Manager.prototype.sayHello = function(name) {
  console.log(`Hello ${name}, my name is manager ${this.name}`)
}

Employee.prototype.sayHello = function(name) {
  console.log(`Hello ${name}, my name is employee ${this.name}`)
}

// Kode: Prototype inheritance salah (2)
const employee = new Employee("Syahrin")
employee.sayHello("Mamat") // Hello Mamat, my name is employee Syahrin

const manager = new Manager("Donald")
manager.sayHello("Bebek") // Hello Donald, my name is employee Donlad


// Kode: prototype inheritance yang benar (1)
{
  function Employee(name) {
    this.name = name
  }

  function Manager(name) {
    this.name = name
  }

  Manager.prototype = Object.create(Employee.prototype)

  Manager.prototype.sayHello = function (name) {
    console.log(`Hello ${name}, my name is manager ${this.name}`)
  }

  Employee.prototype.sayHello = function (name) {
    console.log(`Hello ${name} my name is employee ${this.name}`)
  } 

  console.log(employee)
  console.log(manager)
}