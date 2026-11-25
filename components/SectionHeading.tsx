import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const subtleColor = tone === "dark" ? "text-paper/70" : "text-haze";
  const accentColor = tone === "dark" ? "text-sky" : "text-graphite";

  return (
    <Reveal className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p
        className={`text-[11px] font-semibold tracking-[0.22em] ${accentColor} sm:text-xs`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${subtleColor}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
