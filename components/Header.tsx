"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { whatsappHref, SITE } from "@/lib/config";
import LogoMark from "./Logo";
import { IconMenu, IconClose } from "./icons";

export default function Header() {
  const { lang, dict, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { href: "#sobre", label: dict.nav.about },
    { href: "#por-que-miami", label: dict.nav.whyMiami },
    { href: "#servicos", label: dict.nav.services },
    { href: "#imoveis", label: dict.nav.gallery },
    { href: "#como-funciona", label: dict.nav.process },
    { href: "#perguntas", label: dict.nav.faq },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 transition-all duration-300 ${
        menuOpen ? "z-[60]" : "z-40"
      } ${
        scrolled
          ? "bg-paper/90 shadow-sm shadow-ink/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <LogoMark
            className={`h-7 w-7 transition-colors duration-300 ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          />
          <span
            className={`font-display text-[15px] font-semibold leading-none tracking-tight transition-colors duration-300 ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            {SITE.name}
            <span
              className={`block text-[9.5px] font-medium tracking-[0.18em] transition-colors duration-300 ${
                scrolled ? "text-haze" : "text-paper/70"
              }`}
            >
              {SITE.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13.5px] font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${
                scrolled ? "text-graphite" : "text-paper/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language"
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-300 ${
              scrolled
                ? "border-graphite/20 text-graphite hover:bg-mist"
                : "border-paper/40 text-paper hover:bg-paper/10"
            }`}
          >
            {lang === "pt" ? "PT · EN" : "EN · PT"}
          </button>

          <a
            href={whatsappHref(dict.whatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-semibold text-paper transition-colors hover:bg-graphite sm:inline-flex"
          >
            {dict.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className={`-mr-1.5 inline-flex p-1.5 lg:hidden ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            <IconMenu />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-ink px-6 py-6 text-paper lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-7 text-paper" />
              <span className="font-display text-[15px] font-semibold">
                {SITE.name}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-1.5"
            >
              <IconClose />
            </button>
          </div>

          <nav className="mt-12 flex flex-col gap-1">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-paper/10 py-4 font-display text-2xl font-medium"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <button
              type="button"
              onClick={toggleLang}
              className="self-start rounded-full border border-paper/30 px-4 py-2 text-sm font-semibold"
            >
              {lang === "pt" ? "Switch to English" : "Mudar para Português"}
            </button>
            <a
              href={whatsappHref(dict.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-paper px-5 py-3.5 text-center text-sm font-semibold text-ink"
            >
              {dict.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
