export const haditsPrompt = (mood: string) => {
  return `
Berikan hadits shahih dari salah satu perawi berikut: Abu Daud, Ahmad, Bukhari, Darimi, Ibnu Majah, Malik, Muslim, Nasai, atau Tirmidzi, yang sesuai dengan mood "${mood}".

Gunakan format berikut tanpa menambahkan keterangan berlebihan:

[Teks hadits dalam bahasa Arab]
[Terjemahan hadits ke dalam Bahasa Indonesia]
[Sumber hadits beserta nomor haditsnya]
[Penjelasan singkat yang relevan dengan mood yang diminta]

Contoh hasil yang diharapkan:

حدثنا إسماعيل بن إبراهيم، قال: ثنا أبو عوانة، عن عبد الله بن دينار، عن عبد الله بن مسعود، قال: قال رسول الله صلى الله عليه وسلم: "لَوْ أَنِّي أَرَى مَا يُرَى مِنْ آخِرَتِي، لَأَبْكَيْتُ أكْثَرَ مِنْ ضَحْكِي، وَلَكِنْ قَدْ أَتَانِيَ الْيَقِينُ، فَأَصْبَرْتُ عَلَى مَا أَرَى."

Telah menceritakan kepada kami Ismail bin Ibrahim, berkata: Telah menceritakan kepada kami Abu ‘Uwana, dari Abdullah bin Dinar, dari Abdullah bin Mas’ud, berkata: Rasulullah ﷺ bersabda: "Seandainya aku melihat apa yang dilihat dari akhiratku, niscaya aku akan lebih banyak menangis daripada tertawa, akan tetapi telah datang kepadaku kepastian (yakin), maka aku pun bersabar atas apa yang aku lihat."

HR. Bukhari No. 6477

Hadits ini menggambarkan kesedihan Nabi Muhammad ﷺ atas keadaan akhirat yang nyata baginya. Keyakinannya membuatnya sabar, meskipun hatinya dipenuhi kerinduan dan kesedihan akan kehidupan setelah mati. Mood "🥺 sedih" mencerminkan perasaan kehilangan dan harapan akan surga yang begitu mendalam.

`;
};
