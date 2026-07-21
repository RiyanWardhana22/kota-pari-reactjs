import React from "react";
import { motion } from "framer-motion";

const HighlightSection = () => {
  const highlights = [
    {
      title: "Asal-Usul Nama",
      desc: "Asal-usul nama Desa Kota Pari memiliki dua versi yang masih dipercaya masyarakat. Versi pertama menyebutkan bahwa dahulu kawasan pesisir desa ini dipenuhi ikan pari yang bahkan sering terlihat hingga ke bibir pantai, sehingga wilayah tersebut dinamai Kota Pari. Sementara itu, versi kedua menyatakan bahwa nama tersebut berasal dari para pendatang dari Pare-Pare, Sulawesi, yang datang untuk berdakwah dan kemudian menetap di wilayah ini, sehingga sebutan Pare-Pare lambat laun berubah menjadi Pari.",
      delay: 0.2,
    },
    {
      title: "Perkembangan Desa",
      desc: "Perubahan terbesar Desa Kota Pari adalah berkembangnya sektor pariwisata. Sebelum menjadi kawasan wisata, wilayah pantai merupakan tambak udang. Pantai Wong Rame menjadi objek wisata pertama yang dibuka sekitar tahun 2004 dan menjadi awal perkembangan wisata di Desa Kota Pari. ",
      delay: 0.4,
    },
    {
      title: "Budaya dan Kearifan Lokal",
      desc: "Masyarakat Desa Kota Pari terus melestarikan budaya dan kearifan lokal sebagai bagian dari identitas mereka. Tradisi Tolak Bala masih rutin dilaksanakan setiap tahun sebagai bentuk ungkapan syukur dan harapan akan keselamatan. Nilai-nilai budaya Melayu juga tetap dipertahankan, salah satunya melalui tradisi makan bersama secara berhadapan yang masih diwariskan antargenerasi. Selain itu, terdapat lokasi bersejarah bernama Datuk Pengembara yang setiap tahun menjadi pusat penyelenggaraan pesta budaya, sehingga berperan penting dalam menjaga sekaligus memperkenalkan warisan budaya desa kepada masyarakat luas.",
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
