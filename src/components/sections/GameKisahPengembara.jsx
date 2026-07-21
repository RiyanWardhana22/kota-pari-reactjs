import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, RotateCcw, BookOpen } from "lucide-react";
const storyNodes = {
  start: {
    title: "Kedatangan di Pulau Berhala",
    text: "Tahun berlalu, Anda adalah seorang pelaut asal Parepare yang terombang-ambing di laut. Kapal Anda akhirnya berlabuh di sebuah pulau kecil. Di kejauhan, Anda melihat cahaya berkilauan dari daratan pesisir Sumatera, dan di sisi lain terdengar sayup-sayup nyanyian nelayan.",
    image: "/assets/images/galeri-1.png",
    choices: [
      { text: "Berlayar menuju cahaya berkilauan.", nextNode: "putri_cermin" },
      {
        text: "Mendekati suara nyanyian nelayan.",
        nextNode: "dermaga_nelayan",
      },
    ],
  },
  putri_cermin: {
    title: "Istana Pasir Kuarsa",
    text: "Cahaya itu ternyata berasal dari sebuah istana megah yang terbuat dari pasir kuarsa. Ini adalah kerajaan Sri Putri Cermin. Namun, kecantikan istana ini mengundang perampok dari laut lepas yang bersiap menyerang!",
    image: "/assets/images/galeri-4.jpeg",
    choices: [
      {
        text: "Bantu prajurit kerajaan bertahan dari perampok.",
        nextNode: "hero_end",
      },
      {
        text: "Sembunyi dan lari ke permukiman terdekat.",
        nextNode: "permukiman_awal",
      },
    ],
  },
  dermaga_nelayan: {
    title: "Urat Nadi Pesisir",
    text: "Anda tiba di sebuah dermaga kayu yang ramai. Para nelayan sedang sibuk menyusun sesajen di atas perahu kecil. Seorang pria tua dengan pakaian khas mendekati Anda.",
    image: "/assets/images/dermaga.jpg",
    choices: [
      { text: "Bertanya tentang sesajen tersebut.", nextNode: "jamu_laut" },
      {
        text: "Bertanya di mana Anda bisa menemui tetua desa.",
        nextNode: "datuk_pengembara",
      },
    ],
  },
  permukiman_awal: {
    title: "Menetap di Daratan Baru",
    text: "Anda melarikan diri dan menemukan permukiman pesisir yang damai. Warga di sini sangat ramah. Mereka takjub mendengar logat Parepare Anda. Di perairan ini, Anda menyadari sangat banyak ikan pari yang berenang hingga ke bibir pantai.",
    image: "/assets/images/ceritalegenda/kota_pari.png",
    choices: [{ text: "Akhiri Kisah", nextNode: "asal_usul_end" }],
  },
  jamu_laut: {
    title: "Ritual Tolak Bala",
    text: "Pria itu adalah seorang Pawang Laut. Ia mengajak Anda mengikuti ritual zikir dan doa bersama untuk memohon keselamatan dari Allah SWT. Usai ritual, ia melarang semua orang melaut selama 3 hari.",
    image: "/assets/images/ceritalegenda/jamu_laut.png",
    choices: [
      {
        text: "Taati aturan dan bantu warga di darat.",
        nextNode: "jamu_laut_end",
      },
    ],
  },
  datuk_pengembara: {
    title: "Sang Tokoh Misterius",
    text: "Anda diarahkan ke Dusun Dua dan bertemu dengan seorang pengembara Islam bergelar Datuk. Beliau mengajarkan tentang pentingnya menjaga hubungan baik dan harmoni dengan siapa saja, termasuk para pendatang dari Tiongkok.",
    image: "/assets/images/ceritalegenda/datuk_pengembara.png",
    choices: [{ text: "Akhiri Kisah", nextNode: "datuk_end" }],
  },

  // --- ENDING NODES ---
  hero_end: {
    title: "Menjadi Bagian Legenda",
    text: "Anda bertarung gagah berani membela Sri Putri Cermin. Meski istana pada akhirnya hilang menjadi mitos untuk melindunginya dari perampok, nama Anda abadi dalam cerita rakyat Pantai Cermin sebagai sang pelindung pesisir. (TAMAT)",
    image: "/assets/images/ceritalegenda/putri_cermin.png",
    isEnding: true,
  },
  asal_usul_end: {
    title: "Pendiri Kota Pari",
    text: "Anda menikah dengan warga lokal dan menetap. Sebutan asal daerah Anda (Parepare) dan banyaknya ikan Pari di pantai membaur menjadi satu. Tempat ini kelak dikenal oleh anak cucu sebagai 'Kota Pari'. (TAMAT)",
    image: "/assets/images/ceritalegenda/kota_pari.png",
    isEnding: true,
  },
  jamu_laut_end: {
    title: "Anak Pesisir Sejati",
    text: "Anda menghormati kearifan lokal. Pada hari keempat, saat nelayan kembali melaut, tangkapan ikan berlimpah ruah. Tradisi Jamu Laut ini terus dijaga warga hingga ratusan tahun kemudian. (TAMAT)",
    image: "/assets/images/ceritalegenda/jamu_laut.png",
    isEnding: true,
  },
  datuk_end: {
    title: "Simbol Harmoni",
    text: "Anda meneruskan ajaran sang Datuk. Ratusan tahun kemudian, semangat kerukunan ini dirayakan oleh masyarakat Melayu dan Tionghoa melalui sebuah acara besar bernama 'Festival Datuk Pengembara'. (TAMAT)",
    image: "/assets/images/masjid.jpg",
    isEnding: true,
  },
};

