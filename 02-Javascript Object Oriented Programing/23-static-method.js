// Static Method
/*
  > Kata kunci static juga tidak hanya bisa di tambahkan di field, tapi juga di method
  > Jika kita tambahkan di method, artinya method tersebut jadi milik classnya, bukan prototypenya
  > Dan untuk mengkases method tersebut, kita juga bisa lakukan seperti mengakses static class field
*/

// Kode: static method
class MathUtil {

  static sum(...numbers) {
    let total = 0
    for (const number of numbers) {
      total += number
    }

    return total
  }

}

const sum = MathUtil.sum(1,1,1,1,1)
console.log(sum) // 5