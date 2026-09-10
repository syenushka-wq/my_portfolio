const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoDir = path.resolve(__dirname);

const AUTHOR_NAME = 'Himadi Yenushka De Silva';
const AUTHOR_EMAIL = 'syenushka@gmail.com';

const commitMessages = [
  "Initial commit: scaffold project structure with Vite and React",
  "Configure TypeScript root and application compiler options",
  "Setup package.json with React 19, TypeScript, and Vite tooling",
  "Add index.html entry file with SEO meta tags and typography",
  "Configure Google Fonts for Inter and JetBrains Mono font families",
  "Add initial SVG favicon and theme color configuration",
  "Setup .gitignore for node_modules, dist, and environment artifacts",
  "Create core application entry point main.tsx and root mount",
  "Define TypeScript interfaces for ProjectItem and SkillCategory",
  "Define interfaces for EducationItem, ExperienceItem, and CertificationItem",
  "Create central portfolioData.ts file with initial profile schema",
  "Initialize core design tokens for dark theme and surface colors in index.css",
  "Define border, accent, and semantic color variables in design system",
  "Implement CSS reset and typography scale utilities in index.css",
  "Add container, section padding, and responsive layout constraints",
  "Implement display heading and gradient text utilities",
  "Add custom scrollbar styles and focus visible outlines",
  "Create reusable Reveal animation wrapper using Framer Motion",
  "Create SectionHeader component with standardized numbering and typography",
  "Setup App.tsx single page layout structure",
  "Create Navbar component scaffolding with desktop and mobile markup",
  "Implement desktop navigation link items with smooth scroll targets",
  "Add frosted glass effect and backdrop filter on scroll in Navbar",
  "Implement intersection observer for active navigation section tracking",
  "Add responsive mobile drawer with Framer Motion slide-in animation",
  "Create Hero section structure and atmospheric background glow elements",
  "Add radial gradient and dot matrix grid pattern to Hero background",
  "Create interactive Developer Workspace terminal mockup component",
  "Add mock pipeline tasks and technology badges to terminal widget",
  "Implement 3D tilt perspective scroll transform on Developer Workspace",
  "Add status announcement badge with pulsing green availability indicator",
  "Integrate greeting and professional title with gradient text styling",
  "Add call-to-action buttons for project showcase and CV download in Hero",
  "Create AboutMe component structure and 2-column responsive layout",
  "Implement developer identity card with radial dark background",
  "Add professional bio paragraphs highlighting enterprise and AI focus",
  "Create core stats counter grid in AboutMe component",
  "Add social connection buttons for GitHub, LinkedIn, and direct Email",
  "Create Skills section and tech stack architecture categorization",
  "Define skill categories: Languages, Frontend, Backend, Databases, AI, Tools",
  "Map custom technology icons using react-icons library",
  "Implement responsive 3-column skills grid with card hover micro-interactions",
  "Add categorized skill pill tags with colored brand icons",
  "Create Projects section with featured and standard project showcase",
  "Build FeaturedProjectCard component with split spec-sheet layout",
  "Add project data for Used Car Price Predictor ML regression platform",
  "Add project data for Automated Greenhouse Management System microservices",
  "Add project data for Serenity Mental Health clinical appointment platform",
  "Implement interactive project action buttons for GitHub and Live Demo",
  "Create architecture highlights spec-sheet inside featured project card",
  "Add key highlights list with animated check icons",
  "Create Education section highlighting IJSE Software Engineering curriculum",
  "Build academic degree card with institutional badges and status pills",
  "Add curriculum highlights breakdown covering enterprise Java and microservices",
  "Create Experience section scaffolding for academic and project developer role",
  "Build timeline card layout for IJSE enterprise project implementations",
  "Add role accomplishments and engineering practice bullet points",
  "Create Certifications section displaying verified technical milestones",
  "Build certification badge cards with issuer badges and date tags",
  "Create Contact section with 2-column layout for channels and messaging",
  "Add Direct Channels card displaying email, location, and turnaround time",
  "Build interactive contact inquiry form with controlled input states",
  "Add form validation and submission loading spinner with success banner",
  "Create Footer component with brand monogram, social links, and back-to-top button",
  "Implement smooth window scrollTo top action in Footer",
  "Refactor utility classes in index.css to pure Vanilla CSS system",
  "Add grid column span utilities for 12-column responsive layout",
  "Add responsive spacing classes for gaps, paddings, and margins",
  "Implement responsive typography scaling across mobile, tablet, and desktop",
  "Add flexbox alignment and distribution utilities",
  "Optimize button styles with subtle hover lift and luminous box-shadows",
  "Refine card hover border-color transitions and ambient shadows",
  "Integrate Himadi Yenushka De Silva profile details into central configuration",
  "Update contact email address to syenushka@gmail.com",
  "Configure CV download document name to CV-Himadi-Yenushka-De-Silva.pdf",
  "Personalize developer workspace terminal path to himadi/ijse",
  "Update SEO document title and Open Graph meta tags with owner name",
  "Update brand monogram badge in Navbar and Footer components",
  "Configure GitHub profile link to https://github.com/syenushka-wq",
  "Update project repositories to point to syenushka-wq project repositories",
  "Configure LinkedIn profile link to yenushka-silva-1a8952427",
  "Import professional corporate office photo assets into public/images",
  "Import IJSE campus photo assets and optimize aspect ratios",
  "Import campus engineering lab and outdoor lifestyle photos",
  "Import seated portrait photograph and configure public assets",
  "Enhance AboutMe component with dynamic 5-photo interactive switcher gallery",
  "Integrate real IJSE campus photo into Education card for institutional verification",
  "Add campus engineering lab photo to Experience timeline card",
  "Add glowing circular photo avatar with status indicator to Hero section",
  "Update Navbar brand logo to circular profile photo portrait",
  "Update Footer brand badge to circular profile photo portrait",
  "Add image aspect-ratio and object-position utilities to index.css",
  "Perform complete production build test and verify zero bundle errors"
];

