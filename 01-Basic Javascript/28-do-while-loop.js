// Do While Loop
/*
  > Do while loop adalah pengulangan yang mirip dengan while
  > Perbedaanya hanya pada pengecekan kondisi
  > Pengecekan kondisi di while loop dilakukan di awal sebelum pengulangan dilakukan, sedangkan di do while loop dilakukan setelah pengulangan dilakukan
  > Oleh karna itu dalam do while loop, minimal pasti sekali pengulangan dilakukan walaupun kondisi tidak bernilai true
*/

let i = 1
do {
  console.log(`Perulangan ke: ${i}`)
  i++
}
while(i > 10)