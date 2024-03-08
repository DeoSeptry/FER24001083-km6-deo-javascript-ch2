// Data penjualan novel
const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduct: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduct: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduct: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002921",
    namaProduct: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

// Fungsi untuk mendapatkan informasi penjualan
function getInfoPenjualan(dataPenjualan) {
  // Menghitung total modal
  const totalModal = dataPenjualan
    .map((a) => (a.sisaStok + a.totalTerjual) * a.hargaBeli)
    .reduce((acc, curr) => acc + curr);

  // Menghitung total keuntungan
  const totalKeuntungan = dataPenjualan
    .map((a) => (a.hargaJual - a.hargaBeli) * a.totalTerjual)
    .reduce((acc, curr) => acc + curr);

  // Menghitung persentase keuntungan
  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(
    2
  );

  // Mendapatkan buku terlaris
  const novel = dataPenjualan.map((a) => a.totalTerjual);
  const pengambilanTerbesar = Math.max(...novel);
  const novelTerlaris = dataPenjualan
    .filter((a) => a.totalTerjual == pengambilanTerbesar)
    .map((a) => a.namaProduct)
    .toString();

  // Mendapatkan penulis terlaris
  const totalPenjualanPenulis = [];
  dataPenjualan.forEach((item) => {
    const { penulis, totalTerjual } = item;
    const existingItem = totalPenjualanPenulis.find(
      (a) => a.penulis === penulis
    );
    if (existingItem) {
      existingItem.totalTerjual += totalTerjual;
    } else {
      totalPenjualanPenulis.push({ penulis, totalTerjual });
    }
  });
  const penulisTerlaris = totalPenjualanPenulis.reduce((acc, curr) =>
    acc.totalTerjual > curr.totalTerjual ? acc : curr
  );

  // Mendapatkan stok terkecil
  const stokTerkecil = dataPenjualanNovel.reduce(
    (minStok, book) => (book.sisaStok < minStok ? book.sisaStok : minStok),
    Infinity
  );

  // Output informasi penjualan
  const hasil = {
    totalKeuntungan: `Rp.${totalKeuntungan}`,
    totalModal: `Rp.${totalModal}`,
    persentaseKeuntungan: `${persentaseKeuntungan} %`,
    bukuTerlaris: novelTerlaris,
    penulisTerlaris: penulisTerlaris.penulis,
    stokTerkecil: stokTerkecil,
  };

  return hasil;
}

console.log(getInfoPenjualan(dataPenjualanNovel));
