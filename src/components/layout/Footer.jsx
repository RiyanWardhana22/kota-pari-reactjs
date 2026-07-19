import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bgCard border-t border-borderLight py-12 px-6 md:px-20 mt-10 w-full z-10 relative">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo Footer */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-accentRed"></div>
          <span className="font-heading font-bold text-textHeading tracking-widest text-lg">
            KOTA PARI
          </span>
        </div>

        {/* Teks Hak Cipta */}
        <p className="text-textBody text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Sejarah Kota Pari. Digital Heritage
          Project.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
