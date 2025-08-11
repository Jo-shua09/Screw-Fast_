import Hero from "@/components/sections/home/Hero";
import Features from "@/components/sections/home/Features";
import PricingSection from "@/components/sections/home/Pricing";
import FAQ from "@/components/sections/home/FAQ";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="">
        <Hero />
        <Features />
        <PricingSection />
        <FAQ />
      </div>
    </div>
  );
}
