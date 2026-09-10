import React from "react";
import { RiAwardLine, RiShieldCheckLine } from "react-icons/ri";
import { Reveal, SectionHeader } from "./ui";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Certifications: React.FC = () => {
  const certs = PORTFOLIO_DATA.certifications;

  return (
    <section id="certifications" className="l-section">
      <div className="l-container">
        <SectionHeader
          num="06"
          label="Certifications & Continuous Learning"
          title="Verified competencies and applied study."
          lead="Committed to staying ahead in software engineering practices, artificial intelligence, and enterprise full-stack development."
        />

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {certs.map(cert => (
              <div
                key={cert.title}
                className="l-card l-card-hover p-6 flex flex-col gap-4"
                style={{ background: "var(--bg-elevated)" }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center justify-center text-lg"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(99, 102, 241, 0.12)",
                      color: "var(--accent-hi)",
                      border: "1px solid rgba(99, 102, 241, 0.25)"
                    }}
                  >
                    <RiAwardLine />
                  </div>
                  <span className="l-pill l-pill-accent text-xs">
                    {cert.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold tracking-tight" style={{ color: "var(--text-1)" }}>
                    {cert.title}
                  </h3>
                  <p className="text-xs mt-1" style={{ color: "var(--accent-hi)", fontWeight: 500 }}>
                    {cert.issuer}
                  </p>
                </div>

                <p className="l-body text-xs leading-relaxed">
                  {cert.description}
                </p>

                <div className="mt-auto pt-3 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)" }}>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--green)" }}>
                    <RiShieldCheckLine /> {cert.year}
                  </span>
                  <span className="l-mono text-[11px]" style={{ color: "var(--text-4)" }}>
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
