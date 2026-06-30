let dataString = "data string";
console.log(dataString);

// 1.Escaping String (\',\", \\, \n, \r, \t, \b, \f)
let data1 = 'ucup berkata \t"apa kaber dunia?"';
console.log(data1);
let data2 = "otong berkata\"tetep asyiikk\"";
console.log(data2);
let data3 = "ucup berjalan jalan di tepi pantai, \nkerenn";
console.log(data3);

// 2. literal string (template literal string)
let namaDepan = "otong";
let namaBelakang = "surotong";
let umur = 18;
let namaLengkap = umur+" "+namaDepan +" "+namaBelakang; // menjadi masalah
console.log(namaLengkap);

//lebih elegan supaya ini tidak error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);