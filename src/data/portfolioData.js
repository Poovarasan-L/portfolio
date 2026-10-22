export const portfolioData = {
  personal: {
    name: "Poovarasan L",
    role: "Senior .NET Developer",
    status: "Open to new opportunities",
    location: "Tamil Nadu, India",
    email: "poovpoovarasan@gmail.com",
    avatarUrl: "",
    tagline: "Building secure, scalable web applications and APIs with ASP.NET Core, SQL Server and Azure.",
    bio: [
      "I am a .NET developer with 5 years of hands-on experience building, testing and deploying web applications on the Microsoft stack: ASP.NET Core, Web API, MVC and Entity Framework backed by SQL Server, MySQL and PostgreSQL.",
      "I work across the full delivery cycle: Angular and Bootstrap front ends, RESTful API design, Azure App Service and Azure DevOps CI/CD pipelines, Docker-based microservices, and maintaining legacy .NET Framework systems.",
      "Highlights include a 20% system performance gain, a 30% server-cost reduction by migrating a legacy application from .NET Framework to .NET Core, and a 15% efficiency improvement through debugging and optimization."
    ],
    resumeUrl: "#contact"
  },

  socials: {
    github: "https://github.com/Poovarasan-L",
    linkedin: "https://www.linkedin.com/in/poovarasan-l-289557170",
    email: "mailto:poovpoovarasan@gmail.com"
  },

  metrics: [
    { label: "Experience", value: "5 Years", detail: "Professional .NET development" },
    { label: "Performance", value: "+20%", detail: "System performance gain" },
    { label: "Cost Savings", value: "-30%", detail: "Server cost after .NET Core migration" },
    { label: "Efficiency", value: "+15%", detail: "Through debugging & optimization" }
  ],

  skillCategories: [
    {
      id: "backend",
      name: "Backend & APIs",
      description: "Designing secure, maintainable server-side applications and RESTful APIs",
      skills: [
        { name: "C#", level: "Advanced", icon: "Code2" },
        { name: "ASP.NET Core", level: "Advanced", icon: "Server" },
        { name: "ASP.NET MVC", level: "Advanced", icon: "Layers" },
        { name: "Web API / REST", level: "Advanced", icon: "Send" },
        { name: "Entity Framework / EF Core, LINQ", level: "Advanced", icon: "Boxes" },
        { name: ".NET Framework to .NET Core migration", level: "Proficient", icon: "Zap" },
        { name: "Microservices", level: "Proficient", icon: "Cpu" },
        { name: "OAuth2 / OIDC (Azure AD B2C)", level: "Proficient", icon: "Key" }
      ]
    },
    {
      id: "databases",
      name: "Databases",
      description: "Schema design, stored procedures, SQL jobs and query optimization",
      skills: [
        { name: "MS SQL Server", level: "Advanced", icon: "Database" },
        { name: "Stored Procedures & SQL Jobs", level: "Advanced", icon: "HardDrive" },
        { name: "MySQL", level: "Proficient", icon: "HardDrive" },
        { name: "PostgreSQL", level: "Proficient", icon: "Database" }
      ]
    },
    {
      id: "frontend",
      name: "Frontend",
      description: "Responsive UI built together with the frontend team",
      skills: [
        { name: "Angular", level: "Proficient", icon: "Code2" },
        { name: "JavaScript / jQuery", level: "Proficient", icon: "Terminal" },
        { name: "Bootstrap", level: "Advanced", icon: "Smartphone" },
        { name: "HTML5 / CSS3", level: "Advanced", icon: "Code2" }
      ]
    },
    {
      id: "devops",
      name: "Cloud & DevOps",
      description: "Deployment, CI/CD pipelines and source control",
      skills: [
        { name: "Azure App Service", level: "Proficient", icon: "Cloud" },
        { name: "Azure DevOps CI/CD", level: "Proficient", icon: "Zap" },
        { name: "Docker", level: "Proficient", icon: "Boxes" },
        { name: "Git / Azure Repos / TFS", level: "Advanced", icon: "GitBranch" },
        { name: "SonarCloud & Jira", level: "Proficient", icon: "Flame" },
        { name: "AWS", level: "Basic", icon: "Cloud" }
      ]
    }
  ],

  projects: [
    {
      id: "greenwave",
      title: "GreenWave",
      subtitle: "Business Registration & Management Platform",
      category: "fullstack",
      description: "Built a business registration and management platform on .NET Core. Integrated Azure AD B2C for authentication, with Azure-hosted login and registration flows.",
      techStack: [".NET Core", "Azure AD B2C", "Azure", "MS SQL Server"],
      featured: true,
      stats: { metric: "Azure AD B2C" }
    },
    {
      id: "ics-lockers",
      title: "ICS Lockers",
      subtitle: "Locker Management Web App & Mobile API",
      category: "backend",
      description: "Integrated PLC hardware with a web application to manage locker lock/unlock. Built the .NET Core Web API that powers the ICS mobile app, supporting both internet and intranet access.",
      techStack: [".NET Core", "Web API", "PLC", "Barcode Scanner", "Azure", "MS SQL Server"],
      featured: true,
      stats: { metric: "PLC integration" }
    },
    {
      id: "carspa",
      title: "CarSpa",
      subtitle: "Admin Reporting & Data Migration",
      category: "backend",
      description: "Developed admin site reports for customers and stores. Used SQL jobs and stored procedures to transfer data from a Firebird database to SQL Server, and implemented store revenue and sales calculations across configurable date ranges.",
      techStack: [".NET Framework", "SQL Server", "Firebird", "Stored Procedures"],
      featured: true,
      stats: { metric: "Firebird to SQL Server" }
    }
  ],

  experience: [
    {
      period: "Jan 2023 - Present",
      role: "Senior .NET Developer",
      organization: "App Innovation Technologies, Coimbatore",
      description: "Designing, writing and maintaining production web applications and APIs on the Microsoft stack.",
      highlights: [
        "Developed and maintained ASP.NET Core / MVC applications, improving system performance by 20%.",
        "Migrated legacy applications from .NET Framework to .NET Core, reducing server costs by 30%.",
        "Designed RESTful Web APIs for mobile and third-party integrations; used Entity Framework and LINQ for data access and query optimization.",
        "Built responsive UI components with Angular and Bootstrap alongside the frontend team.",
        "Built and maintained CI/CD pipelines in Azure DevOps, reducing deployment times; took part in code reviews, unit testing and debugging."
      ]
    },
    {
      period: "Sep 2021 - Dec 2022",
      role: "Junior .NET Developer",
      organization: "TechUnity Inc, Coimbatore",
      description: "Built and deployed web applications for healthcare and e-commerce clients.",
      highlights: [
        "Developed and deployed applications using ASP.NET MVC and C#.",
        "Designed database schemas and wrote stored procedures in SQL Server.",
        "Integrated third-party services and APIs; debugged and optimized code, increasing application efficiency by 15%.",
        "Assisted senior developers with cloud-hosted applications on Azure and gathered requirements with product owners and business analysts."
      ]
    },
    {
      period: "June 2021",
      role: "Bachelor of Engineering, Computer Science and Engineering",
      organization: "CMS College of Engineering, Namakkal",
      description: "Graduated June 2021 with a degree in Computer Science and Engineering.",
      highlights: [
        "+2 in Maths & Computer Science, Government Higher Secondary School, Kanneri Manthanai (2015)."
      ]
    }
  ],

  coreValues: [
    {
      title: "Clean & Maintainable Code",
      description: "Repository, Factory and Dependency Injection patterns, plus code reviews, to keep systems easy to change."
    },
    {
      title: "Performance & Cost Awareness",
      description: "Profiling, query tuning and platform migrations that measurably improve speed and reduce infrastructure cost."
    },
    {
      title: "Reliable Delivery",
      description: "Azure DevOps CI/CD, unit testing and SonarCloud checks so releases are repeatable and safe."
    },
    {
      title: "Collaboration",
      description: "Working closely with product owners, business analysts, QA and frontend teams across the full SDLC."
    }
  ]
};
