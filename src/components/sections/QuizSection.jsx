import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Play,
  CheckCircle2,
  XCircle,
  BrainCircuit,
} from "lucide-react";

// Data Master Kuis
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
  const [gameState, setGameState] = useState("start");
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswering, setIsAnswering] = useState(false);

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

  const handleAnswer = (option) => {
    if (isAnswering) return;
    setIsAnswering(true);
    setSelectedOption(option);

    const isCorrect = option === questions[currentIndex].answer;
    if (isCorrect) setScore((prev) => prev + 1);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
        setIsAnswering(false);
      } else {
        setGameState("result");
        setIsAnswering(false);
      }
    }, 1800); // Sedikit diperlama agar user bisa melihat feedback ikon
  };

  const getTitle = () => {
    if (score === 4) return "Sesepuh";
    if (score >= 2) return "Medium";
    return "Amatir";
  };

  return (
    <section className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto w-full relative z-10">
      <div className="max-w-4xl mx-auto backdrop-blur-xl border border-borderLight rounded-3xl overflow-hidden shadow-2xl relative min-h-[500px] flex flex-col items-center justify-center p-8 md:p-12">
        <AnimatePresence mode="wait">
          {/* ================= LAYAR AWAL ================= */}
          {gameState === "start" && (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -30 }}
              className="text-center relative z-10 flex flex-col items-center"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-black text-textHeading mb-4">
                WAKTUNYAA QUIZZ
              </h2>
              <p className="text-textBody text-lg mb-10 max-w-lg mx-auto">
                Ayooo jawab quizz yaa! Seberapa jauh kamu mengenal sejarah,
                legenda, dan tradisi Desa Kota Pari?
              </p>
              <button
                onClick={startQuiz}
                className="group flex items-center gap-4 bg-accentRed text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:shadow-[0_10px_30px_rgba(230,57,70,0.4)] transition-all duration-300"
              >
                Mulai Kuis
              </button>
            </motion.div>
          )}

          {/* ================= LAYAR BERMAIN ================= */}
          {gameState === "playing" && questions.length > 0 && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full relative z-10 flex flex-col h-full"
            >
              {/* Top Bar: Progress & Score */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold text-textBody uppercase tracking-widest">
                  Soal {currentIndex + 1}{" "}
                  <span className="text-textBody/50">/ {questions.length}</span>
                </span>
                <div className="bg-bgPrimary border border-borderLight px-4 py-1.5 rounded-full">
                  <span className="text-sm font-bold text-accentRed uppercase tracking-widest">
                    Skor: {score}
                  </span>
                </div>
              </div>

              {/* Visual Progress Bar */}
              <div className="w-full h-2 bg-bgPrimary rounded-full mb-10 overflow-hidden border border-borderLight">
                <motion.div
                  className="h-full bg-accentRed"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((currentIndex + 1) / questions.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              {/* Question */}
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-textHeading mb-10 text-center leading-relaxed max-w-3xl mx-auto">
                {questions[currentIndex].question}
              </h3>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                {questions[currentIndex].options.map((option, idx) => {
                  const isSelected = selectedOption === option;
                  const isCorrectAnswer =
                    option === questions[currentIndex].answer;
                  const letter = String.fromCharCode(65 + idx); // A, B, C, D

                  // Dynamic Classes based on selection state
                  let btnClass =
                    "bg-bgPrimary border-borderLight text-textBody hover:border-textBody hover:bg-bgPrimary/80";
                  let letterClass =
                    "bg-bgCard text-textBody group-hover:bg-textBody group-hover:text-bgPrimary";
                  let shake = {};

                  if (selectedOption) {
                    if (isCorrectAnswer) {
                      btnClass = "bg-green-600/20 border-green-500 text-white";
                      letterClass = "bg-green-500 text-white";
                    } else if (isSelected) {
                      btnClass = "bg-red-600/20 border-red-500 text-white";
                      letterClass = "bg-red-500 text-white";
                      shake = {
                        x: [-8, 8, -8, 8, 0],
                        transition: { duration: 0.4 },
                      };
                    } else {
                      btnClass =
                        "bg-bgPrimary border-borderLight text-textBody opacity-40";
                      letterClass = "bg-bgCard text-textBody";
                    }
                  }

                  return (
                    <motion.button
                      key={idx}
                      disabled={isAnswering}
                      animate={shake}
                      whileHover={!isAnswering ? { scale: 1.02 } : {}}
                      whileTap={!isAnswering ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswer(option)}
                      className={`relative flex items-center p-4 border-2 rounded-2xl text-left font-medium text-lg transition-all duration-300 group ${btnClass}`}
                    >
                      {/* Label Huruf A/B/C/D */}
                      <span
                        className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl text-sm font-bold mr-4 transition-colors duration-300 ${letterClass}`}
                      >
                        {letter}
                      </span>

                      <span className="flex-1 pr-8">{option}</span>

                      {/* Feedback Icon Muncul saat opsi diklik */}
                      {selectedOption && isCorrectAnswer && (
                        <CheckCircle2 className="absolute right-4 w-6 h-6 text-green-500 animate-in fade-in zoom-in" />
                      )}
                      {selectedOption && isSelected && !isCorrectAnswer && (
                        <XCircle className="absolute right-4 w-6 h-6 text-red-500 animate-in fade-in zoom-in" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ================= LAYAR HASIL ================= */}
          {gameState === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center relative z-10 w-full flex flex-col items-center"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.3)] mb-8"
              >
                <Trophy className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-2xl font-heading font-bold text-textBody mb-2 uppercase tracking-widest">
                Kuis Selesai!
              </h2>

              <div className="text-7xl md:text-8xl font-black text-textHeading my-6 font-heading flex items-baseline justify-center gap-2">
                {score}{" "}
                <span className="text-3xl text-textBody/50 font-bold">
                  / {questions.length}
                </span>
              </div>

              <div className="bg-bgPrimary border border-borderLight px-8 py-4 rounded-2xl mb-10">
                <p className="text-sm text-textBody mb-1 uppercase tracking-widest">
                  Gelar Pencapaian:
                </p>
                <p className="text-2xl font-bold text-accentRed">
                  {getTitle()}
                </p>
              </div>

              <button
                onClick={startQuiz}
                className="bg-transparent border-2 border-textBody text-textBody px-8 py-3 rounded-full font-bold tracking-widest uppercase hover:bg-textHeading hover:border-textHeading hover:text-bgPrimary transition-all duration-300"
              >
                Coba Lagi
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuizSection;
