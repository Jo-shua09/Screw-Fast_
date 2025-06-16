import Image from "next/image";
import personImage from "@/assets/images/features/person.avif";
import { BsArrowUp } from "react-icons/bs";

export default function FeatureListTwo() {
	return (
		<div className="w-full section !mt-20">
			<div className="flex flex-wrap items-center justify-between gap-30 w-full">
				<div className="md:flex-[2] flex flex-col gap-y-10 w-full max-w-5xl">
					<div className="!space-y-3">
						<h1 className="font-semibold text-6xl text-nowrap">Fast-Track Your Projects</h1>
						<p className="text-[1.7rem] text-neutral-500 !normal-case font-normal">
							At ScrewFast, we ensure a swift start with instant account setup. Experience the speed of construction
							redefined.
						</p>
					</div>

					<div className="!space-y-6">
						<p className="text-4xl font-medium !normal-case italic">
							ScrewFast dramatically boosted our project efficiency. Setup was instant, and their rapid response times
							are phenomenal. Truly a game-changer in hardware and construction support!
						</p>
						<div className="flex items-center gap-5 !pt-5">
							<Image
								src={personImage}
								alt="Person Image"
								width={100}
								height={100}
								className="rounded-full w-[4.5rem] h-[4.5rem] object-cover shadow-lg"
							/>
							<div className="!space-y-1">
								<h4 className="text-3xl font-semibold">Samantha Ruiz</h4>
								<p className="text-2xl font-normal text-neutral-500">Chief Operating Officer | ConstructIt Inc.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="relative !mx-auto h-auto w-full max-w-5xl !py-12 md:h-96">
					<div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gray-300 md:block"></div>

					<div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-300"></div>

					<div className="!mb-12 md:absolute md:left-0 md:top-0 md:!mb-0 md:h-1/2 md:w-1/2 flex flex-col items-center justify-center !p-4">
						<div className="!space-y-6">
							<h1 className="text-7xl font-bold">70k+</h1>
							<p className="text-neutral-500 font-medium normal-case text-3xl">
								customers equipped — from DIY to major construction firms
							</p>
						</div>
					</div>

					<div className="!mb-12 md:absolute md:right-0 md:top-0 md:!mb-0 md:h-1/2 md:w-1/2 flex flex-col items-center justify-center !p-4">
						<div className="!space-y-6">
							<div className="flex items-end gap-3">
								<BsArrowUp className="text-4xl text-orange-500" />
								<h1 className="text-7xl font-bold">35%</h1>
							</div>
							<p className="text-neutral-500 font-medium normal-case text-3xl">
								uptick in project efficiency with ScrewFast tools and services
							</p>
						</div>
					</div>

					<div className="!mb-12 md:absolute md:bottom-0 md:left-0 md:!mb-0 md:h-1/2 md:w-1/2 flex flex-col items-center justify-center !p-4">
						<div className="!space-y-6">
							<div className="flex items-end gap-3">
								<BsArrowUp className="text-4xl text-orange-500" />
								<h1 className="text-7xl font-bold">15.3%</h1>
							</div>
							<p className="text-neutral-500 font-medium normal-case text-3xl">
								reduction in maintenance costs reported by long-term clients
							</p>
						</div>
					</div>

					<div className="md:absolute md:bottom-0 md:right-0 md:h-1/2 md:w-1/2 flex flex-col items-center justify-center !p-4">
						<div className="!space-y-6">
							<h1 className="text-7xl font-bold">2x</h1>
							<p className="text-neutral-500 font-medium normal-case text-3xl">
								quicker asse!mbly using innovative fastening solutions
							</p>
						</div>
					</div>
				</div>

				{/* <div className="w-full md:flex-1 grid grid-cols-1 lg:grid-cols-2 !space-y-10 max-w-4xl">
					<div className="!space-y-6">
						<h1 className="text-7xl font-bold">70k+</h1>
						<p className="text-neutral-500 font-medium !normal-case text-3xl">
							customers equipped — from DIY to major construction firms
						</p>
					</div>
					<hr className="border w-px h-full" />
					<div className="!space-y-6">
						<div className="flex items-end gap-3">
							<BsArrowUp className="text-4xl text-orange-500" />
							<h1 className="text-7xl font-bold">35%</h1>
						</div>
						<p className="text-neutral-500 font-medium !normal-case text-3xl">
							uptick in project efficiency with ScrewFast tools and services
						</p>
					</div>
					<hr className="border h-px w-full" />
					<hr className="border h-px w-full" />

					<div className="!space-y-6">
						<div className="flex items-end gap-3">
							<BsArrowUp className="text-4xl text-orange-500" />
							<h1 className="text-7xl font-bold">15.3%</h1>
						</div>
						<p className="text-neutral-500 font-medium !normal-case text-3xl">
							reduction in maintenance costs reported by long-term clients
						</p>
					</div>
					<div className="!space-y-6">
						<h1 className="text-7xl font-bold">2x</h1>
						<p className="text-neutral-500 font-medium !normal-case text-3xl">
							quicker asse!mbly using innovative fastening solutions{" "}
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
}
