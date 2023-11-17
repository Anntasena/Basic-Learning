// Class Inheritance
/*
  > Kita sudah tau bahwa prototype mendukung pewarisan, walaupun sedikit agak tricky cara pembuatannya
  > Untungnya itu diperbaiki di ES6 dengan fitur classnya
  > Sebuah class bisa melakukan pewarisan dari class lainnya dengan menggunakan kata kunci extends
  > di javascript, class inheritance sama seperti prototype inheritance, hanya bisa memiliki satu parent class
*/

// Kode: class inheritance (1)
class Employee {
  sayHello(name) {
    console.log(`Hi ${name}, my name is employee ${this.name}`)
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.log(`Hi ${name}, my name is manager ${this.name}`)
  }
}

// Kode: class inheritance (2)
const userEmployee = new Employee() // Hi Mamat, my name is employee Syahrin
userEmployee.name = "Syahrin"
userEmployee.sayHello("Mamat")

const userManager = new Manager() // Hi bebek, my name is manager Donald
userManager.name = "Donald"
userManager.sayHello("Bebek")