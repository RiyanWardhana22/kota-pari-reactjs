import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { motion, AnimatePresence } from "framer-motion";
import { historicalSites } from "../../data/historicalSites";

// Membuat fungsi untuk merender ikon HTML kustom
const createCustomIcon = (category) => {
  return L.divIcon({
    className: "bg-transparent",
    html: `<div class="marker-dot category-${category}"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
};

const MapDashboardSection = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [activeSite, setActiveSite] = useState(null);

  // Kumpulan kategori filter disesuaikan dengan data baru
  const filters = ["Semua", "Pemerintahan", "Wisata", "Sejarah", "Maritim"];

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
      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-textHeading mb-4 uppercase">
          Jejak Ruang & Waktu
        </h2>
        <p className="text-textBody text-lg max-w-2xl">
          Eksplorasi tata ruang pesisir Kota Pari, dari pusat pemerintahan,
          wisata, hingga titik-titik bersejarah melalui citra satelit
          interaktif.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 relative">
        <div className="w-full h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden border border-borderLight relative shadow-2xl">
          {/* Tombol Filter Kategori */}
          <div className="absolute top-4 left-4 z-[400] flex gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setActiveSite(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all backdrop-blur-md border shadow-lg ${
                  activeFilter === filter
                    ? "bg-accentRed text-white border-accentRed"
                    : "bg-bgPrimary/80 text-textBody border-borderLight hover:bg-bgCard"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <MapContainer
            center={[3.659, 98.95]} // Titik tengah disesuaikan agar semua marker terlihat
            zoom={15}
            zoomControl={false}
            className="w-full h-full"
          >
            {/* PETA SATELIT MENGGUNAKAN ESRI WORLD IMAGERY */}
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />

            {filteredSites.map((site) => (
              <Marker
                key={site.id}
                position={site.coordinates}
                icon={createCustomIcon(site.category)}
                eventHandlers={{
                  click: () => setActiveSite(site),
                }}
              />
            ))}
          </MapContainer>

          {/* Popup Custom */}
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
                  <button
                    onClick={() => setActiveSite(null)}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-bgPrimary rounded-full text-textBody hover:text-accentRed flex items-center justify-center border border-borderLight z-10 shadow-lg"
                  >
                    ✕
                  </button>

                  <div
                    className="w-full h-36 bg-bgPrimary rounded-lg mb-3 border border-borderLight bg-cover bg-center"
                    style={{ backgroundImage: `url(${activeSite.imageUrl})` }}
                  ></div>

                  <span className="text-[10px] uppercase font-bold text-accentRed tracking-widest bg-accentRed/10 px-2 py-1 rounded">
                    {activeSite.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-textHeading mt-2 mb-2">
                    {activeSite.name}
                  </h3>
                  <p className="text-sm text-textBody leading-relaxed line-clamp-3">
                    {activeSite.shortDescription}
                  </p>

                  <div className="mt-4 pt-4 border-t border-borderLight flex justify-between text-xs text-textBody">
                    <span className="font-medium text-white">
                      Waktu: {activeSite.yearEstablished}
                    </span>
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
