# Himadi Yenushka De Silva — Personal Portfolio Website
 
 A modern, high-performance personal portfolio website built with **React**, **TypeScript**, **Vite**, and modern **CSS design tokens**. Designed specifically for **Himadi Yenushka De Silva**, a Software Engineering student & aspiring software engineer at **IJSE (Institute of Java and Software Engineering)**, Sri Lanka.

---

## 🚀 Features

- **Hero Section**: Dynamic introduction, live developer workspace mockup, and quick action buttons ("View My Projects", "Download CV", "Contact Me").
- **About Me**: Professional narrative tailored for an aspiring Software Engineer interested in Full-Stack, Java/Spring Boot, and AI/Machine Learning.
- **Skills / Tech Stack**: 6 categorized groups with custom icons:
  - Programming Languages
  - Frontend Development
  - Backend Development
  - Databases
  - AI & Machine Learning
  - Tools & DevOps
- **Featured Projects**:
  1. **Used Car Price Predictor for Sri Lanka** (Python, Machine Learning, FastAPI, React, Node.js Gateway)
  2. **Automated Greenhouse Management System** (Java, Spring Boot Microservices, REST APIs, MySQL)
  3. **Serenity Mental Health Therapy Center** (React, TypeScript, Spring Boot/Node, MySQL)
- **Education**: Detailed IJSE (Institute of Java and Software Engineering) Software Engineering program.
- **Experience & Activities**: Hands-on software development and engineering achievements.
- **Certifications**: Verified milestones in software engineering, ML, and full-stack development.
- **Contact & Inquiries**: Direct channels (Email, GitHub, LinkedIn) and interactive messaging form.
- **Sleek Aesthetic**: Minimalist dark-mode theme inspired by modern developer products (Linear-style UI), smooth scrolling, subtle animations, and responsive layouts.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Vanilla CSS Design Tokens (Custom Theme, Dark Mode, Zero runtime bloat)
- **Animations**: Framer Motion
- **Icons**: React Icons (FontAwesome, Simple Icons, Remix Icons)

---

## 📁 Project Structure

```text
my-new-portfolio/
├── index.html                 # HTML entry with SEO & modern typography
├── package.json               # Scripts and dependencies
├── tsconfig.json              # TypeScript root config
├── tsconfig.app.json          # TypeScript app config
├── vite.config.ts             # Vite bundler configuration
└── src/
    ├── main.tsx               # App entry point
    ├── App.tsx                # Main single-page application layout
    ├── index.css              # Design tokens, utilities, and components
    ├── data/
    │   └── portfolioData.ts   # Central configuration for all profile details & projects
    └── components/
        ├── Navbar.tsx         # Navigation bar with desktop & mobile drawer
        ├── Hero.tsx           # Hero greeting & developer workspace widget
        ├── AboutMe.tsx        # Bio, identity card, and stats
        ├── Skills.tsx         # Categorized tech stack grid
        ├── Projects.tsx       # Featured and standard project cards
        ├── Education.tsx      # IJSE educational background
        ├── Experience.tsx     # Student engineering experience & activities
        ├── Certifications.tsx # Technical certifications
        ├── Contact.tsx        # Contact details & interactive message form
        ├── Footer.tsx         # Brand signature & quick navigation
        └── ui.tsx             # Shared scroll reveals and section headers
```

---

## ⚡ How to Run Locally

### 1. Development Mode
Inside the `my-new-portfolio` folder:
```bash
npm run dev
```
Navigate to `http://localhost:5174/` (or the port indicated in your terminal).

### 2. Production Build
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Personalize Your Information

All your personal details, links, and content are stored in one single file:
👉 **[src/data/portfolioData.ts](file:///d:/my-portfolio/my-new-portfolio/src/data/portfolioData.ts)**

Open this file to change:
- `name`: Replace `[YOUR FULL NAME]` with your real name
- `email`: Replace with your actual email address
- `github`: Add your personal GitHub profile URL
- `linkedin`: Add your LinkedIn profile URL
- Add your resume PDF file to the `public/` directory (e.g. `CV-Software-Engineer.pdf`)
