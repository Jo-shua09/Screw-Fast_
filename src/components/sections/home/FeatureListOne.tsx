import React, { useEffect, useState } from "react";
import { FaRegNewspaper, FaUsers } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { TbUserScan } from "react-icons/tb";

type Feature = {
	heading: string;
	content: string;
	icon: string;
};

export default function FeatureListOne() {
	const [features, setFeatures] = useState<Feature[]>([]);

	const iconMap: Record<string, React.ElementType> = {
		FaUsers,
		MdOutlineVerified,
		FaRegNewspaper,
		TbUserScan,
	};

	useEffect(() => {
		fetch("/features.json")
			.then((res) => res.json())
			.then((json) => setFeatures(json))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="w-full section !py-30">
			<div className="flex items-start flex-wrap justify-between gap-10">
				<div className="w-full !space-y-6 lg:flex-[2]">
					<h3 className="text-5xl font-semibold">Meeting Industry Demands</h3>
					<p className="text-[1.7rem] !normal-case font-normal">
						At ScrewFast, we tackle the unique challenges encountered in the hardware and construction sectors. From
						cutting-edge tools to expert services, we&apos;re dedicated to helping you overcome obstacles and achieve
						your goals.
					</p>
				</div>

				<div className="w-full lg:flex-[3] grid lg:grid-cols-2 grid-cols-1 gap-16">
					{features.map((feature, index) => {
						const IconComponent = iconMap[feature.icon];
						return (
							<div className="flex items-start gap-10" key={index}>
								{IconComponent && <IconComponent className="text-[8rem] text-orange-500 h-fit" />}
								<div className="!space-y-6">
									<h4 className="text-4xl font-semibold">{feature.heading}</h4>
									<p className="text-[1.7rem] !normal-case font-normal">{feature.content}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
