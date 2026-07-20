import React from "react";
import { motion } from "framer-motion";

const HighlightSection = () => {
  // Data 3 pilar sejarah Kota Pari
  const highlights = [
    {
      title: "Asal-Usul Nama",
      desc: "Konon, nama Kota Pari diambil dari banyaknya ikan pari yang dulunya ditangkap oleh nelayan pesisir di kawasan ini, menjadikannya ikon desa.",
      delay: 0.2,
    },
    {
      title: "Jejak Etnis Pesisir",
      desc: "Menjadi titik temu berbagai etnis Melayu pesisir yang mendirikan permukiman awal, membawa kekayaan tradisi lisan dan budaya laut.",
      delay: 0.4,
    },
    {
      title: "Urat Nadi Maritim",
      desc: "Sejak era kolonial, pelabuhan rakyat dan dermaga kecil di Kota Pari memainkan peran krusial dalam jalur distribusi hasil laut lokal.",
      delay: 0.6,
    },
  ];

  return (
    <section
      id="sejarah"
      className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto w-full z-10 relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: item.delay, ease: "easeOut" }}
            className="bg-bgCard border border-borderLight p-8 rounded-2xl hover:border-accentRed/50 transition-colors group"
          >
            <h3 className="text-2xl font-heading font-bold text-textHeading mb-4">
              {item.title}
            </h3>
            <p className="text-textBody leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HighlightSection;
