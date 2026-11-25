"use client";

import { useLanguage } from "@/lib/language-context";
import { SITE, whatsappHref, mailtoHref } from "@/lib/config";
import LogoMark from "./Logo";

export default function Footer() {
  const { dict } = useLanguage();
  const year = 2026;

  const links = [
    { href: "#sobre", label: dict.nav.about },
    { href: "#por-que-miami", label: dict.nav.whyMiami },
    { href: "#servicos", label: dict.nav.services },
    { href: "#imoveis", label: dict.nav.gallery },
    { href: "#como-funciona", label: dict.nav.process },
    { href: "#perguntas", label: dict.nav.faq },
  ];

  return (
    <footer className="bg-ink pt-16 text-paper">
      <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-7 text-paper" />
              <span className="font-display text-[15px] font-semibold">
                {SITE.name}
              </span>
            </div>
            <p className="mt-4 max-w-[22rem] text-sm leading-relaxed text-paper/60">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-paper/50">
              {dict.footer.navTitle.toUpperCase()}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/75 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-paper/50">
              {dict.footer.contactTitle.toUpperCase()}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={whatsappHref(dict.whatsapp.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-paper/75 transition-colors hover:text-paper"
                >
                  {dict.footer.whatsapp} · {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={mailtoHref(SITE.name)}
                  className="text-sm text-paper/75 transition-colors hover:text-paper"
                >
                  {dict.footer.email} · {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. {dict.footer.rights}
          </p>
          <p>{SITE.role}</p>
        </div>
      </div>
    </footer>
  );
}
