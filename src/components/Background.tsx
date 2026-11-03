import { useMemo } from 'react';
import { Moon, Sun } from 'lucide-react';

/** Two-tone desktop: plain sky on top, soft wavy "water" horizon at the bottom. Stars at night. */
export function DesktopBackground({ dark }: { dark: boolean }) {
  // Deterministic star field so it doesn't reshuffle on every render.
  const stars = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => {
        const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
        return { x: r(1) * 100, y: r(2) * 62, size: 1 + r(3) * 2.2, dur: 2 + r(4) * 3, delay: r(5) * 3 };
      }),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 transition-colors duration-700 ${dark ? 'bg-[#141a33]' : 'bg-white'}`} />

      <div className={`absolute inset-0 transition-opacity duration-700 ${dark ? 'opacity-100' : 'opacity-0'}`}>
        {stars.map((s, i) => (
          <span
            key={i}
            className="twinkle absolute rounded-full bg-white"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              ['--dur' as string]: `${s.dur}s`,
              ['--delay' as string]: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Horizon */}
      <svg className="absolute bottom-0 left-0 h-[30vh] w-full" viewBox="0 0 1440 300" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={dark ? '#2b3d73' : '#a9d4fb'} />
            <stop offset="1" stopColor={dark ? '#1d2a55' : '#d2e9fd'} />
          </linearGradient>
        </defs>
        <path d="M0 22 C 240 8, 480 30, 720 18 S 1200 6, 1440 20 L1440 300 L0 300 Z" fill="url(#sea)" className="transition-all duration-700" />
      </svg>
    </div>
  );
}

export function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={dark ? 'Switch to day mode' : 'Switch to night mode'}
      className={`fixed left-4 top-4 z-30 rounded-full p-2 transition hover:rotate-45 ${dark ? 'text-yellow-200' : 'text-ink'}`}
    >
      {dark ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
    </button>
  );
}

