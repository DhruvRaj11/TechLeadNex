// ─── src/views/pages/ContactPage.jsx ─────────────────────────────────────

import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useContactVM } from '@viewmodels'
import { CONTACT_INFO, SERVICE_OPTIONS, BUDGET_OPTIONS } from '@models'
import { Reveal, SectionLabel, GlowOrb } from '../components'

function InputField({ label, id, type = 'text', placeholder, value, onChange, error, required }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label htmlFor={id} style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted2)', textTransform: 'uppercase', letterSpacing: '0.8px', fontFamily: 'var(--font-mono)' }}>
        {label}{required && <span style={{ color: 'var(--red)' }}> *</span>}
      </label>
      <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange}
        className={`input ${error ? 'error' : ''}`} />
      {error && <span style={{ fontSize: 12, color: 'var(--red)', fontFamily: 'var(--font-mono)' }}>⚠ {error}</span>}
    </div>
  )
}

export default function ContactPage() {
  const { form, errors, loading, success, apiError, updateField, submit, reset } = useContactVM()
  const wa = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hi! I'm interested in your services.")}`

  const handleSubmit = (e) => { e.preventDefault(); submit() }

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Header */}
      <section className="section" style={{ paddingBottom: 60 }}>
        <div className="container">
          <GlowOrb x="70%" y="-20%" color="#4A9EFF" size={400} opacity={0.06} />
          <Reveal className="text-center">
            <SectionLabel>Get In Touch</SectionLabel>
            <h1 className="display-lg" style={{ marginBottom: 16 }}>
              Let's Build <span className="text-gradient">Together</span>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--muted2)', maxWidth: 500, margin: '0 auto' }}>
              Tell us about your project. We reply within 2 hours — no ghosting, ever.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main grid */}
      <section style={{ padding: '0 var(--gutter) var(--section-pad)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: 40, alignItems: 'start' }}>

          {/* Left — info */}
          <Reveal direction="right">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Contact card */}
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, marginBottom: 24 }}>Contact Info</div>
                {[
                  { icon: '📧', label: 'Email', val: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}` },
                  { icon: '📱', label: 'Phone', val: CONTACT_INFO.phone },
                  { icon: '🏢', label: 'Location', val: CONTACT_INFO.location },
                  { icon: '⏰', label: 'Hours', val: CONTACT_INFO.hours },
                ].map((c) => (
                  <div key={c.label} style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', fontFamily: 'var(--font-mono)', marginBottom: 3 }}>{c.label}</div>
                      {c.link
                        ? <a href={c.link} style={{ fontSize: 14, color: 'var(--accent)', transition: 'opacity .2s' }}>{c.val}</a>
                        : <div style={{ fontSize: 14 }}>{c.val}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <motion.a href={wa} target="_blank" rel="noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: 'rgba(37,211,102,.1)', border: '1px solid rgba(37,211,102,.3)', borderRadius: 14, padding: 18, color: '#25D366', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
                <span style={{ fontSize: 26 }}>💬</span> Chat on WhatsApp Now
              </motion.a>

              {/* Fast reply badge */}
              <div style={{ background: 'var(--accent-dim)', border: '1px solid rgba(0,255,178,.2)', borderRadius: 12, padding: '16px 20px' }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>⚡ We Reply Fast</div>
                <div style={{ fontSize: 13, color: 'var(--muted2)', lineHeight: 1.65 }}>All inquiries answered within 2 hours during business hours. WhatsApp for instant responses any time.</div>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal direction="left">
            <div style={{ background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 20, padding: 'clamp(24px,4vw,40px)' }}>
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    style={{ textAlign: 'center', padding: '48px 20px' }}>
                    <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--accent)', marginBottom: 12 }}>Message Sent!</h3>
                    <p style={{ color: 'var(--muted2)', fontSize: 15, marginBottom: 28 }}>We'll reply within 2 hours. Check WhatsApp too for even faster responses!</p>
                    <button onClick={reset} className="btn btn-primary">Send Another →</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, marginBottom: 8 }}>Send a Message</h2>

                    {apiError && (
                      <div style={{ background: 'rgba(255,61,107,.1)', border: '1px solid rgba(255,61,107,.3)', borderRadius: 10, padding: '11px 16px', fontSize: 13, color: 'var(--red)', fontFamily: 'var(--font-mono)' }}>
                        ⚠ {apiError}
                      </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <InputField label="Full Name" id="name" placeholder="Your name" value={form.name} onChange={e => updateField('name', e.target.value)} error={errors.name} required />
                      <InputField label="Email" id="email" type="email" placeholder="you@example.com" value={form.email} onChange={e => updateField('email', e.target.value)} error={errors.email} required />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <InputField label="Phone" id="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => updateField('phone', e.target.value)} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted2)', textTransform: 'uppercase', letterSpacing: '0.8px', fontFamily: 'var(--font-mono)' }}>Budget Range</label>
                        <select className="input" value={form.budget} onChange={e => updateField('budget', e.target.value)}>
                          <option value="">Select range…</option>
                          {BUDGET_OPTIONS.map(b => <option key={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted2)', textTransform: 'uppercase', letterSpacing: '0.8px', fontFamily: 'var(--font-mono)' }}>Service Needed</label>
                      <select className="input" value={form.service} onChange={e => updateField('service', e.target.value)}>
                        <option value="">Select service…</option>
                        {SERVICE_OPTIONS.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label htmlFor="message" style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted2)', textTransform: 'uppercase', letterSpacing: '0.8px', fontFamily: 'var(--font-mono)' }}>
                        Message <span style={{ color: 'var(--red)' }}>*</span>
                      </label>
                      <textarea id="message" rows={5} placeholder="Tell us about your project, goals, and timeline…" value={form.message} onChange={e => updateField('message', e.target.value)} className={`input ${errors.message ? 'error' : ''}`} style={{ resize: 'vertical' }} />
                      {errors.message && <span style={{ fontSize: 12, color: 'var(--red)', fontFamily: 'var(--font-mono)' }}>⚠ {errors.message}</span>}
                    </div>

                    <motion.button type="submit" disabled={loading} className="btn btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      style={{ width: '100%', padding: 16, fontSize: 16, fontWeight: 700, justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                      {loading ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span className="animate-spin" style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid rgba(5,7,9,.3)', borderTopColor: '#050709', display: 'inline-block' }} />
                          Sending…
                        </span>
                      ) : 'Send Message →'}
                    </motion.button>

                    <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
                      🔒 Your information is 100% confidential. We never share your data.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`@media(max-width:768px){
        .contact-grid{grid-template-columns:1fr!important}
      }`}</style>
    </main>
  )
}
