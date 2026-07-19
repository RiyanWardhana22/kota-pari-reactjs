import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import MapDashboardSection from "./components/sections/MapDashboardSection";
import GallerySection from "./components/sections/GallerySection";

function App() {
  return (
    <div className="bg-bgPrimary text-textBody min-h-screen font-body selection:bg-accentRed selection:text-white">
      <Navbar />

      <main>
        <HeroSection />
        <MapDashboardSection />
        <GallerySection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
