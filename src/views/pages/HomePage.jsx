// ─── src/views/pages/HomePage.jsx ────────────────────────────────────────
// HOME PAGE VIEW — Gen-Z maximalist dark aesthetic
// Sections: Hero · Marquee · Services · Stats · Portfolio · Testimonials · Blog · CTA

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import {
  Reveal,
  SectionLabel,
  GlowOrb,
  StatCounter,
  Badge,
} from "../components";
import {
  SERVICES,
  STATS,
  PROJECTS,
  TESTIMONIALS,
  BLOG_POSTS,
  CONTACT_INFO,
} from "@models";

// ── HERO SECTION ──────────────────────────────────────────────────────────
function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -100]);
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const wa = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hi! I'm interested in your services.")}`;

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px var(--gutter) 80px",
      }}
    >
      {/* Background elements */}
      <div className="bg-grid" />
      <GlowOrb
        x="-10%"
        y="10%"
        size={700}
        color="var(--accent)"
        opacity={0.06}
      />
      <GlowOrb x="60%" y="30%" color="#4A9EFF" size={500} opacity={0.05} />
      <GlowOrb x="30%" y="60%" color="#FF3D6B" size={300} opacity={0.04} />

      {/* Scan line effect */}
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, var(--accent), transparent)",
          opacity: 0.3,
        }}
        animate={{ y: ["-100vh", "100vh"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 4,
        }}
      />

      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div style={{ y: y1, opacity }} className="flex-col gap-8">
          {/* Status chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(0,255,178,.08)",
              border: "1px solid rgba(0,255,178,.2)",
              borderRadius: 100,
              padding: "7px 18px",
              width: "fit-content",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "block",
                animation: "glow-pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: 12,
                color: "var(--accent)",
                fontWeight: 600,
                fontFamily: "var(--font-mono)",
              }}
            >
              Available for new projects · March 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: 880 }}
          >
            <h1
              className="display-xl"
              style={{ lineHeight: 0.92, marginBottom: 0 }}
            >
              <span style={{ display: "block" }}>We Build</span>
              <span className="text-gradient" style={{ display: "block" }}>
                Digital
              </span>
              <span style={{ display: "block" }}>Empires.</span>
            </h1>
          </motion.div>

          {/* Type animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(14px,1.5vw,18px)",
              color: "var(--muted2)",
              marginTop: 16,
              height: 28,
            }}
          >
            <span style={{ color: "var(--accent)" }}>$ nexacore </span>
            <TypeAnimation
              sequence={[
                "build ai-automation --scale",
                2000,
                "deploy web-platforms --next",
                2000,
                "secure infrastructure --fortress",
                2000,
                "grow revenue --10x",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              speed={50}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{
              fontSize: "clamp(15px,1.8vw,19px)",
              color: "var(--muted2)",
              lineHeight: 1.75,
              maxWidth: 580,
              marginTop: 12,
            }}
          >
            AI automation, world-class web development, cybersecurity, and
            full-stack digital marketing — everything you need to dominate your
            market.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginTop: 16,
            }}
          >
            <Link
              to="/contact"
              className="btn btn-primary btn-lg"
              style={{ fontWeight: 800, letterSpacing: "-0.3px" }}
            >
              Start Your Project →
            </Link>
            <Link to="/work" className="btn btn-ghost btn-lg">
              See Our Work
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(37,211,102,.1)",
                color: "#25D366",
                border: "1px solid rgba(37,211,102,.3)",
                padding: "14px 24px",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 15,
                transition: "background .2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(37,211,102,.18)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(37,211,102,.1)")
              }
            >
              💬 WhatsApp
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{
              display: "flex",
              gap: 40,
              marginTop: 56,
              flexWrap: "wrap",
              paddingTop: 48,
              borderTop: "1px solid var(--border)",
            }}
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: 32,
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  {s.prefix}
                  {s.value}
                  {s.suffix}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    marginTop: 4,
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decoration card */}
      <motion.div
        style={{ y: y2 }}
        className="animate-float"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        sx-class="hero-float-card"
      >
        <div
          style={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            background: "var(--card)",
            border: "1px solid var(--border2)",
            borderRadius: 18,
            padding: 24,
            width: 260,
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: "var(--muted)",
              fontFamily: "var(--font-mono)",
              marginBottom: 12,
              letterSpacing: 1,
            }}
          >
            LATEST DELIVERY
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 20,
              marginBottom: 6,
            }}
          >
            FinTech SaaS
          </div>
          <div
            style={{ fontSize: 12, color: "var(--muted2)", marginBottom: 18 }}
          >
            AI-powered analytics • 6 weeks
          </div>
          <div
            style={{
              background: "rgba(0,255,178,.08)",
              borderRadius: 10,
              padding: "12px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 12, color: "var(--muted2)" }}>
              Revenue growth
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 22,
                color: "var(--accent)",
              }}
            >
              +340%
            </span>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 1024px) {
          [sx-class="hero-float-card"] { display: none; }
        }
      `}</style>
    </section>
  );
}

// ── MARQUEE SECTION ───────────────────────────────────────────────────────
function MarqueeSection() {
  const items = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "GCP",
    "TensorFlow",
    "GPT-4",
    "Kubernetes",
    "Figma",
    "Zapier",
    "Make.com",
    "PostgreSQL",
    "MongoDB",
  ];
  return (
    <div
      style={{
        background: "rgba(0,255,178,.04)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "14px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 40,
          animation: "marquee 24s linear infinite",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}
          >
            <span style={{ color: "var(--accent)", marginRight: 8 }}>✦</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── SERVICES SECTION ──────────────────────────────────────────────────────
function ServicesSection() {
  const [hovered, setHovered] = useState(null);
  return (
    <section className="section">
      <div className="container">
        <GlowOrb x="80%" y="-10%" color="#4A9EFF" size={400} opacity={0.06} />
        <Reveal className="text-center" style={{ marginBottom: 56 }}>
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="display-lg" style={{ marginBottom: 16 }}>
            Full-Stack <span className="text-gradient">Digital Power</span>
          </h2>
          <p
            style={{
              color: "var(--muted2)",
              fontSize: 17,
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            End-to-end solutions built to take startups to enterprises —
            everything under one roof.
          </p>
        </Reveal>
        <br />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          {SERVICES.slice(0, 6).map((svc, i) => (
            <Reveal key={svc.id} delay={i * 0.07}>
              <motion.div
                className="card"
                onHoverStart={() => setHovered(svc.id)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ y: -6 }}
                style={{
                  padding: "28px 24px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                {/* Top color bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${svc.color}, transparent)`,
                    opacity: hovered === svc.id ? 1 : 0.6,
                    transition: "opacity .3s",
                  }}
                />

                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 12,
                    background: `${svc.color}18`,
                    border: `1px solid ${svc.color}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    marginBottom: 18,
                  }}
                >
                  {svc.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 19,
                    marginBottom: 10,
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--muted2)",
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {svc.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      color: svc.color,
                      fontWeight: 600,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    from {svc.priceFrom}
                  </span>
                  <Link
                    to="/services"
                    style={{
                      fontSize: 12,
                      color: svc.color,
                      fontWeight: 600,
                      transition: "gap .2s",
                    }}
                  >
                    Explore →
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link
              to="/services"
              className="btn btn-outline"
              style={{ fontSize: 14 }}
            >
              View All 8 Services →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── STATS SECTION ─────────────────────────────────────────────────────────
function StatsSection() {
  return (
    <section className="section" style={{ background: "var(--bg1)" }}>
      <div className="container">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(0,255,178,.04), transparent 65%)",
          }}
        />
        <Reveal className="text-center" style={{ marginBottom: 60 }}>
          <SectionLabel>Track Record</SectionLabel>
          <h2 className="display-lg">
            Numbers That <span className="text-gradient">Never Lie</span>
          </h2>
        </Reveal>
        <br />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
          }}
        >
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <StatCounter {...s} />
            </Reveal>
          ))}
        </div>

        {/* Trust badges */}
        <Reveal delay={0.5}>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 60,
            }}
          >
            {[
              ["🏆", "Top Tech Agency", "India Digital Awards 2025"],
              ["⭐", "5.0 Rating", "Google Business Reviews"],
              ["🔒", "ISO 27001 Aligned", "Security Standards"],
              ["☁️", "AWS Partner", "Cloud Solutions"],
            ].map(([icon, title, sub]) => (
              <div
                key={title}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "14px 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 22 }}>{icon}</span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {title}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--muted)" }}>
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── PORTFOLIO SECTION ─────────────────────────────────────────────────────
function PortfolioSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  return (
    <section className="section">
      <div className="container">
        <GlowOrb x="-5%" y="20%" color="#FF3D6B" size={400} opacity={0.05} />
        <Reveal
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="display-lg">
              Projects We're <span className="text-gradient">Proud Of</span>
            </h2>
          </div>
          <br />
          <Link to="/work" className="btn btn-ghost">
            See All Work →
          </Link>
        </Reveal>
        <br />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {featured.map((proj, i) => (
            <Reveal key={proj.id} delay={i * 0.1}>
              <motion.div
                className="card"
                whileHover={{ y: -6 }}
                style={{
                  overflow: "hidden",
                  border: `1px solid ${proj.color}20`,
                }}
              >
                {/* Visual */}
                <div
                  style={{
                    height: 190,
                    background: `linear-gradient(135deg, ${proj.color}18, var(--bg3))`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1px solid var(--border)",
                    position: "relative",
                  }}
                >
                  <span style={{ fontSize: 56 }}>{proj.emoji}</span>
                  <div style={{ position: "absolute", top: 14, right: 14 }}>
                    <Badge color={proj.color}>{proj.category}</Badge>
                  </div>
                </div>
                {/* Body */}
                <div style={{ padding: "22px 20px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 20,
                      marginBottom: 10,
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: "var(--muted2)",
                      lineHeight: 1.7,
                      marginBottom: 16,
                    }}
                  >
                    {proj.description}
                  </p>
                  {proj.results && (
                    <div
                      style={{
                        background: `${proj.color}10`,
                        border: `1px solid ${proj.color}25`,
                        borderRadius: 8,
                        padding: "8px 14px",
                        marginBottom: 14,
                        fontSize: 12,
                        color: proj.color,
                        fontWeight: 600,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      📈 {proj.results}
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "var(--bg3)",
                          color: "var(--muted2)",
                          fontSize: 11,
                          padding: "3px 10px",
                          borderRadius: 6,
                          border: "1px solid var(--border)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── TESTIMONIALS SECTION ──────────────────────────────────────────────────
function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % TESTIMONIALS.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section className="section" style={{ background: "var(--bg1)" }}>
      <div className="container">
        <Reveal className="text-center" style={{ marginBottom: 52 }}>
          <SectionLabel>Social Proof</SectionLabel>
          <h2 className="display-lg">
            What Clients <span className="text-gradient">Actually Say</span>
          </h2>
        </Reveal>
        <br />

        {/* Featured testimonial */}
        <Reveal>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                background: "var(--card)",
                border: `1px solid ${t.color}25`,
                borderRadius: 20,
                padding: "clamp(28px,4vw,52px)",
                marginBottom: 28,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${t.color}, transparent)`,
                }}
              />
              <div
                style={{
                  fontSize: "clamp(36px,5vw,60px)",
                  color: t.color,
                  lineHeight: 1,
                  marginBottom: 20,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: "clamp(16px,2vw,21px)",
                  lineHeight: 1.7,
                  color: "var(--text)",
                  marginBottom: 28,
                  maxWidth: 800,
                }}
              >
                {t.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background: `${t.color}22`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 18,
                    color: t.color,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--muted2)" }}>
                    {t.role} · {t.company}
                  </div>
                </div>
                <div
                  style={{ marginLeft: "auto", color: "#F0B429", fontSize: 16 }}
                >
                  {"★".repeat(t.rating)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                borderRadius: 100,
                background: i === active ? "var(--accent)" : "var(--border2)",
                border: "none",
                transition: "all .3s",
              }}
            />
          ))}
        </div>

        {/* Mini cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1}>
              <div
                className="card"
                style={{ padding: 22 }}
                onClick={() => setActive(i)}
              >
                <div style={{ fontSize: 24, color: t.color, marginBottom: 10 }}>
                  "
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text)",
                    lineHeight: 1.7,
                    marginBottom: 16,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {t.quote}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: `${t.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 13,
                      color: t.color,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--muted)" }}>
                      {t.company}
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
}

// ── BLOG SECTION ──────────────────────────────────────────────────────────
function BlogSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <SectionLabel>Latest Insights</SectionLabel>
            <h2 className="display-lg">
              The NexaCore <span className="text-gradient">Blog</span>
            </h2>
          </div>
          <br/>
          <Link to="/blog" className="btn btn-ghost">
            All Posts →
          </Link>
        </Reveal>
        <br/>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.1}>
              <div className="card" style={{ overflow: "hidden" }}>
                <div
                  style={{
                    height: 110,
                    background: `linear-gradient(135deg, rgba(0,255,178,.08), var(--bg3))`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 42,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {post.emoji}
                </div>
                <div style={{ padding: "18px 18px" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <Badge color="var(--accent)">{post.category}</Badge>
                    <span
                      style={{
                        fontSize: 11,
                        color: "var(--muted)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {post.readTime} min
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 16,
                      lineHeight: 1.4,
                      marginBottom: 8,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--muted2)",
                      lineHeight: 1.65,
                      marginBottom: 14,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {post.date}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA SECTION ───────────────────────────────────────────────────────────
function CTASection() {
  const wa = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hi! I'm interested in your services.")}`;
  return (
    <section
      className="section"
      style={{
        background: "var(--bg1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,255,178,.06), transparent 60%)",
        }}
      />
      <div className="bg-grid" />
      <div
        className="container"
        style={{ textAlign: "center", position: "relative", zIndex: 2 }}
      >
        <Reveal>
          <SectionLabel>Ready to Build?</SectionLabel>
          <h2 className="display-lg" style={{ marginBottom: 20 }}>
            Let's Create Something{" "}
            <span className="text-gradient">Extraordinary</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--muted2)",
              marginBottom: 40,
              maxWidth: 540,
              margin: "0 auto 40px",
            }}
          >
            Free strategy call. Zero commitment. Just pure value — we'll map out
            exactly how to 10x your business.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 36,
            }}
          >
            <Link
              to="/contact"
              className="btn btn-primary btn-lg"
              style={{ fontWeight: 800 }}
            >
              Book Free Consultation →
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(37,211,102,.1)",
                color: "#25D366",
                border: "1px solid rgba(37,211,102,.3)",
                padding: "14px 28px",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 15,
                transition: "background .2s",
              }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>
          {/* Trust signals */}
          <div
            style={{
              display: "flex",
              gap: 28,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              "✓ No setup fees",
              "✓ Reply in 2 hours",
              "✓ 100% NDA protected",
              "✓ Free estimate",
            ].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 13,
                  color: "var(--muted2)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ color: "var(--accent)" }}>
                  {t.split(" ")[0]}
                </span>{" "}
                {t.slice(2)}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── BUNDLE SECTION ────────────────────────────────────────────────────────
function BundleSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(0,255,178,.06), var(--card))",
              border: "1px solid rgba(0,255,178,.2)",
              borderRadius: 24,
              padding: "clamp(28px,4vw,56px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <GlowOrb x="-5%" y="-20%" size={300} opacity={0.08} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 28,
                position: "relative",
                zIndex: 2,
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--accent)",
                    fontWeight: 700,
                    fontFamily: "var(--font-mono)",
                    marginBottom: 10,
                    letterSpacing: 1,
                  }}
                >
                  🚀 BEST VALUE BUNDLE
                </div>
                <h3 className="display-md" style={{ marginBottom: 14 }}>
                  Startup Growth Package
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--muted2)",
                    marginBottom: 18,
                    maxWidth: 480,
                  }}
                >
                  Everything you need to launch, grow, and dominate — bundled at
                  one unbeatable price.
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[
                    "✔ Website",
                    "✔ SEO",
                    "✔ AI Chatbot",
                    "✔ Branding",
                    "✔ Hosting",
                  ].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(0,255,178,.1)",
                        color: "var(--accent)",
                        fontSize: 13,
                        fontWeight: 600,
                        padding: "5px 14px",
                        borderRadius: 100,
                        border: "1px solid rgba(0,255,178,.25)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: 52,
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  ₹1,20,000
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    marginBottom: 18,
                  }}
                >
                  All-inclusive · Save ₹40K+
                </div>
                <Link
                  to="/contact"
                  className="btn btn-primary btn-lg"
                  style={{ fontWeight: 800 }}
                >
                  Get This Bundle
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── HOME PAGE EXPORT ──────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <StatsSection />
      <PortfolioSection />
      <BundleSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
