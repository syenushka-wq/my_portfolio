import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu4Line, RiCloseLine, RiDownloadLine, RiMailLine } from "react-icons/ri";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(l => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActive(`#${e.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`CV download initiated. You can place your actual resume in the public folder as "${PORTFOLIO_DATA.profile.cvFileName}".`);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all"
      style={{
        background: scrolled || menuOpen ? "rgba(8, 9, 10, 0.85)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(16px) saturate(180%)" : "none",
        borderBottom: `1px solid ${scrolled || menuOpen ? "var(--border)" : "transparent"}`,
      }}
    >
      <div className="l-container flex items-center justify-between" style={{ height: "68px" }}>
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
          <div
            className="overflow-hidden relative shrink-0"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              border: "1.5px solid rgba(99, 102, 241, 0.45)",
              boxShadow: "0 0 14px rgba(99, 102, 241, 0.35)",
              background: "var(--bg-elevated)",
            }}
          >
            <img
              src="/images/himadi-office.jpg"
              alt="Himadi"
              className="w-full h-full object-cover object-top block"
            />
          </div>
          <div className="flex flex-col">
            <span style={{ fontSize: "14.5px", fontWeight: 600, letterSpacing: "-0.01em", color: "var(--text-1)" }}>
              {PORTFOLIO_DATA.profile.name}
            </span>
            <span style={{ fontSize: "11px", color: "var(--text-3)", letterSpacing: "0.02em" }}>
              IJSE · Software Engineering
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: isActive ? "var(--text-1)" : "var(--text-3)",
                  background: isActive ? "rgba(255, 255, 255, 0.05)" : "transparent",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--text-1)";
                  if (!isActive) e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = isActive ? "var(--text-1)" : "var(--text-3)";
                  if (!isActive) e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={`#cv`}
            onClick={handleDownloadCV}
            className="l-btn l-btn-sm l-btn-secondary"
            title="Download Curriculum Vitae"
          >
            <RiDownloadLine /> CV
          </a>
          <a
            href="#contact"
            className="l-btn l-btn-sm l-btn-primary"
          >
            <RiMailLine /> Contact Me
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden flex items-center justify-center"
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "8px",
            border: "1px solid var(--border)",
            background: "rgba(255, 255, 255, 0.03)",
            color: "var(--text-1)",
            cursor: "pointer",
            fontSize: "20px"
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu4Line />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "var(--bg-elevated)",
              borderBottom: "1px solid var(--border)",
              overflow: "hidden",
            }}
          >
            <div className="l-container flex flex-col" style={{ padding: "16px 24px 28px" }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    padding: "12px 0",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "var(--text-1)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="flex flex-col gap-2.5" style={{ marginTop: "20px" }}>
                <a
                  href="#cv"
                  onClick={e => {
                    handleDownloadCV(e);
                    setMenuOpen(false);
                  }}
                  className="l-btn l-btn-secondary"
                  style={{ width: "100%" }}
                >
                  <RiDownloadLine /> Download CV
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="l-btn l-btn-primary"
                  style={{ width: "100%" }}
                >
                  <RiMailLine /> Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
