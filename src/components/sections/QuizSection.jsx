import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Data Master Kuis (Berdasarkan Notulensi Sejarah Kota Pari)
const quizDatabase = [
  {
    question:
      "Apa nama tradisi tolak bala yang dilakukan nelayan Kota Pari setiap 3-5 tahun sekali?",
    options: ["Jamu Laut", "Sedekah Bumi", "Mandi Safar", "Petik Laut"],
    answer: "Jamu Laut",
  },
  {
    question:
      "Siapakah tokoh yang menginisiasi Festival Datuk Pengembara pada tahun 2006?",
    options: [
      "Syafi'i Harahap",
      "Abdul Manak",
      "Iswanto Browo",
      "Sultan Serdang",
    ],
    answer: "Iswanto Browo",
  },
  {
    question:
      "Berdasarkan legenda, terbuat dari apakah istana milik Sri Putri Cermin?",
    options: ["Emas Murni", "Pasir Kuarsa", "Batu Karang", "Kayu Jati"],
    answer: "Pasir Kuarsa",
  },
  {
    question:
      "Pantai apa yang menjadi objek wisata pertama dan memicu pariwisata Desa Kota Pari pada tahun 2004?",
    options: [
      "Pantai Cermin",
      "Pantai Mutiara 88",
      "Pantai Kuala Dewi",
      "Pantai Wong Rame",
    ],
    answer: "Pantai Wong Rame",
  },
  {
    question:
      "Menurut salah satu versi cerita, nama 'Kota Pari' juga dikaitkan dengan kedatangan pelaut dari daerah mana?",
    options: ["Palembang", "Parepare", "Pontianak", "Pariaman"],
    answer: "Parepare",
  },
];

const QuizSection = () => {
  const [gameState, setGameState] = useState("start"); // 'start', 'playing', 'result'
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswering, setIsAnswering] = useState(false);

  // Fungsi untuk mengacak urutan pertanyaan dan mengambil 4 soal
  const startQuiz = () => {
    const shuffled = [...quizDatabase]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setGameState("playing");
  };

  // Logika penanganan saat opsi dipilih
  const handleAnswer = (option) => {
    if (isAnswering) return; // Mencegah klik ganda
    setIsAnswering(true);
    setSelectedOption(option);

    const isCorrect = option === questions[currentIndex].answer;
    if (isCorrect) setScore((prev) => prev + 1);

    // Jeda 1.5 detik untuk menampilkan warna benar/salah sebelum lanjut
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
        setIsAnswering(false);
      } else {
        setGameState("result");
        setIsAnswering(false);
      }
    }, 1500);
  };

  // Menentukan gelar berdasarkan skor
  const getTitle = () => {
    if (score === 4) return "Ahli Sejarah Kota Pari 🏆";
    if (score >= 2) return "Pengamat Budaya 🧭";
    return "Pemula Pesisir 🌊";
  };

  return (
    <section className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto w-full relative z-10">
      <div className="max-w-4xl mx-auto bg-bgCard border border-borderLight rounded-3xl overflow-hidden shadow-2xl relative min-h-[450px] flex flex-col items-center justify-center p-8 md:p-12">
        {/* Efek Glow Latar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-64 bg-accentRed/10 blur-[100px] pointer-events-none"></div>

        <AnimatePresence mode="wait">
          {/* LAYAR AWAL */}
          {gameState === "start" && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-black text-textHeading mb-6">
                Seberapa Jauh Kamu Mengenal Kota Pari?
              </h2>
              <p className="text-textBody text-lg mb-10 max-w-xl mx-auto">
                Uji wawasanmu tentang sejarah, legenda, dan tradisi Desa Kota
                Pari melalui kuis interaktif ini.
              </p>
              <button
                onClick={startQuiz}
                className="bg-accentRed text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(230,57,70,0.4)] transition-all duration-300"
              >
                Mulai Quiz
              </button>
            </motion.div>
          )}

          {/* LAYAR BERMAIN */}
          {gameState === "playing" && questions.length > 0 && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full relative z-10"
            >
              {/* Progress Tracking */}
              <div className="flex justify-between items-center mb-8 text-sm font-bold text-textBody uppercase tracking-widest border-b border-borderLight pb-4">
                <span>
                  Pertanyaan {currentIndex + 1} / {questions.length}
                </span>
                <span className="text-accentRed">Skor: {score}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-heading font-bold text-textHeading mb-8 text-center leading-relaxed">
                {questions[currentIndex].question}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentIndex].options.map((option, idx) => {
                  const isSelected = selectedOption === option;
                  const isCorrectAnswer =
                    option === questions[currentIndex].answer;

                  // Menentukan warna tombol berdasarkan jawaban
                  let btnClass =
                    "bg-bgPrimary border-borderLight text-textBody hover:border-accentRed hover:text-textHeading";
                  let shake = {};

                  if (selectedOption) {
                    if (isCorrectAnswer) {
                      btnClass = "bg-green-600 border-green-500 text-white"; // Hijau jika benar
                    } else if (isSelected) {
                      btnClass = "bg-red-600 border-red-500 text-white"; // Merah jika salah
                      shake = {
                        x: [-10, 10, -10, 10, 0],
                        transition: { duration: 0.4 },
                      }; // Animasi getar
                    } else {
                      btnClass =
                        "bg-bgPrimary border-borderLight text-textBody opacity-50"; // Redupkan yang lain
                    }
                  }

                  return (
                    <motion.button
                      key={idx}
                      disabled={isAnswering}
                      animate={shake}
                      onClick={() => handleAnswer(option)}
                      className={`p-6 border rounded-xl text-left font-medium text-lg transition-all duration-300 ${btnClass}`}
                    >
                      {option}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* LAYAR HASIL */}
          {gameState === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center relative z-10 w-full"
            >
              <h2 className="text-3xl font-heading font-bold text-textBody mb-2 uppercase tracking-widest">
                Ekspedisi Selesai
              </h2>
              <div className="text-6xl md:text-8xl font-black text-textHeading my-8 font-heading">
                {score}{" "}
                <span className="text-3xl text-textBody">
                  / {questions.length}
                </span>
              </div>
              <p className="text-xl text-textBody mb-2">Gelar Anda:</p>
              <p className="text-3xl font-bold text-accentRed mb-10">
                {getTitle()}
              </p>

              <button
                onClick={startQuiz}
                className="bg-transparent border-2 border-accentRed text-accentRed px-8 py-3 rounded-full font-bold tracking-widest uppercase hover:bg-accentRed hover:text-white transition-all duration-300"
              >
                Ulangi Ekspedisi
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuizSection;
