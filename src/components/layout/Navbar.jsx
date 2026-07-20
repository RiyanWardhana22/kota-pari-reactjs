import React, { useState, useEffect } from "react";

const Navbar = () => {
  // State ini bertugas mendeteksi apakah layar sudah di-scroll atau belum
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 50px, ubah state menjadi true
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bgPrimary/90 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex justify-between items-center">
        {/* Bagian Logo (Dot Merah + Teks) */}
        <div className="flex items-center gap-3">
          <span className="font-heading font-bold text-textHeading tracking-widest text-lg">
            KOTA PARI
          </span>
        </div>

        {/* Bagian Menu (Disembunyikan di layar HP untuk sementara) */}
        <div className="hidden md:flex gap-8">
          {["Beranda", "Sejarah", "Peta", "Galeri"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-textBody hover:text-textHeading transition-colors text-sm font-medium uppercase tracking-widest relative group"
            >
              {item}
              {/* Garis bawah merah yang muncul saat di-hover */}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accentRed transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
