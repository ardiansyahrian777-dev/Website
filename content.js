/*
  ISI WEBSITE PESANTREN
  ---------------------
  Semua tulisan, tautan, dan foto di website diatur dari berkas ini.
  - Ganti teks di antara tanda kutip "..." saja. Jangan hapus tanda kutip, koma, atau kurung.
  - Bagian yang dikosongkan ("") otomatis tidak ditampilkan.
  - Foto: taruh di folder assets/, lalu tulis jalurnya, contoh "assets/gedung.jpg".
  - Cara paling mudah: buka editor.html, ubah lewat formulir, lalu unduh content.js baru.

  PENTING: semua isi di bawah masih contoh. Ganti dengan data pesantren yang sebenarnya
  (nama pengasuh, alamat, nomor, jadwal, syarat) sebelum website dipublikasikan.
*/
window.SITE = {
  "tema": {
    "utama": "#0E3B34",
    "emas": "#D4A24A",
    "emasTeks": "#8A5E08"
  },

  "identitas": {
    "nama": "Pondok Pesantren Nuurush Sholaah",
    "namaSingkat": "Nuurush Sholaah",
    "tagline": "Belajar ilmu agama dan ilmu dunia dalam satu lingkungan yang tertata dan penuh adab.",
    "logo": "",
    "tampilkanBismillah": true
  },

  "hero": {
    "judul": "Mendidik santri berilmu, berakhlak, dan mandiri",
    "deskripsi": "Pesantren yang memadukan kajian kitab, hafalan Al-Qur'an, dan pendidikan formal, dengan bimbingan para ustaz dan ustazah sepanjang hari.",
    "tombolUtama": { "teks": "Daftar santri baru", "link": "#pendaftaran" },
    "tombolKedua": { "teks": "Kenali pesantren kami", "link": "#tentang" },
    "foto": ""
  },

  "tentang": {
    "menu": "Tentang",
    "judul": "Tentang pesantren",
    "paragraf": [
      "Tulis profil singkat pesantren di sini: siapa yang mendirikan, di mana lokasinya, dan apa yang membuat pesantren ini khas.",
      "Paragraf kedua bisa berisi sistem pendidikan, jumlah santri, atau cerita singkat perjalanan pesantren."
    ],
    "visi": "Tulis visi pesantren dalam satu atau dua kalimat.",
    "misi": [
      "Tulis misi pertama.",
      "Tulis misi kedua.",
      "Tulis misi ketiga."
    ],
    "sejarah": "Tulis sejarah berdirinya pesantren: tahun berdiri, pendiri, dan tonggak penting."
  },

  "program": {
    "menu": "Pendidikan",
    "judul": "Program pendidikan",
    "intro": "Jenjang dan program yang tersedia di pesantren.",
    "daftar": [
      { "nama": "Madrasah Tsanawiyah", "jenjang": "Setingkat SMP", "deskripsi": "Isi dengan penjelasan singkat program ini." },
      { "nama": "Madrasah Aliyah", "jenjang": "Setingkat SMA", "deskripsi": "Isi dengan penjelasan singkat program ini." },
      { "nama": "Tahfidz Al-Qur'an", "jenjang": "Program khusus", "deskripsi": "Isi dengan target hafalan dan metode yang dipakai." },
      { "nama": "Kajian kitab kuning", "jenjang": "Seluruh santri", "deskripsi": "Isi dengan kitab yang dikaji dan sistem pengajarannya." }
    ]
  },

  "kegiatan": {
    "menu": "Kegiatan",
    "judul": "Sehari di pesantren",
    "intro": "Contoh jadwal harian santri. Sesuaikan dengan jadwal sebenarnya.",
    "jadwal": [
      { "waktu": "04.00", "kegiatan": "Bangun, salat tahajud, dan persiapan Subuh" },
      { "waktu": "05.00", "kegiatan": "Salat Subuh berjamaah dan setoran hafalan" },
      { "waktu": "06.30", "kegiatan": "Sarapan dan bersih-bersih" },
      { "waktu": "07.30", "kegiatan": "Pembelajaran formal" },
      { "waktu": "12.00", "kegiatan": "Salat Zuhur berjamaah dan makan siang" },
      { "waktu": "15.30", "kegiatan": "Salat Asar dan kajian kitab" },
      { "waktu": "18.00", "kegiatan": "Salat Magrib berjamaah dan mengaji Al-Qur'an" },
      { "waktu": "19.30", "kegiatan": "Salat Isya, belajar malam, dan muraja'ah" },
      { "waktu": "21.30", "kegiatan": "Istirahat" }
    ]
  },

  "fasilitas": {
    "menu": "Fasilitas",
    "judul": "Fasilitas",
    "daftar": [
      { "nama": "Masjid", "deskripsi": "Isi dengan keterangan singkat." },
      { "nama": "Asrama santri", "deskripsi": "Isi dengan keterangan singkat." },
      { "nama": "Ruang kelas", "deskripsi": "Isi dengan keterangan singkat." },
      { "nama": "Perpustakaan", "deskripsi": "Isi dengan keterangan singkat." },
      { "nama": "Dapur dan ruang makan", "deskripsi": "Isi dengan keterangan singkat." },
      { "nama": "Lapangan olahraga", "deskripsi": "Isi dengan keterangan singkat." }
    ]
  },

  "pengasuh": {
    "menu": "Pengasuh",
    "judul": "Pengasuh dan pengajar",
    "daftar": [
      { "nama": "Nama pengasuh", "jabatan": "Pengasuh pesantren", "keterangan": "Keterangan singkat tentang beliau.", "foto": "" },
      { "nama": "Nama kepala pesantren", "jabatan": "Kepala pesantren", "keterangan": "Keterangan singkat tentang beliau.", "foto": "" }
    ]
  },

  "berita": {
    "menu": "Kabar",
    "judul": "Kabar dan pengumuman",
    "daftar": [
      { "tanggal": "17 November 2026", "judul": "Judul pengumuman", "ringkasan": "Ringkasan satu atau dua kalimat tentang pengumuman ini.", "link": "" },
      { "tanggal": "1 November 2026", "judul": "Judul kabar kegiatan", "ringkasan": "Ringkasan satu atau dua kalimat tentang kegiatan ini.", "link": "" }
    ]
  },

  "galeri": {
    "menu": "Galeri",
    "judul": "Galeri",
    "foto": [
      { "src": "assets/galeri-1.jpg", "keterangan": "Keterangan foto 1" },
      { "src": "assets/galeri-2.jpg", "keterangan": "Keterangan foto 2" },
      { "src": "assets/galeri-3.jpg", "keterangan": "Keterangan foto 3" },
      { "src": "assets/galeri-4.jpg", "keterangan": "Keterangan foto 4" }
    ]
  },

  "pendaftaran": {
    "menu": "Pendaftaran",
    "judul": "Pendaftaran santri baru",
    "intro": "Tulis informasi gelombang pendaftaran yang sedang dibuka.",
    "alur": [
      { "judul": "Isi formulir", "keterangan": "Isi formulir pendaftaran online atau datang langsung ke pesantren." },
      { "judul": "Serahkan berkas", "keterangan": "Kumpulkan berkas yang diminta." },
      { "judul": "Ikuti seleksi", "keterangan": "Tulis jenis seleksi yang berlaku." },
      { "judul": "Pengumuman", "keterangan": "Hasil diumumkan lewat WhatsApp atau website ini." }
    ],
    "syarat": [
      "Tulis syarat pertama.",
      "Tulis syarat kedua.",
      "Tulis syarat ketiga."
    ],
    "tombol": { "teks": "Buka formulir pendaftaran", "link": "" }
  },

  "kontak": {
    "menu": "Kontak",
    "judul": "Hubungi kami",
    "alamat": "Tulis alamat lengkap pesantren.",
    "whatsapp": "",
    "telepon": "",
    "email": "",
    "jamLayanan": "",
    "peta": "",
    "sosial": [
      { "nama": "Instagram", "link": "" },
      { "nama": "YouTube", "link": "" },
      { "nama": "Facebook", "link": "" }
    ]
  },

  "footer": {
    "teks": "Seluruh hak dilindungi."
  }
};
