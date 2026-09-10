import React from "react";
import {
  RiGithubLine, RiExternalLinkLine, RiCheckLine,
  RiBrainLine, RiServerLine, RiHeartPulseLine
} from "react-icons/ri";
import { HiArrowUpRight } from "react-icons/hi2";
import { Reveal, SectionHeader } from "./ui";
import { PORTFOLIO_DATA, ProjectItem } from "../data/portfolioData";

const getCategoryIcon = (cat: string) => {
  if (cat.includes("AI") || cat.includes("ML")) return <RiBrainLine />;
  if (cat.includes("Microservices")) return <RiServerLine />;
  return <RiHeartPulseLine />;
};

const ProjectButtons: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const handleLiveDemoClick = (e: React.MouseEvent) => {
    if (project.liveUrl === "#") {
      e.preventDefault();
      alert(`Live demo preview placeholder for "${project.title}". You can configure your deployment link in portfolioData.ts.`);
    }
  };

  return (
    <div className="flex items-center gap-2.5">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="l-btn l-btn-sm l-btn-secondary"
        title="View Source Code on GitHub"
      >
        <RiGithubLine /> GitHub
      </a>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          onClick={handleLiveDemoClick}
          target="_blank"
          rel="noopener noreferrer"
          className="l-btn l-btn-sm l-btn-primary"
          title="Open Live Demonstration"
        >
          <RiExternalLinkLine /> Live Demo
        </a>
      )}
    </div>
  );
};

/* Featured Project: Used Car Price Predictor for Sri Lanka */
const FeaturedProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => (
  <Reveal>
    <article
      className="l-card l-card-hover overflow-hidden grid lg:grid-cols-12"
      style={{
        background: "var(--bg-elevated)",
        borderColor: "rgba(99, 102, 241, 0.28)",
      }}
    >
      {/* Left Details Column */}
      <div className="p-8 md:p-10 lg:col-span-7 flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <span className="l-pill" style={{ color: "var(--accent-hi)", borderColor: "rgba(99,102,241,0.3)", background: "var(--accent-soft)" }}>
            <span style={{ fontSize: "14px" }}>{getCategoryIcon(project.category)}</span>
            Featured Project
          </span>
          <span className="l-tag l-mono text-xs">{project.category}</span>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>
            {project.title}
          </h3>
          <p className="text-sm md:text-base mt-2" style={{ color: "var(--accent-hi)", fontWeight: 500 }}>
            {project.tagline}
          </p>
        </div>

        <p className="l-body">{project.summary}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map(t => (
            <span key={t} className="l-tag" style={{ color: "var(--text-2)" }}>{t}</span>
          ))}
        </div>

        <div className="mt-auto pt-4" style={{ borderTop: "1px solid var(--border)" }}>
          <ProjectButtons project={project} />
        </div>
      </div>

      {/* Right Architecture & Highlights Spec Sheet */}
      <div
        className="p-8 md:p-10 lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l"
        style={{
          background: "linear-gradient(145deg, rgba(99,102,241,0.06) 0%, rgba(0,0,0,0.3) 100%)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="rounded-xl overflow-hidden p-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-center justify-between pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
            <span className="l-mono text-xs" style={{ color: "var(--accent-hi)" }}>
              pipeline-architecture
            </span>
            <span className="l-mono text-xs" style={{ color: "var(--text-4)" }}>
              Sri Lanka Auto Dataset
            </span>
          </div>

          <div className="py-4 text-center" style={{ borderBottom: "1px solid var(--border)" }}>
            <p className="text-3xl md:text-4xl font-bold l-gradient-text">
              FastAPI + ML
            </p>
            <p className="text-xs mt-1.5" style={{ color: "var(--text-3)" }}>
              Real-Time Regression Inferences &amp; Express Gateway
            </p>
          </div>

          <div className="pt-4 flex flex-col gap-2.5">
            {project.keyHighlights.slice(0, 4).map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs" style={{ color: "var(--text-2)" }}>
                <RiCheckLine style={{ color: "var(--accent-hi)", fontSize: "16px", flexShrink: 0, marginTop: "1px" }} />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  </Reveal>
);

/* Grid Project Card: Automated Greenhouse & Serenity Mental Health */
const StandardProjectCard: React.FC<{ project: ProjectItem; delay: number }> = ({ project, delay }) => (
  <Reveal delay={delay} className="h-full">
    <article
      className="l-card l-card-hover h-full p-8 flex flex-col gap-5"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="flex items-center justify-between">
        <span className="l-pill">
          <span style={{ color: "var(--accent-hi)" }}>{getCategoryIcon(project.category)}</span>
          {project.category}
        </span>
        <span className="l-mono text-xs" style={{ color: "var(--text-4)" }}>
          #{project.id}
        </span>
      </div>

      <div>
        <h3 className="text-xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>
          {project.title}
        </h3>
        <p className="text-xs md:text-sm mt-1" style={{ color: "var(--accent-hi)", fontWeight: 500 }}>
          {project.tagline}
        </p>
      </div>

      <p className="l-body text-sm">{project.summary}</p>

      {/* Highlights List */}
      <div className="flex flex-col gap-2 pt-1">
        {project.keyHighlights.map((h, i) => (
          <div key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-2)" }}>
            <RiCheckLine style={{ color: "var(--green)", fontSize: "15px", flexShrink: 0, marginTop: "1px" }} />
            <span>{h}</span>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 pt-2">
        {project.technologies.map(t => (
          <span key={t} className="l-tag">{t}</span>
        ))}
      </div>

      {/* Action Footer */}
      <div className="mt-auto pt-5" style={{ borderTop: "1px solid var(--border)" }}>
        <ProjectButtons project={project} />
      </div>
    </article>
  </Reveal>
);

export const Projects: React.FC = () => {
  const projects = PORTFOLIO_DATA.projects;
  const featured = projects.find(p => p.featured) || projects[0];
  const others = projects.filter(p => p.id !== featured.id);

  return (
    <section id="projects" className="l-section">
      <div className="l-container">
        <SectionHeader
          num="03"
          label="Featured Projects"
          title="Practical software built for the real world."
          lead="From Machine Learning regression models and Java microservices to full-stack healthcare platforms."
          aside={
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="l-btn l-btn-secondary"
            >
              <RiGithubLine /> GitHub Repositories <HiArrowUpRight />
            </a>
          }
        />

        {/* Featured Card */}
        <FeaturedProjectCard project={featured} />

        {/* Standard Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          {others.map((p, i) => (
            <StandardProjectCard key={p.id} project={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
