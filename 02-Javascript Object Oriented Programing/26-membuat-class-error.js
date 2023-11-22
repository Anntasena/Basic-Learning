// Membuat Class Error Manual
/*
  > Walaupun javascript sudah memiliki standart class error
  > Namun alangkah baiknya, kita membedakan tiap jenis error
  > Untuk membuat error sendiri secara manual sangatlah mudah, cukup membuat class turunan dari class error
  > Dan jangan lupa menambahkan parameter message, agar bisa dikirimkan ke parameter di constructor class error
*/

// Kode: class validationError
class ValidationError extends Error {
  constructor(message, field) {
    super(message)
    this.field = field
  }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError("Total parameter harus lebih dari 0", "numbers")
    }

    let result = 0
    for (const number of numbers) {
      result += number
    }
    return result
  }
}

try {
  console.log(MathUtil.sum())
  console.log("Berhasil")
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Terjadi error di field ${error.field} dengan error: ${error.message}`)
  } else {
    console.log(`Terjadi error: ${error.message}`)
  }
} finally {
  console.log("Program selesai")
}