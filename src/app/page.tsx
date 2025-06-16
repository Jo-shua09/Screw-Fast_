import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

export default function Home() {
	return (
		<div className="w-full h-full">
			<div className="">
				<Hero />
				<Features />
				<Pricing />
			</div>
		</div>
	);
}
