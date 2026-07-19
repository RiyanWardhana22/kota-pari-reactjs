import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { motion, AnimatePresence } from "framer-motion";
import { historicalSites } from "../../data/historicalSites";

// Membuat fungsi untuk merender ikon HTML kustom (bukan gambar statis)
const createCustomIcon = (category) => {
  return L.divIcon({
    className: "bg-transparent", // Hapus class bawaan
    html: `<div class="marker-dot category-${category}"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8], // Titik tengah marker
  });
};

const MapDashboardSection = () => {
  // State untuk menyimpan filter kategori yang sedang aktif
  const [activeFilter, setActiveFilter] = useState("Semua");
  // State untuk menyimpan data lokasi yang sedang di-klik
  const [activeSite, setActiveSite] = useState(null);

  // Kumpulan kategori filter
  const filters = ["Semua", "Permukiman", "Maritim"];

  // Menyaring data berdasarkan tombol filter yang dipilih
  const filteredSites =
    activeFilter === "Semua"
      ? historicalSites
      : historicalSites.filter(
          (site) => site.category.toLowerCase() === activeFilter.toLowerCase(),
        );

  return (
    <section
      id="peta"
      className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto w-full relative"
    >
      {/* Judul Section */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-textHeading mb-4">
          JEJAK BERSEJARAH KOTA PARI
        </h2>
        <p className="text-textBody text-lg max-w-2xl">
          Jelajahi titik-titik penting di kawasan pesisir melalui peta
          interaktif ini.
        </p>
      </div>

      {/* Container Utama Peta */}
      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* Panel Kiri: Peta */}
        <div className="w-full h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden border border-borderLight relative shadow-2xl">
          {/* Tombol Filter Kategori (Melayang di atas Peta) */}
          <div className="absolute top-4 left-4 z-[400] flex gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setActiveSite(null); // Tutup popup jika filter diganti
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all backdrop-blur-md border ${
                  activeFilter === filter
                    ? "bg-accentRed text-white border-accentRed"
                    : "bg-bgCard/60 text-textBody border-borderLight hover:bg-bgCard"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <MapContainer
            center={[3.665, 98.949]} // Titik tengah Pantai Cermin / Kota Pari
            zoom={15}
            zoomControl={false} // Kita matikan zoom bawaan agar lebih clean
            className="w-full h-full"
          >
            {/* Base Layer Peta Gelap dari CartoDB */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution="&copy; CARTO"
            />

            {/* Merender Marker Lokasi */}
            {filteredSites.map((site) => (
              <Marker
                key={site.id}
                position={site.coordinates}
                icon={createCustomIcon(site.category)}
                eventHandlers={{
                  click: () => setActiveSite(site), // Buka popup saat di-klik
                }}
              />
            ))}
          </MapContainer>

          {/* Popup Custom Menggunakan Framer Motion */}
          <AnimatePresence>
            {activeSite && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-6 lg:left-auto lg:right-6 z-[500] w-[calc(100%-48px)] lg:w-80 bg-bgCard border border-borderLight rounded-xl p-4 shadow-2xl"
              >
                <div className="relative">
                  {/* Tombol Close Popup */}
                  <button
                    onClick={() => setActiveSite(null)}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-bgPrimary rounded-full text-textBody hover:text-accentRed flex items-center justify-center border border-borderLight z-10"
                  >
                    ✕
                  </button>

                  {/* Gambar Thumbnail Popup (Kosongkan dulu) */}
                  <div className="w-full h-32 bg-bgPrimary rounded-lg mb-3 border border-borderLight"></div>

                  <span className="text-[10px] uppercase font-bold text-accentBlue tracking-widest">
                    Kategori: {activeSite.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-textHeading mt-1 mb-2">
                    {activeSite.name}
                  </h3>
                  <p className="text-sm text-textBody leading-relaxed">
                    {activeSite.shortDescription}
                  </p>

                  <div className="mt-4 pt-4 border-t border-borderLight flex justify-between text-xs text-textBody">
                    <span>Est. Tahun: {activeSite.yearEstablished}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MapDashboardSection;
