export const portfolioData = {
  personal: {
    name: "Poovarasan L",
    role: "Full-Stack Software Engineer",
    status: "Available for new opportunities & collaborations",
    location: "Tamil Nadu, India",
    email: "poovarasan.dev@gmail.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/165838521?v=4",
    tagline: "Architecting robust backend services, scalable distributed systems, and sleek, high-performance web applications.",
    bio: [
      "I am a passionate Full-Stack Software Engineer who loves bridging the gap between elegant frontend interfaces and resilient, high-throughput backend systems.",
      "With a strong foundation in modern web frameworks, API design, database modeling, and DevOps workflows, I focus on shipping clean, maintainable code that solves real-world challenges.",
      "When I am not writing code, I am exploring cloud-native architectures, contributing to developer tools, or refining user experiences."
    ],
    resumeUrl: "#contact" // Replace with '/resume.pdf' when you place your PDF in the public folder
  },

  socials: {
    github: "https://github.com/Poovarasan-L",
    linkedin: "https://www.linkedin.com/in/poovarasan-l",
    email: "mailto:poovarasan.dev@gmail.com",
    twitter: "https://twitter.com"
  },

  metrics: [
    { label: "Architecture", value: "Full-Stack", detail: "End-to-end development" },
    { label: "Core Stack", value: "React & Node", detail: "TypeScript & modern web" },
    { label: "Reliability", value: "99.9%", detail: "Clean, robust code quality" },
    { label: "Mindset", value: "Problem Solver", detail: "Continuous engineering growth" }
  ],

  skillCategories: [
    {
      id: "frontend",
      name: "Frontend Development",
      description: "Building responsive, accessible, and high-performance interactive interfaces",
      skills: [
        { name: "React.js", level: "Advanced", icon: "Code2" },
        { name: "TypeScript", level: "Proficient", icon: "FileCode" },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: "Braces" },
        { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
        { name: "HTML5 / Semantic CSS", level: "Expert", icon: "Layout" },
        { name: "Vite / Next.js", level: "Proficient", icon: "Zap" },
        { name: "State Management (Redux/Zustand)", level: "Proficient", icon: "Cpu" },
        { name: "Responsive UI & A11y", level: "Advanced", icon: "Smartphone" }
      ]
    },
    {
      id: "backend",
      name: "Backend & Systems",
      description: "Designing RESTful APIs, microservices, and reliable server-side architecture",
      skills: [
        { name: "Node.js", level: "Advanced", icon: "Server" },
        { name: "Express.js", level: "Advanced", icon: "Boxes" },
        { name: "RESTful API Architecture", level: "Advanced", icon: "Network" },
        { name: "Python", level: "Proficient", icon: "Terminal" },
        { name: "Authentication (JWT / OAuth2)", level: "Proficient", icon: "Key" },
        { name: "Microservices", level: "Intermediate", icon: "Layers" },
        { name: "GraphQL Basics", level: "Intermediate", icon: "Share2" },
        { name: "WebSocket & Realtime", level: "Proficient", icon: "Activity" }
      ]
    },
    {
      id: "databases",
      name: "Databases & Caching",
      description: "Data modeling, relational schemas, indexing, and performant caching",
      skills: [
        { name: "PostgreSQL", level: "Proficient", icon: "Database" },
        { name: "MongoDB", level: "Advanced", icon: "Database" },
        { name: "MySQL", level: "Proficient", icon: "HardDrive" },
        { name: "Redis", level: "Proficient", icon: "Flame" },
        { name: "Prisma ORM", level: "Proficient", icon: "Link" },
        { name: "Mongoose", level: "Advanced", icon: "FolderGit2" }
      ]
    },
    {
      id: "devops",
      name: "DevOps & Tooling",
      description: "Version control, CI/CD automation, cloud deployment, and developer toolchains",
      skills: [
        { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
        { name: "Docker", level: "Proficient", icon: "Container" },
        { name: "GitHub Actions CI/CD", level: "Proficient", icon: "PlayCircle" },
        { name: "Linux & Bash Scripting", level: "Proficient", icon: "TerminalSquare" },
        { name: "Postman / API Testing", level: "Advanced", icon: "Send" },
        { name: "Vercel / Netlify / GH Pages", level: "Advanced", icon: "Cloud" }
      ]
    }
  ],

  projects: [
    {
      id: "cloudforge",
      title: "CloudForge",
      subtitle: "Full-Stack Cloud & Service Monitoring Dashboard",
      category: "fullstack",
      description: "An interactive operations dashboard that monitors server metrics, container health, and API response latencies with real-time charting and alerts.",
      techStack: ["React", "Node.js", "Tailwind CSS", "Chart.js", "Express", "Docker"],
      githubUrl: "https://github.com/Poovarasan-L",
      liveUrl: "https://github.com/Poovarasan-L",
      featured: true,
      stats: { stars: "Fast", metric: "Real-time SSE" }
    },
    {
      id: "pulseapi",
      title: "PulseAPI Platform",
      subtitle: "High-Throughput API Gateway & Analytics Service",
      category: "backend",
      description: "Engineered a microservice gateway handling request throttling, JWT token rotation, structured logging, and Redis-backed caching for sub-millisecond retrieval.",
      techStack: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker", "JWT"],
      githubUrl: "https://github.com/Poovarasan-L",
      liveUrl: "https://github.com/Poovarasan-L",
      featured: true,
      stats: { stars: "Sub-ms", metric: "Redis Caching" }
    },
    {
      id: "nexus-ui",
      title: "Nexus Glassmorphic UI Kit",
      subtitle: "Modern Design System for Web Applications",
      category: "frontend",
      description: "A reusable, accessible component library crafted with Tailwind CSS and React featuring frosted glass surfaces, glowing borders, and accessible keyboard navigation.",
      techStack: ["React", "Tailwind CSS", "Vite", "Lucide Icons", "WCAG 2.1"],
      githubUrl: "https://github.com/Poovarasan-L",
      liveUrl: "https://github.com/Poovarasan-L",
      featured: true,
      stats: { stars: "100%", metric: "Accessible" }
    },
    {
      id: "dev-domain-registry",
      title: "Developer Domain Automation",
      subtitle: "Automated Subdomain DNS Registry & PR Automation",
      category: "fullstack",
      description: "A toolchain enabling automated validation, DNS record registration, and PR workflow synchronization for developer subdomain initiatives.",
      techStack: ["JavaScript", "GitHub API", "Node.js", "CI/CD Actions"],
      githubUrl: "https://github.com/Poovarasan-L/register",
      liveUrl: "https://github.com/Poovarasan-L/register",
      featured: false,
      stats: { stars: "Automated", metric: "GitHub Actions" }
    },
    {
      id: "aegis-auth",
      title: "Aegis Secure Auth",
      subtitle: "Zero-Trust Authentication & Session Microservice",
      category: "backend",
      description: "Lightweight plug-and-play authentication engine offering dual-token JWT verification, password hashing with Argon2, and rate-limiting against brute force attacks.",
      techStack: ["Node.js", "MongoDB", "Express", "Argon2", "Jest"],
      githubUrl: "https://github.com/Poovarasan-L",
      liveUrl: "https://github.com/Poovarasan-L",
      featured: false,
      stats: { stars: "Secure", metric: "Argon2 + JWT" }
    }
  ],

  experience: [
    {
      period: "2023 - Present",
      role: "Full-Stack Software Engineer & Builder",
      organization: "Engineering Projects & Open Source",
      description: "Designing end-to-end full-stack architectures, writing scalable backend services, and building responsive client applications with React and Node.js.",
      highlights: [
        "Architected modular web applications using Vite, React, and Tailwind CSS with sub-second page loads.",
        "Implemented secure RESTful endpoints and optimized database querying across relational and document stores.",
        "Established CI/CD automated deployment pipelines with GitHub Actions."
      ]
    },
    {
      period: "2020 - 2024",
      role: "Bachelor of Engineering in Computer Science",
      organization: "University Education",
      description: "Comprehensive coursework in Software Engineering, Object-Oriented Design, Computer Networks, Database Management Systems, and Cloud Computing.",
      highlights: [
        "Focused on Distributed Systems, Cloud Architecture, and Web Technologies.",
        "Led team capstone engineering projects incorporating modern full-stack frameworks.",
        "Active participant in technical symposiums, hackathons, and developer workshops."
      ]
    }
  ],

  coreValues: [
    {
      title: "Clean & Maintainable Code",
      description: "Writing self-documenting, modular code following SOLID principles, making systems easy to scale and refactor."
    },
    {
      title: "Performance by Default",
      description: "Optimizing bundle sizes, minimizing unnecessary re-renders, and implementing intelligent caching for maximum speed."
    },
    {
      title: "Modern Developer Experience",
      description: "Leveraging type safety, fast Vite HMR, and automated CI/CD checks to ship features with high confidence."
    },
    {
      title: "User-Centered Engineering",
      description: "Crafting intuitive layouts with fluid feedback, dark mode comfort, and accessible interaction patterns."
    }
  ]
};
