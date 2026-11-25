"use client";

import { useLanguage } from "@/lib/language-context";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Process() {
  const { dict } = useLanguage();

  return (
    <section id="como-funciona" className="bg-mist/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={dict.process.eyebrow}
          title={dict.process.title}
          subtitle={dict.process.subtitle}
        />

        <ol className="mt-14 flex flex-col">
          {dict.process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80} as="li">
              <div className="group flex gap-5 border-t border-ink/10 py-7 last:border-b sm:gap-8 sm:py-8">
                <span className="font-display text-2xl font-semibold text-haze transition-colors duration-300 group-hover:text-sky sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-graphite sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
