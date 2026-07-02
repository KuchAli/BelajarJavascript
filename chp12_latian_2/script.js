// Latian 2
let angka_1,angka_2,hasil;

document.getElementById("button_jumlah").onclick =function(){
    angka_1 = document.getElementById("angka_1").value; // value aja berarti cuma menghasilkan string
    angka_2 = document.getElementById("angka_2").valueAsNumber;

    hasil = parseFloat(angka_1) + angka_2;
    
    // tampilkan ke span
    document.getElementById("hasil").textContent = hasil;
}