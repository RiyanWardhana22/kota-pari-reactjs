import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden bg-bgCard border border-borderLight flex flex-col items-center justify-center text-center py-20 px-6 shadow-2xl"
      >
        {/* Efek Glow di Belakang Teks */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accentRed/20 blur-[100px] rounded-full pointer-events-none"></div>

        <h2 className="text-4xl md:text-6xl font-heading font-black text-textHeading mb-6 relative z-10 uppercase tracking-wide">
          Jelajahi Langsung <br />{" "}
          <span className="text-accentRed">Kota Pari</span>
        </h2>

        <p className="text-textBody text-lg max-w-2xl mb-10 relative z-10">
          Digital heritage ini hanyalah cuplikan kecil dari kekayaan sejarah dan
          alam pesisir Pantai Cermin. Kunjungi dan rasakan sendiri denyut
          nadinya.
        </p>

        {/* Tombol Utama (Primary Button) */}
        <button className="relative z-10 bg-accentRed text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(230,57,70,0.4)] transition-all duration-300">
          Rencanakan Kunjungan
        </button>
      </motion.div>
    </section>
  );
};

export default CTASection;
