import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import HighlightSection from "./components/sections/HighlightSection";
import TimelineSection from "./components/sections/TimelineSection";
import MapDashboardSection from "./components/sections/MapDashboardSection";
import GallerySection from "./components/sections/GallerySection";
import LocalHistorySection from "./components/sections/LocalHistorySection"; // <-- Import Baru

function App() {
  return (
    <div className="bg-bgPrimary text-textBody min-h-screen font-body selection:bg-accentRed selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <HighlightSection />
        <TimelineSection />
        <MapDashboardSection />
        <GallerySection />
        <LocalHistorySection /> {/* <-- Menggantikan CTASection */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
