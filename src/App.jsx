import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import HighlightSection from "./components/sections/HighlightSection"; // <-- Import Baru
import TimelineSection from "./components/sections/TimelineSection"; // <-- Import Baru
import MapDashboardSection from "./components/sections/MapDashboardSection";
import GallerySection from "./components/sections/GallerySection";

function App() {
  return (
    <div className="bg-bgPrimary text-textBody min-h-screen font-body selection:bg-accentRed selection:text-white">
      <Navbar />

      <main>
        <HeroSection />
        <HighlightSection /> {/* <-- Posisi setelah Hero */}
        <TimelineSection /> {/* <-- Posisi sebelum Peta */}
        <MapDashboardSection />
        <GallerySection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
