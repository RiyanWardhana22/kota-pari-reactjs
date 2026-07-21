import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const titleWords = ["DIGI", "MUSEUM"];
  const bgImages = [
    "/assets/images/bg.png",
    "/assets/images/galeri-4.jpeg",
    "/assets/images/galeri-1.png",
    "/assets/images/kdi.JPG",
  ];

  const [currentBg, setCurrentBg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="beranda"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-bgPrimary"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bgPrimary/30 to-bgPrimary/95 z-10"></div>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }} // Transisi halus 1.5 detik
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImages[currentBg]})` }}
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 text-center max-w-[1440px] px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <h1 className="font-heading font-black text-5xl md:text-8xl text-textHeading leading-tight flex flex-wrap justify-center gap-4 md:gap-8">
            {titleWords.map((word, index) => (
              <motion.span key={index} variants={itemVariants}>
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      </div>

      <div className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-end gap-3 text-textBody z-10">
        <span className="text-sm opacity-40">01</span>
        <span className="text-2xl text-textHeading font-bold relative flex items-center">
          <span className="absolute -left-8 w-6 h-[2px] bg-accentRed"></span>
          02
        </span>
        <span className="text-sm opacity-40">03</span>
        <span className="text-sm opacity-40">04</span>
      </div>
    </section>
  );
};

export default HeroSection;
