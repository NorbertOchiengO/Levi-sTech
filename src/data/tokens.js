export const T = {
  navy:     "#0B0F19",
  navyMid:  "#111827",
  navySurf: "#141B2D",
  card:     "#1A2235",
  cardHov:  "#1E283D",
  border:   "rgba(255,255,255,0.08)",
  borderHov:"rgba(99,179,237,0.35)",

  blue:     "#3B82F6",
  blueGlow: "rgba(59,130,246,0.18)",
  violet:   "#7C3AED",
  cyan:     "#06B6D4",
  teal:     "#14B8A6",

  textPri:  "#F0F4FF",
  textSec:  "#94A3B8",
  textMut:  "#64748B",

  grad1:    "linear-gradient(135deg,#3B82F6 0%,#7C3AED 100%)",
  grad2:    "linear-gradient(135deg,#06B6D4 0%,#3B82F6 100%)",
  gradDim:  "linear-gradient(135deg,rgba(59,130,246,0.15) 0%,rgba(124,58,237,0.15) 100%)",
};

export const services = [
  {
    icon: "code", title: "Software & Web Dev",
    desc: "Full-stack web applications, APIs, and cloud systems built with precision using React, Node, and modern infrastructure.",
    tags: ["Next.js","Node","AWS","TypeScript"], accent: "#3B82F6",
  },
  {
    icon: "palette", title: "Branding & Design",
    desc: "Visual identities that resonate. We build memorable brand systems from logo to design language to motion.",
    tags: ["Identity","UI/UX","Motion","Print"], accent: "#A78BFA",
  },
  {
    icon: "insights", title: "Digital Strategy & SEO",
    desc: "Data-driven growth strategies that put your platform in front of the right audience and measure every result.",
    tags: ["SEO","Analytics","CRO","Growth"], accent: "#14B8A6",
  },
  {
    icon: "school", title: "Tech Training & Education",
    desc: "Intensive programs and mentorship workshops that upskill teams and grow the next generation of developers.",
    tags: ["Academy","Mentorship","Bootcamp"], accent: "#F59E0B",
  },
  {
    icon: "security", title: "Cyber & Professional Services",
    desc: "Security audits, managed IT administration, and enterprise-grade resilience to keep your systems bulletproof.",
    tags: ["Security","DevOps","Cloud","24/7 Support"], accent: "#10B981",
  },
];

export const projects = [
  { title: "Nova Banking Platform", cat: "Fintech · Web App", tags: ["React","Node","AWS"], accent: "#3B82F6", col: 8, bg: "linear-gradient(135deg,#0B0F19 0%,#0D1E3D 50%,#0B1A38 100%)", icon: "account_balance" },
  { title: "Flux Brand Identity",   cat: "Branding",          tags: ["Logo","Motion","Print"], accent: "#A78BFA", col: 4, bg: "linear-gradient(135deg,#13102A,#1E1040)", icon: "palette" },
  { title: "Atlas CRM System",      cat: "Web Application",   tags: ["TypeScript","PostgreSQL"], accent: "#14B8A6", col: 4, bg: "linear-gradient(135deg,#081A1A,#0D2B2B)", icon: "groups" },
  { title: "Luxe Mobile Store",     cat: "E-Commerce",        tags: ["Next.js","Stripe"], accent: "#F59E0B", col: 8, bg: "linear-gradient(135deg,#1A1200,#2A1E00)", icon: "storefront" },
];

export const steps = [
  { num: "01", icon: "search",        title: "Discovery",       color: "#3B82F6", desc: "Deep-dive into your business goals, technical constraints, and competitive landscape to identify what will actually move the needle." },
  { num: "02", icon: "map",           title: "Strategy",        color: "#A78BFA", desc: "Defining the technical roadmap, design direction, and success metrics. Every decision is documented and agreed before code is written." },
  { num: "03", icon: "build",         title: "Design & Dev",    color: "#14B8A6", desc: "Agile sprints with continuous integration, real-time previews, and parallel design-development workflows for maximum velocity." },
  { num: "04", icon: "rocket_launch", title: "Launch & Support",color: "#F59E0B", desc: "Smooth deployment, post-launch monitoring, and long-term support plans. We stay in your corner after go-live." },
];
