"use client";

import React, { useRef } from "react";
import { partners } from "@/constants/partners";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function PartnerCard({ partner, index }: { partner: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["30deg", "-30deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-30deg", "30deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative flex items-center gap-4 grayscale hover:grayscale-0 transition-all cursor-pointer p-6 rounded-2xl hover:bg-white hover:shadow-2xl"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative w-12 h-12 md:w-16 md:h-16"
      >
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain"
        />
      </div>
      <span 
        style={{ transform: "translateZ(30px)" }}
        className="text-xl md:text-2xl font-bold text-gray-800"
      >
        {partner.name}
      </span>
    </motion.div>
  );
}

export default function PartnersSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-gray-400 font-bold mb-16 uppercase tracking-widest text-sm">
          Our Partners
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.name} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
