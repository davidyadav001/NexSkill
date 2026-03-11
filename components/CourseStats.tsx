"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { courses } from "@/constants/courses";

function CourseCard({ course, index }: { course: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between h-[450px] transition-shadow cursor-default ${
        course.highlighted 
          ? "bg-brand-red text-white shadow-2xl shadow-red-900/20" 
          : "bg-brand-pink text-gray-900 shadow-xl shadow-pink-100"
      }`}
    >
      <div style={{ transform: "translateZ(60px)" }} className="mt-8">
        <div className="flex gap-4 mb-6">
           <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center p-2 backdrop-blur-sm">
              <div className="w-full h-full bg-blue-400 rounded-sm" />
           </div>
           <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center p-2 backdrop-blur-sm">
              <div className="w-full h-full bg-yellow-400 rounded-sm" />
           </div>
           <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center p-2 backdrop-blur-sm">
              <div className="w-full h-full bg-emerald-400 rounded-sm" />
           </div>
           <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center p-2 backdrop-blur-sm">
              <div className="w-full h-full bg-orange-400 rounded-sm" />
           </div>
        </div>
      </div>

      <div style={{ transform: "translateZ(80px)" }}>
        <div className="flex items-end gap-2 mb-4">
          <span className="text-7xl md:text-8xl font-bold leading-none">{course.count.split('+')[0]}</span>
          <span className="text-4xl md:text-5xl font-bold text-red-500 mb-2">+</span>
          <div className="flex flex-col ml-4">
            <h3 className="text-xl md:text-2xl font-bold">{course.title}</h3>
            <p className={`text-sm md:text-base opacity-80 ${course.highlighted ? "text-white" : "text-gray-600"}`}>
              {course.description}
            </p>
          </div>
        </div>
      </div>

      {course.highlighted && (
        <div style={{ transform: "translateZ(40px)" }} className="absolute top-8 right-8">
           <span className="text-white text-xs font-bold flex items-center gap-1 border border-white/30 px-3 py-1 rounded-full uppercase hover:bg-white hover:text-brand-red transition-all cursor-pointer">
              View all Courses →
           </span>
        </div>
      )}
    </motion.div>
  );
}

export default function CourseStats() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-16">
          <p className="text-gray-400 font-bold mb-3 uppercase tracking-widest text-sm">Explore our classes and master trending skills!</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            Dive Into <span className="text-emerald-500">What's Hot Right Now!</span> 🔥
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
