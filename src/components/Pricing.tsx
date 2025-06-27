"use client";

import pricingData from "@/assets/data/pricing.json";
import { FaCheckCircle } from "react-icons/fa";

const PricingSection: React.FC = () => {
	return (
		<div className="w-full section !py-30">
			<div className="w-full !space-y-3 text-center">
				<h2 className="text-6xl font-semibold">{pricingData.title}</h2>
				<p className="text-2xl text-neutral-500 font-medium !normal-case">{pricingData.subTitle}</p>
			</div>

			<div className="w-[80%] !m-auto flex items-center justify-center !mt-20">
				{/* Starter Kit */}
				<div className="bg-gray-900 rounded-xl w-[60%] !px-16 !py-20 shadow-sm">
					<div className="w-full !space-y-1">
						<h3 className="text-5xl font-semibold">{pricingData.starterKit.name}</h3>
						<p className="text-2xl font-medium !normal-case text-gray-500">{pricingData.starterKit.description}</p>
					</div>
					<div className="!py-10 !space-x-5">
						<span className="font-semibold text-5xl">
							{pricingData.starterKit.price} <span className="text-xl">{pricingData.starterKit.cents}</span>
						</span>
						<span className="text-2xl text-neutral-200 font-normal !normal-case">
							{pricingData.starterKit.billingFrequency}
						</span>
					</div>
					<ul className="!space-y-5">
						{pricingData.starterKit.features.map((feature, index) => (
							<li key={index} className="list-none flex items-center gap-4 text-2xl">
								<FaCheckCircle className="text-xl" /> {feature}
							</li>
						))}
					</ul>

					<button className="!mt-10 w-full h-[5rem] cursor-pointer hover:scale-95 transition-all duration-200 flex items-center text-center justify-center rounded-xl !p-6 text-white text-[1.7rem] font-semibold bg-neutral-500 !normal-case">
						{pricingData.starterKit.purchaseBtnTitle}
					</button>
				</div>

				{/* Professional Toolbox */}
				<div className="bg-gradient-to-r from-orange-400 to-orange-800 rounded-xl w-full !px-16 !py-20 shadow-sm">
					<div className="!py-1 !px-4 text-2xl rounded-full text-orange-800 font-semibold bg-orange-400 !float-right">
						{pricingData.badge}
					</div>
					<div className="w-full !space-y-1">
						<h3 className="text-5xl font-semibold">{pricingData.professionalToolbox.name}</h3>
						<p className="text-2xl font-medium !normal-case">{pricingData.professionalToolbox.description}</p>
					</div>
					<div className="!py-10 !space-x-5">
						<span className="font-semibold text-8xl">
							{pricingData.professionalToolbox.price}{" "}
							<span className="text-xl">{pricingData.professionalToolbox.cents}</span>
						</span>
						<span className="text-2xl text-neutral-200 font-normal !normal-case">
							{pricingData.professionalToolbox.billingFrequency}
						</span>
					</div>
					<ul className="!space-y-5">
						{pricingData.professionalToolbox.features.map((feature, index) => (
							<li key={index} className="list-none flex items-center gap-4 text-2xl">
								<FaCheckCircle className="text-xl" /> {feature}
							</li>
						))}
					</ul>

					<button className="!mt-10 w-full h-[5rem] cursor-pointer hover:scale-95 transition-all duration-200 flex items-center text-center justify-center rounded-xl !p-6 text-white text-[1.7rem] font-semibold backdrop-blur-3xl bg-orange-500/50 !normal-case">
						{pricingData.professionalToolbox.purchaseBtnTitle}
					</button>
				</div>
			</div>

			<div className="flex items-center justify-center gap-5 w-full !mt-28">
				<p className="font-medium text-2xl text-neutral-600">{pricingData.thirdOption}</p>
				<a
					href="#"
					className="bg-neutral-600 rounded-xl text-[1.7rem] flex items-center font-semibold !py-4 !px-7 hover:scale-95"
				>
					{pricingData.btnText}
				</a>
			</div>
		</div>
	);
};

export default PricingSection;
