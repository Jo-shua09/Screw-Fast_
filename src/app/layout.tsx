import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
	title: "ScrewFast",
	description: "ScrewFast - Your Fast and Reliable Screw Supplier",
};

const font = Inter({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
			<body className={`${font.className} !px-10 md:!px-20 antialiased max-w-[180rem] w-full !m-auto`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Navbar />
					<div className=" max-w-[168rem] !m-auto w-full lg:!px-10">
						<main>{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
