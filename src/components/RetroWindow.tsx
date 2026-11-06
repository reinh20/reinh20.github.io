import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import { MascotStar } from './Mascots';

type Props = {
  title: string;
  canGoBack: boolean;
  onBack: () => void;
  isExpanded?: boolean;
  children: ReactNode;
};

/** The central "app window": dark titlebar + white rounded body with smooth expansion transitions. */
export function RetroWindow({ title, canGoBack, onBack, isExpanded = false, children }: Props) {
  return (
    <motion.div
      layout
      initial={false}
      animate={{
        maxWidth: isExpanded ? '56rem' : '34rem',
      }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // Smooth Apple-style fluid cubic bezier
      }}
      className="relative mx-auto w-full transition-[max-width]"
    >
      <MascotStar />
      <section
        className="overflow-hidden rounded-lg border-2 border-[#3d3d42] bg-white shadow-[0_6px_0_rgba(0,0,0,0.12),0_20px_45px_-12px_rgba(30,60,110,0.35)] dark:border-[#1b1b20]"
        aria-label={`${title} window`}
      >
        <header className="flex items-center justify-between bg-[#444448] px-3.5 py-2 font-mono text-sm text-white select-none">
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
            <span className="font-semibold">{title}</span>
          </div>
          {canGoBack && (
            <button
              type="button"
              onClick={onBack}
              aria-label="Close window"
              className="rounded p-0.5 transition hover:bg-white/15"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </header>
        <motion.div
          layout
          initial={false}
          animate={{
            height: isExpanded ? 'min(36rem, 76vh)' : 'min(26rem, 68vh)',
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="window-scroll overflow-y-auto"
        >
          {children}
        </motion.div>
      </section>
    </motion.div>
  );
}

