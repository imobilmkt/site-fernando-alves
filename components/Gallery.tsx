"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const IMAGES = [
  { src: "/media/gallery-coast-1.jpg", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/media/gallery-pool-1.jpg", span: "" },
  { src: "/media/gallery-coast-2.jpg", span: "" },
  { src: "/media/gallery-pool-2.jpg", span: "sm:col-span-2" },
];

export default function Gallery() {
  const { dict } = useLanguage();

  return (
    <section id="imoveis" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={dict.gallery.eyebrow}
          title={dict.gallery.title}
          subtitle={dict.gallery.subtitle}
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {IMAGES.map((image, i) => (
            <Reveal key={image.src} delay={i * 70} className={image.span}>
              <figure className="group relative h-full min-h-[160px] overflow-hidden rounded-xl sm:min-h-[220px]">
                <Image
                  src={image.src}
                  alt={dict.gallery.captions[i]}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute bottom-3 left-3 right-3 translate-y-2 text-xs font-medium text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm">
                  {dict.gallery.captions[i]}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
