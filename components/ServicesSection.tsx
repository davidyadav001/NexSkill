"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { services } from "@/constants/services";
import { FiCode, FiLayout, FiLink } from "react-icons/fi";

const icons = {
  "ui-ux": FiLayout,
  "development": FiCode,
  "blockchain": FiLink,
};

function ServiceCard({ service, index }: { service: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 150 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 150 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

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

  const Icon = icons[service.id as keyof typeof icons] || FiCode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-default"
    >
      <div style={{ transform: "translateZ(50px)" }} className="w-16 h-16 bg-brand-pink text-brand-red rounded-2xl flex items-center justify-center mb-8">
        <Icon size={32} />
      </div>
      <h3 style={{ transform: "translateZ(70px)" }} className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p style={{ transform: "translateZ(40px)" }} className="text-gray-600 leading-relaxed">
        {service.description}
      </p>
      <button style={{ transform: "translateZ(60px)" }} className="mt-8 text-brand-red font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
        Learn More <span>→</span>
      </button>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We deliver top-tier digital experiences by combining artistic design with robust engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
