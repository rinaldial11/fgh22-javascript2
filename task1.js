// 10 METHOD

// 1. toUpperCase (string) : Untuk mengubah karakter dalam string menjadi huruf kapital
// Contoh :
const greet = 'hello world!'
const greetUpCase = greet.toUpperCase()
// console.log(greetUpCase)

// 2. slice (string) : Mengambil potongan teks berdasarkan index awal dan index akhir string (tetapi index akhir tidak akan muncul di output) 
// contoh :
const greet2 = 'hello world!'
const greetSliced = greet2.slice(3, 10)
// console.log(greetSliced)

// 3. trim (string) : Untuk menghapus spasi di awal dan akhir string
// contoh :
const greet3 = '   hello world!   '
const greetTrim = greet3.trim()
// console.log(greetTrim)

// 4. Object.keys : Untuk mengambil array key dari properti di Object
// contoh :
const data = {nama : 'Rinaldi', umur : 21}
const dataKeys = Object.keys (data)
console.log(dataKeys)

// 5. Object.values : Untuk mengambil array value dari properti di Object
// contoh :
const dataValues = Object.values (data)
console.log(dataValues)

// 6. Object.entries : Untuk menggambil pasangan array dari key-value dari Object menjadi output beberapa array
// contoh :
const dataEntries = Object.entries (data)
// console.log(dataEntries)

// 7. array.slice : Mengembalikan salinan bagian dari array sebagai array baru, mulai dari indeks awal hingga indeks akhir (indeks akhir tidak termasuk)
// contoh :
let names = ['agung', 'inal', 'isna', 'rini', 'alek']
const male = names.slice (1,3)
// console.log (male)

// 8. array.push : Menambahkan satu atau lebih elemen ke akhir array
// contoh :
names.push ('salwa')
// console.log(names)

// 9. Array.map : Membuat array baru dengan hasil dari pemanggilan fungsi operasi aritmatika pada setiap elemen array
// contoh : 
let age = [20, 40, 50]
let kali = age.map (num => num *2)
// console.log (kali)

// 10. Array.concat : Menggabungkan dua atau lebih array dan mengembalikan array baru
// contoh :
let city = ['bandung', 'cianjur', 'depok']
let namesCity = names.concat (city)
// console.log(namesCity)
