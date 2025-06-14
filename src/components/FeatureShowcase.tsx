import { BiHotel } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { GrDashboard } from "react-icons/gr";

export default function FeatureShowcase() {
	return (
		<div className="w-full section">
			<div className="flex items-center">
				<div className="w-full">
					
				</div>

				<div className="w-full rounded-xl bg-neutral-800 !py-56 !pl-56 !pr-20 ">
					<div className="w-full max-w-4xl place-self-end">
						<h2 className="text-5xl font-semibold !normal-case text-white">
							Customize <span className="text-yellow-500">ScrewFast&apos;s</span> offerings to perfectly suit your
							hardware and construction needs.
						</h2>
						<div className="flex flex-col gap-10 !mt-16">
							<div className="w-full rounded-xl !p-10 cursor-pointer hover:bg-neutral-700 transition-colors duration-200 hover:shadow-[1px_1px_2px_rgba(0,0,0,0.5)] flex gap-5 items-start">
								<FaTools className={`text-6xl text-white h-fit`} />
								<div className="!space-y-6">
									<h4 className={`text-3xl font-semibold text-white`}>cutting-Edge tools</h4>
									<p className="text-2xl text-neutral-400 font-normal !normal-case">
										Empower your projects wiwth ScrewFast&apos;s cutting-edge-tools. Experience enhanced efficiency in
										construction management with our sophisticated automated solutions
									</p>
								</div>
							</div>

							<div className="w-full rounded-xl !p-10 cursor-pointer hover:bg-neutral-700 transition-colors duration-200 hover:shadow-[1px_1px_2px_rgba(0,0,0,0.5)] flex gap-5 items-start">
								<GrDashboard className={`text-white text-6xl h-fit`} />
								<div className="!space-y-6">
									<h4 className={`text-3xl font-semibold text-white`}>intuitive dashboard</h4>
									<p className="text-2xl text-neutral-400 font-normal !normal-case">
										Navigate with ease using ScrewFast&apos;s intuitive dashboards. Set up and oversee your projects
										seamlessly, with iser-friendly interfaces designed for quick and effective workflow management.
									</p>
								</div>
							</div>

							<div className="w-full rounded-xl !p-10 cursor-pointer hover:bg-neutral-700 transition-colors duration-200 hover:shadow-[1px_1px_2px_rgba(0,0,0,0.5)] flex gap-5 items-start">
								<BiHotel className={`text-6xl text-white h-fit`} />
								<div className="!space-y-6">
									<h4 className={`text-3xl font-semibold text-white`}>robust features</h4>
									<p className="text-2xl text-neutral-400 font-normal !normal-case">
										Minimize complexity, maximize productivity. ScrewFast&apos;s robust features are engineered to
										streamline your construction process, delivering results that stand out for their existence.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
