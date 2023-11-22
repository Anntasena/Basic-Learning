// Iterable dan Iterator
/*
  > Salah satu fitur terbaru di ES6 adalah iterable
  > Iterable adalah spesial object yang memiliki standarisasi
  > Dengan mengikuti standarisasi iterable, secara otomatis kita bisa melakukan iterasi terdapat data tersebut dengan menggunakan perulangan for...of
  > Contoh yang sudah mengikuti standarisasi iterable adalah string, array, object dan lain lain
*/

// Kode: Kontrak iterable (dalam Typescript)

/* 
interface Iterable<T> {
  [Symbol.Iterable](): Iterator<T>
}
*/

// Kode: kontrak iterator (dalam Typescript)
/*
interface iterator <T, TReturn = any, TNext = undefined> {
  // Note: `next` is defined using a tuple to ensure we report the correct assistant
  next(...args: [] | [next]): IteratorResult <T, TReturn>
  return?(value?: TReturn) : IteratorResult <T, TReturn>
  throw?(e?: any) : IteratorResult <T, TReturn>
}
*/

// Kontrak: IteratorResult (dalam Typescript)
/*
interface IteratorYieldResult<TYield> {
  done?: false
  value: TYield
}

interface IteratorReturnResult<TReturn> {
  done: true
  value: TReturn
}

type IteratorResult<T, TReturn = any> = ItertatorYieldResult<T> | ItreatorReturnResult<TReturn>
*/

// Cara kerja iterable dan iterator
/*
  > JIka kita mengikuti kontrak iterable, maka object yang kita buat akan bisa dilakukan iterasi menggunakan for...of
  > Setiap kita melalukan perulangan object iterator akan dibuat
  > Hal ini menjadi aman jika kita melakukan iterasi berulang-ulang, karena iterator baru akan dibuat terus menerus
*/

// Kode: Membuat counter iterator result
/*
class CounterIteratorResult {
  constructor(value, done) {
    this.done = done
    this.value = value
  }
}
*/

// Kode: Membuat kode iterator
/*
class CounterIterator {
  constructor(value, max) {
    this.value = value
    this.max = max
  }

  next() {
    try {
      if (this.valeu > this.max) {
        return new CounterIteratorResult(this.value, true)
      } else {
        return new CounterIteratorResult(this.value, max)
      }
    } finally {
      this.value++
    }
  }
}
*/

// Kode: membuat counter iterable
/*
class Counter {
  constructor(value, max) {
    this.value = value
    this.max = max
  }

  [Symbol.iterator]() {
    return new CounterIterator(this.value, this.max )
  }
}
*/

// Kode: menggunakan counter iterable
/*
const counter = new Counter(1,10)
for (const value of counter) {
  console.log(element)
}
*/