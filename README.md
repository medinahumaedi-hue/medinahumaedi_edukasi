## Background empat halaman
Katalog, Kelas, Tentang, dan Kontak menggunakan `assets/images/background/background-halaman.webp`.
Untuk menggantinya, gunakan gambar WebP dengan nama yang sama. Background beranda tetap menggunakan `background-utama.webp`.
Unggah semua isi folder website, termasuk folder assets. Setelah mengganti file di hosting, muat ulang dengan Ctrl+F5.

# Struktur website lima halaman

- index.html: beranda ringkas, 3 karya pilihan, dan ajakan ke kelas.
- katalog.html: 8 karya, pencarian, filter, dan detail.
- kelas.html: kelas game edukasi dan MPI serta tautan WhatsApp.
- tentang.html: foto dan profil Pak Hum.
- kontak.html: WhatsApp dan email.
- daftar-karya.html: daftar alternatif tanpa JavaScript.

Unggah SEMUA berkas HTML serta folder assets ke akar repositori/hosting. index.html tetap halaman pembuka. Menu berpindah halaman; penanda menu aktif ada pada setiap halaman. Beranda tidak lagi memuat seluruh bagian.

Untuk menambah karya, edit assets/js/projects.js dan tambahkan sampul seperti sebelumnya. Karya muncul otomatis pada katalog.html. Tiga karya pilihan di beranda diatur terpisah di index.html. assets/js/common.js mengelola menu setiap halaman; assets/js/script.js hanya dimuat pada katalog.

---

# Medina Humaedi Edukasi — draft dilengkapi

Logo asli dan warna khas dipertahankan. Beranda dan penyajian karya dirapikan sesuai arah desain ceria, rapi, dan profesional. Versi ini memuat 8 karya dengan tautan aktif, profil Ahmad Humaedi, dan halaman alternatif tanpa JavaScript. Kontak resmi yang diberikan pemilik sudah terpasang. Delapan sampul dari unggahan Bapak terpasang pada kartu dan detail karya. Foto profil sudah terpasang. Beranda menampilkan KATAKITA, Jungle Math Adventure, dan MPI BUMI.

## Membuka
Ekstrak ZIP, lalu buka index.html. Karya dibuka pada situs Netlify masing-masing; sumber game tidak disertakan. Font Google memerlukan internet, dengan font cadangan pada CSS.

## Hosting melalui GitHub Pages
1. Masuk ke GitHub dan buat repositori Public (untuk GitHub Free), atau gunakan repositori website yang sudah ada.
2. Unggah ISI folder hasil ekstrak, termasuk index.html, assets/, dan berkas lainnya. Jangan mengunggah ZIP saja. Pastikan index.html langsung di akar repositori.
3. Simpan melalui Commit changes.
4. Settings → Pages → Source: Deploy from a branch → main → /(root) → Save.
5. Tunggu proses publikasi; buka alamat yang ditampilkan di Pages. Jika ada kendala, cek tab Actions.

Paket ini belum diterbitkan ke akun GitHub Bapak. Tidak perlu membuat repositori baru untuk pembaruan.
Rujukan: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Menambah atau memperbarui karya
Edit assets/js/projects.js. Salin satu objek karya, beri id unik, lalu isi judul, category (game atau mpi), subject, level, description, features, playUrl, dan image. Pisahkan setiap objek dengan koma; pertahankan penutup ];. Setelah disimpan, kartu dan jumlah karya mengikuti data otomatis.

Contoh isian tautan: playUrl: 'https://alamat-karya-bapak.netlify.app/' (ganti dengan tautan asli).
Boleh juga memakai path lokal: playUrl: 'projects/katakita/index.html' apabila seluruh sumber karya sudah ditempatkan di folder itu.
Untuk sampul: buat assets/images/, unggah gambar, lalu isi image: 'assets/images/katakita.jpg'. Saat image kosong, kartu menggunakan ikon yang sudah tersedia.
Setelah menambah karya, perbarui daftar-karya.html agar versi tanpa JavaScript tetap sama. Commit changes untuk menerbitkan pembaruan.

## Profil dan kontak
Profil berada pada index.html bagian id="tentang". WhatsApp: 0815 8676 9987; email: ahmadhumaedi10@guru.sd.belajar.id. Tautan WhatsApp menggunakan format internasional 6281586769987; tautan email memakai mailto:. Foto ada di assets/images/profil/ahmad-humaedi.jpg.

