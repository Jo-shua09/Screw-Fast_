"use client";

import Image from "next/image";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className={`w-full !text-white section-page !mt-20 bg-neutral-950`}>
      <div className="!py-16 flex items-start justify-between gap-12 w-full">
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
          <div className="w-fit">
            <Image src="/screwfast_logo.svg" alt="ScrewFast Logo" width={100} height={100} className="w-[20rem] object-contain" />
          </div>

          <div className="space-y-10 w-fit ">
            <h3 className="text-5xl !capitalize font-semibold">Ecosystem</h3>
            <ul className="space-y-8 text-3xl text-neutral-500 font-medium">
              <li className="list-none hover:text-neutral-300 cursor-pointer">documentation</li>
              <li className="list-none hover:text-neutral-300 cursor-pointer">tools & equipment</li>
              <li className="list-none hover:text-neutral-300 cursor-pointer">construction servicies</li>
            </ul>
          </div>

          <div className="space-y-10 w-fit">
            <h3 className="text-5xl !capitalize font-semibold">company</h3>
            <ul className="space-y-8 text-3xl text-neutral-500 font-medium">
              <li className="list-none hover:text-neutral-300 cursor-pointer">about us</li>
              <li className="list-none hover:text-neutral-300 cursor-pointer">blog</li>
              <li className="list-none hover:text-neutral-300 cursor-pointer">
                careers <span className="text-white p-3 rounded-xl ml-5 bg-orange-600 text-xl font-medium">we&apos;re hiring!</span>
              </li>
              <li className="list-none hover:text-neutral-300 cursor-pointer">customers</li>
            </ul>
          </div>
        </div>

        <div className="space-y-10 w-full">
          <h3 className="text-5xl !normal-case font-semibold">Stay up to date</h3>
          <div className="w-full flex items-center gap-8 bg-neutral-700 rounded-2xl p-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-white font-medium bg-neutral-500 rounded-2xl pl-4 w-full h-[6rem] text-2xl !normal-case"
            />
            <input
              type="submit"
              value="Subscribe"
              className="text-white font-medium py-5 px-7 h-[5.5rem] rounded-2xl bg-orange-500 hover:scale-95 cursor-pointer text-[1.7rem] flex items-center justify-center"
            />
          </div>
          <p className="text-3xl font-medium text-neutral-500 !normal-case">Stay updated with the latest tools and exclusive deals.</p>
        </div>
      </div>
      <div className="!pt-20 flex justify-between gap-12 m-auto">
        <p className="!normal-case text-2xl font-medium">
          © 2025 ScrewFast. All rights reserved Tuma.<span className="font-bold text-orange-600">dev</span>
        </p>
        <div className="flex items-center gap-8">
          <div className="p-4 cursor-pointer rounded-xl hover:bg-neutral-700">
            <FaFacebook className="text-4xl" />
          </div>

          <div className="p-4 cursor-pointer rounded-xl hover:bg-neutral-700">
            <FaXTwitter className="text-4xl" />
          </div>

          <div className="p-4 cursor-pointer rounded-xl hover:bg-neutral-700">
            <FaGithub className="text-4xl" />
          </div>

          <div className="p-4 cursor-pointer rounded-xl hover:bg-neutral-700">
            <FaGoogle className="text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
