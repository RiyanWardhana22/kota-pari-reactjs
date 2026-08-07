import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin, TrendingUp, Landmark, Quote } from "lucide-react";

// Mendaftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const HighlightSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Data Sejarah dengan sumber valid
  const highlights = [
    {
      title: "Asal-Usul Nama",
      icon: <MapPin className="w-10 h-10 text-accentRed" />,
      desc: "Desa Kota Pari memiliki dua versi penamaan yang dipercaya: kawasan pesisir yang dahulunya dipenuhi ikan pari hingga ke bibir pantai, serta riwayat pendatang dari Pare-Pare (Sulawesi) yang datang berdakwah lalu menetap.",
      source:
        "Abdul Khair (Kepala Desa Kota Pari), Wawancara 15 Juli 2026. Syafi'i Harahap (Tokoh Masyarakat), Wawancara 20 Juli 2026.",
      color: "bg-bgCard",
    },
    {
      title: "Perkembangan Desa",
      icon: <TrendingUp className="w-10 h-10 text-accentRed" />,
      desc: "Transformasi terbesar desa ini terletak pada sektor pariwisata. Kawasan pantai yang awalnya difungsikan sebagai tambak udang, mulai beralih fungsi dengan dibukanya Pantai Wong Rame pada tahun 2004 sebagai pelopor wisata desa.",
      source: "Abdul Khair (Kepala Desa Kota Pari), Wawancara 15 Juli 2026.",
      color: "bg-bgPrimary", // Latar berbeda untuk kontras saat bertumpuk
    },
    {
      title: "Budaya & Kearifan Lokal",
      icon: <Landmark className="w-10 h-10 text-accentRed" />,
      desc: "Masyarakat rutin menggelar tradisi Tolak Bala setiap 3-5 tahun sekali dan mempertahankan identitas Melayu melalui tradisi makan berhadapan. Festival di lokasi bersejarah Datuk Pengembara juga menjadi pusat pelestarian warisan budaya desa.",
      source:
        "Agung Nugroho, S.E, M.Tr. Par. & M. Saufi Ds. (Bidang Kebudayaan Kab. Sergai), Wawancara 20 & 24 Juli 2026.",
      color: "bg-bgCard",
    },
  ];

  useGSAP(
    () => {
      // Menerapkan efek GSAP saat kartu bertumpuk
      cardsRef.current.forEach((card, index) => {
        // Kita tidak perlu mengecilkan kartu terakhir
        if (index < highlights.length - 1) {
          gsap.to(card, {
            scale: 0.9, // Mengecil sebesar 10%
            opacity: 0.4, // Meredup
            scrollTrigger: {
              trigger: cardsRef.current[index + 1], // Trigger-nya adalah kartu yang ada di bawahnya
              start: "top 85%", // Mulai animasi saat kartu bawah menyentuh 85% layar
              end: "top 15%", // Berakhir saat menumpuk di atas
              scrub: true, // Animasi mengikuti pergerakan scroll
            },
          });
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="sejarah"
      ref={containerRef}
      className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto w-full z-10 relative"
    >
      {/* Header Judul */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-textHeading mb-4 uppercase tracking-wider">
          Jejak & Identitas
        </h2>
        <p className="text-textBody text-lg max-w-2xl mx-auto">
          Menelusuri asal-usul, perkembangan, dan kekayaan budaya yang membentuk
          karakter masyarakat Desa Kota Pari.
        </p>
      </div>

      {/* Container Kartu Bertumpuk (Stacking Cards) */}
      <div className="flex flex-col gap-12 md:gap-32 relative max-w-4xl mx-auto pb-24">
        {highlights.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            // 'sticky' dan 'top-[12vh]' adalah kunci utama agar kartu menempel di layar
            className={`sticky top-[12vh] border border-borderLight p-8 md:p-14 rounded-[2.5rem] shadow-2xl origin-top flex flex-col md:flex-row gap-8 md:gap-12 items-center ${item.color}`}
            style={{ zIndex: index + 1 }}
          >
            {/* Visual Kiri */}
            <div className="w-full md:w-1/3 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-20 h-20 bg-bgPrimary border border-borderLight rounded-3xl flex items-center justify-center mb-6 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-3xl font-heading font-bold text-textHeading mb-4">
                {item.title}
              </h3>
            </div>

            {/* Konten Narasi Kanan */}
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <p className="text-textBody text-lg md:text-xl leading-relaxed mb-8">
                {item.desc}
              </p>

              {/* Box Sitasi Sumber */}
              <div className="mt-auto pt-6 border-t border-borderLight">
                <div className="flex items-start gap-4 text-textBody/70 bg-bgPrimary/50 p-4 rounded-2xl border border-borderLight/50">
                  <Quote className="w-6 h-6 flex-shrink-0 text-accentRed/50" />
                  <p className="text-sm leading-relaxed italic font-medium">
                    Sumber: {item.source}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightSection;
