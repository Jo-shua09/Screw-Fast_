"use client";

import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { ButtonOne, Buttontwo } from "./Button";
import Image from "next/image";
import HeroImage from "@/assets/images/hero-image.avif";
import personOne from "@/assets/images/person/personOne.webp";
import personTwo from "@/assets/images/person/personTwo.webp";
import personThree from "@/assets/images/person/personThree.webp";
import personFour from "@/assets/images/person/personFour.webp";

import GlareHover from "./animations/GlareHover";

export default function Hero() {
	return (
		<div className="w-full h-full  flex items-center justify-between flex-wrap md:flex-nowrap gap-10">
			<div className="w-full md:flex-1">
				<h1 className="text-8xl leading-30 font-semibold">
					Equip Your Projects with <span className="text-yellow-500">ScrewFast</span>
				</h1>

				<p className=" font-normal !normal-case text-[1.7rem] !py-10">
					Top-quality hardware tools and expert construction services for every project need.
				</p>

				<div className="flex items-center gap-5 sm:flex-nowrap flex-wrap">
					<ButtonOne wFull={true} buttonText="start exploring" />
					<Buttontwo wFull={true} buttonText="contact sales team" />
				</div>

				<div className="w-full flex items-center gap-5 !mt-16">
					<div className="flex items-center border-r-[.1rem] border-neutral-600 !pr-16">
						<Image src={personOne} alt="Person One" width={30} height={30} className="rounded-full" />
						<Image src={personTwo} alt="Person Two" width={30} height={30} className="rounded-full !-ml-5" />
						<Image src={personThree} alt="Person Three" width={30} height={30} className="rounded-full !-ml-5" />
						<Image src={personFour} alt="Person Four" width={30} height={30} className="rounded-full !-ml-5" />
						<div className="bg-black rounded-full text-white font-semibold text-2xl !-ml-5 w-[30px] h-[30px] flex items-center justify-center">
							7k+
						</div>
					</div>

					<div className="!pl-10 flex flex-col">
						<div className="items-center flex gap-5">
							<div className="flex items-center gap-2">
								{Array(4)
									.fill(0)
									.map((_, index) => (
										<BsStarFill key={index} className="text-2xl text-yellow-500" />
									))}
								<BsStarHalf className="text-2xl text-yellow-500" />
							</div>
							<span className="text-2xl font-semibold">4.8/5</span>
						</div>
						<p className="text-2xl font-medium">
							From Over <span className="font-semibold">12.8k</span> Reviews
						</p>
					</div>
				</div>
			</div>

			<div className="w-full md:flex-1 place-content-end flex">
				<GlareHover
					glareColor="#ffffff"
					glareOpacity={0.3}
					glareAngle={-30}
					glareSize={300}
					transitionDuration={800}
					playOnce={false}
				>
					<Image src={HeroImage} alt="Hero Image" width={800} height={800} className="w-full h-full object-contain" />
				</GlareHover>
			</div>
		</div>
	);
}
