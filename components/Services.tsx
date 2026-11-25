"use client";

import { useLanguage } from "@/lib/language-context";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Services() {
  const { dict } = useLanguage();

  return (
    <section id="servicos" className="bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          subtitle={dict.services.subtitle}
          tone="dark"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-paper/10 p-7 transition-colors duration-300 hover:border-sky/40 hover:bg-paper/[0.03]">
                <h3 className="font-display text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-paper/65">
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
