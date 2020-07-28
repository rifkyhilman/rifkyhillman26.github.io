var suit = ['/img/batu.png', '/img/gunting.png', '/img/kertas.png'];
var kalah = ['/img/heart2.png'];
var nyawa1 = document.getElementById('hati1');
var nyawa2 = document.getElementById('hati2');
var nyawa3 = document.getElementById('hati3');
var nyawa4 = document.getElementById('hati4');
var nyawa5 = document.getElementById('hati5');
var nyawa6 = document.getElementById('hati6');
var musuh = document.getElementById('computer');
var saya = document.getElementById('you');
var refresh = ['/img/tanya.png'];
var rounde = document.getElementById('judul');



function berfungsi(pilihansaya) {
    var random = Math.round(Math.random() * (suit.length - 1));
    var pilihanmusuh = suit[random];
    var hasil = '';

    musuh.setAttribute('src', pilihanmusuh);
    saya.setAttribute('src', pilihansaya);

    if (pilihanmusuh === pilihansaya) {
        hasil = "Seri";
    }
    else if (pilihanmusuh === '/img/batu.png' && pilihansaya === '/img/gunting.png') {
        hasil = "kalah !!";
    }
    else if (pilihanmusuh === '/img/gunting.png' && pilihansaya === '/img/kertas.png') {
        hasil = "kalah !!";
    }
    else if (pilihanmusuh === '/img/kertas.png' && pilihansaya === '/img/batu.png') {
        hasil = "kalah !!";
    }
    else if (pilihanmusuh === '/img/gunting.png' && pilihansaya === '/img/batu.png') {
        hasil = "menang !!";
    }
    else if (pilihanmusuh === '/img/kertas.png' && pilihansaya === '/img/gunting.png') {
        hasil = "menang !!";
    }
    else if (pilihanmusuh === '/img/batu.png' && pilihansaya === '/img/kertas.png') {
        hasil = "menang !!";
    }

    setTimeout(function () { alert(hasil); }, 1000);
    setTimeout(function () { musuh.setAttribute('src', refresh); }, 1000);
    setTimeout(function () { saya.setAttribute('src', refresh); }, 1000);

    if (hasil == "menang !!") {
        nyawa6.setAttribute('src', kalah);
        rounde.innerHTML = "Round2";
    } else if (hasil == "kalah !!") {
        nyawa1.setAttribute('src', kalah);
        rounde.innerHTML = "Round2";
    }

}
