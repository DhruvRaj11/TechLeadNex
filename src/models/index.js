// ─── src/models/index.js ─────────────────────────────────────────────────
// MODEL LAYER: Pure data structures, constants, and business logic
// No UI logic. No React. No side effects. Just data.

// ── SERVICE MODELS ───────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "mobile-apps",
    icon: "📱",
    title: "Mobile Apps",
    tagline: "Your brand, in your customers' pockets",
    description:
      "Beautiful, lightning-fast React Native apps with AI features, seamless UX, and rock-solid performance — for iOS and Android.",
    color: "#FBBF24",
    gradient: "linear-gradient(135deg, #FBBF24, #FF3D6B)",
    priceFrom: "₹30,000",
    features: [
      "React Native",
      "AI Features",
      "App Store Deployment",
      "Performance Optimization",
      "Post-launch Support",
    ],
    tags: ["Mobile", "AI"],
  },
  {
    id: "ai-automation",
    icon: "⚡",
    title: "AI Automation",
    tagline: "Work smarter, scale faster",
    description:
      "Intelligent chatbots, workflow automation, and custom AI tools that eliminate 60% of manual work and 10x your output overnight.",
    color: "#00FFB2",
    gradient: "linear-gradient(135deg, #00FFB2, #0066FF)",
    priceFrom: "₹20,000",
    features: [
      "AI Chatbots",
      "Workflow Automation",
      "CRM Integration",
      "Custom AI Tools",
      "Auto-reporting",
    ],
    tags: ["AI", "Automation"],
  },
  {
    id: "lead-generation",
    icon: "🎯",
    title: "Lead Generation",
    tagline: "Turn cold traffic into hot revenue",
    description:
      "AI-powered sales funnels, CRM automation, and data-driven campaigns that fill your pipeline with qualified leads — on autopilot.",
    color: "#FF3D6B",
    gradient: "linear-gradient(135deg, #FF3D6B, #FF8C00)",
    priceFrom: "Custom",
    features: [
      "Sales Funnels",
      "CRM Automation",
      "Email Sequences",
      "Ad Campaigns",
      "Lead Scoring",
    ],
    tags: ["Marketing", "Sales"],
  },
  // {
  //   id: "Di"
  // },
  {
    id: "web-development",
    icon: "💻",
    title: "Web Development",
    tagline: "Built to convert, engineered to scale",
    description:
      "React, Next.js, SaaS platforms, and e-commerce stores — built for insane performance, beautiful UX, and enterprise scale.",
    color: "#4A9EFF",
    gradient: "linear-gradient(135deg, #4A9EFF, #7B5EA7)",
    priceFrom: "₹10,000",
    features: [
      "React/Next.js",
      "SaaS Platforms",
      "E-commerce",
      "PWAs",
      "API Development",
    ],
    tags: ["Web", "Development"],
  },
  {
    id: "seo-growth",
    icon: "📈",
    title: "SEO & Growth",
    tagline: "Rank #1. Stay #1.",
    description:
      "Technical SEO, content strategy, and data-driven growth marketing that compounds over time — turning Google into your best salesperson.",
    color: "#A78BFA",
    gradient: "linear-gradient(135deg, #A78BFA, #00FFB2)",
    priceFrom: "₹15,000/mo",
    features: [
      "Technical SEO",
      "Content Strategy",
      "Google Ads",
      "Social Media",
      "Analytics",
    ],
    tags: ["SEO", "Marketing"],
  },
  // {
  //   id: "cybersecurity",
  //   icon: "🔐",
  //   title: "Cybersecurity",
  //   tagline: "Hack-proof. Always.",
  //   description:
  //     "Penetration testing, security audits, federated learning malware detection, and fraud detection AI — enterprise-grade security for your entire stack.",
  //   color: "#34D399",
  //   gradient: "linear-gradient(135deg, #34D399, #0066FF)",
  //   priceFrom: "₹20,000",
  //   features: [
  //     "Pen Testing",
  //     "Security Audits",
  //     "Malware Detection",
  //     "Fraud AI",
  //     "Cloud Security",
  //   ],
  //   tags: ["Security", "AI"],
  // },
  {
    id: "cloud-devops",
    icon: "☁️",
    title: "Cloud & DevOps",
    tagline: "Ship faster. Scale infinitely.",
    description:
      "AWS, GCP, Azure architecture, CI/CD pipelines, Kubernetes deployments, and zero-downtime infrastructure that grows with you.",
    color: "#60A5FA",
    gradient: "linear-gradient(135deg, #60A5FA, #34D399)",
    priceFrom: "₹10,000",
    features: [
      "AWS/GCP/Azure",
      "CI/CD Pipelines",
      "Kubernetes",
      "Serverless",
      "DevOps Automation",
    ],
    tags: ["Cloud", "DevOps"],
  },
  {
    id: "digital-marketing",
    icon: "📣",
    title: "Digital Marketing",
    tagline: "Your brand, everywhere that matters",
    description:
      "Full-stack brand storytelling, paid campaigns, and ROI-obsessed marketing strategies that turn impressions into paying customers.",
    color: "#F472B6",
    gradient: "linear-gradient(135deg, #F472B6, #FF3D6B)",
    priceFrom: "₹30,000/mo",
    features: [
      "Brand Strategy",
      "Social Media",
      "Paid Ads",
      "Content Creation",
      "Analytics",
    ],
    tags: ["Marketing", "Brand"],
  },
  {
    id: "tech-consulting",
    icon: "🤝",
    title: "Tech Consulting",
    tagline: "Your fractional CTO",
    description:
      "Strategic tech roadmaps, architecture reviews, and startup development blueprints — elite engineering thinking on demand.",
    color: "#FBBF24",
    gradient: "linear-gradient(135deg, #FBBF24, #FF3D6B)",
    priceFrom: "Custom",
    features: [
      "Tech Roadmaps",
      "Architecture Reviews",
      "CTO-as-a-Service",
      "Due Diligence",
      "Team Building",
    ],
    tags: ["Strategy", "Consulting"],
  },
];

