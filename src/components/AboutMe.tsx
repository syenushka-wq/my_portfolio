import React, { useState } from "react";
import { HiArrowRight, HiOutlineDocumentDownload } from "react-icons/hi";
import {
  RiMapPinLine, RiBuilding4Line, RiCodeLine,
  RiTerminalBoxLine, RiGithubLine, RiLinkedinBoxLine, RiMailLine,
  RiCameraLensLine
} from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionHeader } from "./ui";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const GALLERY_PHOTOS = [
  { id: "office", src: "/images/himadi-office.jpg", title: "Professional", subtitle: "Corporate Office" },
  { id: "portrait", src: "/images/himadi-portrait.jpg", title: "Portrait", subtitle: "Personal Style" },
  { id: "ijse", src: "/images/himadi-ijse.jpg", title: "At IJSE", subtitle: "Institute of Software Engineering" },
  { id: "campus", src: "/images/himadi-campus.jpg", title: "Campus Lab", subtitle: "Engineering Studies" },
  { id: "outdoor", src: "/images/himadi-outdoor.jpg", title: "Lifestyle", subtitle: "Creative Balance" },
];

export const AboutMe: React.FC = () => {
  const profile = PORTFOLIO_DATA.profile;
  const [activePhoto, setActivePhoto] = useState(GALLERY_PHOTOS[0]);

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`CV download initiated. Please add your resume PDF to the public folder as "${profile.cvFileName}".`);
  };

  return (
    <section id="about" className="l-section">
      <div className="l-container">
        <SectionHeader
          num="01"
          label="About Me"
          title={<>Building with purpose,<br className="hidden sm:block" /> learning without limits.</>}
          lead="A Software Engineering student dedicated to crafting robust digital solutions across web, enterprise backends, and artificial intelligence."
        />

        <div className="grid md:grid-cols-[minmax(0,4.8fr)_minmax(0,7.2fr)] gap-10 md:gap-14 items-start">
          {/* Developer Portrait & Identity Card */}
          <Reveal>
            <div className="l-card p-3.5 flex flex-col gap-4" style={{ background: "var(--bg-elevated)" }}>
              {/* Main Photo Frame with Aspect Ratio */}
              <div
                className="relative aspect-[4/5] w-full rounded-xl overflow-hidden"
                style={{
                  border: "1px solid var(--border-strong)",
                  boxShadow: "0 20px 45px -15px rgba(0,0,0,0.7), 0 0 45px -10px rgba(99,102,241,0.25)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePhoto.src}
                    src={activePhoto.src}
                    alt={`${profile.name} - ${activePhoto.title}`}
                    className="w-full h-full object-cover object-top"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {/* Ambient dark gradient vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(8, 9, 10, 0.94) 0%, rgba(8, 9, 10, 0.4) 45%, transparent 75%)"
                  }}
                />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span
                    className="l-pill"
                    style={{
                      background: "rgba(8, 9, 10, 0.65)",
                      backdropFilter: "blur(10px)",
                      borderColor: "rgba(255,255,255,0.15)",
                      fontSize: "11.5px",
                    }}
                  >
                    <RiCameraLensLine style={{ color: "var(--accent-hi)" }} /> {activePhoto.title}
                  </span>
                  <span
                    className="l-pill"
                    style={{
                      background: "rgba(16, 185, 129, 0.15)",
                      backdropFilter: "blur(10px)",
                      borderColor: "rgba(16, 185, 129, 0.35)",
                      color: "var(--green)",
                      fontSize: "11.5px",
                    }}
                  >
                    <span className="l-status-dot" style={{ width: "6px", height: "6px" }} /> Available
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col gap-1 pointer-events-none">
                  <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-md">
                    {profile.name}
                  </h3>
                  <p className="text-xs flex items-center gap-1.5" style={{ color: "var(--accent-hi)", fontWeight: 500 }}>
                    <RiBuilding4Line /> {profile.institute}
                  </p>
                  <p className="text-xs flex items-center gap-1.5" style={{ color: "var(--text-3)" }}>
                    <RiMapPinLine /> {profile.location} · {activePhoto.subtitle}
                  </p>
                </div>
              </div>

              {/* Photo Selector Strip */}
              <div className="flex flex-col gap-2 pt-1">
                <span className="text-[11px] l-mono font-medium" style={{ color: "var(--text-4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Photo Gallery ({GALLERY_PHOTOS.length} views)
                </span>
                <div className="grid grid-cols-5 gap-1.5">
                  {GALLERY_PHOTOS.map(p => {
                    const isSelected = activePhoto.id === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setActivePhoto(p)}
                        className="relative aspect-square rounded-lg overflow-hidden transition-all cursor-pointer"
                        style={{
                          border: isSelected ? "2px solid var(--accent-hi)" : "1px solid var(--border)",
                          boxShadow: isSelected ? "0 0 14px rgba(99,102,241,0.45)" : "none",
                          opacity: isSelected ? 1 : 0.65,
                          transform: isSelected ? "scale(1.03)" : "scale(1)",
                          padding: 0,
                          background: "transparent",
                        }}
                        title={p.title}
                      >
                        <img src={p.src} alt={p.title} className="w-full h-full object-cover object-top" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Profile Links */}
              <div className="flex flex-col gap-2 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="l-card l-card-hover flex items-center justify-between px-3.5 py-2.5"
                  style={{ textDecoration: "none", color: "var(--text-2)", fontSize: "13px" }}
                >
                  <span className="flex items-center gap-2.5">
                    <RiGithubLine style={{ fontSize: "16px", color: "var(--text-1)" }} /> GitHub Profile
                  </span>
                  <span className="l-mono text-xs" style={{ color: "var(--text-4)" }}>Visit →</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="l-card l-card-hover flex items-center justify-between px-3.5 py-2.5"
                  style={{ textDecoration: "none", color: "var(--text-2)", fontSize: "13px" }}
                >
                  <span className="flex items-center gap-2.5">
                    <RiLinkedinBoxLine style={{ fontSize: "16px", color: "#38bdf8" }} /> LinkedIn Profile
                  </span>
                  <span className="l-mono text-xs" style={{ color: "var(--text-4)" }}>Connect →</span>
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  className="l-card l-card-hover flex items-center justify-between px-3.5 py-2.5"
                  style={{ textDecoration: "none", color: "var(--text-2)", fontSize: "13px" }}
                >
                  <span className="flex items-center gap-2.5">
                    <RiMailLine style={{ fontSize: "16px", color: "#f59e0b" }} /> {profile.email}
                  </span>
                  <span className="l-mono text-xs" style={{ color: "var(--text-4)" }}>Email →</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Narrative Bio & Stats */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4">
                {profile.aboutBio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="l-body"
                    style={{
                      fontSize: index === 0 ? "1.0625rem" : "0.95rem",
                      color: index === 0 ? "var(--text-1)" : "var(--text-2)",
                      lineHeight: "1.7",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Core Stats Grid */}
            <Reveal delay={0.15}>
              <div className="l-grid grid-cols-2 sm:grid-cols-4">
                {profile.stats.map(s => (
                  <div key={s.label} className="p-5 flex flex-col justify-center">
                    <p className="text-2xl sm:text-3xl font-bold l-gradient-text tracking-tight">
                      {s.value}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-3)", fontWeight: 500 }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Quick Tech Highlights & CTA */}
            <Reveal delay={0.2} className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-2">
              <div className="flex flex-wrap gap-2.5">
                <a href="#projects" className="l-btn l-btn-primary">
                  Explore Projects <HiArrowRight />
                </a>
                <a
                  href="#cv"
                  onClick={handleDownloadCV}
                  className="l-btn l-btn-secondary"
                >
                  <HiOutlineDocumentDownload style={{ fontSize: "16px" }} /> Download CV
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-4)" }}>
                <RiCodeLine style={{ color: "var(--accent-hi)", fontSize: "16px" }} />
                <span>Full-Stack · Microservices · AI/ML</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
