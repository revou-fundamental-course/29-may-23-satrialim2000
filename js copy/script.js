document.getElementById("form-input").addEventListener("submit", function (e) {
  e.preventDefault();

  let nama = document.getElementById("input-nama").value;
  let tanggalLahir = document.getElementById("tanggal-lahir").value;
  let jenisKelaminLaki = document.getElementById("radio-laki");
  let jenisKelaminPerempuan = document.getElementById("radio-perempuan");
  let pesan = document.getElementById("pesan").value;
  let jenisKelamin = document.getElementsByName("gender")[1].value;
 

  if (nama == "") {
    alert("harus isi nama");
  } else if (tanggalLahir == "") {
    alert("harus isi tanggal lahir");
  } else if (pesan == "") {
    alert("harus isi pesan");
  } else if (!jenisKelaminLaki.checked && !jenisKelaminPerempuan.checked) {
    alert("harus isi jenis kelamin");
  } else {
    document.getElementById("current-time").innerHTML = new Date();
    document.getElementById("sender-full-name").innerHTML = nama;
    document.getElementById("sender-birth-date").innerHTML = tanggalLahir;
    document.getElementById("sender-messages").innerHTML = pesan;
    if (jenisKelaminPerempuan.checked) {
        document.getElementById("sender-gender").innerHTML =
          jenisKelaminPerempuan.value;
      } else if (jenisKelaminLaki.checked) {
        document.getElementById("sender-gender").innerHTML = jenisKelaminLaki.value;
      }
  }

 

  console.log(nama);
  console.log(tanggalLahir);
  console.log(jenisKelaminLaki);
  console.log(jenisKelaminPerempuan);
  console.log(pesan);
});
