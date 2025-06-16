"use client";

import { useEffect, useState } from "react";

export default function Pricing() {
	const [pricing, setPricing] = useState<string[]>([]);

	useEffect(() => {
		fetch("/pricing.json")
			.then((res) => res.json())
			.then((json) => setPricing(json))
			.catch((err) => console.error("Error fetching pricing data:", err));
	});

	return (
		<div className="w-full section">
			<header className="text-center !mb-20">
				<h3 className="text-5xl font-semibold">Simple, Transparent Pricing</h3>
				<p className="text-[1.7rem] font-medium !normal-case text-neutral-500 !mt-2">
					Boost efficiency with ScrewFast&apos;s clear, value-driven plans.
				</p>
			</header>

			<div className="w-full flex !m-auto">
				<div className=""></div>
			</div>
		</div>
	);
}
