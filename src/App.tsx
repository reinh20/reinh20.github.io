import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DesktopBackground, ThemeToggle } from './components/Background';
import { CornerPumpkin } from './components/Mascots';
import { RetroWindow } from './components/RetroWindow';
import { AboutView, ContactView, ExperienceView, HomeView, SkillsView, WorkView, type ViewId } from './components/Views';
import { GithubGlyph, LinkedinGlyph } from './components/Icons';
import { Mail } from 'lucide-react';
import { profile } from './data/content';

const titles: Record<ViewId, string> = {
  home: 'home',
  about: 'about',
  work: 'my work',
  skills: 'skills',
  experience: 'journey',
  contact: 'contact',
};

const isView = (v: string): v is ViewId => v in titles;

export default function App() {
  // Keep the current view in the URL hash so links like /#work are shareable and Back works.
  const [view, setView] = useState<ViewId>(() => {
    const h = window.location.hash.slice(1);
    return isView(h) ? h : 'home';
  });
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return false; // Default to clean daytime theme matching the reference
  });

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.slice(1);
      setView(isView(h) ? h : 'home');
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const open = (id: ViewId) => {
    window.location.hash = id === 'home' ? '' : id;
    setView(id);
  };

  const content = {
    home: <HomeView onOpen={open} />,
    about: <AboutView />,
    work: <WorkView />,
    skills: <SkillsView />,
    experience: <ExperienceView />,
    contact: <ContactView />,
  }[view];

  const social = 'flex h-8 w-8 items-center justify-center rounded-full bg-[#3d3d42] text-white transition hover:-translate-y-0.5 hover:bg-amber';

  return (
    <div className="relative flex min-h-full flex-col">
      <DesktopBackground dark={dark} />
      <ThemeToggle dark={dark} onToggle={() => setDark((d) => !d)} />

      <main className="flex flex-1 items-center justify-center px-4 pb-24 pt-24">
        <motion.div className="w-full" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <RetroWindow
            title={titles[view]}
            canGoBack={view !== 'home'}
            onBack={() => open('home')}
            isExpanded={view === 'work'}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                className="h-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </RetroWindow>
        </motion.div>
      </main>

      <footer className="pb-3 text-center">
        <div className="mb-1 flex justify-center gap-2">
          <a className={social} href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubGlyph className="h-4 w-4" />
          </a>
          <a className={social} href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinGlyph className="h-4 w-4" />
          </a>
          <a className={social} href={`mailto:${profile.email}`} aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className={`text-[11px] ${dark ? 'text-blue-100/70' : 'text-neutral-500'}`}>© {new Date().getFullYear()} {profile.name}</p>
      </footer>

      <CornerPumpkin onClick={() => open('work')} />
    </div>
  );
}

