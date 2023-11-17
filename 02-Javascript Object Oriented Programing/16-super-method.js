// Super Method
/*
  > Selain digunakan untuk memanggil constructur milik parent class, kata kunci super juga bisa digunakan untuk mengakses method parent class
  > Caranya bisa menggunakan super titik nama functionnya
  > Dengan kata lain, super sebenarnya adalah referance ke parent prototype, mirip seperti __proto__
*/

// Kode: super method
class Shape {
  paint() {
    console.log("Paint Shape")
  }
}

class Circle extends Shape {
  paint() {
    super.paint() // memanggil paint method class
    console.log("Paint Circle")
  }
}

const circle = new Circle() // Paint Shape -> Paint Circle
circle.paint()