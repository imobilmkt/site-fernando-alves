"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { IconChevronDown } from "./icons";

export default function FAQ() {
  const { dict } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="perguntas" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={dict.faq.eyebrow}
          title={dict.faq.title}
          subtitle={dict.faq.subtitle}
          align="center"
        />

        <div className="mt-14 flex flex-col">
          {dict.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 50}>
                <div className="border-t border-ink/10 last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
                      {item.question}
                    </span>
                    <IconChevronDown
                      className={`h-5 w-5 shrink-0 text-haze transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-ink" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] pb-5 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="min-h-0 text-sm leading-relaxed text-graphite sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
