import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowRight, HiOutlineDocumentDownload } from "react-icons/hi";
import {
  RiCodeSSlashLine, RiServerLine, RiBrainLine, RiDatabase2Line,
  RiCheckDoubleLine, RiTerminalBoxLine, RiMapPinUserLine, RiGraduationCapLine
} from "react-icons/ri";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const WORKSPACE_TASKS = [
  {
    id: "ML-01",
    title: "Used Car Price Predictor — FastAPI regression service & React UI",
    tag: "AI / ML",
    color: "#818cf8",
    status: "Completed",
    date: "Current"
  },
  {
    id: "MS-02",
    title: "Automated Greenhouse System — Java & Spring Boot microservices",
    tag: "Backend",
    color: "#34d399",
    status: "Completed",
    date: "Current"
  },
  {
    id: "FS-03",
    title: "Serenity Mental Health Center — Appointment & records platform",
    tag: "Full Stack",
    color: "#38bdf8",
    status: "Active",
    date: "2025"
  },
  {
    id: "ED-04",
    title: "IJSE — Advanced enterprise architecture & software engineering",
    tag: "Academic",
    color: "#fbbf24",
    status: "Enrolled",
    date: "Present"
  },
];

const DeveloperWorkspace: React.FC = () => (
  <div
    className="rounded-xl overflow-hidden text-left"
    style={{
      background: "var(--bg-elevated)",
      border: "1px solid var(--border-strong)",
      boxShadow: "0 0 0 1px rgba(0,0,0,0.6), 0 35px 100px -20px rgba(0,0,0,0.85), 0 0 70px -15px rgba(99,102,241,0.25)",
    }}
  >
    {/* Window Title Bar */}
    <div
      className="flex items-center justify-between px-4 h-11"
      style={{ borderBottom: "1px solid var(--border)", background: "rgba(255,255,255,0.02)" }}
    >
      <div className="flex items-center gap-2">
        {["#ef4444", "#eab308", "#22c55e"].map(c => (
          <span key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, opacity: 0.85 }} />
        ))}
        <span className="ml-3 l-mono text-xs" style={{ color: "var(--text-4)" }}>
          developer-workspace ~ himadi/ijse
        </span>
      </div>
      <div className="flex items-center gap-2 text-xs l-mono" style={{ color: "var(--text-4)" }}>
        <span className="flex items-center gap-1.5">
          <span className="l-status-dot" /> active-env: sri-lanka
        </span>
      </div>
    </div>

    {/* Body */}
    <div className="flex flex-col md:flex-row">
      {/* Mini Sidebar */}
      <div
        className="hidden md:flex flex-col gap-1 w-48 p-3"
        style={{ borderRight: "1px solid var(--border)", background: "rgba(0,0,0,0.2)" }}
      >
        <div className="flex items-center gap-2 px-2 py-2 mb-2 rounded-lg" style={{ background: "rgba(99,102,241,0.08)" }}>
          <div
            className="flex items-center justify-center font-bold text-xs"
            style={{ width: "22px", height: "22px", borderRadius: "5px", background: "var(--accent)", color: "#fff" }}
          >
            <RiTerminalBoxLine />
          </div>
          <span className="text-xs font-semibold" style={{ color: "var(--text-1)" }}>
            Dev Pipeline
          </span>
        </div>

        {[
          { label: "Engineering", icon: <RiCodeSSlashLine />, active: true },
          { label: "Microservices", icon: <RiServerLine /> },
          { label: "AI Models", icon: <RiBrainLine /> },
          { label: "Databases", icon: <RiDatabase2Line /> },
        ].map(item => (
          <div
            key={item.label}
            className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-xs cursor-pointer"
            style={{
              color: item.active ? "var(--text-1)" : "var(--text-3)",
              background: item.active ? "rgba(255,255,255,0.05)" : "transparent",
            }}
          >
            <span style={{ fontSize: "14px" }}>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Main Issue / Project Stream */}
      <div className="flex-1 min-w-0">
        <div
          className="flex items-center justify-between px-4 h-10 text-xs"
          style={{ borderBottom: "1px solid var(--border)", color: "var(--text-3)" }}
        >
          <div className="flex items-center gap-2">
            <span style={{ color: "var(--text-1)", fontWeight: 500 }}>Active Projects & Milestones</span>
            <span>·</span>
            <span>{WORKSPACE_TASKS.length} tracks</span>
          </div>
          <span className="l-mono text-[11px]" style={{ color: "var(--text-4)" }}>React · Spring · Python</span>
        </div>

        {WORKSPACE_TASKS.map((task, i) => (
          <div
            key={task.id}
            className="flex items-center gap-3 px-4 h-12 text-xs transition-all hover:bg-white/5"
            style={{
              borderBottom: i < WORKSPACE_TASKS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
            }}
          >
            <RiCheckDoubleLine style={{ color: "var(--green)", fontSize: "14px", flexShrink: 0 }} />
            <span className="l-mono hidden sm:inline" style={{ color: "var(--text-4)", width: "50px", flexShrink: 0 }}>
              {task.id}
            </span>
            <span className="truncate flex-1" style={{ color: "var(--text-2)", fontWeight: 450 }}>
              {task.title}
            </span>
            <span
              className="l-tag hidden sm:inline-flex"
              style={{
                borderColor: `${task.color}33`,
                background: `${task.color}11`,
                color: task.color,
                fontSize: "11px"
              }}
            >
              {task.tag}
            </span>
            <span className="l-mono hidden md:inline text-[11px]" style={{ color: "var(--text-4)", width: "55px", textAlign: "right" }}>
              {task.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "start 25%"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`CV download initiated. Please add your resume PDF to the public folder as "${PORTFOLIO_DATA.profile.cvFileName}".`);
  };

  return (
    <section id="home" className="relative overflow-hidden pt-36 md:pt-44 pb-20">
      <div className="l-hero-glow" />
      <div className="l-fade-grid" />

      <div className="l-container relative flex flex-col items-center text-center">
        {/* Status Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="l-pill mb-8"
          style={{
            height: "32px",
            padding: "0 14px",
            borderColor: "rgba(99, 102, 241, 0.3)",
            background: "rgba(99, 102, 241, 0.08)",
          }}
        >
          <span className="l-status-dot" />
          <span style={{ color: "var(--text-2)", fontWeight: 500 }}>
            {PORTFOLIO_DATA.profile.status}
          </span>
          <span style={{ color: "var(--text-4)" }}>·</span>
          <span className="flex items-center gap-1" style={{ color: "var(--accent-hi)" }}>
            <RiMapPinUserLine /> Sri Lanka
          </span>
        </motion.div>

        {/* Hero Greeting & Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          {/* Circular Photo Avatar */}
          <div className="relative mb-5">
            <div
              className="p-1 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.7) 0%, rgba(168,85,247,0.7) 50%, rgba(236,72,153,0.7) 100%)",
                boxShadow: "0 0 35px rgba(99,102,241,0.35)",
              }}
            >
              <img
                src="/images/himadi-office.jpg"
                alt={PORTFOLIO_DATA.profile.name}
                className="w-20 h-20 rounded-full object-cover object-top block"
                style={{
                  border: "2px solid #08090a",
                }}
              />
            </div>
            <span
              className="absolute bottom-1 right-1 l-status-dot"
              style={{ width: "12px", height: "12px", border: "2px solid #08090a" }}
              title="Available for Opportunities"
            />
          </div>

          <p
            className="l-mono text-sm md:text-base font-medium mb-3"
            style={{ color: "var(--accent-hi)", letterSpacing: "0.02em" }}
          >
            Hi, I'm {PORTFOLIO_DATA.profile.name}
          </p>
          <h1 className="l-display l-gradient-text max-w-4xl">
            Software Engineering Student &amp; Aspiring Software Engineer
          </h1>
        </motion.div>

        {/* Short Professional Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="l-lead mt-6 max-w-2xl"
          style={{ fontSize: "1.15rem" }}
        >
          Studying at <span style={{ color: "var(--text-1)", fontWeight: 500 }}>{PORTFOLIO_DATA.profile.institute}</span>.
          Passionate about building clean full-stack web applications, scalable Java Spring Boot microservices,
          and practical Machine Learning models that solve real-world problems.
        </motion.p>

        {/* Action Buttons: View Projects, Download CV, Contact Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mt-9"
        >
          <a href="#projects" className="l-btn l-btn-primary">
            View My Projects <HiArrowRight />
          </a>
          <a
            href="#cv"
            onClick={handleDownloadCV}
            className="l-btn l-btn-secondary"
          >
            <HiOutlineDocumentDownload style={{ fontSize: "17px" }} /> Download CV
          </a>
          <a href="#contact" className="l-btn l-btn-secondary">
            Contact Me
          </a>
        </motion.div>

        {/* Quick Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8 text-xs"
          style={{ color: "var(--text-3)" }}
        >
          <span className="flex items-center gap-1.5">
            <RiGraduationCapLine style={{ color: "var(--accent-hi)", fontSize: "15px" }} /> IJSE Student
          </span>
          <span>·</span>
          <span>Java &amp; Spring Boot</span>
          <span>·</span>
          <span>React &amp; TypeScript</span>
          <span>·</span>
          <span>Python &amp; ML</span>
        </motion.div>

        {/* Interactive Workspace Mockup */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl mt-16 md:mt-20"
          style={{ perspective: 1400 }}
        >
          <motion.div style={{ rotateX, scale, transformOrigin: "50% 0%" }}>
            <DeveloperWorkspace />
          </motion.div>
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }}
          />
        </motion.div>
      </div>
    </section>
  );
};
