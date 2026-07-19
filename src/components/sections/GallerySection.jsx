import React from "react";
import { motion } from "framer-motion";

const GallerySection = () => {
  // Data gambar galeri.
  // Properti 'span' mengatur seberapa besar kolom yang diambil oleh gambar tersebut.
  const galleryItems = [
    {
      id: 1,
      title: "Pesisir Pantai Cermin",
      img: "/assets/images/galeri-1.jpg",
      span: "col-span-12 md:col-span-8 row-span-2", // Gambar besar
    },
    {
      id: 2,
      title: "Dermaga Tua",
      img: "/assets/images/galeri-2.jpg",
      span: "col-span-12 md:col-span-4 row-span-1", // Gambar kecil atas
    },
    {
      id: 3,
      title: "Aktivitas Nelayan",
      img: "/assets/images/galeri-3.jpg",
      span: "col-span-12 md:col-span-4 row-span-1", // Gambar kecil bawah
    },
  ];

  return (
    <section
      id="galeri"
      className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto w-full relative z-10"
    >
      {/* Header Galeri */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-textHeading mb-4 uppercase">
            Jelajahi Sudut Kota
          </h2>
          <p className="text-textBody text-lg max-w-xl">
            Potret kehidupan, budaya, dan jejak kemaritiman yang masih bertahan
            di Desa Kota Pari hingga hari ini.
          </p>
        </div>
      </div>

      {/* Grid Asimetris */}
      <div className="grid grid-cols-12 gap-4 auto-rows-[250px]">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative rounded-xl overflow-hidden group cursor-pointer ${item.span}`}
          >
            {/* Gambar Background */}
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 bg-bgCard"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>

            {/* Overlay Gradient & Teks Caption yang muncul saat Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary/95 via-bgPrimary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-textHeading transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
