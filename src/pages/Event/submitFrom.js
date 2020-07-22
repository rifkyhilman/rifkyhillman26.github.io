function submitForm() {

    var name = document.getElementById('nama').value;
    var bulan = document.getElementById('bulan').value;
    var tahun = document.getElementById('tahun').value;
    var today = new Date()


    if (today.getMonth() < bulan || today.getMonth() == bulan) {
        umur = umur - 1;
    } else {
        umur = umur + 0;
    }

    var umur = today.getFullYear() - tahun;

    if (umur < 18) {
        alert("Umur kamu belum cukup !!!");
    } else {
        alert("Halo " + name + ",sekarang kamu " + umur + " Tahun");
    }
}