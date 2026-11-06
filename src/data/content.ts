// Single source of truth for portfolio content.
// Only facts confirmed from Rein's CV and repositories are included here — edit freely.

export const profile = {
  name: 'Reinbrandt Malikiyano Cahyono',
  nickname: 'rein',
  tagline: 'full stack, mobile & game systems developer',
  location: 'East Java, Indonesia',
  email: 'reinbrandth20@gmail.com',
  github: 'https://github.com/reinh20',
  // TODO: replace with your real LinkedIn URL.
  linkedin: 'https://www.linkedin.com/',
  cvPath: './Reinbrandt_CV.pdf',
  cvGoogleDocs: 'https://docs.google.com/document/d/1VwjZ-bs87stLsDLrJ9qSbik3IVrAco6tQi61O5Yx7fM/edit?usp=sharing',
};

export const about = [
  "Hi! I'm Rein, an Electrical Engineering student at Telkom University who ended up falling in love with software.",
  'I like building things end to end: REST APIs and admin panels, Android apps that talk to hardware over Bluetooth, and physics-driven game mechanics in Unity.',
  'I enjoy building software where I can ship real features and collaborate with a strong engineering team.',
];

export type Project = {
  title: string;
  role: string;
  summary: string;
  description?: string;
  highlights: string[];
  tags: string[];
  github?: string;
  emoji: string;
  image?: string;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    title: 'WHAT IS UP THERE',
    role: 'Gameplay & Systems Developer · BZI Game Jam',
    summary: 'First-person 3D parkour and psychological hazard platformer built with Unity 6 and C#.',
    description: 'Designed and implemented full kinematic player movement including slope handling, raycast wall-running with normal projection, SpringJoint Hooke\'s law grappling hook with aim assist, synchronized FSM enemy hazards, and custom Unity Editor tools for automated level setup.',
    highlights: [
      'Engineered momentum-based rigidbody locomotion with slide boosts and slope normal compensation',
      'Implemented dynamic wall-running and multi-vector impulse wall jumping with camera roll interpolation',
      'Built a SpringJoint grappling hook simulating Hooke\'s law paired with a 3D SphereCast aim-assist system',
      'Developed synchronized line-of-sight hazard AI (FSM) and custom Unity Editor lighting setup tools',
    ],
    tags: ['Unity 6', 'C#', '3D Kinematics', 'Hooke\'s Law', 'FSM AI', 'Editor Tooling'],
    github: 'https://github.com/reinh20/WHAT-IS-UP-THERE',
    emoji: '🎃',
    image: './projects/what-is-up-there-title.jpg',
    gallery: [
      './projects/what-is-up-there-title.jpg',
      './projects/what-is-up-there-gameplay.jpg',
      './projects/what-is-up-there-map.jpg',
      './projects/what-is-up-there-side.png',
    ],
  },
  {
    title: 'Web IKA JTK Polban',
    role: 'Full Stack Developer · Internship @ PT. Pilar Timur Teknologi',
    summary: 'Enterprise alumni platform and electronic voting ecosystem for JTK Polban alumni.',
    description: 'Developed an integrated three-tier platform consisting of a PHP RESTful API, React/TypeScript CMS Admin Panel, and Flutter Web portal backed by PostgreSQL. Addressed upload bandwidth bottlenecks with GPU Skia and HTML5 Canvas compression.',
    highlights: [
      'Architected full-stack E-Voting system with 15-second async HTTP polling and concurrency safeguards',
      'Distributed image downscaling to client-side (GPU Skia & HTML5 Canvas), reducing 50MB uploads to <5MB',
      'Hardened backend API controllers by implementing standardized error masking and structured logging',
      'Built membership onboarding with OTP email verification, career board, and dynamic CMS settings',
    ],
    tags: ['PHP', 'React', 'TypeScript', 'Flutter Web', 'PostgreSQL', 'Docker', 'REST API'],
    github: 'https://github.com/reinh20/Web_IKA_JTK-',
    emoji: '🗳️',
    image: './projects/ika-jtk-home.jpg',
    gallery: [
      './projects/ika-jtk-home.jpg',
      './projects/ika-jtk-cms-loker.png',
      './projects/ika-jtk-portal-loker.png',
      './projects/ika-jtk-berita.png',
      './projects/ika-jtk-agenda.png',
    ],
  },
  {
    title: 'SmartKey Gait Analysis',
    role: 'Mobile Application & UI Developer',
    summary: 'Cross-platform Android companion app for a smart biometric access key.',
    description: 'Developed the client-side Android application architecture, responsive user interface panels, interactive button states, and real-time telemetry dashboards using React 18, TypeScript, TailwindCSS, and Capacitor 8.',
    highlights: [
      'Engineered mobile client interface, touch interactions, modal dialogs, and sensor radar screens',
      'Integrated Bluetooth Low Energy (BLE) scanning, device pairing workflows, and message handling',
      'Implemented offline-first SQLite local caching for telemetry audit logs and session history export',
      'Clear separation of concerns: focused on application and device UI (gait ML model developed by AI team)',
    ],
    tags: ['React 18', 'TypeScript', 'Capacitor 8', 'BLE', 'SQLite', 'TailwindCSS', 'Android'],
    github: 'https://github.com/reinh20/SmartKey-App',
    emoji: '🔑',
    image: './projects/smartkey-telemetry.jpg',
    gallery: [
      './projects/smartkey-telemetry.jpg',
      './projects/smartkey-logs.jpg',
      './projects/smartkey-modals.jpg',
    ],
  },
  {
    title: 'IoT DC Motor Monitoring',
    role: 'IoT & Embedded Software Developer',
    summary: 'Real-time multi-layered motor telemetry communication and monitoring pipeline on ESP32 microcontrollers.',
    description: 'Engineered a telemetry pipeline capturing motor RPM, current, voltage, and thermal parameters with local node-to-gateway ESP-NOW protocol and MQTT cloud publishing, visualized through a real-time Graphical User Interface.',
    highlights: [
      'Implemented dual-layer network protocols: ESP-NOW for local low-latency links and MQTT via HiveMQ for cloud',
      'Developed real-time Graphical User Interface (GUI) visualizing multi-threaded motor performance metrics',
      'Integrated precision sensors with hardware telemetry streams for live anomaly tracking',
    ],
    tags: ['ESP32', 'C/C++', 'MQTT', 'ESP-NOW', 'HiveMQ', 'Python GUI'],
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

