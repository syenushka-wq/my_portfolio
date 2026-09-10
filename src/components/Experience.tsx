import React from "react";
import { RiBriefcase4Line, RiCheckLine, RiGitBranchLine } from "react-icons/ri";
import { Reveal, SectionHeader } from "./ui";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Experience: React.FC = () => {
  const experiences = PORTFOLIO_DATA.experiences;

  return (
    <section id="experience" className="l-section">
      <div className="l-container">
        <SectionHeader
          num="05"
          label="Experience & Activities"
          title="Practical engineering in action."
          lead="Applying academic concepts into industry-standard software implementations, team collaboration, and architecture design."
        />

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.role + exp.organization} delay={i * 0.1}>
              <article
                className="l-card l-card-hover overflow-hidden grid md:grid-cols-12"
                style={{ background: "var(--bg-elevated)" }}
              >
                {/* Meta Column */}
                <div
                  className="p-8 md:col-span-5 flex flex-col gap-4 border-b md:border-b-0 md:border-r"
                  style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.015)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center font-bold text-base"
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)",
                        color: "#ffffff"
                      }}
                    >
                      <RiBriefcase4Line />
                    </div>
                    <div>
                      <h4 className="text-base font-bold tracking-tight" style={{ color: "var(--text-1)" }}>
                        {exp.organization}
                      </h4>
                      <p className="text-xs" style={{ color: "var(--text-3)" }}>
                        {exp.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="l-pill" style={{ background: "rgba(16, 185, 129, 0.1)", borderColor: "rgba(16, 185, 129, 0.3)", color: "var(--green)" }}>
                      <span className="l-status-dot" /> Active Role
                    </span>
                    <span className="l-mono text-xs" style={{ color: "var(--text-4)" }}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Campus & Lab Photo */}
                  <div
                    className="relative w-full aspect-[16/9] rounded-lg overflow-hidden my-2"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <img
                      src="/images/himadi-campus.jpg"
                      alt="Engineering Lab & Project Development"
                      className="w-full h-full object-cover object-center"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(to top, rgba(8,9,10,0.85) 0%, transparent 50%)" }}
                    />
                    <span className="absolute bottom-2 left-2 text-[11px] l-mono font-medium" style={{ color: "var(--accent-hi)" }}>
                      Campus Lab &amp; Projects
                    </span>
                  </div>

                  <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map(t => (
                      <span key={t} className="l-tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Details Column */}
                <div className="p-8 md:col-span-7 flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>
                      {exp.role}
                    </h3>
                    <p className="l-body text-sm mt-2">
                      {exp.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2.5 pt-2">
                    {exp.points.map((pt, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm" style={{ color: "var(--text-2)" }}>
                        <RiCheckLine style={{ color: "var(--accent-hi)", fontSize: "16px", flexShrink: 0, marginTop: "2px" }} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-xs" style={{ borderTop: "1px solid var(--border)", color: "var(--text-4)" }}>
                    <RiGitBranchLine style={{ color: "var(--accent-hi)" }} />
                    <span>Continuous integration, clean architecture, and modular service separation</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
