import React from "react";
import { RiGithubLine, RiLinkedinBoxLine, RiMailLine, RiArrowUpLine } from "react-icons/ri";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const profile = PORTFOLIO_DATA.profile;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-elevated)" }}>
      <div className="l-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div
                className="overflow-hidden relative shrink-0"
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "1px solid rgba(99, 102, 241, 0.45)",
                }}
              >
                <img
                  src="/images/himadi-office.jpg"
                  alt="Himadi"
                  className="w-full h-full object-cover object-top block"
                />
              </div>
              <span className="text-base font-bold tracking-tight" style={{ color: "var(--text-1)" }}>
                {profile.name}
              </span>
            </div>

            <p className="l-body text-xs max-w-sm">
              Software Engineering student at {profile.institute}. Exploring full-stack engineering, enterprise Spring Boot microservices, and practical machine learning solutions.
            </p>

            <div className="flex items-center gap-2 mt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="l-btn l-btn-ghost text-base"
                style={{ width: "36px", height: "36px", padding: 0 }}
                aria-label="GitHub Profile"
              >
                <RiGithubLine />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="l-btn l-btn-ghost text-base"
                style={{ width: "36px", height: "36px", padding: 0 }}
                aria-label="LinkedIn Profile"
              >
                <RiLinkedinBoxLine />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="l-btn l-btn-ghost text-base"
                style={{ width: "36px", height: "36px", padding: 0 }}
                aria-label="Email Contact"
              >
                <RiMailLine />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text-4)" }}>
                Portfolio
              </p>
              <ul className="flex flex-col gap-2 text-xs" style={{ listStyle: "none" }}>
                <li><a href="#about" className="l-link">About Me</a></li>
                <li><a href="#skills" className="l-link">Skills &amp; Stack</a></li>
                <li><a href="#projects" className="l-link">Featured Projects</a></li>
                <li><a href="#education" className="l-link">Education (IJSE)</a></li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text-4)" }}>
                Experience
              </p>
              <ul className="flex flex-col gap-2 text-xs" style={{ listStyle: "none" }}>
                <li><a href="#experience" className="l-link">Activities</a></li>
                <li><a href="#certifications" className="l-link">Certifications</a></li>
                <li><a href="#contact" className="l-link">Contact</a></li>
                <li><a href="#home" onClick={scrollToTop} className="l-link flex items-center gap-1">Back to Top <RiArrowUpLine /></a></li>
              </ul>
            </div>
          </div>

          {/* Status & Credits */}
          <div className="md:col-span-3 flex flex-col gap-3 md:items-end md:text-right">
            <span className="l-pill" style={{ background: "rgba(16, 185, 129, 0.08)", borderColor: "rgba(16, 185, 129, 0.25)", color: "var(--green)" }}>
              <span className="l-status-dot" /> Open to Opportunities
            </span>
            <p className="text-xs" style={{ color: "var(--text-4)" }}>
              Location: {profile.location}
            </p>
            <p className="text-xs" style={{ color: "var(--text-4)" }}>
              Institute: IJSE Software Engineering
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-4)" }}
        >
          <p>© {new Date().getFullYear()} Software Engineering Portfolio. Built with React &amp; TypeScript.</p>
          <p className="flex items-center gap-1.5">
            Designed for high performance, clean architecture, and modern aesthetics.
          </p>
        </div>
      </div>
    </footer>
  );
};
