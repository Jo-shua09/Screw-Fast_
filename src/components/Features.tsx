"use client";

import Image from "next/image";
import featureImage from "@/assets/images/features/features-image.avif";
import companyOne from "@/assets/images/features/companyOne.png";
import companyTwo from "@/assets/images/features/companyTwo.png";
import companyThree from "@/assets/images/features/companyThree.png";
import companyFour from "@/assets/images/features/companyFour.png";
import companyFive from "@/assets/images/features/companyFive.png";
import companySix from "@/assets/images/features/companySix.png";
import GlareHover from "./animations/GlareHover";
import FeatureListOne from "./FeatureListOne";
import { useTheme } from "next-themes";
import FeatureShowcase from "./FeatureShowcase";
import FeatureListTwo from "./FeatureListTwo";

export default function Features() {
	const { theme } = useTheme();

	return (
		<div className="w-full section !py-30">
			<header className="flex flex-col gap-y-16 items-center justify-center text-center">
				<div className="!space-y-2">
					<h3 className="text-5xl font-semibold !normal-case">Trusted by Industry Leaders</h3>
					<p className="text-[1.7rem] font-medium !normal-case text-neutral-600">
						Experience the reliability chosen by industry giants.
					</p>
				</div>

				<div className="flex items-center flex-wrap gap-x-20 gap-y-10 justify-center w-fit overflow-hidden">
					{[companyOne, companyTwo, companyFour, companyFive, companySix].map((company, index) => {
						const altText = `Company ${["One", "Two", "Four", "Five", "Six"][index]}`;
						const isDark = theme === "light";
						const isCompanyThreeReplacement = index === 0 && !isDark; // Replace companyOne with companyThree in light mode

						return (
							<Image
								key={index}
								src={isCompanyThreeReplacement ? companyThree : company}
								alt={altText}
								width={250}
								height={150}
								className={`w-[20rem] h-[7rem] object-contain ${
									!isDark ? "bg-neutral-600/50 !px-5 !py-1" : "bg-neutral-600 !px-5 !py-1"
								}`}
							/>
						);
					})}
				</div>
			</header>

			<div className="w-fit h-full !m-auto !mt-30">
				<GlareHover
					glareColor="#ffffff"
					glareOpacity={0.3}
					glareAngle={-30}
					glareSize={300}
					transitionDuration={800}
					playOnce={false}
				>
					<Image
						src={featureImage}
						alt="Featured image"
						width={850}
						height={800}
						className="w-full h-full object-contain"
					/>
				</GlareHover>
			</div>

			<FeatureListOne />
			<FeatureShowcase />
			<FeatureListTwo />
		</div>
	);
}
