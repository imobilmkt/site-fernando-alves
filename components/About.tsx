"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { whatsappHref } from "@/lib/config";
import Reveal from "./Reveal";
import { IconCheck } from "./icons";

export default function About() {
  const { dict } = useLanguage();

  return (
    <section id="sobre" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl sm:max-w-md">
            <Image
              src="/media/fernando-portrait-1.jpg"
              alt="Fernando Alves"
              fill
              sizes="(max-width: 1024px) 80vw, 32vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-graphite sm:text-xs">
            {dict.about.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.about.title}
          </h2>

          <div className="mt-6 flex flex-col gap-4">
            {dict.about.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-graphite">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-7 flex flex-col gap-3">
            {dict.about.credentials.map((c) => (
              <li key={c} className="flex items-center gap-2.5 text-sm font-medium">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky/30 text-ink">
                  <IconCheck className="h-3 w-3" />
                </span>
                {c}
              </li>
            ))}
          </ul>

          <a
            href={whatsappHref(dict.whatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-graphite"
          >
            {dict.about.ctaLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
