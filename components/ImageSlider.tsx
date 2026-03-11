"use client";

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion } from "framer-motion";

const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/NexSkill" : "";

const slides = [
  { id: 1, image: `${prefix}/images/slider-1.png`, title: "Scale Your Business" },
  { id: 2, image: `${prefix}/images/slider-2.png`, title: "Modern Tech Solutions" },
  { id: 3, image: `${prefix}/images/slider-3.png`, title: "Collaborative Design" },
];

export default function ImageSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto relative group">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex ml-[-1rem]">
            {slides.map((slide) => (
              <div key={slide.id} className="flex-[0_0_85%] md:flex-[0_0_75%] min-w-0 pl-4 relative h-[350px] md:h-[550px]">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-lg">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority={slide.id === 1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                    <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{slide.title}</h3>
                    <div className="w-12 h-1 bg-white/40 mt-4 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 -left-4 md:-left-8 flex items-center">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-gray-900 dark:text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            ←
          </button>
        </div>
        <div className="absolute inset-y-0 -right-4 md:-right-8 flex items-center">
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-gray-900 dark:text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 z-10"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
