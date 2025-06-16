import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type ButtonProp = { buttonText: string; wFull: boolean };

export const ButtonOne = ({ buttonText, wFull }: ButtonProp) => {
	return (
		<button
			className={`${
				wFull === true ? "lg:w-fit w-full" : "w-fit"
			} flex gap-6 items-center lg:!py-5 !py-7 text-center justify-center text-nowrap !px-6 cursor-pointer hover:scale-95 text-white  transition-all duration-300 shadow-2xl rounded-xl bg-orange-500 font-semibold text-[1.7rem]`}
		>
			{buttonText}
			<MdOutlineKeyboardArrowRight className="text-3xl lg:block hidden" />
		</button>
	);
};

export const Buttontwo = ({ buttonText, wFull }: ButtonProp) => {
	return (
		<button
			className={`${
				wFull === true ? "lg:w-fit w-full" : "w-fit"
			} flex gap-4 items-center lg:!py-5 !py-7 text-center justify-center text-nowrap !px-6 cursor-pointer hover:scale-95 text-white transition-all duration-300 shadow-2xl rounded-xl bg-neutral-600  font-semibold text-[1.7rem]`}
		>
			{buttonText}
		</button>
	);
};