const GameKisahPengembara = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentNode, setCurrentNode] = useState("start");

  const handleChoice = (nextNode) => {
    setCurrentNode(nextNode);
  };

  const resetGame = () => {
    setCurrentNode("start");
    setIsPlaying(false);
  };

  const activeStory = storyNodes[currentNode];

  return (
    <section className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto w-full relative z-10">
      <div className="max-w-4xl mx-auto w-full">
        {/* Kontainer Utama Game */}
        <div className="relative w-full min-h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-bgPrimary border border-borderLight flex flex-col">
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              // --- LAYAR JUDUL ---
              <motion.div
                key="title-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
              >
                {/* Background Latar Kabur */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: "url('/assets/images/hero-bg.png')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/80 to-transparent"></div>

                <div className="relative z-10">
                  <h3 className="text-4xl md:text-6xl font-heading font-black text-textHeading mb-6 leading-tight">
                    Kisah Sang <br /> Pengembara
                  </h3>
                  <p className="text-textBody text-lg max-w-lg mx-auto mb-10">
                    Setiap keputusan menentukan sejarah. Mulailah perjalanan
                    Anda melintasi waktu di pesisir Kota Pari.
                  </p>
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="bg-accentRed text-white px-10 py-4 rounded-full font-bold tracking-widest uppercase hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(230,57,70,0.5)] transition-all duration-300 flex items-center gap-3 mx-auto"
                  >
                    Mulai Perjalanan
                  </button>
                </div>
              </motion.div>
            ) : (
              // --- LAYAR PERMAINAN (NODE CERITA) ---
              <motion.div
                key={currentNode}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col"
              >
                {/* Visual Novel Background */}
                <div
                  className="w-full h-1/2 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${activeStory.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bgPrimary/50 to-bgPrimary"></div>
                </div>

                {/* Konten Narasi & Pilihan */}
                <div className="flex-1 bg-bgPrimary p-8 md:p-12 flex flex-col justify-between -mt-10 relative z-10">
                  <div>
                    <h4 className="text-2xl font-heading font-bold text-accentRed mb-4 uppercase tracking-widest">
                      {activeStory.title}
                    </h4>
                    <p className="text-textBody text-lg md:text-xl leading-relaxed mb-8">
                      {activeStory.text}
                    </p>
                  </div>

                  {/* Tombol Pilihan / Tombol Restart */}
                  <div className="flex flex-col gap-3">
                    {activeStory.isEnding ? (
                      <button
                        onClick={resetGame}
                        className="w-full text-center p-4 rounded-xl border border-borderLight text-textBody font-medium tracking-wider hover:bg-bgCard hover:border-textHeading hover:text-textHeading transition-all duration-300 flex items-center justify-center gap-3 mt-4"
                      >
                        <RotateCcw className="w-5 h-5" />
                        Mainkan Ulang Kisah
                      </button>
                    ) : (
                      activeStory.choices.map((choice, index) => (
                        <button
                          key={index}
                          onClick={() => handleChoice(choice.nextNode)}
                          className="w-full text-left p-4 md:p-5 rounded-xl border border-borderLight bg-bgCard/30 text-textBody font-medium hover:bg-accentRed hover:border-accentRed hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                        >
                          <span className="opacity-50 mr-3 group-hover:opacity-100 transition-opacity">
                            ►
                          </span>
                          {choice.text}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default GameKisahPengembara;
