"use client";

import { useLanguage } from "@/lib/language-context";
import { whatsappHref } from "@/lib/config";
import { IconArrowUpRight } from "./icons";

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/hero-poster.jpg"
      >
        <source src="/media/hero-mobile.mp4" media="(max-width: 640px)" type="video/mp4" />
        <source src="/media/hero-desktop.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18,18,18,0.55) 0%, rgba(18,18,18,0.25) 32%, rgba(18,18,18,0.55) 72%, rgba(18,18,18,0.92) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-28 pt-36 sm:px-8 sm:pb-20 sm:pt-48">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-sky sm:text-xs">
          {dict.hero.eyebrow}
        </p>

        <h1 className="mt-5 max-w-3xl font-display text-[2.55rem] font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
          {dict.hero.headline}
          <br />
          <span className="text-sky">{dict.hero.headlineAccent}</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/85 sm:text-lg">
          {dict.hero.subheadline}
        </p>

        <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <a
            href={whatsappHref(dict.whatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky px-7 py-4 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] sm:text-base"
          >
            {dict.hero.ctaPrimary}
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-paper/30 px-7 py-4 text-sm font-semibold text-paper transition-colors hover:bg-paper/10 sm:text-base"
          >
            {dict.hero.ctaSecondary}
            <IconArrowUpRight className="h-4 w-4 rotate-45" />
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/15 pt-6 sm:mt-14">
          {dict.hero.trust.map((item) => (
            <li
              key={item}
              className="text-xs font-medium tracking-wide text-paper/75 sm:text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
