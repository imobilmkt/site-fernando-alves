interface LogoProps {
  className?: string;
}

export default function LogoMark({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 46a28 28 0 0 1 56 0z" fill="currentColor" />
      <rect x="10" y="50" width="80" height="5" rx="2.5" fill="currentColor" />
      <rect x="22" y="61" width="56" height="4.5" rx="2.25" fill="currentColor" />
      <rect x="32" y="71" width="36" height="4" rx="2" fill="currentColor" />
      <rect x="40" y="80" width="20" height="3.5" rx="1.75" fill="currentColor" />
    </svg>
  );
}
