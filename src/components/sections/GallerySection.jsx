import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Mendaftarkan plugin ScrollTrigger ke GSAP
gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const galleryItems = [
    {
      id: 1,
      title: "Pantai Woong Rame",
      img: "/assets/images/galeri-1.png",
      span: "col-span-12 md:col-span-8 row-span-2",
    },
    {
      id: 2,
      title: "Pantai",
      img: "/assets/images/Screenshot 2026-07-20 150946.png",
      span: "col-span-12 md:col-span-4 row-span-1",
    },
    {
      id: 3,
      title: "Aktivitas Nelayan",
      img: "/assets/images/galeri-3.jpg",
      span: "col-span-12 md:col-span-4 row-span-1",
    },
    {
      id: 4,
      title: "Pantai 88",
      img: "/assets/images/galeri-4.jpeg",
      span: "col-span-12 md:col-span-8 row-span-1",
    },
  ];

  // Implementasi GSAP 3D Scroll & Hover
  useGSAP(
    () => {
      // 1. Animasi 3D Entrance saat di-scroll
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotationX: -45, // Miring ke belakang
            rotationY: 15,
            transformPerspective: 1000, // Memberikan kedalaman 3D
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // Mulai animasi saat elemen mencapai 85% layar
              toggleActions: "play none none reverse", // Mainkan saat masuk, reverse saat scroll ke atas
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  // Fungsi untuk Efek 3D Mouse Tilt (Berputar mengikuti mouse)
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    const rect = card.getBoundingClientRect();

    // Menghitung posisi mouse relatif terhadap tengah kartu
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Konversi ke derajat rotasi (Maksimal 10 derajat agar tidak berlebihan)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.5,
    });
  };

  // Mengembalikan kartu ke posisi semula saat mouse keluar
  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      ease: "power3.out",
      duration: 0.7,
    });
  };

  return (
    <section
      id="galeri"
      ref={containerRef}
      className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto w-full relative z-10"
    >
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

      <div className="grid grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            // Gaya CSS transform-style preserve-3d krusial untuk efek 3D berlapis
            style={{ transformStyle: "preserve-3d" }}
            className={`relative rounded-xl overflow-hidden group cursor-pointer ${item.span} shadow-2xl`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-bgCard"
              style={{
                backgroundImage: `url(${item.img})`,
                transform: "translateZ(-50px)", // Mendorong gambar sedikit ke belakang di ruang 3D
              }}
            ></div>

            {/* Teks dimajukan ke depan di ruang 3D (translateZ) */}
            <div
              style={{ transform: "translateZ(80px)" }}
              className="absolute inset-0 bg-gradient-to-t from-bgPrimary/95 via-bgPrimary/20 to-transparent flex items-end p-8 pointer-events-none"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-textHeading">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
