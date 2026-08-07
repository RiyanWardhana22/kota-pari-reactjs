import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const SalamHangatSection = () => {
  const teamMessages = [
    {
      name: "Riyan",
      quote: `"Lebih dari sekadar tempat mengabdi, Desa Kota Pari memberi arti tentang keluarga, ketulusan, dan kenangan abadi."`,
    },
    {
      name: "Rizky",
      quote: `"Semoga digital museum ini mampu membawa siapa pun mengenal, mencintai, dan suatu hari mengunjungi Kota Pari. Terima kasih."`,
    },
    {
      name: "Dira",
      quote: `"Kami datang dengan rencana kerja, lalu pulang dengan cerita yang tak pernah kami rencanakan. Terima kasih, Desa Kota Pari."`,
    },
    {
      name: "Ana",
      quote: `"Terima kasih, Desa Kota Pari. Setiap senyum, langkah, dan cerita akan selalu menjadi bagian dari perjalanan kami."`,
    },
    {
      name: "Nisa",
      quote: `"Semoga langkah kecil yang kami tinggalkan dapat menjadi bagian dari perjalanan panjang Kota Pari menuju masa depan yang lebih baik."`,
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-20 w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-bgPrimary/95 via-bgPrimary/80 to-bgPrimary/40 z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/assets/images/galeri-1.png')" }}
        ></div>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-bgCard/40 backdrop-blur-md border border-borderLight rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12"
        >
          {/* Kolom Kiri: Pesan Anggota */}
          <div className="w-full lg:w-2/3">
            <div className="mb-10">
              <h2
                className="text-3xl md:text-5xl font-serif font-bold text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Salam Hangat KKN Unimed
              </h2>
              <h3 className="text-2xl md:text-3xl font-serif italic text-accentRed">
                Desa Kota Pari 2026
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMessages.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <h4 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h4>
                  <p className="text-textBody text-sm leading-relaxed italic">
                    {member.quote}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Kontak & Media Sosial */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center items-start lg:items-end text-left lg:text-right border-t lg:border-t-0 lg:border-l border-borderLight pt-8 lg:pt-0 lg:pl-12">
            <div className="mb-8 flex flex-col items-start lg:items-end w-full">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1">
                  <img
                    src="/assets/images/logo.jpg"
                    alt="Logo KKN"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Desa Wisata
              </h3>
              <p className="text-accentRed font-medium tracking-widest uppercase text-sm">
                Kota Pari
              </p>
            </div>

            <ul className="flex flex-col gap-6 w-full">
              <li className="flex items-center lg:justify-end gap-4 text-textBody hover:text-white transition-colors">
                <span className="text-sm font-medium order-2 lg:order-1">
                  kkndesakotapari2026
                </span>
                <FaInstagram className="w-6 h-6 text-accentRed order-1 lg:order-2" />
              </li>
              <li className="flex items-center lg:justify-end gap-4 text-textBody hover:text-white transition-colors">
                <span className="text-sm font-medium order-2 lg:order-1">
                  kknkotapari2026
                </span>
                <FaTiktok className="w-6 h-6 text-accentRed order-1 lg:order-2" />
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SalamHangatSection;
