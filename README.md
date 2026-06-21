# Hadits Seeker 🌙


Aplikasi pencari dan penjelajah hadits berbasis AI yang dirancang untuk membantu umat Muslim menemukan tuntunan spiritual dengan cara yang lebih personal. Ditenagai oleh **Google Gemini AI**, aplikasi ini memungkinkan pengguna mencari hadits yang relevan berdasarkan *mood* (suasana hati) atau kondisi emosional yang sedang mereka rasakan.

---

## ✨ Fitur Utama

* **Pencarian Berbasis Mood:** Pengguna cukup memilih atau memasukkan kondisi emosional mereka (misalnya: *sedih, senang, takut, bingung, cinta, marah, cemas, tenang, gelisah*), dan AI akan mencarikan hadits yang paling relevan untuk menenangkan atau memotivasi.
* **Informasi Rawi Terpercaya:** Menampilkan sanad/periwayat hadits (seperti HR. Bukhari, Muslim, Tirmidzi, dll.) untuk memastikan validitas konten.
* **Terjemahan Akurat:** Menyediakan teks asli bahasa Arab beserta artinya dalam bahasa Indonesia yang mudah dipahami.
* **Penjelasan Maksud & Konteks Hadits:** AI memberikan penjelasan mendalam (*syarah* singkat) mengenai maksud, kandungan, dan kontekstualisasi hadits tersebut dalam kehidupan sehari-hari.

---

## 🛠️ Teknologi yang Digunakan

* **AI Engine:** Google Gemini
* **Frontend/Backend:** Next JS

---

## ⚙️ Memulai

Sebelum menjalankan proyek ini di lingkungan lokal, pastikan Anda telah menyiapkan:

1.  Runtime sesuai teknologi yang digunakan (Node.js / Flutter SDK / Python, dll.)
2.  **Gemini API Key**. Anda bisa mendapatkannya secara gratis melalui [Google AI Studio](https://aistudio.google.com/).

### Instalasi

1.  **Clone Repositori**
    ```bash
        git clone [https://github.com/username/hadits-seeker.git](https://github.com/username/hadits-seeker.git)
        cd hadits-seeker
    ```

2.  **Instal Dependensi**
    *Sesuaikan dengan stack aplikasi Anda, contoh jika menggunakan Node.js:*
    ```bash
        npm install
    ```

3.  **Konfigurasi Environment**
    Buat atau edit file `.env` di direktori utama dan masukkan API Key Gemini Anda:
    ```env
      NEXT_PUBLIC_API_KEY=api_key_disini
      POSTGRE_ENDPOINT=url_disini
      HTTP_ENDPOINT=url_disini
      XATA_API_KEY=api_key_disini
    ```

4.  **Jalankan Aplikasi**
    ```bash
      npm run dev
    ```

---

## 💡 Cara Penggunaan

1.  Buka aplikasi **Hadits Seeker**.
2.  Pilih salah satu *mood* yang tersedia pada layar utama (contoh: **"😟 cemas"**).
3.  Aplikasi akan memproses input dan menampilkan hadits pilihan yang sesuai dengan kondisi hati Anda.
4.  Pelajari teks Arab, arti, perawi, serta **Maksud Hadits** yang dijabarkan oleh AI untuk mendapatkan pemahaman yang utuh.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License**.

---

## 🤝 Kontribusi

Jika Anda ingin berkontribusi untuk mengembangkan fitur pencarian yang lebih baik atau melaporkan masalah (*bug*), silakan buka *Issue* atau kirimkan *Pull Request*.

Semoga aplikasi ini dapat menjadi wasilah kebaikan dan penyejuk hati bagi sesama. 🤍