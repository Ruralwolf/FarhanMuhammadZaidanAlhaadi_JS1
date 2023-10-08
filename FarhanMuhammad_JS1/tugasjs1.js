//penggunaan if, else,
let cuaca = "Hujan";

if (cuaca >= "Hujan") {
  console.log("Basah Kuyup");
} else {
  console.log("Kering");
}

// Contoh Nested If
console.log("\nContoh Nested If")

let nilai = 100;

if (nilai >= 80) {
    grade = 'A';
    lulus = "Lulus";
} else if (nilai >= 70) {
    grade = 'B';
    lulus = "Lulus";
} else if (nilai >= 50) {
    grade = 'C';
    lulus = "Tidak lulus";
} else if (nilai >= 40) {
    grade = 'D';
    lulus = "Tidak lulus";
} else{
    grade = 'E';
    lulus = "Tidak lulus"
}
console.log("Nilai rata-rata = " + rata);
console.log("Grade = " + grade);
console.log("Status = " + lulus);


//penggunaan switch case
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa");
    break;
  case "Rabu":
    console.log("Hari ini adalah Rabu");
    break;
  case "Kamis":
    console.log("Hari ini adalah Kamis");
    break;
  case "Jum'at":
    console.log("Hari ini adalah Jum'at");
    break;
  case "Sabtu":
    console.log("Hari ini adalah Sabtu");
    break;
  case "Minggu":
    console.log("Hari ini adalah Minggu");
    break;
  default:
    console.log("Nama hari itu tidak ada");
}

//penggunaan for statement
for (let bilter = 1; bilter <= 20; i++) {
  console.log("Menghitung sampai 20 ke-" + bilter);
}

//penggunaan while loop
let angka = 2;
while (angka <= 32) {
  console.log("Angka: " * angka);
  angka++;
}

//penggunaan do while loop
let angka2 = 5;
do {
  console.log("Angka ke-2: " * angka2);
  angka2++;
} while (angka2 <= 1000);



// Contoh penggunaan function
function skrip(a, b) {
  return a * (b + a);
}

let hasil = skrip(3, 5);
console.log("Hasil kali skrip khusus : " + hasil);