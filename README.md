# Rein's Personal Portfolio Website

> A cozy, retro desktop-OS aesthetic personal portfolio built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🎨 Visual Aesthetic & Features

- **Cozy Desktop OS Window:** Centered retro-modern window with a sleek dark titlebar and smooth tab switching.
- **Two-Tone Horizon & Dynamic Day/Night Mode:** Crisp sky horizon with a sun/moon toggle switch that transitions into a twinkling starry night.
- **Playful Interactive Mascots:**
  - Interactive smiling star mascot that celebrates with confetti when clicked!
  - Corner companion pumpkin with a subtle bounce animation that links directly to the `WHAT IS UP THERE` project.
- **Showcase of 4 Key Engineering Projects:**
  1. **Web IKA JTK Polban** (Full Stack Platform | PHP, React, Flutter, Postgres, Docker)
  2. **SmartKey Gait Analysis** (Mobile Client | React, TypeScript, Capacitor, Android)
  3. **WHAT IS UP THERE** (3D Movement Platformer | Unity 6, C#, Physics, FSM)
  4. **IoT DC Motor Monitoring** (Embedded Telemetry | ESP32, ESP-NOW, MQTT)
- **One-Click Email Copying & Resume Download:** Built-in copy-to-clipboard functionality and CV download trigger.
- **Hash-Based Routing:** Full back-button support and shareable URL tabs (e.g. `/#work`, `/#about`, `/#skills`).

---

## 🛠️ Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
The optimized static production files will be output to the `dist/` folder.

---

## ✏️ Customizing Your Content

All data is centrally managed in a single file:  
👉 **`src/data/content.ts`**

You can easily edit:
- **`profile`**: Name, tagline, email, location, GitHub, and LinkedIn links.
- **`about`**: Personal background story and interests.
- **`projects`**: Project titles, roles, descriptions, highlights, and tags.
- **`skills`**: Skill groups (Languages, Frontend, Backend, Game Tech, Embedded, Tools).
- **`experiences`**: Industry internships, lab activities, and education timeline.

### Adding Your Real CV PDF:
Place your PDF resume inside the `public/` folder with the filename:  
`public/Reinbrandt_CV.pdf`  
The *"download my CV"* button will automatically download it.

---

## 🚀 Deployment Options

### Option A: Deploy to Vercel (Easiest & Free)
1. Push this repository to GitHub (e.g., `github.com/reinh20/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect Vite and deploy your site with a free `https://your-name.vercel.app` domain!

### Option B: Deploy to GitHub Pages (`reinh20.github.io`)
1. Create a repository on GitHub named `reinh20.github.io`.
2. Push this project to the `main` branch.
3. In GitHub repo settings, go to **Settings > Pages > Build and deployment > Source: GitHub Actions > Static HTML** (or deploy the `dist/` directory).

---

## 📜 License
Created by Reinbrandt Malikiyano Cahyono ([@reinh20](https://github.com/reinh20)).