// ── PRICING MODELS ───────────────────────────────────────────────────────
export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: "₹25,000",
    period: "/month",
    tagline: "For early-stage startups",
    color: "#4A9EFF",
    popular: false,
    features: [
      "Website Maintenance & Updates",
      "Basic SEO (10 keywords)",
      "Social Media (2 platforms)",
      "Monthly Analytics Report",
      "Email Support (48hr response)",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹60,000",
    period: "/month",
    tagline: "Most popular for scaling brands",
    color: "#00FFB2",
    popular: true,
    features: [
      "Full Dev + Marketing Support",
      "Advanced SEO (30 keywords)",
      "Google Ads Management",
      "Social Media (5 platforms)",
      "AI Chatbot Maintenance",
      "Weekly Reporting Dashboard",
      "WhatsApp Priority Support",
    ],
  },
  {
    id: "business",
    name: "Business",
    price: "₹1,50,000",
    period: "/month",
    tagline: "Full digital operations",
    color: "#A78BFA",
    popular: false,
    features: [
      "Everything in Growth",
      "Dedicated Dev Team (40hrs)",
      "AI Automation Integration",
      "Security Monitoring",
      "Custom Analytics Dashboard",
      "Daily Reports",
      "4-hour Response SLA",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "₹4,00,000+",
    period: "/month",
    tagline: "White-glove partnership",
    color: "#FF3D6B",
    popular: false,
    features: [
      "Dedicated Full-Stack Team",
      "AI SaaS Platform Builds",
      "FinTech / Cyber Systems",
      "White-glove Onboarding",
      "Custom SLA & Contracts",
      "On-site Consultation",
    ],
  },
];

// ── PORTFOLIO MODELS ─────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "FinTech SaaS Platform",
    category: "AI",
    tags: ["React", "Node.js", "TensorFlow", "AWS", "Flutter"],
    emoji: "🏦",
    color: "#00FFB2",
    description:
      "AI-powered investment analytics dashboard with real-time fraud detection and automated reporting.",
    results: "+340% revenue in 90 days",
    featured: true,
  },
  {
    id: 2,
    title: "Multi-Vendor Marketplace",
    category: "Web Dev",
    tags: ["Next.js", "Stripe", "Redis", "GCP"],
    emoji: "🛒",
    color: "#4A9EFF",
    description:
      "AI-driven product recommendations, automated inventory management, and smart pricing engine.",
    results: "2M+ monthly visitors",
    featured: true,
  },
  {
    id: 3,
    title: "Malware Detection AI",
    category: "Security",
    tags: ["Python", "Federated Learning", "PyTorch"],
    emoji: "🔐",
    color: "#34D399",
    description:
      "Enterprise federated learning malware detection — 99.8% accuracy, privacy-preserving across 50+ nodes.",
    results: "99.8% detection rate",
    featured: true,
  },
  {
    id: 4,
    title: "AI Customer Hub",
    category: "AI",
    tags: ["GPT-4", "NLP", "Zapier", "Node.js"],
    emoji: "🤖",
    color: "#A78BFA",
    description:
      "Omnichannel AI support bot handling 10K+ daily queries across WhatsApp, web, and email.",
    results: "80% ticket deflection",
    featured: false,
  },
  {
    id: 5,
    title: "Growth Marketing Suite",
    category: "Marketing",
    tags: ["SEO", "Google Ads", "Analytics"],
    emoji: "📈",
    color: "#F472B6",
    description:
      "Integrated SEO + paid ads platform with automated reporting — 3x ROI in 4 months.",
    results: "+280% organic traffic",
    featured: false,
  },
  {
    id: 6,
    title: "Healthcare SaaS App",
    category: "Mobile",
    tags: ["React Native", "AI", "Firebase"],
    emoji: "🏥",
    color: "#FBBF24",
    description:
      "Patient management with telemedicine, AI diagnostics, and automated scheduling.",
    results: "15K+ active users",
    featured: false,
  },
];

