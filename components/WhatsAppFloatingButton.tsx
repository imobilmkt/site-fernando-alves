"use client";

import { useLanguage } from "@/lib/language-context";
import { whatsappHref } from "@/lib/config";
import { IconWhatsApp } from "./icons";

export default function WhatsAppFloatingButton() {
  const { dict } = useLanguage();

  return (
    <a
      href={whatsappHref(dict.whatsapp.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.whatsapp.floatingLabel}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-ink px-4 py-3.5 text-paper shadow-lg shadow-ink/20 transition-all duration-300 hover:bg-graphite hover:pr-5 sm:bottom-7 sm:right-7"
    >
      <IconWhatsApp className="h-5 w-5 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-[12rem] group-hover:opacity-100">
        {dict.whatsapp.floatingLabel}
      </span>
    </a>
  );
}
