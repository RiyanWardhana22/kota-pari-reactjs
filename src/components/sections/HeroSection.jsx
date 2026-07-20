import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Memecah kata agar animasinya muncul bergantian (staggered)
  const titleWords = ["DIGI", "MUSEUM"];

  // Pengaturan Animasi menggunakan Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Jeda 0.2 detik antar kata
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="beranda"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background & Overlay Gradient Gelap */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bgPrimary/10 to-bgPrimary/95 z-10"></div>
        {/* Gambar background sementara, pastikan siapkan foto asli nantinya */}
        <div
          className="w-full h-full bg-bgCard bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/hero-bg.webp')" }}
        ></div>
      </div>

      {/* Konten Teks Animasi */}
      <div className="relative z-10 text-center max-w-[1440px] px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <h1 className="font-heading font-black text-5xl md:text-8xl text-textHeading leading-tight flex flex-wrap justify-center gap-4 md:gap-8">
            {titleWords.map((word, index) => (
              <motion.span key={index} variants={itemVariants}>
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      </div>

      {/* Indikator Navigator Angka (Samping Kanan) */}
      <div className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-end gap-3 text-textBody z-10">
        <span className="text-sm opacity-40">01</span>
        <span className="text-2xl text-textHeading font-bold relative flex items-center">
          <span className="absolute -left-8 w-6 h-[2px] bg-accentRed"></span>
          02
        </span>
        <span className="text-sm opacity-40">03</span>
        <span className="text-sm opacity-40">04</span>
      </div>

      {/* Indikator CTA Scroll memantul */}
      <motion.div
        className="absolute bottom-10 z-10 flex flex-col items-center gap-3 text-textBody text-xs tracking-widest font-medium"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        SCROLL &gt;&gt;
        <div className="w-[1px] h-12 bg-borderLight"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
