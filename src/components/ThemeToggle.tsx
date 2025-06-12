"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Ensure this runs only on the client
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null; // Don't render anything on server

	return (
		<button className="text-3xl" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
			{theme === "dark" ? (
				<AiOutlineSun className="text-5xl transition-colors duration-300 cursor-pointer hover:bg-neutral-600 !p-3 rounded-full hover:text-orange-500" />
			) : (
				<FaMoon className="text-5xl transition-colors duration-300 cursor-pointer hover:bg-neutral-600 !p-3 rounded-full hover:text-orange-500" />
			)}
		</button>
	);
}
