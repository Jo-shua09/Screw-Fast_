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
		<div className="w-full h-full flex !flex-wrap lg:!mt-0 !mt-20 lg:!flex-nowrap items-center justify-between gap-20">
			<div className="w-full lg:flex-1 text-center lg:text-left">
				<h1 className="text-8xl lg:leading-30 font-semibold">
					Equip Your Projects with <span className="text-yellow-500">ScrewFast</span>
				</h1>

				<p className=" font-normal !normal-case text-[1.7rem] lg:!py-10 !py-7">
					Top-quality hardware tools and expert construction services for every project need.
				</p>

				<div className="flex items-center gap-x-5 gap-y-10 justify-center lg:justify-start lg:flex-nowrap flex-wrap">
					<ButtonOne wFull={true} buttonText="start exploring" />
					<Buttontwo wFull={true} buttonText="contact sales team" />
				</div>

				<div className="w-full flex items-center gap-5 !mt-16 lg:justify-start justify-center">
					<div className="flex items-center border-r-[.1rem] border-neutral-600 !pr-16 relative">
						<Image src={personOne} alt="Person One" width={30} height={30} className="rounded-full" />
						{[personTwo, personThree, personFour].map((person, index) => (
							<Image
								key={index}
								src={person}
								alt={`Person ${index + 2}`}
								width={30}
								height={30}
								className="rounded-full !-ml-5"
							/>
						))}
						<div className="bg-black rounded-full text-white font-semibold text-2xl absolute right-3 sm:right-4 md:right-6 lg:right-8 w-[30px] h-[30px] flex items-center justify-center">
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
						<p className="text-2xl font-medium text-nowrap">
							From Over <span className="font-semibold">12.8k</span> Reviews
						</p>
					</div>
				</div>
			</div>

			<div className="w-full lg:flex-1 lg:place-content-end place-content-center flex">
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
