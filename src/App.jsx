import React from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import MapDashboardSection from "./components/sections/MapDashboardSection";

function App() {
  return (
    <div className="bg-bgPrimary text-textBody min-h-screen font-body">
      <Navbar />

      <main>
        <HeroSection />
        <MapDashboardSection />
      </main>
    </div>
  );
}

export default App;
