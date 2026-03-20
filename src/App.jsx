// ─── src/App.jsx ──────────────────────────────────────────────────────────
// ROOT APP — Router, Layout, and lazy page loading

import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'

import { Navbar, Footer, CustomCursor, NoiseOverlay, WhatsAppFAB } from '@views/components'
import HomePage    from '@views/pages/HomePage'
import ContactPage from '@views/pages/ContactPage'
import { ServicesPage, WorkPage, PricingPage, BlogPage } from '@views/pages/OtherPages'

// Page transition wrapper
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

// Loading spinner
function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid rgba(0,255,178,.2)', borderTopColor: 'var(--accent)', animation: 'spin 0.8s linear infinite' }} />
    </div>
  )
}

// Animated routes
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"         element={<PageTransition><HomePage    /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage/></PageTransition>} />
        <Route path="/work"     element={<PageTransition><WorkPage    /></PageTransition>} />
        <Route path="/pricing"  element={<PageTransition><PricingPage /></PageTransition>} />
        <Route path="/blog"     element={<PageTransition><BlogPage    /></PageTransition>} />
        <Route path="/contact"  element={<PageTransition><ContactPage /></PageTransition>} />
        {/* 404 */}
        <Route path="*" element={
          <PageTransition>
            <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 120, lineHeight: 1, opacity: 0.1, marginBottom: 0 }}>404</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, marginBottom: 16, marginTop: -20 }}>Page Not Found</div>
              <p style={{ color: 'var(--muted2)', marginBottom: 28, fontSize: 16 }}>This page doesn't exist. But your next project does.</p>
              <a href="/" className="btn btn-primary btn-lg" style={{ fontWeight: 700 }}>← Go Home</a>
            </div>
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Global UI chrome */}
        <CustomCursor />
        <NoiseOverlay />
        <Navbar />
        <WhatsAppFAB />

        {/* Toast notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: { background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--border2)', fontFamily: 'var(--font-body)', fontSize: 14 },
            success: { iconTheme: { primary: 'var(--accent)', secondary: '#050709' } },
            error:   { iconTheme: { primary: 'var(--red)',    secondary: '#fff' } },
          }}
        />

        {/* Pages */}
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>

        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  )
}
