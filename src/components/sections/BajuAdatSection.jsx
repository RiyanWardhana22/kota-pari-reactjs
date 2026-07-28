import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BajuAdatSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Data Pakaian Adat
  const attires = [
    {
      id: "teluk-belanga",
      name: "Teluk Belanga",
      gender: "Busana Pria",
      description:
        "Busana tradisional pria Melayu yang identik dengan kerah bulat yang khas, dipadukan dengan kain samping songket yang diikat rapi di pinggang. Pakaian ini mencerminkan kewibawaan, kesopanan, serta tata krama masyarakat pesisir Kesultanan Serdang.",
      image: "/assets/images/telukBelanga.jpeg",
    },
    {
      id: "baju-kurung",
      name: "Baju Kurung",
      gender: "Busana Wanita",
      description:
        "Pakaian adat wanita Melayu berpotongan longgar yang menjunjung tinggi nilai kesantunan. Detail pola yang elegan serta paduan kain songket mempertegas identitas, keanggunan, dan kelembutan perempuan Melayu pesisir.",
      image: "/assets/images/bajukarung.png",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto w-full relative z-10 overflow-hidden bg-bgPrimary">
      {/* Latar Belakang Animasi Garis Mengalir Horizontal (Floating Lines) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-[200%] bg-gradient-to-r from-transparent via-accentRed to-transparent"
            style={{ top: `${15 + i * 15}%`, left: "-50%" }}
            animate={{ x: ["-25%", "25%"] }}
            transition={{
              duration: 10 + i * 3,
              repeat: Infinity,
              ease: "linear",
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-textHeading mb-4 uppercase">
          Pusana & Estetika Melayu
        </h2>
        <p className="text-textBody text-lg max-w-2xl mx-auto">
          Simbol kehormatan dan identitas budaya. Eksplorasi keanggunan pakaian
          adat masyarakat pesisir Kota Pari.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Panel Navigasi & Teks Deskripsi (Kiri) */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {/* Tombol Interaktif (Tabs) */}
          <div className="flex bg-bgCard p-2 rounded-full border border-borderLight shadow-lg">
            {attires.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-1 py-3 px-6 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-accentRed text-white shadow-[0_0_15px_rgba(230,57,70,0.4)]"
                    : "text-textBody hover:text-textHeading"
                }`}
              >
                {item.gender}
              </button>
            ))}
          </div>

          {/* Teks Animasi yang Berganti-ganti */}
          <div className="h-[250px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <h3 className="text-4xl md:text-5xl font-heading font-black text-textHeading mb-4">
                  {attires[activeIndex].name}
                </h3>
                <p className="text-textBody mt-5 text-lg leading-relaxed">
                  {attires[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Panel Gambar & Animasi (Kanan) */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Efek Glow di Belakang Etalase Gambar */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accentRed/10 blur-[80px] rounded-full pointer-events-none"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {/* Animasi Melayang (Floating) Terus Menerus */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                className="relative z-10 p-4 bg-bgCard border border-borderLight rounded-2xl shadow-2xl"
              >
                {/* Frame Etalase berlatar putih agar gambar terlihat rapi */}
                <div className="w-full max-w-[300px] h-[450px] bg-white rounded-xl overflow-hidden relative">
                  <img
                    src={attires[activeIndex].image}
                    alt={attires[activeIndex].name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BajuAdatSection;
