"use client";

import { useLanguage } from "@/lib/language-context";
import { whatsappHref, mailtoHref } from "@/lib/config";
import Reveal from "./Reveal";
import { IconMail } from "./icons";

export default function FinalCta() {
  const { dict } = useLanguage();

  return (
    <section id="contato" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl sm:h-96 sm:w-96"
        style={{ background: "radial-gradient(circle, #A9CFE3 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-5xl">
            {dict.finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
            {dict.finalCta.subtitle}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href={whatsappHref(dict.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-sky px-8 py-4 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] sm:w-auto sm:text-base"
            >
              {dict.finalCta.ctaPrimary}
            </a>
            <a
              href={mailtoHref(dict.finalCta.ctaPrimary)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-paper/30 px-8 py-4 text-sm font-semibold text-paper transition-colors hover:bg-paper/10 sm:w-auto sm:text-base"
            >
              <IconMail className="h-4 w-4" />
              {dict.finalCta.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
