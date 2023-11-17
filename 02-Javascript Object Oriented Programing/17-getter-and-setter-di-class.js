// Getter and Setter di Class
/*
  > Class juga mendukung pembuatan getter and setter
  > Perlu diingat, getter and setter akan berada di prototye, bukan di instance object
*/

// Kode: getter and setter di class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
    const result = value.split(" ")
    this.firstName = result[0]
    this.lastName = result[1]
  }
}

const user = new Person("Syahrin","Matlail")

console.log(user) // Person { firstName: 'Syahrin', lastName: 'Matlail' }
console.log(user.fullName) // Syahrin Matlail

user.fullName = "donald bebek"
console.log(user) // Person { firstName: 'donald', lastName: 'bebek' }