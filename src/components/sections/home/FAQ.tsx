"use client";

import { useState } from "react";
import faqData from "@/assets/data/faqs.json";
import { IoIosArrowDown } from "react-icons/io";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full section !py-30">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 md:flex-nowrap flex-wrap">
        {/* Left section */}
        <div className="w-full flex-1/2">
          <div className="!space-y-5 max-w-2xl">
            <h1 className="!normal-case text-6xl font-semibold">Frequently asked questions</h1>
            <p className="text-3xl !normal-case font-medium text-neutral-500">{faqData.subTitle}</p>
          </div>
        </div>

        {/* Right section */}
        <div className="space-y-7 w-full">
          {faqData.faqs.map((faq, index) => (
            <div key={index} className="w-full border-b last:border-b-0 border-neutral-500 py-5">
              {/* Question */}
              <div className="flex items-center group justify-between cursor-pointer" onClick={() => toggleFAQ(index)}>
                <h3 className="text-4xl !normal-case group-hover:text-neutral-400 font-medium">{faq.question}</h3>
                <IoIosArrowDown className={`text-4xl transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </div>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 mt-4" : "max-h-0"}`}>
                <p className="text-neutral-500 text-3xl !normal-case">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
