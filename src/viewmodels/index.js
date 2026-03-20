// ─── src/viewmodels/index.js ──────────────────────────────────────────────
// VIEWMODEL LAYER: Business logic, state management, API calls
// Bridges Models → Views. Uses Zustand for global state.

import { create } from 'zustand'
import { ContactFormModel, PROJECTS, BLOG_POSTS, SERVICES } from '@models'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// ── NAVIGATION VIEWMODEL ─────────────────────────────────────────────────
export const useNavVM = create((set, get) => ({
  isScrolled:    false,
  mobileOpen:    false,
  activeSection: 'home',

  setScrolled:    (v) => set({ isScrolled: v }),
  toggleMobile:   ()  => set(s => ({ mobileOpen: !s.mobileOpen })),
  closeMobile:    ()  => set({ mobileOpen: false }),
  setActiveSection: (s) => set({ activeSection: s }),
}))

// ── CONTACT FORM VIEWMODEL ───────────────────────────────────────────────
export const useContactVM = create((set, get) => ({
  form:     new ContactFormModel(),
  errors:   {},
  loading:  false,
  success:  false,
  apiError: '',

  updateField: (field, value) => set(s => {
    const form = Object.assign(new ContactFormModel(), s.form, { [field]: value })
    return { form, errors: { ...s.errors, [field]: undefined }, apiError: '' }
  }),

  reset: () => set({ form: new ContactFormModel(), errors: {}, loading: false, success: false, apiError: '' }),

  submit: async () => {
    const { form } = get()
    const { isValid, errors } = form.validate()
    if (!isValid) { set({ errors }); return }

    set({ loading: true, apiError: '', errors: {} })
    try {
      await axios.post(`${API_BASE}/contact`, form.toPayload())
      set({ success: true, loading: false })
    } catch (err) {
      const msg = err.response?.data?.message || 'Something went wrong. Please try WhatsApp instead!'
      set({ apiError: msg, loading: false })
    }
  },
}))

// ── PORTFOLIO VIEWMODEL ──────────────────────────────────────────────────
export const usePortfolioVM = create((set) => ({
  activeFilter: 'All',
  filters: ['All', 'AI', 'Web Dev', 'Marketing', 'Security', 'Mobile'],

  setFilter: (f) => set({ activeFilter: f }),

  getFiltered: (projects) => {
    return (state) => state.activeFilter === 'All'
      ? projects
      : projects.filter(p => p.category === state.activeFilter)
  },
}))

// ── SERVICES VIEWMODEL ───────────────────────────────────────────────────
export const useServicesVM = create((set) => ({
  activeFilter: 'All',
  hoveredService: null,
  filters: ['All', 'AI', 'Web', 'Marketing', 'Security'],

  setFilter:   (f) => set({ activeFilter: f }),
  setHovered:  (id) => set({ hoveredService: id }),
  clearHovered: ()  => set({ hoveredService: null }),
}))

// ── BLOG VIEWMODEL ───────────────────────────────────────────────────────
export const useBlogVM = create((set, get) => ({
  activeCategory: 'All',
  categories: ['All', 'AI', 'Web Dev', 'Marketing', 'Security'],

  setCategory: (c) => set({ activeCategory: c }),

  getFiltered: () => {
    const { activeCategory } = get()
    return activeCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter(p => p.category === activeCategory)
  },
}))

// ── THEME VIEWMODEL ──────────────────────────────────────────────────────
export const useThemeVM = create((set) => ({
  cursorX: 0,
  cursorY: 0,
  updateCursor: (x, y) => set({ cursorX: x, cursorY: y }),
}))

// ── NEWSLETTER VIEWMODEL ─────────────────────────────────────────────────
export const useNewsletterVM = create((set) => ({
  email:   '',
  loading: false,
  done:    false,
  error:   '',

  setEmail: (e) => set({ email: e, error: '' }),

  submit: async () => {
    const { email } = useNewsletterVM.getState()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return set({ error: 'Enter a valid email' })
    }
    set({ loading: true, error: '' })
    try {
      await axios.post(`${API_BASE}/subscribe`, { email })
      set({ done: true, loading: false })
    } catch (err) {
      set({ error: err.response?.data?.message || 'Failed. Try again.', loading: false })
    }
  },
}))
