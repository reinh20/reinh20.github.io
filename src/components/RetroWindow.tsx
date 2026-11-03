import type { ReactNode } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { MascotStar } from './Mascots';

type Props = {
  title: string;
  canGoBack: boolean;
  onBack: () => void;
  children: ReactNode;
};

/** The central "app window": dark titlebar + white rounded body, like the reference. */
export function RetroWindow({ title, canGoBack, onBack, children }: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <MascotStar />
      <section
        className="overflow-hidden rounded-md border-2 border-[#3d3d42] bg-white shadow-[0_6px_0_rgba(0,0,0,0.12),0_18px_40px_-12px_rgba(30,60,110,0.35)] dark:border-[#1b1b20]"
        aria-label={`${title} window`}
      >
        <header className="flex items-center justify-between bg-[#444448] px-3 py-1.5 font-mono text-sm text-white">
          <div className="flex items-center gap-2">
            {canGoBack && (
              <button
                type="button"
                onClick={onBack}
                aria-label="Back to home"
                className="rounded p-0.5 transition hover:bg-white/15"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            )}
            <span>{title}</span>
          </div>
          {canGoBack && (
            <button type="button" onClick={onBack} aria-label="Close window" className="rounded p-0.5 transition hover:bg-white/15">
              <X className="h-4 w-4" />
            </button>
          )}
        </header>
        <div className="window-scroll h-[min(26rem,68vh)] overflow-y-auto">{children}</div>
      </section>
    </div>
  );
}

