function simpan() {
    var nim = document.getElementById('nim').value;
    var nama = document.getElementById('nama').value;
    var presensiTeori = document.getElementById('presensi-teori').value;
    var tugasTeori = document.getElementById('tugas-teori').value;
    var utsTeori = document.getElementById('uts-teori').value;
    var uasTeori = document.getElementById('uas-teori').value;
    var presensiPraktik = document.getElementById('presensi-praktik').value;
    var tugasPraktik = document.getElementById('tugas-praktik').value;
    var utsPraktik = document.getElementById('uts-praktik').value;
    var uasPraktik = document.getElementById('uas-praktik').value;
    var finalScoreTeori = (parseInt(presensiTeori) * 0.1) + (parseInt(tugasTeori) * 0.2) + (parseInt(utsTeori) * 0.3) + (parseInt(uasTeori) * 0.4);
    var finalScorePraktik = (parseInt(presensiPraktik) * 0.1) + (parseInt(tugasPraktik) * 0.2) + (parseInt(utsPraktik) * 0.3) + (parseInt(uasPraktik) * 0.4);



    var table = document.getElementById('rincian-nilai');
    var row = table.insertRow(-1);
    var gradeTeori = calculateGrade(finalScoreTeori);
    var gradePraktik = calculateGrade(finalScorePraktik);
    row.insertCell(0).innerHTML = table.rows.length - 1;
    row.insertCell(1).innerHTML = nim;
    row.insertCell(2).innerHTML = nama;
    row.insertCell(3).innerHTML = presensiTeori;
    row.insertCell(4).innerHTML = tugasTeori;
    row.insertCell(5).innerHTML = utsTeori;
    row.insertCell(6).innerHTML = finalScoreTeori.toFixed(2);
    row.insertCell(7).innerHTML = gradeTeori;
    row.insertCell(8).innerHTML = finalScorePraktik.toFixed(2);
    row.insertCell(9).innerHTML = gradePraktik;


function calculateGrade(score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    } else {
        return 'E';
    }
}
}let no = 1;

function simpanNilai() {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;

    const presensiTeori = parseFloat(document.getElementById('presensiTeori').value);
    const tugasTeori = parseFloat(document.getElementById('tugasTeori').value);
    const utsTeori = parseFloat(document.getElementById('utsTeori').value);
    const uasTeori = parseFloat(document.getElementById('uasTeori').value);

    const presensiPraktik = parseFloat(document.getElementById('presensiPraktik').value);
    const tugasPraktik = parseFloat(document.getElementById('tugasPraktik').value);
    const utsPraktik = parseFloat(document.getElementById('utsPraktik').value);
    const uasPraktik = parseFloat(document.getElementById('uasPraktik').value);

    const nilaiAkhirTeori = (presensiTeori * 0.1) + (tugasTeori * 0.3) + (utsTeori * 0.3) + (uasTeori * 0.3);
    const nilaiAkhirPraktik = (presensiPraktik * 0.1) + (tugasPraktik * 0.3) + (utsPraktik * 0.3) + (uasPraktik * 0.3);
    

    const nilaiAkhir = (nilaiAkhirTeori + nilaiAkhirPraktik) / 2;
    let grade = '';

    if (nilaiAkhir >= 85) {
        grade = 'A';
    } else if (nilaiAkhir >= 70) {
        grade = 'B';
    } else if (nilaiAkhir >= 55) {
        grade = 'C';
    } else if (nilaiAkhir >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    const table = document.getElementById('tabelNilai');
    const row = table.insertRow();

    row.insertCell(0).innerHTML = no++;
    row.insertCell(1).innerHTML = nim;
    row.insertCell(2).innerHTML = nama;
    row.insertCell(3).innerHTML = ((presensiTeori + presensiPraktik) / 28*100 ) + '%'
    row.insertCell(4).innerHTML = ((tugasTeori + tugasPraktik) / 2).toFixed(2);
    row.insertCell(5).innerHTML = ((utsTeori + utsPraktik) / 2).toFixed(2);
    row.insertCell(6).innerHTML = ((uasTeori + uasPraktik ) / 2).toFixed(2);
    row.insertCell(7).innerHTML = nilaiAkhir.toFixed(2);
    row.insertCell(8).innerHTML = grade;
}

function resetTabel() {
    document.getElementById('tabelNilai').innerHTML = '';
    no = 1;
}