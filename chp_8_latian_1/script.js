let namaDepan, namaBelakang, namaLengkap;

document.getElementById("buttonMerge").onclick = function(){
    namaDepan = document.getElementById("namaDepan").value;
    namaBelakang = document.getElementById("namaBelakang").value;
    namaLengkap = namaDepan +" "+ namaBelakang;

    document.getElementById("namaLengkap").textContent = namaLengkap;
};


