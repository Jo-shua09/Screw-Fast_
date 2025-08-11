import { FaGithub } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="w-full section !py-30">
      <div className="!space-y-12 text-center">
        <h1 className="text-8xl font-bold">Let&apos;s Build Together</h1>
        <p className="text-4xl max-w-[110rem] m-auto !normal-case text-neutral-400">
          ScrewFast is an open-source template, meticulously crafted with Astro, Tailwind CSS, and Preline UI frameworks.
        </p>
        <button className="rounded-2xl bg-yellow-500 cursor-pointer hover:scale-95 font-medium text-[2rem] flex items-center m-auto gap-6 text-neutral-700 py-7 px-10 !normal-case">
          <FaGithub className="text-4xl" />
          Continue with Github
        </button>
      </div>
    </div>
  );
}
