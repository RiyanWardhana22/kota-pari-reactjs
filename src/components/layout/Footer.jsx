import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bgCard border-t border-borderLight pt-16 pb-8 px-6 md:px-20 mt-10 w-full z-10 relative">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Kolom 1: Brand & Deskripsi */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-heading font-bold text-textHeading tracking-widest text-xl uppercase">
                KOTA PARI
              </span>
            </div>
            <p className="text-textBody leading-relaxed max-w-md">
              Digital Museum yang didedikasikan untuk mendokumentasikan,
              melestarikan, dan membagikan jejak sejarah serta kekayaan maritim
              pesisir Desa Kota Pari kepada generasi mendatang.
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h4 className="text-textHeading font-heading font-bold mb-6 uppercase tracking-wider text-sm">
              Tautan Cepat
            </h4>
            <ul className="flex flex-col gap-4 text-textBody">
              <li>
                <a
                  href="#beranda"
                  className="hover:text-accentRed transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#sejarah"
                  className="hover:text-accentRed transition-colors"
                >
                  Sejarah Singkat
                </a>
              </li>
              <li>
                <a
                  href="#peta"
                  className="hover:text-accentRed transition-colors"
                >
                  Peta Interaktif
                </a>
              </li>
              <li>
                <a
                  href="#galeri"
                  className="hover:text-accentRed transition-colors"
                >
                  Galeri Visual
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Lokasi */}
          <div>
            <h4 className="text-textHeading font-heading font-bold mb-6 uppercase tracking-wider text-sm">
              Kontak & Lokasi
            </h4>
            <ul className="flex flex-col gap-4 text-textBody">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accentRed shrink-0 mt-0.5" />
                <span className="text-sm">
                  Kantor Desa Kota Pari, Kec. Pantai Cermin, Serdang Bedagai,
                  Sumatera Utara
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accentRed shrink-0" />
                <span className="text-sm">info@kotapari.desa.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accentRed shrink-0" />
                <span className="text-sm">+62 812 3456 7890</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Social Media */}
        <div className="border-t border-borderLight pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-textBody text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Sejarah Kota Pari. Digital
            Heritage Project. All rights reserved.
          </p>

          {/* Social Media Buttons */}
          <div className="flex gap-4">
            {/* <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-bgPrimary border border-borderLight flex items-center justify-center text-textBody hover:text-white hover:border-accentRed hover:bg-accentRed transition-all duration-300"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-bgPrimary border border-borderLight flex items-center justify-center text-textBody hover:text-white hover:border-accentRed hover:bg-accentRed transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="w-10 h-10 rounded-full bg-bgPrimary border border-borderLight flex items-center justify-center text-textBody hover:text-white hover:border-accentRed hover:bg-accentRed transition-all duration-300"
            >
              <Youtube className="w-4 h-4" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
