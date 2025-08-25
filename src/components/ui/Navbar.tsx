"use client";

// import useMounted from "@/hooks/useMounted";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "next-themes";
import { navBarLinks } from "@/utils/navigation";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { ButtonOne } from "../Button";

export default function Navbar() {
  // const mounted = useMounted();
  const { theme } = useTheme();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  // const handleOpen = () => {
  //   setIsOpen(!isOpen);
  // };

  window.onscroll = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpen = () => {
    if (isOpen) {
      // Closing animation
      setIsTranslating(false);
      setTimeout(() => setIsOpen(false), 1000);
    } else {
      // Opening animation
      setIsOpen(true);
      setTimeout(() => setIsTranslating(true), 10);
    }
  };

  // if (!mounted) {
  //   // Avoid hydration mismatch by not rendering theme-dependent stuff during SSR
  //   return null;
  // }

  return (
    <div className="w-full !py-10 relative">
      <div className="px-20">
        <div className="w-full sticky top-0 z-50 !py-10 lg:!py-6 border backdrop-blur-2xl bg-transparent shadow border-yellow-100/20 rounded-full !px-14 flex items-center justify-between">
          <div className="w-full h-full">
            {theme === "dark" ? (
              <Image src="/screwfast_logo.svg" alt="ScrewFast Logo" width={50} height={50} className="w-[10rem] object-contain" />
            ) : (
              <Image src="/screwfast_logo_dark.svg" alt="ScrewFast Logo" width={50} height={50} className="w-[10rem] object-contain" />
            )}
          </div>

          <div className="md:hidden flex items-center gap-12">
            <ThemeToggle />

            <div onClick={handleOpen} className="cursor-pointer hover:scale-95">
              <HiMenu className="text-5xl" />
            </div>
          </div>

          <div className="w-full hidden md:flex items-center gap-10  place-content-end">
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
              <Link href="/login" className="flex items-center gap-3 cursor-pointer hover:text-orange-500 transition-colors duration-300">
                <BiUser className="text-3xl" />
                <span className="text-[1.7rem] font-medium text-nowrap">log in</span>
              </Link>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="w-full fixed top-0 left-0 h-screen z-50 overflow-hidden">
          {/* Overlay - slides in first */}
          <div
            className={`w-full absolute top-0 right-0 left-0 bg-neutral-900/80 h-screen transition-transform duration-1000 ${
              isTranslating ? "translate-x-0" : "translate-x-full"
            }`}
          ></div>

          {/* Content panel - slides in after 1 second delay */}
          <div
            className={`w-[70%] absolute top-0 right-0 bg-neutral-900 relative shadow-xl flex flex-col px-12 h-full transition-transform duration-1000 ${
              isTranslating ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ transitionDelay: isTranslating ? "0.1s" : "0s" }}
          >
            <div className="absolute cursor-pointer hover:scale-95 top-5 right-5 z-10">
              <CgClose size={28} onClick={handleOpen} className="text-white" />
            </div>

            <div className="space-y-12 flex flex-col justify-center h-full">
              {navBarLinks.map((navbar, index) => (
                <ul key={index}>
                  <a href={navbar.url} onClick={handleOpen} className="flex flex-col">
                    <li
                      className={`${
                        false ? "text-orange-500" : "text-white"
                      } cursor-pointer text-4xl block font-medium hover:tracking-wider transition-all duration-300 hover:text-orange-500`}
                    >
                      {navbar.name}
                    </li>
                  </a>
                </ul>
              ))}
              <div className="pt-8">
                <ButtonOne icon={<BiUser size={18} />} buttonText="login" wFull={true} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
