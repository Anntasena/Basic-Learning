// Error Handling
/*
  > Saat terjadi error, di kode program javascript kadang kita tidak ingin program kita berhenti
  > Di javascrip, kita bisa menangkap jika terjadi error
  > Kita bisa menggunakan try catch statement untuk menangkap error
  > Pada block try, kita mencoba mengakses kode program yang bisa menyebabkan error, dan jika terjadi error, blok try akan berhenti dan otomatis masuk ke block catch
  > jika tidak terjadi error, block catach tidak akan di esekusi
*/

// Kode: error handling
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

try {
  console.log(MathUtil.sum())
  console.log("Kode Blok try akan berhenti")
} catch (error) {
  console.log(`Terjadi error: ${error.message}`) // Terjadi error: Total parameter harus lebih dari 0
}

console.log("Kode program tidak akan berhenti") // Kode program tidak akan berhenti

try {
  console.log(MathUtil.sum(5)) // 5
  console.log("Kode Blok try akan berhenti") // Kode blok try akan berhenti
} catch (error) {
  console.log(`Terjadi error: ${error.message}`)
}


// Kata kunci finally
/*
  > Kadang kita ingin melakukan sesuatu entah itu terjadi error ataupun tidak
  > Dalam try catch, kita bisa menambahkan block finally
  > Block finally ini akan selalu di esekusi setelah try catch selesai, entah terjadi error atau tidak, blok finally akan selalu di esekusi
*/

// Kode: kata kunci finally
try {
  console.log(MathUtil.sum())
  console.log("Kode program akan berhenti")
} catch (error) {
  console.log(`Terjadi error: ${error.message}`) // Terjadi error: Total parameter harus lebih dari 0
} finally {
  console.log("Kode program selesai") // Kode program selesai
}

// * Intinya mau error atau tidak blok finally akan selalu di esekusi


// Try finally
/*
  > Kata kunci finally juga bisa digunakan tanpa perlu menggunakan catch
  > Biasanya digunakan dalam kasus tertentu
*/

// Kode: try finally
{

  class Counter {
    constructor() {
      this.value = 1
    }

    next() {
      try {
        return this.value
      } finally {
        this.value++
      }
    }
  }

  const counter = new Counter()
  console.log(counter.next()) // 1
  console.log(counter.next()) // 2
  console.log(counter.next()) // 3
  console.log(counter.next()) // 4

}

// Kode: tanpa try finally
{

  class Counter {
    counter = 0

    next() {
      return this.counter
      this.counter++
    }
  }

  const counter = new Counter()
  console.log(counter.next()) // 0
  console.log(counter.next()) // 0
  console.log(counter.next()) // 0

}