import React from "react";
import { RiGraduationCapLine, RiBookOpenLine, RiCheckDoubleLine, RiMapPinLine } from "react-icons/ri";
import { Reveal, SectionHeader } from "./ui";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Education: React.FC = () => {
  const educationItems = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="l-section">
      <div className="l-container">
        <SectionHeader
          num="04"
          label="Education"
          title={<>Academic foundation at<br className="hidden sm:block" /> Sri Lanka's premier software institute.</>}
          lead="Rigorous software engineering curriculum focused on enterprise systems, computational principles, and modern software development practices."
        />

        <div className="flex flex-col gap-6">
          {educationItems.map((edu, i) => (
            <Reveal key={edu.institution} delay={i * 0.1}>
              <div
                className="l-card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start justify-between"
                style={{
                  background: "var(--bg-elevated)",
                  borderColor: "rgba(99, 102, 241, 0.25)"
                }}
              >
                {/* Institution Icon & Main Meta */}
                <div className="flex gap-4 items-start">
                  <div
                    className="flex items-center justify-center text-2xl font-bold shrink-0"
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.2) 100%)",
                      color: "var(--accent-hi)",
                      border: "1px solid rgba(99, 102, 241, 0.3)"
                    }}
                  >
                    <RiGraduationCapLine />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="l-pill l-pill-accent text-xs">
                        {edu.badge || "Academic Degree"}
                      </span>
                      <span className="l-pill" style={{ color: "var(--green)", borderColor: "rgba(16, 185, 129, 0.3)" }}>
                        <span className="l-status-dot" /> {edu.status}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mt-1" style={{ color: "var(--text-1)" }}>
                      {edu.institution}
                    </h3>

                    <p className="text-base font-semibold" style={{ color: "var(--accent-hi)" }}>
                      {edu.program}
                    </p>

                    <p className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
                      <RiMapPinLine /> {edu.location}
                    </p>
                  </div>
                </div>

                {/* Focus Areas & Curriculum Coverage */}
                <div
                  className="flex-1 max-w-xl p-6 rounded-xl flex flex-col gap-3"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}
                >
                  <p className="text-xs l-mono" style={{ color: "var(--text-4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Curriculum Highlights &amp; Core Disciplines
                  </p>
                  <p className="l-body text-sm">
                    {edu.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {[
                      "Enterprise Java & OOP Architecture",
                      "Spring Boot Microservices & REST APIs",
                      "Database Modeling with MySQL",
                      "Frontend Interfaces with React & TypeScript",
                      "Data Structures & Algorithm Design",
                      "Version Control & Agile Team Practices",
                    ].map(item => (
                      <div key={item} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-2)" }}>
                        <RiCheckDoubleLine style={{ color: "var(--accent-hi)", fontSize: "14px", flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* IJSE Campus Verified Photo */}
                <div
                  className="hidden md:flex flex-col items-center gap-2 shrink-0 p-2 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}
                >
                  <div className="relative w-40 aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src="/images/himadi-ijse.jpg"
                      alt="Himadi at IJSE Institute of Software Engineering"
                      className="w-full h-full object-cover object-top"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(to top, rgba(8,9,10,0.85) 0%, transparent 40%)" }}
                    />
                    <div className="absolute bottom-2 inset-x-2 text-center">
                      <span className="l-pill text-[11px]" style={{ background: "rgba(8,9,10,0.75)", borderColor: "rgba(255,255,255,0.15)" }}>
                        IJSE Student
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