// ── TESTIMONIALS MODELS ──────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "CTO",
    company: "FinVault Technologies",
    initials: "RV",
    color: "#00FFB2",
    rating: 5,
    quote:
      "NexaCore built our SaaS in 6 weeks. The AI features alone 10x'd our engagement. I've worked with 4 agencies before — these guys operate on a completely different level. Insane quality, zero drama.",
  },
];

// ── STATS MODELS ─────────────────────────────────────────────────────────
export const STATS = [
  { 
    value: 1, 
    suffix: "+", 
    label: "Projects Shipped", 
    icon: "🚀" 
  },
  { 
    value: 80, 
    suffix: "%", 
    label: "Client Satisfaction", 
    icon: "⭐" 
  },
  {
    value: 10,
    prefix: "₹",
    suffix: "k+",
    label: "Revenue Generated",
    icon: "💰",
  },
  // { value: 50, suffix: "+", label: "Active Clients", icon: "🤝" },
];

// ── TECH STACK MODEL ─────────────────────────────────────────────────────
export const TECH_STACK = {
  Frontend: ["React", "Next.js", "Tailwind", "React Native", "Vite", "Figma"],
  Backend: ["Node.js", "Python", "GraphQL", "PostgreSQL", "MongoDB", "Redis"],
  Cloud: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"],
  AI: ["GPT-4", "TensorFlow", "PyTorch", "LangChain", "Hugging Face", "OpenCV"],
};

// ── BLOG POST MODEL ──────────────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    id: 1,
    slug: "ai-automation-indian-smbs-2026",
    title: "How AI is Reshaping Indian SMBs in 2026",
    category: "AI",
    emoji: "🤖",
    readTime: 6,
    date: "Mar 10, 2026",
    excerpt:
      "From chatbots to full workflow automation — how Indian SMBs are cutting costs by 40% and 10x-ing output with intelligent systems.",
  },
  {
    id: 2,
    slug: "nextjs-vs-remix-2026",
    title: "Next.js 15 vs Remix: The Definitive 2026 Deep-Dive",
    category: "Web Dev",
    emoji: "💻",
    readTime: 8,
    date: "Mar 5, 2026",
    excerpt:
      "A brutally honest technical comparison — performance benchmarks, DX, and which one you should actually build on.",
  },
  {
    id: 3,
    slug: "federated-learning-privacy-ai",
    title: "Federated Learning: Privacy-First AI is the Future",
    category: "Security",
    emoji: "🔐",
    readTime: 10,
    date: "Feb 28, 2026",
    excerpt:
      "How federated learning enables powerful ML models without ever centralizing your sensitive data.",
  },
  {
    id: 4,
    slug: "seo-2026-ai-search",
    title: "SEO in 2026: Surviving the AI Search Apocalypse",
    category: "Marketing",
    emoji: "📈",
    readTime: 7,
    date: "Feb 20, 2026",
    excerpt:
      "Google's AI Overviews changed everything. Here's exactly what works now — from topical authority to entity SEO.",
  },
];

// ── NAVIGATION MODEL ─────────────────────────────────────────────────────
export const NAV_LINKS = [
  { id: "home", label: "Home", href: "/" },
  { id: "services", label: "Services", href: "/services" },
  { id: "work", label: "Our Work", href: "/work" },
  { id: "pricing", label: "Pricing", href: "/pricing" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "contact", label: "Contact", href: "/contact" },
];

// ── CONTACT MODEL ────────────────────────────────────────────────────────
export const CONTACT_INFO = {
  email: "hello@nexacore.in",
  phone: "+91 8219160412",
  whatsapp: "+91 8219160412",
  location: "Moradabad, UP · Remote Worldwide",
  hours: "Mon–Sat, 9AM–7PM IST",
};

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
export const BUDGET_OPTIONS = [
  "Under ₹25K",
  "₹25K–₹1L",
  "₹1L–₹5L",
  "₹5L–₹20L",
  "₹20L+",
];

// ── CONTACT FORM MODEL ───────────────────────────────────────────────────
export class ContactFormModel {
  constructor() {
    this.name = "";
    this.email = "";
    this.phone = "";
    this.service = "";
    this.budget = "";
    this.message = "";
  }

  validate() {
    const errors = {};
    if (!this.name.trim()) errors.name = "Name is required";
    if (!this.email.trim()) errors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email))
      errors.email = "Valid email required";
    if (!this.message.trim()) errors.message = "Message is required";
    if (this.message.trim().length < 10)
      errors.message = "Message too short (min 10 chars)";
    return { isValid: Object.keys(errors).length === 0, errors };
  }

  toPayload() {
    return {
      name: this.name.trim(),
      email: this.email.trim().toLowerCase(),
      phone: this.phone.trim() || undefined,
      service: this.service || undefined,
      budget: this.budget || undefined,
      message: this.message.trim(),
    };
  }
}
