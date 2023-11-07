// Closure
/*
  > Closure adalah kombinasi function dan bundle refrensi ke data sekitarnya
  > Kita sudah tau bahwa local scope tidak bisa diakses diluar scopenya
  > Dengan kemampuan closure, kita bisa membuat function di local scope dan refresni ke data di sekitar local scope tersebut, keluar  dari scope localnya
*/

// Kode: closure
function createAdder(value) {
    const owner = "Syahrin";
    function add(param) {
        console.log(owner);
        return value + param;
    }
    return add;
}

const addTwo =  createAdder(2)
console.log(addTwo(10)) // hasil = Syahrin 12
console.log(addTwo(20)) // hasil = Syahrin 22
