import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const KesultananStorySection = () => {
  const containerRef = useRef(null);

  const exhibits = [
    {
      id: "intro",
      title: "Tanah Kesultanan Serdang",
      subtitle: "1723 - Era Kolonial",
      content:
        "Kesultanan Deli dan Kesultanan Serdang merupakan dua kerajaan Melayu di Sumatera Timur yang berasal dari keturunan Gotjah Pahlawan. Kesultanan Deli berdiri pada 1623, sedangkan Kesultanan Serdang berdiri pada 1723 akibat konflik suksesi di Deli. Pada masa kolonial, campur tangan Belanda mengubah batas wilayah kedua kesultanan dan membentuk Afdeling Deli en Serdang, yang kemudian menjadi dasar terbentuknya Kabupaten Deli Serdang. Setelah pemekaran pada tahun 2004, wilayah bekas Kesultanan Serdang terbagi antara Kabupaten Deli Serdang dan Kabupaten Serdang Bedagai.",
      image: "/assets/images/ceritalegenda/kesultanan.jpg",
    },
    {
      id: "geografi",
      title: "Masa Pemerintahan",
      subtitle: "Wilayah Eigenlijk",
      content:
        "Sultan Sulaiman Syariful Alam Shah merupakan Sultan Serdang kelima yang memerintah pada 1880–1946. Beliau dikenal sebagai pemimpin yang sederhana, berjiwa seni, dan tegas menolak kebijakan Belanda, termasuk melarang pengambilalihan wilayah Kesultanan Serdang untuk perkebunan swasta. Pada masa pemerintahannya, wilayah inti (Eigenlijk) Kesultanan Serdang berada di bawah kendali langsung Sultan, meliputi Perbaungan, Pantai Cermin, Pantai Labu, serta kawasan Kota Pari yang termasuk dalam Luhak Pantai Cermin dan berada di bawah Kesultanan Serdang.",
      image: "/assets/images/ceritalegenda/masapemerintahan.jpg",
    },
    {
      id: "kuliner",
      title: "Tradisi Bahari Kota Pari",
      subtitle: "Penghormatan Nelayan",
      content:
        "Pada masa Kesultanan Serdang, Kota Pari berkembang sebagai bandar niaga lokal setelah Pelabuhan Kuala Serdang mengalami pendangkalan pada 1891. Sebagian besar masyarakat bermata pencaharian sebagai nelayan dan petani yang bergantung pada musim dan cuaca. Hasil tangkapan laut, terutama ikan pari, memiliki nilai penting karena dipersembahkan kepada Sultan sebagai bentuk penghormatan. Ikan pari kemudian diolah menjadi hidangan khas istana, seperti Ikan Pari Sembam dan Gulai Masam Ikan Pari, yang menjadi bagian dari tradisi kuliner Kesultanan Serdang dan memiliki keterkaitan dengan kenangan masa kecil Sultan Sulaiman Shariful Alamshah.",
      image: "/assets/images/ceritalegenda/layout.png",
    },
    {
      id: "spiritual",
      title: "Jamu Laut & Mandi Shafar",
      subtitle: "Tradisi Bulan Panas",
      content:
        "Tradisi Jamu Laut merupakan upacara masyarakat pesisir Kota Pari yang dilaksanakan setiap 10 Safar untuk memohon kepada Allah SWT agar para nelayan memperoleh hasil tangkapan yang melimpah, keselamatan saat melaut, dan terhindar dari bencana. Upacara ini dipimpin oleh Sultan Sulaiman Shariful Alamshah, disertai doa, simbol-simbol adat, serta menjadi ajang silaturahmi antara Sultan dan masyarakat pesisir. Setelahnya dilaksanakan Mandi Shafar, yaitu tradisi mandi di laut sebagai simbol tolak bala pada bulan Safar yang diakhiri dengan doa bersama dan makan bersama.",
      image: "/assets/images/jamulaut.jpg",
    },
    {
      id: "budaya",
      title: "Wirisan Sosial",
      subtitle: "Kemeriahan Jelang Idul Adha",
      content:
        "Sultan Sulaiman Syariful Alam Shah memanfaatkan kawasan Rencah di hutan bakau Kota Pari sebagai tempat memelihara kerbau yang digunakan untuk keperluan upacara kerajaan dan dibagikan kepada masyarakat pada hari-hari besar. Menjelang Iduladha, diselenggarakan laga kerbau sebagai tradisi budaya tanpa unsur perjudian, dengan daging kerbau yang kalah dibagikan kepada rakyat. Di bidang pendidikan, Sultan mendirikan Sekolah Melayu dan madrasah di Kota Pari dan Pantai Cermin untuk mengajarkan bahasa Melayu, Al-Qur'an, dan aksara Jawi, serta membuka kesempatan bagi siswa berprestasi melanjutkan pendidikan ke Maktab Sjairus Sulaiman.",
      image: "/assets/images/ceritalegenda/istana.jpg",
    },
  ];

  useGSAP(
    () => {
      let panels = gsap.utils.toArray(".story-panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + containerRef.current.offsetWidth,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    // Overflow-hidden wajib agar elemen yang bergeser ke kanan tidak membuat halaman melebar
    <section className="overflow-hidden bg-bgPrimary" ref={containerRef}>
      {/* Container yang lebarnya disesuaikan dengan jumlah panel (misal 6 panel = 600vw) */}
      <div
        className="flex w-[600vw] h-screen"
        style={{ width: `${exhibits.length * 100}vw` }}
      >
        {exhibits.map((exhibit, index) => (
          <div
            key={exhibit.id}
            className="story-panel w-screen h-screen flex flex-col md:flex-row items-center justify-center relative px-6 md:px-20"
          >
            {/* Background Image Panel */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-bgPrimary via-bgPrimary/90 to-bgPrimary/40 z-10"></div>
              <div
                className="w-full h-full bg-cover bg-center opacity-40 grayscale"
                style={{ backgroundImage: `url(${exhibit.image})` }}
              ></div>
            </div>

            {/* Konten Kiri: Teks Tipografi Besar */}
            <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center pr-0 md:pr-12">
              <span className="text-accentRed font-bold tracking-[0.3em] uppercase text-sm mb-4">
                0{index + 1} // {exhibit.subtitle}
              </span>
              <h2 className="text-4xl md:text-7xl font-heading font-black text-textHeading mb-6 leading-tight">
                {exhibit.title}
              </h2>
              <div className="w-20 h-1 bg-accentRed mb-8"></div>
              <p className="text-textBody text-lg md:text-xl leading-relaxed max-w-lg">
                {exhibit.content}
              </p>
            </div>

            {/* Konten Kanan: Visual Frame */}
            <div className="relative z-10 w-full md:w-1/2 h-[40vh] md:h-[70vh] mt-10 md:mt-0 p-4 md:p-10">
              <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-borderLight shadow-[0_0_40px_rgba(0,0,0,0.5)] relative">
                <img
                  src={exhibit.image}
                  alt={exhibit.title}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                />
                {/* Aksen visual pinggiran */}
                <div className="absolute inset-0 border-[20px] border-bgPrimary/20 mix-blend-overlay pointer-events-none"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KesultananStorySection;
