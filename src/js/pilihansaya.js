var suit = ['/img/batu.png', '/img/gunting.png', '/img/kertas.png'];
var lose = ['/img/heart2.png'];
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
var ronde = 0;
var nyawah = [];


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
        ronde = ronde + 1;
        nyawah.push(3);
    }
    else if (pilihanmusuh === '/img/gunting.png' && pilihansaya === '/img/kertas.png') {
        hasil = "kalah !!";
        ronde = ronde + 1;
        nyawah.push(5);
    }
    else if (pilihanmusuh === '/img/kertas.png' && pilihansaya === '/img/batu.png') {
        hasil = "kalah !!";
        ronde = ronde + 1;
        nyawah.push(7);
    }
    else if (pilihanmusuh === '/img/gunting.png' && pilihansaya === '/img/batu.png') {
        hasil = "menang !!";
        ronde = ronde + 1;
        nyawah.push(2);
    }
    else if (pilihanmusuh === '/img/kertas.png' && pilihansaya === '/img/gunting.png') {
        hasil = "menang !!";
        ronde = ronde + 1;
        nyawah.push(4);
    }
    else if (pilihanmusuh === '/img/batu.png' && pilihansaya === '/img/kertas.png') {
        hasil = "menang !!";
        ronde = ronde + 1;
        nyawah.push(6);
    }

    setTimeout(
        function () {
            alert(hasil);
        }, 1000
    );

    switch (ronde) {
        case 1:
            if (nyawah[0] == 2 || nyawah[0] == 4) {
                nyawa6.setAttribute('src', lose);
                rounde.innerHTML = "Round2";
            } else if (nyawah[0] == 6) {
                nyawa6.setAttribute('src', lose);
                rounde.innerHTML = "Round2";
            } else {
                nyawa1.setAttribute('src', lose);
                rounde.innerHTML = "Round2";
            }
            break;
        case 2:
            if (nyawah[1] == 2 || nyawah[1] == 4) {
                nyawa5.setAttribute('src', lose);
                rounde.innerHTML = "Round3";
            } else if (nyawah[1] == 6) {
                nyawa5.setAttribute('src', lose);
                rounde.innerHTML = "Round3";
            } else {
                nyawa2.setAttribute('src', lose);
                rounde.innerHTML = "Round3";
            }
            break;
        case 3:
            if (nyawah[2] == 2 || nyawah[2] == 4) {
                nyawa4.setAttribute('src', lose);
                rounde.innerHTML = "Round4";
            } else if (nyawah[2] == 6) {
                nyawa4.setAttribute('src', lose);
                rounde.innerHTML = "Round4";
            } else {
                nyawa3.setAttribute('src', lose);
                rounde.innerHTML = "Round4";
            }
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        default:
            alert(hasil);

    }

    setTimeout(function () { musuh.setAttribute('src', refresh); }, 1000);
    setTimeout(function () { saya.setAttribute('src', refresh); }, 1000);


}