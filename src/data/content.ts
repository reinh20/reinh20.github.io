// Single source of truth for portfolio content.
// Only facts confirmed from Rein's CV and repositories are included here — edit freely.

export const profile = {
  name: 'Reinbrandt Malikiyano Cahyono',
  nickname: 'rein',
  tagline: 'software engineering intern — full stack, mobile & game systems',
  location: 'East Java, Indonesia',
  email: 'reinbrandth20@gmail.com',
  github: 'https://github.com/reinh20',
  // TODO: replace with your real LinkedIn URL.
  linkedin: 'https://www.linkedin.com/',
  // Put your CV PDF at public/Reinbrandt_CV.pdf
  cvPath: './Reinbrandt_CV.pdf',
};

export const about = [
  "Hi! I'm Rein, an Electrical Engineering student at Telkom University who ended up falling in love with software.",
  'I like building things end to end: REST APIs and admin panels, Android apps that talk to hardware over Bluetooth, and physics-driven game mechanics in Unity.',
  'Right now I am looking for a Software Engineering Internship where I can ship real features and learn from a strong engineering team.',
];

export type Project = {
  title: string;
  role: string;
  summary: string;
  highlights: string[];
  tags: string[];
  github?: string;
  emoji: string;
};

export const projects: Project[] = [
  {
    title: 'Web IKA JTK Polban',
    role: 'Full Stack Developer · Internship @ Digital Oasis',
    summary: 'Alumni platform for JTK Polban: PHP REST API, React/TypeScript CMS and a Flutter Web portal on PostgreSQL.',
    highlights: [
      'Built an E-Voting module with 15-second HTTP polling for live results and one-account-one-vote rules',
      'Client-side image crop & compression: uploads up to 50MB reduced to under 5MB before hitting the server',
      'Masked raw API errors behind safe, standardized responses',
    ],
    tags: ['PHP', 'React', 'TypeScript', 'Flutter', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/reinh20/Web_IKA_JTK-',
    emoji: '🗳️',
  },
  {
    title: 'SmartKey Gait Analysis',
    role: 'Mobile App Developer',
    summary: 'Android companion app for a smart key that authenticates users by their walking pattern.',
    highlights: [
      'Built the app UI, buttons and flows with React, TypeScript and Capacitor',
      'Bluetooth Low Energy connection to the device and local SQLite logs',
      'The gait ML model itself was built by teammates — my scope was the app',
    ],
    tags: ['React', 'TypeScript', 'Capacitor', 'BLE', 'SQLite', 'Android'],
    github: 'https://github.com/reinh20/SmartKey-App',
    emoji: '🔑',
  },
  {
    title: 'WHAT IS UP THERE',
    role: 'Solo Developer · BZI Game Jam',
    summary: 'First-person physics platformer about climbing towards the sky while dodging haunted pumpkins.',
    highlights: [
      'Rigidbody movement with sliding, wall-running and wall-jumps',
      'Grappling hook built on SpringJoint physics with SphereCast aim assist',
      'State-machine enemies, checkpoints, bilingual UI and custom editor tools',
    ],
    tags: ['Unity 6', 'C#', 'Physics', 'FSM'],
    github: 'https://github.com/reinh20/WHAT-IS-UP-THERE',
    emoji: '🎃',
  },
  {
    title: 'IoT DC Motor Monitoring',
    role: 'IoT Developer',
    summary: 'Real-time motor telemetry pipeline on ESP32 boards.',
    highlights: [
      'ESP-NOW for node-to-gateway links and MQTT (HiveMQ) for the cloud',
      'GUI showing RPM, current, voltage and temperature live',
    ],
    tags: ['ESP32', 'C++', 'MQTT', 'ESP-NOW'],
    emoji: '⚙️',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'languages', items: ['TypeScript', 'JavaScript', 'C#', 'PHP', 'Python', 'C/C++', 'Dart'] },
  { group: 'frontend & mobile', items: ['React', 'Vite', 'Tailwind CSS', 'Flutter Web', 'Capacitor'] },
  { group: 'backend & data', items: ['REST APIs', 'PostgreSQL', 'SQLite', 'Docker', 'Nginx'] },
  { group: 'game tech', items: ['Unity 6', 'Rigidbody physics', 'State machines', 'Editor scripting'] },
  { group: 'embedded & iot', items: ['ESP32', 'Raspberry Pi', 'MQTT', 'PlatformIO', 'PID control'] },
  { group: 'tools', items: ['Git', 'GitHub', 'VS Code', 'Linux'] },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    org: 'PT. Pilar Timur Teknologi (Digital Oasis)',
    role: 'Full Stack Developer Intern',
    period: 'Jun 2026 – Jul 2026',
    points: [
      'Worked across backend, CMS and portal of the IKA JTK alumni platform',
      'Shipped E-Voting, image processing, SEO tags/thumbnails, maintenance mode and API hardening',
    ],
  },
  {
    org: 'MBC Lab, Telkom University',
    role: 'Research Assistant — Game Tech Division',
    period: 'Oct 2024 – Present',
    points: ['Prototyping game mechanics and writing technical documentation for the division'],
  },
  {
    org: 'MBC Lab, Telkom University',
    role: 'People Development',
    period: 'Jun 2025 – Present',
    points: ['Onboarding, mentoring and development plans for Game Tech members'],
  },
  {
    org: 'Telkom University',
    role: 'B.Eng. Electrical Engineering',
    period: 'Aug 2023 – Present',
    points: ['Bandung, Indonesia'],
  },
];

