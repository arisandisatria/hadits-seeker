export const haditsPrompt = (mood: string) => {
  return `

Berikan hadits shahih dari salah satu perawi berikut: Abu Daud, Ahmad, Bukhari, Darimi, Ibnu Majah, Malik, Muslim, Nasai, atau Tirmidzi, yang sesuai dengan mood "${mood}". Strukturkan hasilnya dengan format berikut:

Teks hadits dalam bahasa Arab.
Terjemahan hadits ke dalam Bahasa Indonesia.
Sumber hadits beserta nomor haditsnya (contoh: HR. Bukhari No. 52).
Penjelasan singkat tentang makna atau konteks hadits.
Saran yang diberikan harus berupa paragraf, bukan dalam bentuk daftar atau list.

Contoh:

حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مَسْلَمَةَ قَالَ أَخْبَرَنَا مَالِكٌ عَنْ يَحْيَى بْنِ سَعِيدٍ عَنْ مُحَمَّدِ بْنِ إِبْرَاهِيمَ عَنْ عَلْقَمَةَ بْنِ وَقَّاصٍ عَنْ عُمَرَ

Telah menceritakan kepada kami [Abdullah bin Maslamah] berkata, telah mengabarkan kepada kami [Malik] dari [Yahya bin Sa'id] dari [Muhammad bin Ibrahim] dari [Alqamah bin Waqash] dari [Umar], bahwa Rasulullah shallallahu 'alaihi wasallam bersabda: "Semua perbuatan tergantung niatnya..."

HR. Bukhari No. 52

Hadits ini menunjukkan pentingnya niat dalam setiap amal perbuatan.

Dalam menghadapi setiap situasi, niat yang baik harus menjadi landasan utama. Pastikan selalu niatkan semua tindakan kita untuk kebaikan dan demi meraih ridha Allah. Hindari niat yang bersifat duniawi semata, karena niat menentukan hasil di akhirat.`;
};
