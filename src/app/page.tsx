import Hero from "@/components/sections/home/Hero";
import Features from "@/components/sections/home/Features";
import PricingSection from "@/components/sections/home/Pricing";
import FAQ from "@/components/sections/home/FAQ";
import Banner from "@/components/ui/Banner";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="px-20">
        <Hero />
        <Features />
        <PricingSection />
        <FAQ />
        <Banner />
      </div>
    </div>
  );
}
