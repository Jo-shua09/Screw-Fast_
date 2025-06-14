import showcaseImageOne from "@/assets/images/features/automated-tools.avif";
import showcaseImageTwo from "@/assets/images/features/construction-image.avif";
import showcaseImageThree from "@/assets/images/features/dashboard-image.avif";

export const features = [
	{
		icon: "FaTools",
		title: "cutting-Edge tools",
		description:
			"Empower your projects with ScrewFast's cutting-edge-tools. Experience enhanced efficiency in construction management with our sophisticated automated solutions",
		image: showcaseImageOne,
		imageClass:
			"lg:w-[60rem] lg:h-[55%] w-[50rem] h-full object-contain rounded-2xl !shadow-[1px_1px_2px_rgba(0,0,0,0.5)]",
	},
	{
		icon: "IoAppsSharp",
		title: "intuitive dashboard",
		description:
			"Navigate with ease using ScrewFast's intuitive dashboards. Set up and oversee your projects seamlessly, with user-friendly interfaces designed for quick and effective workflow management.",
		image: showcaseImageTwo,
		imageClass:
			"lg:w-[60rem] lg:h-[80rem] w-[50rem] h-full object-cover rounded-2xl !shadow-[1px_1px_2px_rgba(0,0,0,0.5)]",
	},
	{
		icon: "BsBuildings",
		title: "robust features",
		description:
			"Minimize complexity, maximize productivity. ScrewFast's robust features are engineered to streamline your construction process, delivering results that stand out for their existence.",
		image: showcaseImageThree,
		imageClass:
			"lg:w-[60rem] lg:h-[55%] bg-neutral-700 !p-3 w-[50rem] h-full object-contain rounded-2xl !shadow-[1px_1px_2px_rgba(0,0,0,0.5)]",
	},
];
