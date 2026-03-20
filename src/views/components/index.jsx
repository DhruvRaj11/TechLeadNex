// ─── src/views/components/index.jsx ─────────────────────────────────────
// Shared UI components used across pages

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useNavVM } from "@viewmodels";
import { NAV_LINKS, CONTACT_INFO } from "@models";

// ── CUSTOM CURSOR ────────────────────────────────────────────────────────
export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = { x: useMotionValue(0), y: useMotionValue(0) };
  const smoothX = useSpring(mouse.x, { stiffness: 500, damping: 40 });
  const smoothY = useSpring(mouse.y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const move = (e) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          x: mouse.x,
          y: mouse.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}

// ── NOISE OVERLAY ─────────────────────────────────────────────────────────
export function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden />;
}

// ── SCROLL REVEAL WRAPPER ────────────────────────────────────────────────
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── SECTION LABEL ────────────────────────────────────────────────────────
export function SectionLabel({ children }) {
  return <div className="section-label">{children}</div>;
}

// ── BADGE ────────────────────────────────────────────────────────────────
export function Badge({ children, color = "var(--accent)" }) {
  return (
    <span
      className="badge"
      style={{
        background: `${color}18`,
        color,
        border: `1px solid ${color}30`,
      }}
    >
      {children}
    </span>
  );
}

// ── GLOW ORB ─────────────────────────────────────────────────────────────
export function GlowOrb({
  x,
  y,
  size = 500,
  color = "var(--accent)",
  opacity = 0.07,
}) {
  return (
    <div
      className="orb"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
      }}
    />
  );
}

// ── STAT COUNTER ─────────────────────────────────────────────────────────
export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  icon,
  color = "var(--accent)",
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontSize: 28, marginBottom: 6 }}>{icon}</div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(36px,5vw,52px)",
          color,
          lineHeight: 1,
        }}
      >
        {prefix}
        {inView ? <CountUp end={value} duration={2.2} separator="," /> : 0}
        {suffix}
      </div>
      <div
        style={{
          fontSize: 13,
          color: "var(--muted2)",
          marginTop: 6,
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ── NAVBAR ───────────────────────────────────────────────────────────────
export function Navbar() {
  const { isScrolled, mobileOpen, toggleMobile, closeMobile, setScrolled } =
    useNavVM();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMobile();
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: `0 var(--gutter)`,
        background: isScrolled ? "rgba(5,7,9,0.92)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 9,
              background: "linear-gradient(135deg, var(--accent), #0066FF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 16,
              color: "#050709",
            }}
          >
            N
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 20,
              letterSpacing: "-0.5px",
            }}
          >
            Tech<span style={{ color: "var(--accent)" }}>Lead</span>Nex
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 2 }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                color:
                  location.pathname === link.href
                    ? "var(--accent)"
                    : "var(--muted2)",
                borderBottom:
                  location.pathname === link.href
                    ? "1px solid var(--accent)"
                    : "1px solid transparent",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== link.href)
                  e.target.style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== link.href)
                  e.target.style.color = "var(--muted2)";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link
            to="/contact"
            className="btn btn-primary btn-sm"
            style={{ fontSize: 13, padding: "9px 20px", fontWeight: 700 }}
          >
            Let's Talk 🚀
          </Link>
          <button
            onClick={toggleMobile}
            className="hamburger-btn"
            style={{
              background: "none",
              border: "1px solid var(--border2)",
              borderRadius: 8,
              padding: "8px 10px",
              display: "none",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 20,
                  height: 2,
                  background: "var(--text)",
                  borderRadius: 2,
                  transition: "all 0.3s",
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          overflow: "hidden",
          background: "rgba(5,7,9,0.98)",
          backdropFilter: "blur(20px)",
          borderTop: mobileOpen ? "1px solid var(--border)" : "none",
        }}
      >
        <div style={{ padding: "16px 20px" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              style={{
                display: "block",
                padding: "13px 0",
                fontSize: 17,
                fontWeight: 600,
                color:
                  location.pathname === link.href
                    ? "var(--accent)"
                    : "var(--text)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
          >
            Let's Talk 🚀
          </Link>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          #nav-cta { display: none !important; }
        }
        @media (min-width: 769px) {
          #nav-cta { display: inline-flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}

// ── WHATSAPP FAB ─────────────────────────────────────────────────────────
export function WhatsAppFAB() {
  const wa = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hi! I'm interested in your services.")}`;
  return (
    <motion.a
      href={wa}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 300,
        width: 58,
        height: 58,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 26,
        boxShadow: "0 4px 24px rgba(37,211,102,0.5)",
      }}
    >
      💬
    </motion.a>
  );
}

// ── FOOTER ───────────────────────────────────────────────────────────────
export function Footer() {
  const wa = `https://wa.me/+918219160412?text="Hi! I'm interested in your services.")}`;

  return (
    <footer
      style={{
        background: "var(--bg1)",
        borderTop: "1px solid var(--border)",
        padding: "64px var(--gutter) 32px",
      }}
    >
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, var(--accent), #0066FF)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: 15,
                  color: "#050709",
                }}
              >
                N
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 19,
                }}
              >
                Tech<span style={{ color: "var(--accent)" }}>Lead</span>Nex
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "var(--muted2)",
                lineHeight: 1.75,
                marginBottom: 18,
                maxWidth: 260,
              }}
            >
              Building digital empires with AI automation, world-class web
              development, cybersecurity, and full-stack growth marketing.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(37,211,102,.12)",
                color: "#25D366",
                border: "1px solid rgba(37,211,102,.3)",
                padding: "8px 16px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 15,
                marginBottom: 16,
              }}
            >
              Services
            </div>
            {[
              "AI Automation",
              "Web Development",
              "SEO & Growth",
              "Cybersecurity",
              "Digital Marketing",
              "Tech Consulting",
            ].map((s) => (
              <Link
                key={s}
                to="/services"
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "var(--muted2)",
                  marginBottom: 10,
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--muted2)")}
              >
                {s}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 15,
                marginBottom: 16,
              }}
            >
              Company
            </div>
            {[
              ["Our Work", "/work"],
              ["Pricing", "/pricing"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <Link
                key={l}
                to={h}
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "var(--muted2)",
                  marginBottom: 10,
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--muted2)")}
              >
                {l}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 15,
                marginBottom: 16,
              }}
            >
              Contact
            </div>
            {[
              ["📧", CONTACT_INFO.email],
              ["📱", CONTACT_INFO.phone],
              ["🏢", CONTACT_INFO.location],
              ["⏰", CONTACT_INFO.hours],
            ].map(([icon, val]) => (
              <div
                key={val}
                style={{ display: "flex", gap: 10, marginBottom: 12 }}
              >
                <span style={{ fontSize: 14 }}>{icon}</span>
                <span
                  style={{
                    fontSize: 13,
                    color: "var(--muted2)",
                    lineHeight: 1.5,
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 12, color: "var(--muted)" }}>
            © 2026 NexaCore. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <span
                key={l}
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  cursor: "pointer",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
