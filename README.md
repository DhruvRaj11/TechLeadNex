# NexaCore Frontend — React + MVM Architecture

A **production-grade**, **Gen-Z dark aesthetic** React website with clean MVM (Model-View-ViewModel) architecture, Framer Motion animations, and full backend integration.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| Framer Motion | Animations & page transitions |
| Zustand | ViewModel state management |
| Vite | Build tool (blazing fast) |
| react-type-animation | Terminal typing effect in hero |
| react-countup | Animated number counters |
| react-intersection-observer | Scroll-reveal triggers |
| react-hot-toast | Toast notifications |
| Axios | API calls to backend |

---

## MVM Architecture

```
src/
├── models/           ← DATA LAYER
│   └── index.js      Pure data: services, pricing, projects, testimonials,
│                     form validation, business entities. Zero React, zero UI.
│
├── viewmodels/       ← LOGIC LAYER
│   └── index.js      Zustand stores: state, API calls, business logic.
│                     Bridges models ↔ views. Zero DOM, zero JSX.
│
├── views/            ← PRESENTATION LAYER
│   ├── pages/        Page components (consume ViewModels)
│   │   ├── HomePage.jsx
│   │   ├── ContactPage.jsx
│   │   └── OtherPages.jsx  (Services, Work, Pricing, Blog)
│   ├── components/   Shared UI components
│   │   └── index.jsx (Navbar, Footer, CustomCursor, Reveal, etc.)
│   └── layouts/      (future: layout wrappers)
│
├── hooks/            Custom React hooks (useScrollPosition, etc.)
├── utils/            Helper functions
├── App.jsx           Router + layout shell
├── main.jsx          Entry point
└── index.css         Global styles, CSS variables, animations
```

**Why MVM?**
- **Models** — Change pricing/services data without touching any component
- **ViewModels** — Add new state logic without touching UI
- **Views** — Redesign UI without touching business logic
- Everything is testable in isolation

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env
# Edit .env: set VITE_API_URL to your backend

# 3. Start dev server
npm run dev
# Opens http://localhost:3000

# 4. Build for production
npm run build
npm run preview
```

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, services, stats, portfolio, testimonials, blog, CTA |
| `/services` | Services | All 8 services with filter + tech stack |
| `/work` | Portfolio | All projects with category filter |
| `/pricing` | Pricing | 4 pricing plans + high-ticket section |
| `/blog` | Blog | Posts with category filter + featured post |
| `/contact` | Contact | Full form + WhatsApp + contact info |

---

## Customisation

### Change company data
Edit `src/models/index.js` — all services, pricing, projects, testimonials, and contact info live here.

### Change colors/fonts
Edit `src/index.css` — all CSS variables at the top.

### Change API URL
```env
# .env
VITE_API_URL=https://api.nexacore.in/api
```

### Add a new page
1. Create `src/views/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add nav link in `src/models/index.js` → `NAV_LINKS`

### Add new state
1. Add to `src/viewmodels/index.js` as a Zustand store
2. Consume with `useMyVM()` in any component

---

## Animation System

All animations use Framer Motion:

- **Page transitions** — `AnimatePresence` + `motion.div` fade-up on route change
- **Scroll reveals** — `Reveal` component wraps any content with `useInView` trigger
- **Hero parallax** — `useScroll` + `useTransform` for layered depth
- **Custom cursor** — `useMotionValue` + `useSpring` for buttery-smooth tracking
- **Stagger children** — array-mapped `delay` props for sequential reveals
- **Hover effects** — `whileHover` / `whileTap` on interactive elements
- **Typing animation** — `react-type-animation` for terminal effect
- **Number counters** — `react-countup` triggered by `useInView`

---

## Deployment

```bash
# Build
npm run build

# The dist/ folder is ready to serve

# Serve from Nginx
location / {
    root /var/www/nexacore/dist;
    try_files $uri $uri/ /index.html;
}

# Or deploy to Vercel/Netlify
vercel --prod
```

---

## Connect to Backend

The frontend talks to `VITE_API_URL` (default: `http://localhost:5000/api`).

Ensure CORS is configured in your Express backend:
```env
# backend/.env
FRONTEND_URL=https://nexacore.in
```

Contact form submissions hit `POST /api/contact`. Zustand `useContactVM` handles all the state — loading, validation, success, and API errors.
"# TechLeadNex" 
