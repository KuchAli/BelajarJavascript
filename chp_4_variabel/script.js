// ini adalah comment 

//1. variabel dengan let 
let nama = "Ucup Surucup";

// tampilkan data
console.log(nama);

// ubah nilai variabel nama
nama = "Otong Surotong";
console.log(nama);


//2. variabel dengan var 
var namaDepan = "Ucup";
console.log(namaDepan);
namaDepan = "Otong";
console.log(namaDepan);

//kelakuan dari let 
let namaBelakang = "Surucup";
{
    let namaBelakang = "Surotong";
    console.log(namaBelakang);
}
console.log(namaBelakang);

//kelakuan dari var 
var namaTengah = "kodir";
{
    var namaTengah = "ganteng";
    console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus tanpa keyword akan jadi var 
gorengan = "Bala-bala";
{
    gorengan = "Combro";
}
console.log(gorengan);

//3. Const

const TTL = "10 Maret 2008";
console.log(TTL);
// TTL = "11 Maret 2009"; gak boleh dilakukan karena sudah janji konstan