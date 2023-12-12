// Attr
/*
  > Attr atau attribute merupakan representasi dari attribute sebuah element, atau singkatnya key-value, keynya adalah nama attribute, dan valuenya adalah value attribute
*/

// Kode: attr
/*
  *Ada di 05-attr.html
*/

// Attr Value
/*
  > Kadang kebanyakan programmer ingin langsung mendapatkan value attr
  > Jarang sekali menggunakan object attr nya
  > Untuk mendapatkan value secara langsung, kita bisa menggunakan method getAttributeNode(name) di element
*/

// Membuat Attr
/*
  > Untuk membuat attr, kita bisa mengguanakn document.createAttribute(name)
  > Lalu menambahkannya ke element, kita bisa gunakan element.setAttributeNode(attr)
  > Atau kita juga bisa langsung membuat attr langsung dengan name dan value nya menggunakan element.setAttribute(name, value)
*/