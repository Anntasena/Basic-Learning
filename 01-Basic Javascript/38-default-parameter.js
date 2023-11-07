// Default Parameter
/*
  > Kita tau bahwa paramter itu optional, artinya kita bisa tidak memberi value kepada parameter
  > Parameter juga bisa kita beri default value, artinya jika kita tidak mengirim data ke paramter atau kita mengirim data undefined, maka secara otomatis parameter akan diisi oleh default value
*/

// Kode: Default Paramter
function register(name, gender = "UNKNOWN") {
  console.log(name)
  console.log(gender)
}

register("Syahrin","Male") // hasil = Syahrin Male
register("Mamat") // hasil = Mamat UNKONWN
register("Anntasena", undefined) // hasil = Anntasena UNKNOWN
register("BRO", null) // hasil = BRO null
