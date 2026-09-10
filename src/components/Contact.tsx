import React, { useState } from "react";
import {
  RiMailLine, RiMapPinLine, RiTimeLine, RiGithubLine, RiLinkedinBoxLine,
  RiSendPlaneLine, RiCheckboxCircleLine, RiErrorWarningLine, RiLoader4Line
} from "react-icons/ri";
import { Reveal, SectionHeader } from "./ui";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const profile = PORTFOLIO_DATA.profile;
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");

    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: "success",
        text: `Thank you, ${name}! Your message has been received. I will get back to you shortly.`
      });
      form.reset();
    }, 700);
  };

  return (
    <section id="contact" className="l-section overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[380px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 55% 65% at 50% 0%, rgba(99,102,241,0.12), transparent 70%)"
        }}
      />

      <div className="l-container relative">
        <SectionHeader
          num="07"
          label="Contact & Inquiries"
          title="Let's build something exceptional."
          lead="Looking to collaborate on innovative software projects, internships, or machine learning applications? Reach out and let's connect."
        />

        <div className="grid md:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Contact Information & Social Channels */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Reveal>
              <div className="l-card p-6 flex flex-col gap-5" style={{ background: "var(--bg-elevated)" }}>
                <div>
                  <h3 className="text-lg font-bold tracking-tight" style={{ color: "var(--text-1)" }}>
                    Direct Channels
                  </h3>
                  <p className="l-body text-xs mt-1">
                    Feel free to reach out via email or connect with me on social developer networks.
                  </p>
                </div>

                <div className="flex flex-col gap-3.5">
                  <div className="flex items-start gap-3 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <RiMailLine className="text-xl mt-0.5" style={{ color: "var(--accent-hi)" }} />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold" style={{ color: "var(--text-4)", textTransform: "uppercase" }}>Email Address</p>
                      <a href={`mailto:${profile.email}`} className="text-sm font-medium hover:underline break-all" style={{ color: "var(--text-1)", textDecoration: "none" }}>
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <RiMapPinLine className="text-xl mt-0.5" style={{ color: "var(--green)" }} />
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "var(--text-4)", textTransform: "uppercase" }}>Location</p>
                      <p className="text-sm font-medium" style={{ color: "var(--text-1)" }}>
                        {profile.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <RiTimeLine className="text-xl mt-0.5" style={{ color: "var(--amber)" }} />
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "var(--text-4)", textTransform: "uppercase" }}>Response Time</p>
                      <p className="text-sm font-medium" style={{ color: "var(--text-1)" }}>
                        Typically within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-2 flex flex-col gap-2">
                  <p className="text-xs font-semibold" style={{ color: "var(--text-4)", textTransform: "uppercase" }}>
                    Connect Online
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="l-btn l-btn-sm l-btn-secondary flex-1"
                    >
                      <RiGithubLine /> GitHub
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="l-btn l-btn-sm l-btn-secondary flex-1"
                    >
                      <RiLinkedinBoxLine /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Interactive Contact Message Form */}
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="l-card p-6 md:p-8 flex flex-col gap-4"
                style={{ background: "var(--bg-elevated)" }}
              >
                <div>
                  <h3 className="text-lg font-bold tracking-tight" style={{ color: "var(--text-1)" }}>
                    Send a Message
                  </h3>
                  <p className="l-body text-xs mt-1">
                    Have an inquiry, project proposal, or opportunity? Drop a note below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-medium" style={{ color: "var(--text-2)" }}>Your Name</span>
                    <input
                      name="name"
                      type="text"
                      className="l-input"
                      placeholder="e.g. Alex Silva"
                      required
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-medium" style={{ color: "var(--text-2)" }}>Your Email</span>
                    <input
                      name="email"
                      type="email"
                      className="l-input"
                      placeholder="alex@example.com"
                      required
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium" style={{ color: "var(--text-2)" }}>Subject</span>
                  <input
                    name="subject"
                    type="text"
                    className="l-input"
                    placeholder="Project Inquiry / Software Opportunity"
                    required
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium" style={{ color: "var(--text-2)" }}>Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    className="l-input"
                    style={{ resize: "none" }}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    required
                  />
                </label>

                {status && (
                  <div
                    className="flex items-center gap-2 p-3 rounded-lg text-xs"
                    style={{
                      background: status.type === "success" ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
                      border: `1px solid ${status.type === "success" ? "rgba(16, 185, 129, 0.3)" : "rgba(239, 68, 68, 0.3)"}`,
                      color: status.type === "success" ? "var(--green)" : "#ef4444",
                    }}
                  >
                    {status.type === "success" ? <RiCheckboxCircleLine className="text-base shrink-0" /> : <RiErrorWarningLine className="text-base shrink-0" />}
                    <span>{status.text}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="l-btn l-btn-primary w-full mt-2"
                >
                  {loading ? (
                    <>
                      <RiLoader4Line className="l-spin" /> Sending Message...
                    </>
                  ) : (
                    <>
                      <RiSendPlaneLine /> Send Message
                    </>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
