import { motion, useAnimationControls } from 'framer-motion';
import confetti from 'canvas-confetti';

/** The little smiling star that sits on top of the window. Click it for a surprise. */
export function MascotStar() {
  const controls = useAnimationControls();

  const celebrate = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    confetti({
      particleCount: 60,
      spread: 70,
      startVelocity: 28,
      origin: { x: clientX / window.innerWidth, y: clientY / window.innerHeight },
      colors: ['#fcd34d', '#f29a0e', '#a9d4fb', '#ffffff'],
      shapes: ['star', 'circle'],
    });
    controls.start({ rotate: [0, -20, 360], scale: [1, 1.25, 1], transition: { duration: 0.7 } });
  };

  return (
    <motion.button
      type="button"
      onClick={celebrate}
      aria-label="Star mascot — click me"
      className="absolute -top-16 left-0 h-14 w-14 cursor-pointer sm:-top-[4.5rem] sm:h-16 sm:w-16"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.svg viewBox="0 0 64 64" className="h-full w-full" animate={controls}>
        <path
          d="M32 5l8 17.3 18.9 2.2-14 13 3.8 18.7L32 46.8l-16.7 9.4 3.8-18.7-14-13 18.9-2.2z"
          fill="#fcd34d"
          stroke="#e2a10b"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M22 26c2-2 4-2 6 0M36 26c2-2 4-2 6 0" stroke="#3b2a12" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M27 33c2.5 4 7.5 4 10 0" stroke="#3b2a12" strokeWidth="2.5" strokeLinecap="round" fill="#e86a4a" />
        <circle cx="21" cy="32" r="2.5" fill="#f9a8a8" opacity="0.8" />
        <circle cx="43" cy="32" r="2.5" fill="#f9a8a8" opacity="0.8" />
      </motion.svg>
    </motion.button>
  );
}

/** Corner mascot: a friendly pumpkin, a nod to the pumpkins in WHAT IS UP THERE. */
export function CornerPumpkin({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label="Pumpkin — open my game project"
      title="psst... check out my game"
      className="fixed bottom-4 right-4 z-20 h-16 w-16 cursor-pointer sm:bottom-6 sm:right-6 sm:h-20 sm:w-20"
      animate={{ y: [0, -5, 0], rotate: [0, 2, 0, -2, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.12 }}
    >
      <svg viewBox="0 0 80 80" className="h-full w-full">
        <ellipse cx="40" cy="72" rx="28" ry="5" fill="#6aa84f" opacity="0.55" />
        <path d="M40 18c2-6 6-9 10-9" stroke="#4d7c2b" strokeWidth="4" strokeLinecap="round" fill="none" />
        <ellipse cx="26" cy="46" rx="15" ry="20" fill="#f59e0b" stroke="#b45309" strokeWidth="3" />
        <ellipse cx="54" cy="46" rx="15" ry="20" fill="#f59e0b" stroke="#b45309" strokeWidth="3" />
        <ellipse cx="40" cy="46" rx="16" ry="22" fill="#fbbf24" stroke="#b45309" strokeWidth="3" />
        <path d="M30 40l4 4-4 2zM50 40l-4 4 4 2z" fill="#3b2a12" />
        <path d="M31 54c5 5 13 5 18 0" stroke="#3b2a12" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="25" cy="50" r="3" fill="#f87171" opacity="0.6" />
        <circle cx="55" cy="50" r="3" fill="#f87171" opacity="0.6" />
      </svg>
    </motion.button>
  );
}

