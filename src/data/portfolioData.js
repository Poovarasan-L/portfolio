export const portfolioData = {
  personal: {
    name: "Poovarasan L",
    role: "Full-Stack Software Engineer",
    status: "Available for new opportunities & collaborations",
    location: "Tamil Nadu, India",
    email: "poovarasan.dev@gmail.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/165838521?v=4",
    tagline: "Architecting enterprise multi-tier systems, robust .NET & cloud backends, and modern SPAs with React & Angular.",
    bio: [
      "I am a results-driven Full-Stack Software Engineer with specialized experience developing scalable enterprise applications, robust RESTful APIs, and modern user-centric web frontends.",
      "My core engineering expertise centers around C#, .NET Core, ASP.NET Web APIs, N-tier enterprise architectures, relational database engineering (SQL Server), along with modern single-page applications built using React and Angular.",
      "I pride myself on writing clean, modular code following SOLID principles, designing maintainable Data Access Layers (DAL), and automating deployments with modern CI/CD and cloud toolchains."
    ],
    resumeUrl: "#contact"
  },

  socials: {
    github: "https://github.com/Poovarasan-L",
    linkedin: "https://www.linkedin.com/in/poovarasan-l",
    email: "mailto:poovarasan.dev@gmail.com",
    twitter: "https://twitter.com"
  },

  metrics: [
    { label: "Core Backend", value: "C# / .NET", detail: "Enterprise N-tier & APIs" },
    { label: "Modern Frontend", value: "React & Angular", detail: "TypeScript & SPAs" },
    { label: "Databases", value: "SQL Server", detail: "Schemas, DAL & Optimization" },
    { label: "Cloud & CI/CD", value: "AWS & Actions", detail: "Automated deployment" }
  ],

  skillCategories: [
    {
      id: "backend",
      name: "Backend & Systems Architecture",
      description: "Designing multi-tier enterprise systems, RESTful APIs, and business logic layers",
      skills: [
        { name: "C# / .NET Core", level: "Expert", icon: "Server" },
        { name: "ASP.NET Web API", level: "Expert", icon: "Boxes" },
        { name: "N-Tier Clean Architecture", level: "Advanced", icon: "Layers" },
        { name: "Data Access Layer (DAL)", level: "Advanced", icon: "HardDrive" },
        { name: "Entity Framework / ADO.NET", level: "Advanced", icon: "Database" },
        { name: "RESTful API Architecture", level: "Expert", icon: "Network" },
        { name: "Node.js & Express", level: "Proficient", icon: "Cpu" },
        { name: "Microservices & JWT Auth", level: "Advanced", icon: "Key" }
      ]
    },
    {
      id: "frontend",
      name: "Frontend Development",
      description: "Building responsive, modern single-page web applications with React and Angular",
      skills: [
        { name: "React.js", level: "Advanced", icon: "Code2" },
        { name: "Angular", level: "Advanced", icon: "Zap" },
        { name: "TypeScript", level: "Advanced", icon: "FileCode" },
        { name: "JavaScript (ES6+)", level: "Expert", icon: "Braces" },
        { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
        { name: "HTML5 / Semantic CSS", level: "Expert", icon: "Layout" },
        { name: "Vite / Modern Tooling", level: "Advanced", icon: "Zap" },
        { name: "RxJS & State Management", level: "Proficient", icon: "Cpu" }
      ]
    },
    {
      id: "databases",
      name: "Databases & Data Modeling",
      description: "Relational schema design, stored procedures, data querying, and performance tuning",
      skills: [
        { name: "SQL Server (MSSQL)", level: "Expert", icon: "Database" },
        { name: "Database Schemas & DAL", level: "Advanced", icon: "HardDrive" },
        { name: "SQL Queries & Procedures", level: "Advanced", icon: "FileCode" },
        { name: "PostgreSQL", level: "Proficient", icon: "Database" },
        { name: "MySQL", level: "Proficient", icon: "Database" },
        { name: "Redis Caching", level: "Proficient", icon: "Flame" }
      ]
    },
    {
      id: "devops",
      name: "Cloud & DevOps Tooling",
      description: "Automated deployment pipelines, cloud hosting, and developer tooling",
      skills: [
        { name: "AWS (CodeDeploy / Services)", level: "Proficient", icon: "Cloud" },
        { name: "GitHub Actions CI/CD", level: "Advanced", icon: "PlayCircle" },
        { name: "Git & Version Control", level: "Expert", icon: "GitBranch" },
        { name: "PowerShell & Scripting", level: "Advanced", icon: "TerminalSquare" },
        { name: "Docker Containerization", level: "Proficient", icon: "Container" },
        { name: "Postman & API Testing", level: "Expert", icon: "Send" }
      ]
    }
  ],

  projects: [
    {
      id: "enterprise-multi-tier-platform",
      title: "Enterprise Multi-Tier Web & API Platform",
      subtitle: "N-Tier Distributed Architecture with C#, ASP.NET & SQL Server",
      category: "fullstack",
      description: "Architected an enterprise-grade multi-tier web platform separating presentation, business logic, data access layers (DAL), and database models. Designed for high availability, transactional integrity, and scalable API consumption.",
      techStack: ["C#", "ASP.NET Web API", "Data Access Layer (DAL)", "SQL Server", "Clean Architecture", "Custom Converters"],
      githubUrl: "https://github.com/Poovarasan-L",
      liveUrl: "https://github.com/Poovarasan-L",
      featured: true,
      stats: { metric: "N-Tier Enterprise" },
      isPrivate: true
    },
    {
      id: "cloud-analytics-deployment-engine",
      title: "Cloud Analytics & Deployment Engine",
      subtitle: "High-Throughput Analytics Service with Automated AWS CI/CD",
      category: "backend",
      description: "Engineered scalable cloud analytics services and automated deployment pipelines using AWS CodeDeploy specifications, server-side data processing pipelines, and deployment automation scripts.",
      techStack: ["C#", ".NET", "AWS CodeDeploy", "Cloud Services", "PowerShell", "Automation"],
      githubUrl: "https://github.com/Poovarasan-L",
      liveUrl: "https://github.com/Poovarasan-L",
      featured: true,
      stats: { metric: "AWS Automated CI/CD" },
      isPrivate: true
    },
    {
      id: "smart-asset-management-system",
      title: "Smart Asset & Locker Management System",
      subtitle: "Centralized Hardware Management & Secure Access Control Solution",
      category: "fullstack",
      description: "Developed a centralized management solution for physical asset allocation, real-time status monitoring, administrative control panels, and secure device verification workflows.",
      techStack: [".NET", "C#", "SQL Server", "RESTful APIs", "Device Management"],
      githubUrl: "https://github.com/Poovarasan-L",
      liveUrl: "https://github.com/Poovarasan-L",
      featured: true,
      stats: { metric: "Smart Access Control" },
      isPrivate: true
    },
    {
      id: "fullstack-react-dotnet-app",
      title: "Full-Stack React & ASP.NET Core Solution",
      subtitle: "Decoupled Single Page Application & RESTful API Backend",
      category: "fullstack",
      description: "Built an end-to-end modern web application pairing a responsive React client with a high-throughput ASP.NET Core Web API server, featuring secure token authentication and modular service architecture.",
      techStack: ["React", "ASP.NET Core", "C#", "TypeScript", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/Poovarasan-L",
      liveUrl: "https://github.com/Poovarasan-L",
      featured: false,
      stats: { metric: "React + ASP.NET Core" },
      isPrivate: true
    },
    {
      id: "angular-enterprise-portal",
      title: "Angular Enterprise Service Portal",
      subtitle: "Component-Driven SPA with Backend API Integration",
      category: "frontend",
      description: "Engineered an interactive Angular web application featuring modular components, reactive forms, dynamic data binding, and seamless integration with backend REST endpoints.",
      techStack: ["Angular", "TypeScript", "C# Web API", "RxJS", "SCSS"],
      githubUrl: "https://github.com/Poovarasan-L",
      liveUrl: "https://github.com/Poovarasan-L",
      featured: false,
      stats: { metric: "Angular + RxJS" },
      isPrivate: true
    },
    {
      id: "developer-domain-automation",
      title: "Developer Domain & DNS Registry Automation",
      subtitle: "Automated Subdomain DNS Registry & PR Automation",
      category: "fullstack",
      description: "Automated DNS record registration and pull request validation workflows for developer subdomains using GitHub Actions and web APIs.",
      techStack: ["JavaScript", "GitHub Actions", "DNS / Web APIs", "CI/CD"],
      githubUrl: "https://github.com/Poovarasan-L/register",
      liveUrl: "https://github.com/Poovarasan-L/register",
      featured: false,
      stats: { metric: "Automated CI/CD" },
      isPrivate: false
    }
  ],

  experience: [
    {
      period: "2021 - Present",
      role: "Full-Stack Software Engineer",
      organization: "Enterprise & Full-Stack Systems Development",
      description: "Designing end-to-end multi-tier software architectures, building robust ASP.NET Core and C# backends, and delivering interactive web frontends with React and Angular.",
      highlights: [
        "Architected multi-tier enterprise systems with dedicated Data Access Layers (DAL) and clean relational database schemas.",
        "Implemented high-performance RESTful Web APIs with secure token authentication and optimized data querying.",
        "Delivered modern SPAs using React and Angular with responsive layouts and component modularity.",
        "Configured automated build and deployment pipelines using GitHub Actions and AWS deployment specifications."
      ]
    },
    {
      period: "2017 - 2021",
      role: "Bachelor of Engineering in Computer Science",
      organization: "University Education (Graduated 2021)",
      description: "Comprehensive coursework in Software Engineering, Object-Oriented Programming (C# / Java), Database Management Systems (SQL), Computer Networks, and Distributed Systems.",
      highlights: [
        "Specialized in N-Tier software design, database modeling, and scalable web architecture.",
        "Led capstone engineering projects combining backend web APIs with modern single page applications.",
        "Active participant in technical code symposiums and hands-on developer workshops."
      ]
    }
  ],

  coreValues: [
    {
      title: "Clean N-Tier Architecture",
      description: "Separating business logic, presentation, and data access layers to build systems that scale cleanly without technical debt."
    },
    {
      title: "Robust Backend Reliability",
      description: "Engineering resilient APIs with defensive input validation, structured exception handling, and optimized database queries."
    },
    {
      title: "Modern Full-Stack Agility",
      description: "Seamlessly bridging powerful C# / .NET server capabilities with sleek, fluid React and Angular user interfaces."
    },
    {
      title: "Automated Deployment & DX",
      description: "Leveraging CI/CD pipelines, containerization, and automated scripts for frictionless, high-confidence releases."
    }
  ]
};
