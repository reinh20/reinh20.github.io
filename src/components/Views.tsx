import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Download, ExternalLink, Mail, MapPin } from 'lucide-react';
import { about, experiences, profile, projects, skills } from '../data/content';
import { AboutIcon, ContactIcon, ExperienceIcon, GithubGlyph, LinkedinGlyph, SkillsIcon, WorkIcon } from './Icons';

export type ViewId = 'home' | 'about' | 'work' | 'skills' | 'experience' | 'contact';

const menu: { id: Exclude<ViewId, 'home'>; label: string; Icon: (p: { className?: string }) => JSX.Element }[] = [
  { id: 'about', label: 'about', Icon: AboutIcon },
  { id: 'work', label: 'work', Icon: WorkIcon },
  { id: 'skills', label: 'skills', Icon: SkillsIcon },
  { id: 'experience', label: 'journey', Icon: ExperienceIcon },
  { id: 'contact', label: 'contact', Icon: ContactIcon },
];

export function HomeView({ onOpen }: { onOpen: (id: ViewId) => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 py-10 text-center">
      <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
        hi! <span className="font-normal text-amber">i&apos;m {profile.nickname}</span>
      </h1>
      <p className="mt-3 max-w-sm text-sm font-light text-neutral-500 sm:text-base">{profile.tagline}</p>

      <nav className="mt-10 grid grid-cols-5 gap-2 sm:gap-5" aria-label="Main menu">
        {menu.map(({ id, label, Icon }, i) => (
          <motion.button
            key={id}
            type="button"
            onClick={() => onOpen(id)}
            className="group flex flex-col items-center gap-1 text-ink"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i }}
            whileHover={{ y: -4, rotate: i % 2 ? 3 : -3 }}
            whileTap={{ scale: 0.92 }}
          >
            <Icon className="sketch-shadow h-11 w-11 sm:h-14 sm:w-14" />
            <span className="font-mono text-[11px] font-bold group-hover:text-amber sm:text-xs">{label}</span>
          </motion.button>
        ))}
      </nav>
    </div>
  );
}

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-4 text-2xl font-light">
    {children}
    <span className="text-amber">.</span>
  </h2>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded border border-neutral-300 bg-neutral-50 px-1.5 py-0.5 font-mono text-[10px] text-neutral-600">{children}</span>
);

export function AboutView() {
  return (
    <div className="px-6 py-6 sm:px-8">
      <Heading>about me</Heading>
      <div className="space-y-3 text-sm leading-relaxed text-neutral-600">
        {about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <p className="mt-5 flex items-center gap-1.5 font-mono text-xs text-neutral-500">
        <MapPin className="h-3.5 w-3.5" /> {profile.location}
      </p>
    </div>
  );
}

export function WorkView() {
  return (
    <div className="px-6 py-6 sm:px-8">
      <Heading>selected work</Heading>
      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p.title} className="rounded-md border-2 border-neutral-200 p-4 transition hover:border-amber/60 hover:shadow-[3px_3px_0_rgba(242,154,14,0.25)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium">
                  <span className="mr-1.5">{p.emoji}</span>
                  {p.title}
                </h3>
                <p className="font-mono text-[11px] text-amber">{p.role}</p>
              </div>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex shrink-0 items-center gap-1 rounded bg-ink px-2 py-1 font-mono text-[10px] text-white transition hover:bg-amber"
                >
                  <GithubGlyph className="h-3 w-3" /> code
                </a>
              )}
            </div>
            <p className="mt-2 text-sm text-neutral-600">{p.summary}</p>
            <ul className="mt-2 list-disc space-y-0.5 pl-4 text-xs text-neutral-500">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-1">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <a href={profile.github} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 font-mono text-xs text-neutral-500 hover:text-amber">
        more on github <ExternalLink className="h-3 w-3" />
      </a>
    </div>
  );
}

export function SkillsView() {
  return (
    <div className="px-6 py-6 sm:px-8">
      <Heading>toolbox</Heading>
      <div className="space-y-4">
        {skills.map((g) => (
          <div key={g.group}>
            <p className="mb-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400">{g.group}</p>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <motion.span
                  key={s}
                  whileHover={{ y: -2 }}
                  className="rounded-full border-2 border-ink bg-white px-2.5 py-0.5 text-xs shadow-[2px_2px_0_#2f2f33]"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExperienceView() {
  return (
    <div className="px-6 py-6 sm:px-8">
      <Heading>journey so far</Heading>
      <ol className="relative space-y-5 border-l-2 border-dashed border-neutral-300 pl-5">
        {experiences.map((e) => (
          <li key={e.org + e.role} className="relative">
            <span className="absolute -left-[1.6rem] top-1 h-3 w-3 rounded-full border-2 border-ink bg-amber" />
            <p className="font-mono text-[11px] text-neutral-400">{e.period}</p>
            <h3 className="text-sm font-medium">{e.role}</h3>
            <p className="text-xs text-amber">{e.org}</p>
            <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs text-neutral-500">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ContactView() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const linkBtn =
    'flex items-center justify-center gap-2 rounded-md border-2 border-ink bg-white px-3 py-2 text-sm shadow-[3px_3px_0_#2f2f33] transition hover:-translate-y-0.5 hover:bg-amber/10 active:translate-y-0 active:shadow-none';

  return (
    <div className="flex h-full flex-col items-center justify-center px-6 py-8 text-center">
      <Heading>say hi</Heading>
      <p className="max-w-xs text-sm text-neutral-600">Open for new opportunities and collaborations. My inbox is always open!</p>

      <button type="button" onClick={copyEmail} className="group mt-5 flex items-center gap-2 font-mono text-sm text-ink hover:text-amber">
        <Mail className="h-4 w-4" />
        {profile.email}
        {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100" />}
      </button>
      <p className="h-4 font-mono text-[10px] text-green-600">{copied ? 'copied!' : ''}</p>

      <div className="mt-4 grid w-full max-w-xs grid-cols-2 gap-3">
        <a className={linkBtn} href={profile.github} target="_blank" rel="noreferrer">
          <GithubGlyph className="h-4 w-4" /> GitHub
        </a>
        <a className={linkBtn} href={profile.linkedin} target="_blank" rel="noreferrer">
          <LinkedinGlyph className="h-4 w-4" /> LinkedIn
        </a>
        <a className={`${linkBtn} col-span-2 bg-amber/15`} href={profile.cvPath} download="Reinbrandt_CV.pdf">
          <Download className="h-4 w-4" /> download my CV (PDF)
        </a>
        <a className={`${linkBtn} col-span-2 text-xs text-neutral-600`} href={profile.cvGoogleDocs} target="_blank" rel="noreferrer">
          <ExternalLink className="h-3.5 w-3.5" /> open Google Docs CV
        </a>
      </div>
    </div>
  );
}

