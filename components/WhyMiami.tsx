"use client";

import { useLanguage } from "@/lib/language-context";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function WhyMiami() {
  const { dict } = useLanguage();

  return (
    <section id="por-que-miami" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={dict.whyMiami.eyebrow}
          title={dict.whyMiami.title}
          subtitle={dict.whyMiami.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-mist sm:grid-cols-2">
          {dict.whyMiami.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="h-full bg-paper p-8 sm:p-10">
                <span className="font-display text-sm font-semibold text-sky">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-graphite">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
