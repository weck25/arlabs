const angka = 120000;
const percent = 20 ;
function harga(angka, percent) {
    let hasil = (angka * percent)/100;
    let diskon = angka - hasil ;
    return diskon;
    }
    console.log("Harga setelah diskon adalah : Rp."+harga(angka,percent));