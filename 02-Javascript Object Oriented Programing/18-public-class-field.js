// Public Class Field

// Class Field 
/*
  > Biasanya, saat kita ingin menambahkan field (property yang berisi value), kita bisanya di tambahkan di constructur
  > Namun, ada proposal di ECMAScript yang mengajukan public class di tempatkan di luar constructur, selevel dengan penempatan method
  > Proposal ini belom final, namum berberapa browser sudah mendukungnya
*/

// Public Class field
/*
  > Dalam proposal tersebut juga disebutkan bahwa di ECMASCript akan mendukung access modifier public dan private
  > Public artinya dapat diakses dari luar class, dan access hanya bisa diakses dari dalam class saja
  > Untuk membuat public class field, kita bisa langsung membuat nama field dengan value yang selevel dengan method 
  > Jika kita bisa memasukan value kedalam field tersebut artinya field tersebut memiliki value undefined
*/

// *Fitur ini masih developmet terakhir di cek nov 2023

// Kode: public class field
class Customer {
  firstName
  lastName
  balance = 0

  constructor() {

  }

  sayHello() {

  }
}

const user = new Customer
console.log(user) // Customer { firstName: undefined, lastName: undefined, balance: 0 }


// Kode: public class field dan constructur
{
  class Customer {
    firstName
    lastName
    balance = 0

    constructor(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }
  }

  const user = new Customer("Syahrin", "Matlail")
  console.log(user) // Customer { firstName: 'Syahrin', lastName: 'Matlail', balance: 0 }
}