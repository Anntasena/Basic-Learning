// Encode
/*
  > Saat kita menulis URL, kadang kita ingin menambahkan informasi tambahan seperti query parameter misalnya
  > URL sendiri sudah memiliki standard encoding penulisan URL
  > Standard encoding ini dilakukan agar penulisan URL aman ketika diterima oleh server
  > Aman disini dalam artian informasi URL tidak berubah
  > Contoh paling sederhana, misal, walaupun kita bisa mengirim spasi dalam URL, tapi disarankan untuk encode agar nilai spasi tidak benar benar terlihat seperti pada URL nya
*/

// Contoh masalah jika tidak menggunakan encode
/*
  > Misal ada query parameter dengan nama data, lalu kita ingin mengirimkan nilai kesana
  > Misal nilainya adalah &syahrin=syarhin& , alhasil URL nya akan seperti berikut
  > http://contoh.com?data=&syahrin=syahrin&
  > URL diatas terlihat tidak ada masalah, tapi sebenarnya ketika diterima oleh server, parameter data bernilai kosong, kenapa? karena & dianggap sebagai pemisah antar parameter
  > Artinya tanda seperti & dan lain-lain perlu di encode, agar tidak terjadi kesalahan data yang kita kirim
*/

// Encode function
/*
Function ==> Keterangan

  > encodeURI(value) ==> melakukan encode value, namun karakter yang dipesan di URl tidak akan diubah ;,/?:@&=+$#
  > encodeURIComponent(value) ==> melakukan encode value semua karakter
  > decodeURI(encode) ==> melakukan decode value encodeURl()
  > decodeURIComponent(encode) ==> melakukan decode value hasil encodeURlComponent()
*/

// Kode: encodeURl dan decodeURl
const url = 'http://www.contoh.com/?name=syahrin matlail fajri'
console.log(url) // http://www.contoh.com/?name=syahrin matlail fajri

const encoded = encodeURI(url)
console.log(encoded) // http://www.contoh.com/?name=syahrin%20matlail%20fajri

const decoded = decodeURI(encoded)
console.log(decoded) // http://www.contoh.com/?name=syahrin matlail fajri

// Kode: encodeURIComponent dan decondeURIComponent
{

  const value = "Syahrin&Matlail=Fajri"
  const url = 'http://www.contoh.com/?name='

  const encoded = encodeURIComponent(value)
  console.log(url + encoded) // http://www.contoh.com/?name=Syahrin%26Matlail%3DFajri

  const decoded = decodeURIComponent(value)
  console.log(url + decoded) // http://www.contoh.com/?name=Syahrin&Matlail=Fajri

}