"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-gray-800 mb-8">
            Experience our expert solutions tailored to enhance your business with top-tier design, development, and animation.
          </h1>
          <button 
            onClick={scrollToServices}
            className="bg-[#1D4ED8] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Services
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-2 text-right md:text-left"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
            UI & UX
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
            Development
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
            Blockchain
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
