import React from "react";
import { FaRegNewspaper, FaUsers } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { TbUserScan } from "react-icons/tb";

export default function FeatureListOne() {
	return (
		<div className="w-full section !py-30">
			<div className="grid lg:grid-cols-3 grid-cols-1 gap-16 w-full">
				<div className="w-full !space-y-6">
					<h3 className="text-5xl font-semibold">Meeting Industry Demands</h3>
					<p className="text-[1.7rem] !normal-case font-normal">
						At ScrewFast, we tackle the unique challenges encountered in the hardware and construction sectors. From
						cutting-edge tools to expert services, we&apos;re dedicated to helping you overcome obstacles and achieve
						your goals.
					</p>
				</div>

				<div className="w-full flex flex-col gap-y-20">
					<div className="flex items-start gap-10">
						<FaUsers className="text-[8rem] text-orange-500 h-fit" />
						<div className="!space-y-6">
							<h4 className="text-4xl font-semibold">Dedicated Teams</h4>
							<p className="text-[1.7rem] !normal-case font-normal">
								Benefit from our committed teams who ensure your success is personal. Count on expert guidance and
								exceptional results throughout your project journey.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-10">
						<FaRegNewspaper className="text-[8rem] text-orange-500 h-fit" />
						<div className="!space-y-6">
							<h4 className="text-4xl font-semibold">Comprehensive Documentation</h4>
							<p className="text-[1.7rem] !normal-case font-normal">
								Integrate with ease using ScrewFast&apos;s exhaustive guides and libraries. Achieve seamless product
								adoption with our full suite of documentation designed for your success.
							</p>
						</div>
					</div>
				</div>

				<div className="w-full flex flex-col gap-y-20">
					<div className="flex items-start gap-10">
						<MdOutlineVerified className="text-[8rem] text-orange-500 h-fit" />
						<div className="!space-y-6">
							<h4 className="text-4xl font-semibold">Simplicity and Affordability</h4>
							<p className="text-[1.7rem] !normal-case font-normal">
								Find easy-to-use, affordable solutions with ScrewFast&apos;s line of tools and equipment. Our products
								make procurement simple and keep projects within budget.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-10">
						<TbUserScan className="text-[8rem] text-orange-500 h-fit" />
						<div className="!space-y-6">
							<h4 className="text-4xl font-semibold"> User-Centric Design</h4>
							<p className="text-[1.7rem] !normal-case font-normal">
								Experience the difference with ScrewFast&apos;s user-focused design — where functionality meets
								practicality for an enhanced work experience.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