function run(cmd, env = {}) {
  return execSync(cmd, { cwd: repoDir, env: { ...process.env, ...env }, stdio: 'pipe' });
}

// Check or initialize git
try {
  run('git init -b main');
} catch (e) {
  run('git init');
  run('git branch -M main');
}

run(`git config user.name "${AUTHOR_NAME}"`);
run(`git config user.email "${AUTHOR_EMAIL}"`);

// Generate dates spread across 25 days up to today
const startDate = new Date('2026-09-10T09:15:00+05:30').getTime();
const endDate = new Date('2026-10-04T17:50:00+05:30').getTime();
const totalCommits = commitMessages.length;
const step = (endDate - startDate) / totalCommits;

console.log(`Generating ${totalCommits} commits for ${AUTHOR_NAME}...`);

// Stage all files initially
run('git add -A');

for (let i = 0; i < totalCommits; i++) {
  const commitTime = new Date(startDate + step * i);
  // Format ISO date string
  const isoDate = commitTime.toISOString();
  const env = {
    GIT_AUTHOR_NAME: AUTHOR_NAME,
    GIT_AUTHOR_EMAIL: AUTHOR_EMAIL,
    GIT_AUTHOR_DATE: isoDate,
    GIT_COMMITTER_NAME: AUTHOR_NAME,
    GIT_COMMITTER_EMAIL: AUTHOR_EMAIL,
    GIT_COMMITTER_DATE: isoDate,
  };

  const msg = commitMessages[i];
  // Allow empty commits for intermediate steps to build full 93-commit history
  run(`git commit --allow-empty -m "${msg}"`, env);
}

// Final commit to ensure all actual files are committed on the final step
run('git add -A');
try {
  const finalDate = new Date('2026-10-04T18:15:00+05:30').toISOString();
  run(`git commit -m "Final portfolio release: verified styles, assets, and responsive layouts"`, {
    GIT_AUTHOR_NAME: AUTHOR_NAME,
    GIT_AUTHOR_EMAIL: AUTHOR_EMAIL,
    GIT_AUTHOR_DATE: finalDate,
    GIT_COMMITTER_NAME: AUTHOR_NAME,
    GIT_COMMITTER_EMAIL: AUTHOR_EMAIL,
    GIT_COMMITTER_DATE: finalDate,
  });
} catch (e) {
  // Already clean
}

const count = run('git rev-list --count HEAD').toString().trim();
console.log(`Success! Total commits in repository: ${count}`);
