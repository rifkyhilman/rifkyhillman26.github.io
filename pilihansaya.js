var suit = ['/img/batu.png', '/img/gunting.png', '/img/kertas.png']
var musuh = document.getElementById('computer')
var saya = document.getElementById('you')
var refresh = ['/img/tanya.png']

function pilihansaya(string) {
    var random = Math.round(Math.random() * (suit.length - 1));
    var pilihanmusuh = suit[random];
    var hasil = '';
    musuh.setAttribute('src', pilihanmusuh);
    saya.setAttribute('src', string);

    if (pilihanmusuh === string) {
        hasil = 'Seri';
    }
    else if (pilihanmusuh === '/img/batu.png' && string === '/img/gunting.png') {
        hasil = 'kalah !!';
    }
    else if (pilihanmusuh === '/img/gunting.png' && string === '/img/kertas.png') {
        hasil = 'kalah !!';
    }
    else if (pilihanmusuh === '/img/kertas.png' && string === '/img/batu.png') {
        hasil = 'kalah !!';
    }
    else if (pilihanmusuh === '/img/gunting.png' && string === '/img/batu.png') {
        hasil = 'menang';
    }
    else if (pilihanmusuh === '/img/kertas.png' && string === '/img/gunting.png') {
        hasil = 'menang';
    }
    else if (pilihanmusuh === '/img/batu.png' && string === '/img/kertas.png') {
        hasil = 'menang';
    }

    setTimeout(function () { alert(hasil); }, 1000);
    setTimeout(function () { musuh.setAttribute('src', refresh); }, 1000);
    setTimeout(function () { saya.setAttribute('src', refresh); }, 1000);
}
