import React from "react";
import {
  FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt
} from "react-icons/fa";
import {
  SiSpringboot, SiTypescript, SiJavascript, SiMysql, SiFastapi, SiPostman, SiExpress, SiVite
} from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import {
  RiCodeSSlashLine, RiServerLine, RiDatabase2Line, RiToolsLine, RiCpuLine, RiLayoutMasonryLine
} from "react-icons/ri";
import { Reveal, SectionHeader } from "./ui";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const getSkillIcon = (name: string): React.ReactNode => {
  const map: Record<string, React.ReactNode> = {
    "Java": <FaJava style={{ color: "#f89820" }} />,
    "Python": <FaPython style={{ color: "#3776ab" }} />,
    "TypeScript": <SiTypescript style={{ color: "#3178c6" }} />,
    "JavaScript": <SiJavascript style={{ color: "#f7df1e" }} />,
    "JavaScript (ES6+)": <SiJavascript style={{ color: "#f7df1e" }} />,
    "SQL": <FaDatabase style={{ color: "#00758f" }} />,
    "MySQL": <SiMysql style={{ color: "#00758f" }} />,
    "HTML": <FaHtml5 style={{ color: "#e34f26" }} />,
    "HTML5": <FaHtml5 style={{ color: "#e34f26" }} />,
    "CSS": <FaCss3Alt style={{ color: "#1572b6" }} />,
    "CSS3 / Modern CSS": <FaCss3Alt style={{ color: "#1572b6" }} />,
    "React": <FaReact style={{ color: "#61dafb" }} />,
    "Spring Boot": <SiSpringboot style={{ color: "#6db33f" }} />,
    "REST APIs": <RiServerLine style={{ color: "#818cf8" }} />,
    "FastAPI": <SiFastapi style={{ color: "#009688" }} />,
    "Node.js": <FaNodeJs style={{ color: "#5fa04e" }} />,
    "Express.js": <SiExpress style={{ color: "#cbd5e1" }} />,
    "Machine Learning": <BiBrain style={{ color: "#a855f7" }} />,
    "Regression Analysis": <BiBrain style={{ color: "#818cf8" }} />,
    "Data Cleaning": <RiCodeSSlashLine style={{ color: "#34d399" }} />,
    "Feature Engineering": <RiCpuLine style={{ color: "#fbbf24" }} />,
    "Scikit-Learn": <BiBrain style={{ color: "#f97316" }} />,
    "Git": <FaGitAlt style={{ color: "#f05032" }} />,
    "GitHub": <FaGitAlt style={{ color: "#ffffff" }} />,
    "Postman": <SiPostman style={{ color: "#ff6c37" }} />,
    "Vite": <SiVite style={{ color: "#bd34fe" }} />,
    "VS Code": <RiToolsLine style={{ color: "#007acc" }} />,
    "REST API Testing": <RiServerLine style={{ color: "#38bdf8" }} />,
    "Relational Modeling": <RiDatabase2Line style={{ color: "#38bdf8" }} />,
    "Query Optimization": <RiDatabase2Line style={{ color: "#34d399" }} />,
    "Responsive UI": <RiLayoutMasonryLine style={{ color: "#ec4899" }} />,
  };
  return map[name] || <RiCodeSSlashLine style={{ color: "var(--accent-hi)" }} />;
};

const getCategoryIcon = (title: string): React.ReactNode => {
  if (title.includes("Languages")) return <RiCodeSSlashLine />;
  if (title.includes("Frontend")) return <RiLayoutMasonryLine />;
  if (title.includes("Backend")) return <RiServerLine />;
  if (title.includes("Database")) return <RiDatabase2Line />;
  if (title.includes("AI")) return <BiBrain />;
  return <RiToolsLine />;
};

export const Skills: React.FC = () => {
  const categories = PORTFOLIO_DATA.skills;
  const totalSkillsCount = categories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <section id="skills" className="l-section">
      <div className="l-container">
        <SectionHeader
          num="02"
          label="Skills & Tech Stack"
          title={<>Structured expertise<br className="hidden sm:block" /> across modern engineering.</>}
          lead={`${totalSkillsCount} core technologies grouped into 6 engineering disciplines, honed through practical coursework at IJSE and project development.`}
        />

        {/* Skills Cards Grid */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className="l-card p-6 flex flex-col gap-4 transition-all hover:bg-white/5"
                style={{
                  background: "var(--bg-elevated)",
                }}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex items-center justify-center text-base"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "rgba(99, 102, 241, 0.12)",
                        color: "var(--accent-hi)",
                        border: "1px solid rgba(99, 102, 241, 0.25)"
                      }}
                    >
                      {getCategoryIcon(cat.title)}
                    </span>
                    <h3 className="text-sm font-semibold tracking-tight" style={{ color: "var(--text-1)" }}>
                      {cat.title}
                    </h3>
                  </div>
                  <span className="l-mono text-xs" style={{ color: "var(--text-4)" }}>
                    {String(cat.skills.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map(skill => (
                    <span
                      key={skill.name}
                      className="l-tag flex items-center gap-2 py-1.5 px-2.5"
                      style={{
                        height: "auto",
                        fontSize: "12.5px",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--border)",
                        color: "var(--text-2)",
                      }}
                    >
                      <span className="text-sm flex items-center">
                        {getSkillIcon(skill.name)}
                      </span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Learning & Architecture Philosophy Banner */}
        <Reveal delay={0.15}>
          <div
            className="l-card p-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(255,255,255,0.01) 100%)",
              borderColor: "rgba(99,102,241,0.25)"
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" style={{ color: "var(--accent-hi)" }}>
                <RiCpuLine />
              </span>
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--text-1)" }}>
                  Engineering Mindset &amp; Best Practices
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>
                  Emphasizing clean code architecture, OOP principles, RESTful interface design, and continuous integration.
                </p>
              </div>
            </div>
            <a href="#projects" className="l-btn l-btn-sm l-btn-secondary shrink-0">
              See in Projects →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
