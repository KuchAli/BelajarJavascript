// numbers -64 bit 

//Menggunakan data ini gimana ?
let angka = 5.232;

let angka_int = parseInt(angka);
console.log(angka_int);

let angka2 = 10.23;
console.log(parseFloat(angka2));


//merubah string - regex
let data = "10.85";
console.log(parseInt(data));
console.log(parseFloat(data))

//contoh
let pembelian = "10000";
let pajak = 1200;
let bayar = parseInt(pembelian)+pajak;
console.log(bayar);