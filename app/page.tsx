import HeroSection from "@/components/HeroSection";
import CourseStats from "@/components/CourseStats";
import ImageSlider from "@/components/ImageSlider";
import PartnersSection from "@/components/PartnersSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <ImageSlider />
      <PartnersSection />
      <CourseStats />

      {/* Footer minimal */}
      <footer className="py-12 border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} NexSkill. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
