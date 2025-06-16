import { BsBuildings } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { IoAppsSharp } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
import { features } from "@/assets/data_files/features";

export default function FeatureShowcase() {
	const [activeImage, setActiveImage] = useState<number>(0);

	const iconMap: Record<string, React.ElementType> = {
		BsBuildings,
		FaTools,
		IoAppsSharp,
	};

	return (
		<div className="w-full section !m-auto">
			<div className="flex items-center lg:flex-row flex-col w-fit !m-auto">
				<div className="w-fit lg:!-mr-28 z-10 lg:!-mb-0 !-mb-30">
					{features.map((feature, index) => (
						<div
							key={index}
							className={`transition-opacity duration-300 lg:!px-0 !px-20 ${
								activeImage === index ? "opacity-100" : "opacity-0 absolute top-0 left-0"
							}`}
							style={{ display: activeImage === index ? "block" : "none" }}
						>
							<Image
								src={feature.image}
								alt={`showcase image ${index + 1}`}
								width={1000}
								height={1000}
								className={feature.imageClass}
							/>
						</div>
					))}
				</div>

				<div className="w-fit rounded-2xl bg-neutral-800 lg:!py-56 !py-28 !pt-52 !px-14 !m-auto flex lg:!pl-56 lg:!pr-20">
					<div className="w-full max-w-4xl place-self-end">
						<h2 className="text-5xl font-semibold !normal-case text-white">
							Customize <span className="text-yellow-500">ScrewFast&apos;s</span> offerings to perfectly suit your
							hardware and construction needs.
						</h2>

						<div className="flex flex-col gap-10 !mt-16">
							{features.map((feature, index) => {
								const Icon = iconMap[feature.icon];
								return (
									<div
										key={index}
										className={`w-full rounded-2xl md:!p-10 !p-5 cursor-pointer transition-colors duration-200 hover:shadow-[1px_1px_2px_rgba(0,0,0,0.5)] flex gap-5 items-start ${
											activeImage === index ? "bg-neutral-700" : "hover:bg-neutral-700"
										}`}
										onClick={() => setActiveImage(index)}
									>
										<Icon className={`${activeImage === index ? "text-orange-500" : "text-white"} text-7xl h-fit`} />
										<div className="!space-y-6">
											<h4
												className={` 
												${activeImage === index ? "text-orange-500" : "text-white"}
												text-3xl font-semibold`}
											>
												{feature.title}
											</h4>
											<p className="text-2xl text-neutral-400 font-normal !normal-case">{feature.description}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
