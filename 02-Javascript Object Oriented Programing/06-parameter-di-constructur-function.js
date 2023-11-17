// Paramter di Constructur Function
/*
  > Karena dalam javascript, class berbentuk function, jadi secara default, function tersebut bisa memiliki parameter
  > Constructur function sama seperti biasanya, bisa memiliki parameter, hal ini membuat ketika kita membuat object, kita bisa mengirim langsung data lewat parameter di constructur function tersebut
*/

// Kode: parameter di constructur function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.log(`Hello ${name}, my name is ${firstName} ${lastName}`);
    };
}


{
  // tidak perlu menulis seperti ini
    const user1 = new Person();
    user1.firstName = "Gibran";
    user1.lastName = "Rakabuming";
    user1.sayHello("Capres"); // Hello Capres, my name is undefined undefined
}

{
  const user1 = new Person("Gibran","Rakabuming")
  user1.sayHello("Capres") // Hello Capres, my name is Gibran Rakabuming
}


