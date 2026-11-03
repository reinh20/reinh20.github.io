// Hand-drawn style line icons, modelled after the reference: thick dark outline,
// white fill, slightly playful shapes. All 64x64.

type IconProps = { className?: string };

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function AboutIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path {...stroke} fill="white" d="M32 7c14 0 25 9 25 21s-11 21-25 21c-3 0-5.5-.3-8-1l-11 7 3-10C10 41 7 35 7 28 7 16 18 7 32 7z" />
      <circle cx="32" cy="18" r="3" fill="currentColor" />
      <path {...stroke} fill="none" d="M28 25h5v15M28 40h9" />
    </svg>
  );
}

export function WorkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path {...stroke} fill="white" d="M14 22l4-12 30 5-3 12" />
      <path {...stroke} fill="none" d="M22 15l20 3M21 20l18 3" />
      <path {...stroke} fill="white" d="M6 22h18l4 5h30l-4 27H10z" />
      <path {...stroke} fill="none" d="M8 30h48" />
    </svg>
  );
}

export function SkillsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect {...stroke} fill="white" x="7" y="12" width="50" height="36" rx="4" />
      <path {...stroke} fill="none" d="M7 20h50" />
      <circle cx="13" cy="16" r="1.5" fill="currentColor" />
      <circle cx="18" cy="16" r="1.5" fill="currentColor" />
      <path {...stroke} fill="none" d="M20 28l-6 6 6 6M44 28l6 6-6 6M35 26l-6 16" />
      <path {...stroke} fill="none" d="M24 48l-3 8h22l-3-8" />
    </svg>
  );
}

export function ExperienceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path {...stroke} fill="white" d="M10 10h32l12 12v32H10z" />
      <path {...stroke} fill="none" d="M42 10v12h12" />
      <text x="32" y="44" textAnchor="middle" fontFamily="Space Mono, monospace" fontWeight="700" fontSize="22" fill="currentColor">?</text>
    </svg>
  );
}

export function ContactIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path {...stroke} fill="white" d="M8 26l24-17 24 17v28H8z" />
      <path {...stroke} fill="white" d="M15 32V14h34v18" />
      <circle {...stroke} fill="none" cx="32" cy="23" r="5" />
      <path {...stroke} fill="none" d="M37 21v3c0 2 3 2 3 0v-1a8 8 0 10-3 6" />
      <path {...stroke} fill="none" d="M8 26l24 16 24-16M8 54l18-15M56 54L38 39" />
    </svg>
  );
}

export function GithubGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0012 .5z" />
    </svg>
  );
}

export function LinkedinGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

