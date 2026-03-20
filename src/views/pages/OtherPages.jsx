// ─── src/views/pages/OtherPages.jsx ──────────────────────────────────────
// ServicesPage · WorkPage · PricingPage · BlogPage

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, SectionLabel, GlowOrb, Badge } from '../components'
import { SERVICES, PROJECTS, PRICING_PLANS, BLOG_POSTS, TECH_STACK } from '@models'

// ── SERVICES PAGE ────────────────────────────────────────────────────────
export function ServicesPage() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'AI', 'Web', 'Marketing', 'Security']
  const TAG_MAP = { All: null, AI: ['AI', 'Automation'], Web: ['Web', 'Development'], Marketing: ['Marketing', 'SEO', 'Sales'], Security: ['Security'] }

  const filtered = filter === 'All' ? SERVICES : SERVICES.filter(s =>
    s.tags.some(t => (TAG_MAP[filter] || []).some(m => t.toLowerCase().includes(m.toLowerCase())))
  )

  return (
    <main style={{ paddingTop: 80 }}>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <GlowOrb x="60%" y="0" color="var(--accent)" size={500} opacity={0.05} />
          <Reveal className="text-center" style={{ marginBottom: 48 }}>
            <SectionLabel>What We Do</SectionLabel>
            <h1 className="display-lg" style={{ marginBottom: 16 }}>Our <span className="text-gradient">Services</span></h1>
            <p style={{ fontSize: 17, color: 'var(--muted2)', maxWidth: 520, margin: '0 auto 32px' }}>
              Comprehensive digital solutions for every stage of growth — from idea to enterprise.
            </p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
              {filters.map(f => (
                <button key={f} onClick={() => setFilter(f)} style={{
                  background: filter === f ? 'var(--accent)' : 'var(--card)',
                  color: filter === f ? '#050709' : 'var(--muted2)',
                  border: `1px solid ${filter === f ? 'var(--accent)' : 'var(--border)'}`,
                  padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all .2s'
                }}>{f}</button>
              ))}
            </div>
          </Reveal>
          <br/>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, paddingBottom: 'var(--section-pad)' }}>
            <AnimatePresence>
              {filtered.map((svc, i) => (
                <Reveal key={svc.id} delay={i * 0.05}>
                  <motion.div className="card" whileHover={{ y: -6 }}
                    style={{ padding: 32, position: 'relative', overflow: 'hidden', height: '100%' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: svc.gradient }} />
                    <div style={{ width: 56, height: 56, borderRadius: 14, background: `${svc.color}15`, border: `1px solid ${svc.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>{svc.icon}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, marginBottom: 6 }}>{svc.title}</h3>
                    <div style={{ fontSize: 12, color: svc.color, fontWeight: 600, fontFamily: 'var(--font-mono)', marginBottom: 12 }}>{svc.tagline}</div>
                    <p style={{ fontSize: 14, color: 'var(--muted2)', lineHeight: 1.75, marginBottom: 22 }}>{svc.description}</p>
                    <ul style={{ listStyle: 'none', marginBottom: 22 }}>
                      {svc.features.map(f => (
                        <li key={f} style={{ fontSize: 13, color: 'var(--muted2)', padding: '5px 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ color: svc.color, fontSize: 11 }}>✦</span> {f}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: svc.color }}>from {svc.priceFrom}</span>
                      <Link to="/contact" className="btn btn-outline btn-sm">Get Quote →</Link>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section" style={{ background: 'var(--bg1)' }}>
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 48 }}>
            <SectionLabel>Our Arsenal</SectionLabel>
            <h2 className="display-md">Technology <span className="text-gradient">Stack</span></h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {Object.entries(TECH_STACK).map(([cat, techs]) => (
              <Reveal key={cat}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>{cat}</div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {techs.map(t => (
                    <motion.div key={t} whileHover={{ scale: 1.06, borderColor: 'var(--accent)' }}
                      style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '12px 18px', fontSize: 14, fontWeight: 500, cursor: 'default', transition: 'border-color .2s' }}>
                      {t}
                    </motion.div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// ── WORK PAGE ────────────────────────────────────────────────────────────
export function WorkPage() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'AI', 'Web Dev', 'Marketing', 'Security', 'Mobile']
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <main style={{ paddingTop: 80 }}>
      <section className="section">
        <div className="container">
          <GlowOrb x="0" y="0" color="#FF3D6B" size={400} opacity={0.05} />
          <Reveal className="text-center" style={{ marginBottom: 48 }}>
            <SectionLabel>Our Work</SectionLabel>
            <h1 className="display-lg" style={{ marginBottom: 16 }}>Projects We're <span className="text-gradient">Proud Of</span></h1>
            <p style={{ fontSize: 17, color: 'var(--muted2)', maxWidth: 500, margin: '0 auto 32px' }}>
              Real results for real clients — across industries and technologies.
            </p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
              {categories.map(c => (
                <button key={c} onClick={() => setFilter(c)} style={{
                  background: filter === c ? 'var(--accent)' : 'var(--card)',
                  color: filter === c ? '#050709' : 'var(--muted2)',
                  border: `1px solid ${filter === c ? 'var(--accent)' : 'var(--border)'}`,
                  padding: '8px 18px', borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all .2s'
                }}>{c}</button>
              ))}
            </div>
          </Reveal>
          <br/>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            <AnimatePresence>
              {filtered.map((proj, i) => (
                <Reveal key={proj.id} delay={i * 0.07}>
                  <motion.div className="card" whileHover={{ y: -6 }} style={{ overflow: 'hidden', border: `1px solid ${proj.color}20` }}>
                    <div style={{ height: 200, background: `linear-gradient(135deg, ${proj.color}18, var(--bg3))`, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)', position: 'relative' }}>
                      <span style={{ fontSize: 64 }}>{proj.emoji}</span>
                      <div style={{ position: 'absolute', top: 14, right: 14 }}><Badge color={proj.color}>{proj.category}</Badge></div>
                      {proj.featured && <div style={{ position: 'absolute', top: 14, left: 14 }}><Badge color="var(--gold)">⭐ Featured</Badge></div>}
                    </div>
                    <div style={{ padding: '24px 22px' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, marginBottom: 10 }}>{proj.title}</h3>
                      <p style={{ fontSize: 14, color: 'var(--muted2)', lineHeight: 1.7, marginBottom: 16 }}>{proj.description}</p>
                      {proj.results && (
                        <div style={{ background: `${proj.color}10`, border: `1px solid ${proj.color}25`, borderRadius: 8, padding: '8px 14px', marginBottom: 16, fontSize: 12, color: proj.color, fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                          📈 {proj.results}
                        </div>
                      )}
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {proj.tags.map(t => (
                          <span key={t} style={{ background: 'var(--bg3)', color: 'var(--muted2)', fontSize: 11, padding: '3px 10px', borderRadius: 6, border: '1px solid var(--border)', fontFamily: 'var(--font-mono)' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <Reveal style={{ textAlign: 'center', marginTop: 56 }}>
            <p style={{ fontSize: 18, color: 'var(--muted2)', marginBottom: 24 }}>Want your project here? Let's build it.</p>
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ fontWeight: 800 }}>Start Your Project →</Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

// ── PRICING PAGE ─────────────────────────────────────────────────────────
export function PricingPage() {
  return (
    <main style={{ paddingTop: 80 }}>
      <section className="section">
        <div className="container">
          <GlowOrb x="50%" y="-10%" size={500} opacity={0.05} />
          <Reveal className="text-center" style={{ marginBottom: 60 }}>
            <SectionLabel>Transparent Pricing</SectionLabel>
            <h1 className="display-lg" style={{ marginBottom: 16 }}>Simple, <span className="text-gradient">Honest Pricing</span></h1>
            <p style={{ fontSize: 17, color: 'var(--muted2)', maxWidth: 520, margin: '0 auto' }}>
              Monthly retainer packages designed for every stage of growth. No surprises, no hidden fees.
            </p>
          </Reveal>
          <br/>

          {/* Plans */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 48 }}>
            {PRICING_PLANS.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }}
                  style={{ background: plan.popular ? `linear-gradient(160deg, ${plan.color}15, var(--card))` : 'var(--card)', border: `1px solid ${plan.popular ? plan.color + '50' : 'var(--border)'}`, borderRadius: 20, padding: '30px 26px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {plan.popular && (
                    <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: '#050709', fontSize: 10, fontWeight: 800, padding: '4px 16px', borderRadius: 100, whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)' }}>
                      MOST POPULAR
                    </div>
                  )}
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, marginBottom: 4 }}>{plan.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>{plan.tagline}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 36, color: plan.popular ? 'var(--accent)' : 'var(--text)', lineHeight: 1, marginBottom: 6 }}>{plan.price}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>{plan.period}</div>
                  <ul style={{ listStyle: 'none', flex: 1, marginBottom: 24 }}>
                    {plan.features.map(f => (
                      <li key={f} style={{ fontSize: 13.5, color: 'var(--muted2)', padding: '7px 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ color: plan.color, fontSize: 12, fontWeight: 700 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn" style={{ width: '100%', justifyContent: 'center', background: plan.popular ? 'var(--accent)' : 'none', color: plan.popular ? '#050709' : plan.color, border: `1px solid ${plan.color}50`, padding: '12px', borderRadius: 10, fontWeight: 700, fontSize: 14 }}>
                    Get Started →
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* High ticket */}
          <Reveal>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 18, padding: 40, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--red)', fontWeight: 600, marginBottom: 10, letterSpacing: 1 }}>⚡ HIGH-TICKET PROJECTS</div>
              <h3 className="display-md" style={{ marginBottom: 12 }}>₹2L – ₹20L Per Project</h3>
              <p style={{ color: 'var(--muted2)', maxWidth: 560, margin: '0 auto 24px', fontSize: 15 }}>
                AI SaaS Platforms · FinTech Systems · Cybersecurity Platforms · Enterprise Software · Startup Tech Development
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg" style={{ fontWeight: 800 }}>Discuss Your Project →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

// ── BLOG PAGE ────────────────────────────────────────────────────────────
export function BlogPage() {
  const [cat, setCat] = useState('All')
  const categories = ['All', 'AI', 'Web Dev', 'Marketing', 'Security', "Video"]
  const filtered = cat === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === cat)
  const featured = BLOG_POSTS[0]

  return (
    <main style={{ paddingTop: 80 }}>
      <section className="section">
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 48 }}>
            <SectionLabel>Insights</SectionLabel>
            <h1 className="display-lg" style={{ marginBottom: 16 }}>The NexaCore <span className="text-gradient">Blog</span></h1>
            <p style={{ fontSize: 17, color: 'var(--muted2)', maxWidth: 500, margin: '0 auto 32px' }}>
              Deep dives on AI, web dev, cybersecurity, and digital growth.
            </p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
              {categories.map(c => (
                <button key={c} onClick={() => setCat(c)} style={{
                  background: cat === c ? 'var(--accent)' : 'var(--card)',
                  color: cat === c ? '#050709' : 'var(--muted2)',
                  border: `1px solid ${cat === c ? 'var(--accent)' : 'var(--border)'}`,
                  padding: '8px 18px', borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all .2s'
                }}>{c}</button>
              ))}
            </div>
          </Reveal>
          <br/>

          {/* Featured post */}
          {cat === 'All' && (
            <Reveal style={{ marginBottom: 32 }}>
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1.2fr' }}>
                <div style={{ background: 'linear-gradient(135deg, rgba(0,255,178,.1), var(--bg3))', minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72, padding: 40 }}>
                  {featured.emoji}
                </div>
                <div style={{ padding: '36px 32px' }}>
                  <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
                    <Badge color="var(--accent)">{featured.category}</Badge>
                    <span style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{featured.date} · {featured.readTime} min read</span>
                  </div>
                  <h2 className="display-md" style={{ marginBottom: 14, fontSize: 'clamp(20px,2.5vw,28px)' }}>{featured.title}</h2>
                  <p style={{ color: 'var(--muted2)', fontSize: 15, lineHeight: 1.7, marginBottom: 22 }}>{featured.excerpt}</p>
                  <Link to={`/blog/${featured.slug}`} className="btn btn-primary" style={{ fontWeight: 700 }}>Read Article →</Link>
                </div>
              </div>
            </Reveal>
          )}
          <br/>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            {(cat === 'All' ? filtered.slice(1) : filtered).map((post, i) => (
              <Reveal key={post.id} delay={i * 0.08}>
                <motion.div className="card" whileHover={{ y: -5 }} style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: 120, background: `linear-gradient(135deg, rgba(0,255,178,.06), var(--bg3))`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 46, borderBottom: '1px solid var(--border)' }}>
                    {post.emoji}
                  </div>
                  <div style={{ padding: '20px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                      <Badge color="var(--accent)">{post.category}</Badge>
                      <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{post.readTime}m</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, lineHeight: 1.4, marginBottom: 10, flex: 1 }}>{post.title}</h3>
                    <p style={{ fontSize: 13, color: 'var(--muted2)', lineHeight: 1.65, marginBottom: 16 }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{post.date}</span>
                      <Link to={`/blog/${post.slug}`} style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>Read →</Link>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