## Catatan isi
Math Kingdom Adventure pada draft lama merupakan entri contoh tanpa tautan. Katalog kini menggunakan Jungle Math Adventure sesuai karya perkalian–pembagian yang Bapak kirim; tidak diasumsikan sebagai game yang sama.
Nama MPI BUMI dipertahankan dari draft dan dihubungkan ke tautan MPI iklim yang Bapak berikan. Level penguatan/literasi dasar pada game adalah label awal, dapat Bapak sesuaikan. Belum ditambahkan kategori video karena belum ada tautan video terpisah.
Deskripsi dan fitur didasarkan pada peninjauan awal, belum merupakan audit keseluruhan soal dan materi.

## Verifikasi
Sintaks JavaScript, tautan katalog, berkas aset, logika pencarian/filter, detail karya, dan arsip diperiksa. Tampilan visual serta audio/game belum diuji ulang melalui browser atau perangkat sekolah. Coba kembali di HP, laptop, tablet, dan IFP sebelum membagikan secara luas.

## Aset versi ini
Sampul di assets/images/karya/; semua sudah dihubungkan pada properti image di projects.js. Nama berkas karya dipertahankan. Foto profil diubah namanya menjadi ahmad-humaedi.jpg agar jalurnya mudah dipakai. Tidak ada perubahan pada isi gambar asli.
Sampul menggunakan object-fit: contain supaya tidak terpotong lagi; beberapa gambar sumber sudah memiliki judul terpotong atau tombol/label Netlify. Ganti file sumber jika menginginkan sampul bersih.
Beranda menautkan tiga karya secara langsung. Jika mengganti karya unggulan, perbarui gambar, judul, dan tautannya di index.html.

## Perbaikan beranda terbaru
Logo diperbesar dan dilengkapi nama Medina Humaedi Edukasi. Panel karya diluruskan dan dibatasi hingga 440 piksel. Judul dibagi menjadi tiga baris dengan Karya Digital tetap menyatu dan satu aksen kuning. Tombol Kontak menggunakan garis tepi netral. Aturan ukuran tablet/HP disertakan. Perubahan ada pada index.html dan bagian akhir assets/css/style.css.

## Latar halaman
Latar menggunakan pola titik berjarak lebar dan gradasi biru, ungu, serta kuning lembut. Efek CSS tetap ringan; tidak menambah gambar atau pustaka eksternal. Kartu informasi diberi bidang putih dan bayangan tipis agar tetap mudah dibaca.

## Penyempurnaan katalog
Semua sampul memiliki bingkai 16:9 dan ditampilkan utuh dengan object-fit: contain. Rasio gambar sumber yang lebih lebar dapat menyisakan ruang atas/bawah. Informasi kartu berurutan: jenis media dan jenjang, judul, mata pelajaran, deskripsi, perangkat, lalu tombol. Kartu menggunakan flex agar tombol sejajar per baris. Dua kolom pada laptop/tablet lebar dan satu kolom pada lebar 740 piksel ke bawah. Sampul asli tidak diedit.

## Kelas Belajar Bersama
Menu #kelas menuju bagian kelas pembuatan game edukasi dan MPI. Tombol pertanyaan membuka WhatsApp dengan draf pesan; pengunjung sendiri yang mengirimnya. Jadwal, biaya, dan pendaftaran otomatis belum ditetapkan. Kalimat tentang studi S2 dihapus dari profil sesuai permintaan pemilik.

## Ikon khusus
Ikon pada halaman menggunakan SVG dengan garis membulat dan aksen biru, toska, kuning. Salinan ikon tersedia di assets/icons/. Ikon halaman disematkan langsung agar dapat dibuka secara lokal; pengubahan salinan SVG saja tidak mengubah ikon yang sudah disematkan. Tidak memerlukan pustaka ikon atau koneksi tambahan.

## Background beranda terpasang
Gambar assets/images/background/background-utama.webp digunakan sebagai latar bagian beranda. CSS menggunakan jalur relatif dari assets/css/style.css. Area teks memiliki lapisan terang agar mudah dibaca. Latar menyesuaikan ukuran layar menggunakan cover, sehingga sebagian tepi gambar dapat terpotong.
