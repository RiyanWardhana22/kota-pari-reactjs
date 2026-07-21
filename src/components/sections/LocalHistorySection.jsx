import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LocalHistorySection = () => {
  const [activeStory, setActiveStory] = useState(0);
  const stories = [
    {
      title: "Tradisi Jamu Laut",
      subtitle: "Wujud Syukur & Tolak Bala",
      content:
        "Ritual Jamu Laut merupakan tradisi tolak bala yang rutin dilakukan 3 hingga 5 tahun sekali oleh para nelayan. Dipimpin oleh seorang pawang laut, ritual ini diisi dengan zikir dan doa bersama sebagai wujud rasa syukur kepada Allah SWT. Usai ritual, nelayan dianjurkan tidak melaut selama 3 hari dengan harapan hasil tangkapan akan semakin melimpah.",
      image: "/assets/images/ceritalegenda/jamu_laut.png",
    },
    {
      title: "Festival Datuk Pengembara",
      subtitle: "Simbol Harmoni Budaya",
      content:
        "Sejak tahun 2006, festival ini rutin diselenggarakan pada akhir tahun. Berawal dari visi Iswanto Browo (seorang tokoh Tionghoa) mengenai persinggahan Datuk beragama Islam di Desa Kota Pari. Festival ini menjadi simbol kerukunan etnis Melayu dan Tionghoa, dimeriahkan dengan khitanan massal, pertunjukan kesenian, hingga doa bersama.",
      image: "/assets/images/ceritalegenda/datuk_pengembara.png",
    },
    {
      title: "Asal-Usul Kota Pari",
      subtitle: "Tiga Versi Cerita Rakyat",
      content:
        "Menurut Bapak Syafi'i Harahap, ada tiga versi asal mula nama desa ini. Pertama, karena melimpahnya populasi ikan pari di masa lalu. Kedua, jejak pelaut asal Parepare (Sulawesi) yang singgah di Pulau Berhala lalu menetap di kawasan ini. Ketiga, merujuk pada banyaknya tanaman pare yang dahulu tumbuh subur di wilayah pesisir.",
      image: "/assets/images/ceritalegenda/kota_pari.png",
    },
    {
      title: "Legenda Putri Cermin",
      subtitle: "Mitos Istana Pasir Kuarsa",
      content:
        "Legenda kuno menyebutkan bahwa dahulu kawasan ini adalah sebuah kerajaan yang dipimpin oleh seorang raja dengan putrinya, Sri Putri Cermin. Istana kerajaan dibangun dari pasir kuarsa yang sangat memukau. Saking indahnya, pantulan cahaya dari istana tersebut konon dapat terlihat hingga ke perairan Selat Malaka.",
      image: "/assets/images/ceritalegenda/putri_cermin.png",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto w-full relative z-10">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-textHeading mb-4 uppercase">
          Kisah & Tradisi Lokal
        </h2>
        <p className="text-textBody text-lg max-w-2xl">
          Menyelami kekayaan warisan budaya, legenda, dan tradisi turun-temurun
          masyarakat pesisir Desa Kota Pari.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {stories.map((story, index) => {
            const isActive = activeStory === index;
            return (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                  isActive
                    ? "bg-bgCard border-accentRed shadow-[0_0_20px_rgba(230,57,70,0.15)]"
                    : "bg-transparent border-borderLight hover:border-textBody hover:bg-bgCard/50"
                }`}
              >
                <h3
                  className={`text-xl font-heading font-bold mb-1 transition-colors ${isActive ? "text-accentRed" : "text-textHeading"}`}
                >
                  {story.title}
                </h3>
                <p className="text-sm text-textBody font-medium tracking-wide">
                  {story.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Konten Kanan (Detail & Gambar) */}
        <div className="w-full md:w-2/3 relative min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden bg-bgCard border border-borderLight shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col h-full"
            >
              <div
                className="w-full h-1/2 md:h-3/5 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${stories[activeStory].image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-bgCard to-transparent"></div>
              </div>
              <div className="p-8 md:p-10 relative z-10 flex-grow flex flex-col justify-end">
                <span className="text-xs uppercase tracking-widest text-accentRed font-bold mb-2">
                  {stories[activeStory].subtitle}
                </span>
                <h3 className="text-3xl font-heading font-bold text-textHeading mb-4">
                  {stories[activeStory].title}
                </h3>
                <p className="text-textBody leading-relaxed md:text-lg">
                  {stories[activeStory].content}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LocalHistorySection;
