// tombol untuk daftar
const tombol = document.getElementById("kirim");
tombol.onclick = kirim;

function kirim(e){
    e.preventDefault();
    const nama= document.getElementById("namap");
    const email = document.getElementById("emailp");
    const pesan = document.getElementById("pk");
    const perhiasan = document.getElementById("perhiasan");

    sessionStorage.setItem("Nama", nama.value);
    sessionStorage.setItem("Email", email.value);
    sessionStorage.setItem("Pesan", pesan.value);
    sessionStorage.setItem("Perhiasan", perhiasan.value);
    
    alert("Berhasil Dikirim");
}
