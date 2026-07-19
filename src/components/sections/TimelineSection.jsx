import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineData } from "../../data/timelineData";

const TimelineSection = () => {
  // State untuk melacak tahun mana yang sedang di-klik/dibuka detailnya
  const [activeId, setActiveId] = useState(timelineData[0].id); // Default buka yang pertama

  return (
    <section className="py-12 px-6 md:px-20 max-w-[1440px] mx-auto w-full z-10 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-textHeading mb-4 uppercase">
            Garis Waktu
          </h2>
          <p className="text-textBody">
            Jejak perjalanan Desa Kota Pari melintasi zaman.
          </p>
        </div>

        {/* Garis Timeline Vertikal */}
        <div className="relative border-l border-borderLight ml-4 md:ml-0 md:pl-0">
          {timelineData.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div key={item.id} className="mb-10 ml-8 relative">
                {/* Titik Marker Timeline */}
                <div
                  className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? "bg-bgPrimary border-accentRed"
                      : "bg-bgPrimary border-borderLight"
                  }`}
                  onClick={() => setActiveId(isActive ? null : item.id)} // Toggle buka tutup
                ></div>

                {/* Konten Timeline */}
                <div
                  className="cursor-pointer group"
                  onClick={() => setActiveId(isActive ? null : item.id)}
                >
                  <span
                    className={`text-sm font-bold tracking-widest transition-colors ${isActive ? "text-accentRed" : "text-textBody group-hover:text-textHeading"}`}
                  >
                    {item.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-textHeading mt-1 mb-2">
                    {item.title}
                  </h3>

                  {/* Efek Buka-Tutup (Expand) Narasi */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-textBody leading-relaxed pt-2">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
