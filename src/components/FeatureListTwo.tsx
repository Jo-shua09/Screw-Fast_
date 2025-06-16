import Image from "next/image";
import personImage from "@/assets/images/features/person.avif";

export default function FeatureListTwo() {
	return (
		<div className="w-full section !mt-20">
			<div className="flex flex-wrap items-center justify-baseline gap-16 w-full">
				<div className="md:flex-1 flex flex-col gap-y-10 w-full max-w-5xl">
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
				<div className="w-full md:flex-1"></div>
			</div>
		</div>
	);
}
