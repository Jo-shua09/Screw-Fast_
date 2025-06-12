"use client";

import Image from "next/image";
import featureImage from "@/assets/images/features-image.avif";
import GlareHover from "./animations/GlareHover";
import FeatureListOne from "./FeatureListOne";

export default function Features() {
	return (
		<div className="w-full section">
			<header className="flex flex-col gap-y-16 items-center justify-center text-center">
				<div className="!space-y-2">
					<h3 className="text-5xl font-semibold !normal-case">Trusted by Industry Leaders</h3>
					<p className="text-[1.7rem] font-medium !normal-case text-neutral-600">
						Experience the reliability chosen by industry giants.
					</p>
				</div>

				<div className="flex items-center gap-10 justify-center w-full">hello</div>
			</header>

			<div className="w-fit h-full !m-auto !mt-20">
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

			<div className="w-full">
				<FeatureListOne />
			</div>
		</div>
	);
}
