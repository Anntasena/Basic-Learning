// Error
/*
  > Saat membuat aplikasi, sudah tentu kita tidak akan terhindar dari yang namanya error
  > Di javascript error merupakan sesuatu yang sudah standar
  > Banyak sekali class error di javascript, namum semua class error di javascript sering berujung di class error, artinya class error adalah super class untuk semua jenis error di javascript
  > Contoh class error yang terdapat di javascript adalah SyntaxError, TypeError, EvalError, dan lain lain
*/

// Throw Error
/*
  > Saat kita membuat instance object dari class error, tidak lantas otomatis terjadi error
  > Kita perlu memberitahu program kita, bahwa kita akan mentrigger sebuah error yang terjadi, atau istilahnya adalah melempar error (throw error)
  > Untuk melempar error, kita bisa gunakan kata kunci thorw, diikuti dengan instance object errornya
  > Jika terjadi error, maka secara otomatis kode program kita akan terhenti, dan kita bisa melihat detail errornya di console di aplikasi browser kita
*/

// Kode: Throw Error
class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total parameter harus lebih dari 0")
    }

    let result = 0
    for (const number of numbers) {
      result += number
    }
    return result
  }
}

const result = MathUtil.sum(1,1,1,1,1)
console.log(result) // 5

// console.log(MathUtil.sum()) // Error
console.log(MathUtil.sum(1,1,1,1,1)) // 5