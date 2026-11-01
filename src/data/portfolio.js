// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change everything shown on the site.
//  No other file needs touching to update your content.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Mansi Navale",
  firstName: "Mansi",
  roles: [
    "Senior Software Engineer",
    "React & Next.js Developer",
    "Frontend Engineer",
  ],
  tagline:
    "Senior Software Engineer with 4+ years building scalable, high-performance web apps with React, Next.js and Node.js — now exploring AI-powered frontend experiences like LLM chat UIs and streaming responses.",
  location: "Gurugram, Haryana, India",
  email: "mansinavale17@gmail.com",
  resumeUrl: "", // optional: link to hosted resume PDF
  socials: {
    github: "https://github.com/mansin17",
    linkedin: "https://www.linkedin.com/in/mansi-navale-4281361b3/",
    twitter: "",
  },
};

export const about = {
  paragraphs: [
    "Hi! I'm Mansi — a Senior Software Engineer with 4+ years of experience building and optimizing scalable, high-performance web applications with ReactJS, Next.js, JavaScript (ES6+) and Node.js. I lead end-to-end feature development, mentor junior developers, and care deeply about clean, maintainable architecture.",
    "At Careers360, I've led high-impact projects like the Registration Revamp, User Dashboard and College Detail Migration — improving platform stability, page performance and conversion along the way. I'm also getting hands-on with AI-powered frontend work: integrating LLM APIs (OpenAI/Anthropic), building AI chat UI components and working with streaming (SSE) responses.",
    "When I'm not coding, you'll find me exploring new tech, sharpening my UI craft, or sipping chai.",
  ],
  stats: [
    { value: "4.5", label: "Years Experience" },
    { value: "35%", label: "Perf. Improvement" },
    { value: "5", label: "Awards Won" },
  ],
};

export const skills = [
  {
    group: "Frontend",
    items: [
      "ReactJS",
      "Next.js",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "React Query",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Socket.io",
    ],
  },
  {
    group: "Backend & Runtime",
    items: ["Node.js", "Express.js", "Django", "Python"],
  },
  {
    group: "API & Integration",
    items: [
      "REST APIs",
      "Axios",
      "Google Sign-In / OAuth",
      "OTP Authentication",
      "Postman",
    ],
  },
  {
    group: "Performance & Optimization",
    items: [
      "Code Splitting",
      "Lazy Loading",
      "Server-Side Rendering (SSR)",
      "Core Web Vitals (LCP, FID, CLS)",
      "Client-Side Rendering",
      "Webpack",
    ],
  },
  {
    group: "AI & Intelligent Frontend",
    items: [
      "LLM API Integration (OpenAI / Anthropic)",
      "AI Chat UI Components",
      "Prompt Engineering (Frontend)",
      "Streaming Responses (SSE)",
      "Copilot-Assisted Development",
    ],
  },
  {
    group: "Tools & Databases",
    items: ["Git", "SmartGit", "VS Code", "JIRA", "MySQL", "Linux"],
  },
];

export const projects = [
  {
    title: "Registration Revamp",
    description:
      "Led complete frontend development of a dynamic, adaptive registration form using ReactJS and Redux Toolkit. Real-time client-side rendering eliminated full-page reloads, and OTP + Google Sign-In (OAuth 2.0) cut login drop-offs significantly.",
    tech: ["ReactJS", "Redux Toolkit", "OAuth 2.0", "OTP Auth"],
    liveUrl: "https://www.careers360.com/user/register",
    codeUrl: "",
    accent: "from-violet-500 to-fuchsia-500",
    emoji: "📝",
    highlights: [
      "40% increase in form engagement, 35% higher completion rate",
      "50% reduction in page load time via CSR",
      "25% increase in daily sign-ups, 45% fewer login drop-offs",
    ],
  },
  {
    title: "College Detail Migration & User Dashboard",
    description:
      "Architected and delivered scalable frontend modules for College Detail Migration and the User Dashboard at Careers360, improving overall platform stability and maintainability.",
    tech: ["Next.js", "ReactJS", "SSR", "REST APIs"],
    liveUrl:
      "https://www.careers360.com/university/indian-institute-of-technology-delhi",
    codeUrl: "",
    accent: "from-cyan-500 to-blue-500",
    emoji: "🎓",
    highlights: [
      "25% improvement in overall platform stability",
      "35% performance boost via code-splitting, lazy loading & SSR",
      "Core Web Vitals (LCP, FID, CLS) improvements",
    ],
  },
  {
    title: "AI Frontend Toolkit",
    description:
      "A React + TypeScript app exploring three AI-powered frontend patterns — a streaming chat interface (SSE), AI-driven content recommendations with structured JSON output, and RAG-style natural-language search — backed by a thin Express proxy that keeps API keys off the client. Groq, Gemini and OpenRouter are swappable at runtime.",
    tech: ["React", "TypeScript", "Express", "SSE Streaming", "Tailwind CSS"],
    liveUrl: "https://spark-prompt.netlify.app/",
    codeUrl: "https://github.com/mansin17/ai-frontend-toolkit",
    accent: "from-emerald-500 to-teal-500",
    emoji: "🤖",
    highlights: [
      "Token-by-token chat streaming via fetch() + manually parsed SSE",
      "Provider abstraction over 3 LLM APIs using one OpenAI-compatible SDK",
      "Per-IP rate limiting and server-only API keys for safe public deploys",
    ],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    org: "Careers360 – Pathfinder Publishing Pvt. Ltd.",
    period: "Dec 2021 — Present",
    points: [
      "Architected and delivered scalable frontend modules for College Detail Migration, User Dashboard, and Registration Revamp, improving overall platform stability by 25%.",
      "Boosted application performance by 35% through code-splitting, lazy loading, SSR with Next.js, and Core Web Vitals improvements (LCP, FID, CLS).",
      "Integrated Google Sign-In (OAuth) and OTP-based authentication, cutting bounce rate by 40%.",
      "Integrated AI-powered features into frontend apps — LLM-based chat interfaces, AI-driven recommendations, and intelligent search using OpenAI and Anthropic APIs with SSE streaming.",
      "Mentored junior developers in React architecture, debugging practices, and API integration.",
      "Promoted from Frontend Developer to Senior Software Engineer for consistent delivery, technical leadership, and code quality.",
      "Won the Livewire Quarterly Award (x2) — Q3 2023 & Q3 2025 — for leading the Registration Revamp, User Dashboard and other high-impact projects end-to-end.",
      "Won Shooting Star of the Month (x3) — Oct 2022, Apr 2023 & May 2025 — for contributions to College Detail Migration, Ebooks and College Listing.",
    ],
  },
  {
    role: "B.Tech — Computer Science Engineering",
    org: "Lovely Professional University",
    period: "Aug 2018 — Jul 2022",
    points: ["Bachelor's degree in Computer Science Engineering."],
  },
];
