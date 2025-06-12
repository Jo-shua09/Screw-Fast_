"use client";

import Image from "next/image";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "next-themes";
import { navBarLinks } from "@/utils/navigation";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { usePathname } from "next/navigation";
import useMounted from "@/hooks/useMounted";

export default function Navbar() {
	const { theme } = useTheme();
	const pathName = usePathname();
	const mounted = useMounted();

	if (!mounted) {
		// Avoid hydration mismatch by not rendering theme-dependent stuff during SSR
		return null;
	}

	return (
		<div className="w-full !py-10">
			<div className="w-full sticky inset-0 !py-6 border backdrop-blur-xl shadow border-yellow-100/20 rounded-full !px-14 flex items-center justify-between">
				<div className="w-full h-full">
					{theme === "dark" ? (
						<Image
							src="/screwfast_logo.svg"
							alt="ScrewFast Logo"
							width={50}
							height={50}
							className="w-[10rem] object-contain"
						/>
					) : (
						<Image
							src="/screwfast_logo_dark.svg"
							alt="ScrewFast Logo"
							width={50}
							height={50}
							className="w-[10rem] object-contain"
						/>
					)}
				</div>

				<div className="w-full flex items-center gap-10  place-content-end">
					<nav className="flex items-center gap-14  border-r-[.1rem] !pr-20 border-neutral-600">
						{navBarLinks.map((navbar, index) => (
							<ul key={index}>
								<Link href={navbar.url}>
									<li
										className={`${
											pathName === navbar.url ? "text-orange-500" : ""
										} cursor-pointer text-[1.7rem] font-medium hover: transition-colors duration-300`}
									>
										{navbar.name}
									</li>
								</Link>
							</ul>
						))}
					</nav>

					<div className="flex items-center gap-16 !pl-10">
						<Link
							href="/login"
							className="flex items-center gap-3 cursor-pointer hover:text-orange-500 transition-colors duration-300"
						>
							<BiUser className="text-3xl" />
							<span className="text-[1.7rem] font-medium text-nowrap">log in</span>
						</Link>

						<ThemeToggle />
					</div>
				</div>
			</div>
		</div>
	);
}
