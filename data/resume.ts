import type { ResumeContent } from "@/types";

const engineeringNotes = [
  {
    slug: "reliable-transaction-ux-web3",
    title: "Designing Reliable Transaction UX for Web3 Products",
    excerpt:
      "A production playbook for reducing failed-wallet anxiety with deterministic states and explicit recovery paths.",
    category: "Web3 Product Engineering",
    publishedAt: "2026-03-14",
    readTime: "11 min read",
    body: [
      {
        heading: "Why transaction UX breaks",
        content:
          "Most failures happen between wallet signatures, RPC finality, and ambiguous product messaging rather than in smart contract logic.",
      },
      {
        heading: "State model and retries",
        content:
          "I model each transaction as draft, signature-requested, signed, broadcasted, confirmed, and reconciled. Each state has deterministic copy and retry rules.",
      },
      {
        heading: "Production results",
        content:
          "Clear state transitions and recoverable actions reduced support load and made swap/vote flows more trustworthy for non-technical users.",
      },
    ],
    relatedProjectKeys: ["fullsail", "sonar"],
    summary:
      "How I design transaction flows that stay clear and recoverable under real chain and wallet failures.",
    tags: ["Web3", "UX", "Reliability", "State Machines"],
  },
  {
    slug: "custom-blockchain-indexers-without-subgraphs",
    title:
      "Building Custom Blockchain Indexers When Subgraphs Are Not Available",
    excerpt:
      "A practical architecture for replay-safe blockchain indexing when hosted subgraph infrastructure does not exist.",
    category: "Blockchain Data Infrastructure",
    publishedAt: "2026-02-06",
    readTime: "13 min read",
    body: [
      {
        heading: "Constraint first",
        content:
          "When no subgraph exists, correctness depends on ingestion guarantees, cursor checkpoints, and deterministic replay.",
      },
      {
        heading: "Indexer design",
        content:
          "I separate event ingestion from projections, use idempotent handlers, and persist block-level checkpoints for safe backfills and incident recovery.",
      },
      {
        heading: "Operational controls",
        content:
          "Lag dashboards, reconciliation audits, and dead-letter queues keep trader-facing state accurate despite provider instability.",
      },
    ],
    relatedProjectKeys: ["tizz"],
    summary:
      "Blueprint for indexer-backed products on chains where subgraph tooling is unavailable.",
    tags: ["Indexers", "Web3", "Data Pipelines", "Observability"],
  },
  {
    slug: "ai-coding-tools-in-production-workflows",
    title: "How I Use AI Coding Tools in Real Production Workflows",
    excerpt:
      "How I integrate AI tooling into delivery workflows without sacrificing test confidence, review quality, or accountability.",
    category: "AI Engineering Workflow",
    publishedAt: "2026-01-22",
    readTime: "9 min read",
    body: [
      {
        heading: "Where AI helps most",
        content:
          "AI accelerates structured work like service scaffolds, tests, and refactor proposals when requirements and acceptance criteria are explicit.",
      },
      {
        heading: "Guardrails",
        content:
          "Every AI-generated change is mapped to a ticket, reviewed by humans, and validated by lint/build plus deterministic tests for critical paths.",
      },
      {
        heading: "Founder-level impact",
        content:
          "Teams ship faster while keeping ownership with engineers and product leaders, treating AI as acceleration rather than authority.",
      },
    ],
    relatedProjectKeys: ["fullsail", "sonar", "tizz"],
    summary:
      "Operating model for using AI coding assistants in production engineering workflows.",
    tags: ["AI", "Engineering Workflow", "Delivery"],
  },
];

const projectArchive = [
  {
    year: "2025",
    title: "Tizz",
    type: "Perpetual DEX",
    role: "Senior Full-Stack Engineer",
    stack: ["Next.js", "NestJS", "Botanix", "viem", "Redis"],
    proofLabel: "Private case study",
    proofHref: "/projects/tizz",
    caseStudyPath: "/projects/tizz",
    summary:
      "Built perp trading UX and a custom Botanix indexer with checkpoints, replay safety, and reconciliation to keep market state trustworthy.",
    status: "Production",
    projectUrl: "/projects/tizz",
  },
  {
    year: "2024",
    title: "Sonar.Trade",
    type: "Algorithmic Trading Platform",
    role: "Senior Full-Stack Engineer",
    stack: ["Next.js", "NestJS", "Solana", "PostgreSQL", "Prisma"],
    proofLabel: "Live platform",
    proofHref: "https://sonar.trade/",
    caseStudyPath: "/projects/sonar",
    summary:
      "Expanded strategy automation from EVM-only execution to EVM plus Solana support without breaking existing operator behavior.",
    status: "Production",
    projectUrl: "https://sonar.trade/",
  },
  {
    year: "2024",
    title: "FullSail",
    type: "Sui DeFi DEX",
    role: "Senior Full-Stack Engineer",
    stack: ["Next.js", "NestJS", "Sui", "GraphQL", "AWS ECS"],
    proofLabel: "Live product",
    proofHref: "https://fullsail.finance/",
    caseStudyPath: "/projects/fullsail",
    summary:
      "Delivered launch-critical swap, liquidity, and governance flows for a Sui DEX with wallet and transaction reliability pressure.",
    status: "Production",
    projectUrl: "https://fullsail.finance/",
  },
  {
    year: "2025",
    title: "Klyro",
    type: "AI + Identity Governance",
    role: "Founding Product Engineer (Contract)",
    stack: ["React", "Golang", "LangGraph", "PostgreSQL", "ArgoCD"],
    proofLabel: "Company site",
    proofHref: "http://klyro.security/",
    summary:
      "Supported MVP architecture and delivery for AI-assisted identity-governance connector workflows under rapid product exploration.",
    status: "MVP",
    projectUrl: "http://klyro.security/",
  },
  {
    year: "2023",
    title: "Urbanmix",
    type: "PropTech SaaS",
    role: "Full-Stack Engineer",
    stack: ["React", "Firebase", "D3.js", "MUI", "Cloud Functions"],
    proofLabel: "Company site",
    proofHref: "https://www.urbanmix.tech/",
    summary:
      "Built real-estate product features and visualization-heavy interfaces on Firebase for an early-stage proptech product.",
    status: "Production",
    projectUrl: "https://www.urbanmix.tech/",
  },
];

export const resumeData = {
  fullName: "Takeshi Suzuki",
  role: "Senior Product Engineer for Web3 and AI Systems",
  tagLine:
    "Senior full-stack engineer shipping AI and Web3 products from concept to scale.",
  introTagline:
    "I help founders ship production-ready Web3 and AI products end-to-end, from UX and APIs to blockchain data, agent workflows, CI/CD, and cloud deployment.",
  subTitle:
    "Role-first execution across frontend and backend with measurable delivery outcomes.",
  profileSummary:
    "Best fit for founders and product teams that need one senior engineer to turn ambiguity, blockers, and system complexity into shipped software.",
  yearsOfExperience: 8,
  greetingType: "Hi",
  favoriteQuote:
    "I connect product UX, business logic, blockchain data, AI workflows, and infrastructure into one reliable production system.",
  githubUsername: "takeshi-su57",
  socials: {
    linkedin: "https://www.linkedin.com/in/takeshi-suzuki-449636248/",
    github: "https://github.com/takeshi-su57",
    email: "takeshisuz57@gmail.com",
    website: "https://takeshi-suzuki.vercel.app",
  },
  audiencePaths: [
    {
      key: "founders",
      label: "For Founders",
      href: "/#contact",
      description:
        "Ship roadmap-critical features with a senior engineer who can own product delivery end-to-end.",
    },
    {
      key: "recruiters",
      label: "For Recruiters",
      href: "/about",
      description:
        "Review concise experience highlights, delivery metrics, and production stack depth across modern web platforms.",
    },
    {
      key: "web3_ai_teams",
      label: "For Web3 + AI Teams",
      href: "/projects",
      description:
        "Explore decentralized trading, data-heavy SaaS, and AI-ready architecture work delivered in production.",
    },
  ],
  impactMetrics: [
    {
      value: "8+",
      label: "Years delivering production products",
    },
    {
      value: "5+",
      label: "Cross-functional teams supported",
    },
    {
      value: "100+",
      label: "Features shipped across web and Web3",
    },
    {
      value: "20+",
      label: "Major launches and milestones delivered",
    },
  ],
  deliverySnapshot: [
    { value: "8+", label: "Years shipping production web apps" },
    { value: "5+", label: "Startup and client engagements delivered" },
    { value: "100+", label: "APIs shipped across SaaS and Web3 products" },
    { value: "20+", label: "Production UI surfaces and reusable flows shipped" },
    {
      value: "Sui / EVM / Solana / Botanix",
      label: "Multi-chain delivery coverage",
    },
  ],
  ownershipAreas: [
    {
      title: "Product Engineering",
      description:
        "Turn unclear requirements into production features, reusable UI systems, and maintainable delivery workflows.",
    },
    {
      title: "Web3 Systems",
      description:
        "Own wallet flows, contract interactions, indexers, event pipelines, and multi-chain integrations across Sui, EVM, Solana, and Botanix.",
    },
    {
      title: "Backend and Data",
      description:
        "Build NestJS and Express APIs with PostgreSQL, MongoDB, Redis, Prisma, and event-driven workflows.",
    },
    {
      title: "Frontend Architecture",
      description:
        "Design responsive product interfaces with React, Next.js, TypeScript, and Tailwind.",
    },
    {
      title: "AI-Native Engineering",
      description:
        "Integrate Claude Code, Codex, LangChain, LangGraph, MCP, and RAG workflows for practical automation.",
    },
    {
      title: "Infrastructure and DevOps",
      description:
        "Set up Dockerized workflows, CI/CD, cloud deployments, and production monitoring with Grafana and Prometheus.",
    },
  ],
  technicalStackGroups: [
    {
      group: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "wagmi"],
    },
    {
      group: "Backend",
      items: ["Node.js", "NestJS", "Express", "GraphQL", "REST"],
    },
    {
      group: "Data",
      items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"],
    },
    {
      group: "Web3",
      items: [
        "Sui",
        "EVM",
        "Solana",
        "Botanix",
        "viem",
        "wallet integrations",
        "indexers",
      ],
    },
    {
      group: "AI",
      items: ["Claude Code", "Codex", "LangChain", "LangGraph", "MCP", "RAG"],
    },
    {
      group: "Infrastructure",
      items: [
        "Docker",
        "GitHub Actions",
        "AWS",
        "GCP",
        "Terraform",
        "Kubernetes",
        "Grafana",
        "Prometheus",
      ],
    },
  ],
  availableFor: [
    { label: "Senior full-stack engineering roles" },
    { label: "Web3 product engineering" },
    { label: "DApp frontend/backend development" },
    { label: "Blockchain indexer and data pipeline work" },
    { label: "AI workflow and agent development" },
    { label: "Contract or fractional product engineering" },
    { label: "Open-source collaboration with funded teams" },
  ],
  serviceAreas: [
    {
      title: "Product Engineering",
      description:
        "Full-stack product delivery with TypeScript, React, Next.js, and Nest.js for reliable roadmap execution.",
    },
    {
      title: "AI Agent Workflows",
      description:
        "Design and implementation of AI-assisted workflows, orchestration layers, and integrations for team productivity.",
    },
    {
      title: "Web3 / DApp Engineering",
      description:
        "Frontend and backend systems for on-chain products, wallet flows, protocol integrations, and real-time trading UX.",
    },
    {
      title: "Cloud / DevOps Delivery",
      description:
        "Infrastructure setup, CI/CD pipelines, observability, and performance tuning on AWS-first deployment stacks.",
    },
  ],
  founderProof: {
    eyebrow: "Founder Proof",
    title: "LuckyPlans",
    description:
      "Founder-built simulation-first copy-trading research platform shaped by real Web3 execution, failed assumptions, and product iteration under pressure.",
    bullets: [
      "Built across leaderboards, indexing, simulation, strategy research, and multi-platform product thinking.",
      "Learned exactly where backtests, execution reality, and user safety diverge in production systems.",
      "Shows founder empathy alongside deep engineering ownership for other early-stage teams.",
    ],
    links: [
      { label: "Read founder journey", href: "/blogs" },
      { label: "View related projects", href: "/projects" },
    ],
  },
  seoProfile: {
    defaultTitle: "Takeshi Suzuki | Senior Full-Stack Engineer",
    titleTemplate: "%s | Takeshi Suzuki",
    description:
      "Senior full-stack engineer for SaaS, Web3, and AI products. Product-minded execution across frontend, backend, and cloud delivery.",
    ogType: "website",
  },
  skills: [
    {
      name: "Web3 Full Stack Engineering",
      description:
        "Next.js and Nest.js product delivery for DeFi platforms with strong UX and reliability.",
      projectsCompleted: 20,
    },
    {
      name: "Frontend Architecture",
      description:
        "Builds high-performance interfaces with TypeScript, React, Next.js, and Tailwind CSS.",
      projectsCompleted: 50,
    },
    {
      name: "Backend and Data Systems",
      description:
        "Designs scalable APIs and data models using Nest.js, Express.js, PostgreSQL, MongoDB, and Redis.",
      projectsCompleted: 40,
    },
    {
      name: "Leadership and Delivery",
      description:
        "Leads agile teams end-to-end from requirements and planning through deployment and iteration.",
      projectsCompleted: 15,
    },
  ],
  bio: [
    "I am a senior full-stack engineer focused on turning product strategy into shipped software with clear delivery ownership.",
    "Across startup and scale-up teams, I have built SaaS and Web3 products, integrated AI-capable workflows, and improved release confidence under tight timelines.",
    "My core stack spans TypeScript, Next.js, React, Nest.js, Node.js, PostgreSQL, MongoDB, Solidity, and cloud-native deployment systems.",
  ],
  featuredProjects: [
    {
      title: "FullSail",
      imageUrl: "/images/projects/fullsail/landing.png",
      projectUrl: "https://fullsail.finance/",
      caseStudyPath: "/projects/fullsail",
      description:
        "Built launch-critical Sui DEX flows across swap, liquidity, and governance while solving wallet reliability and transaction-state complexity under deadline pressure.",
      context:
        "Sui-based DEX focused on sustainable liquidity incentives, voting, and emissions design.",
      challenge:
        "Translate advanced DeFi mechanics into wallet-friendly UX while keeping signatures, finality, and recovery states reliable.",
      outcome:
        "Shipped a production-ready Sui DEX experience with stronger transaction clarity and lower launch risk.",
      tags: ["Next.js", "NestJS", "Sui", "GraphQL", "AWS ECS"],
    },
    {
      title: "Sonar.Trade",
      imageUrl: "/images/projects/sonartrade/landing.png",
      projectUrl: "https://sonar.trade/",
      caseStudyPath: "/projects/sonar",
      description:
        "Expanded an automated trading platform from EVM-only execution to EVM plus Solana while preserving trusted behavior and improving strategy setup UX.",
      context:
        "Algorithmic trading product requiring multi-chain parity and strategy execution reliability.",
      challenge:
        "Add Solana support without breaking established EVM behavior or introducing operator risk during rollout.",
      outcome:
        "Enabled stable multi-chain strategy execution with backward-compatible behavior for existing operators.",
      tags: ["Next.js", "NestJS", "Solana", "PostgreSQL", "Prisma"],
    },
    {
      title: "Tizz",
      imageUrl: "/images/projects/tizz/trade.png",
      projectUrl: "/projects/tizz",
      caseStudyPath: "/projects/tizz",
      description:
        "Built perp trading UX and a custom Botanix indexer where hosted subgraph tooling was unavailable, with replay-safe event processing and reconciliation.",
      context:
        "Perp trading product with custom Botanix indexing requirements.",
      challenge:
        "No subgraph support, requiring reliable event ingestion, checkpoints, recovery paths, and sync handling from scratch.",
      outcome:
        "Launched responsive perp UX backed by dependable off-chain indexing for high-frequency on-chain updates.",
      tags: ["Next.js", "NestJS", "viem", "Botanix", "Redis"],
    },
    {
      title: "Klyro",
      imageUrl: "/images/projects/klyro/landing.png",
      projectUrl: "http://klyro.security/",
      description:
        "Helped bootstrap an AI-powered IGA connector platform to reduce enterprise onboarding time to SailPoint and legacy applications.",
      outcome:
        "Contributed across MVP architecture, frontend ownership, and API delivery during rapid R&D expansion.",
      tags: ["React", "Golang", "LangGraph", "PostgreSQL", "ArgoCD"],
    },
    {
      title: "Urbanmix",
      imageUrl: "/images/projects/urbanmix/landing.png",
      projectUrl: "https://www.urbanmix.tech/",
      description:
        "Built core real-estate management product surfaces with React, Firebase, and data visualization support for 3D-oriented workflows.",
      outcome:
        "Delivered production features quickly in a new Firebase-heavy stack and supported early business momentum.",
      tags: ["React", "Firebase", "D3.js", "MUI", "Cloud Functions"],
    },
  ],
  employmentHistory: [
    {
      title: "Senior Full-Stack Engineer / Contract Developer",
      company: "Freelance / Contract Software Engineer",
      companyUrl: "https://takeshi-suzuki.vercel.app",
      period: "Oct 2024 - Present",
      highlights: [
        "Delivered 5+ contract engagements for startups, nonprofits, and independent product teams across full-stack, Web3, and AI-assisted development.",
        "Worked directly with founders and technical leaders to define scope, architect MVP features, and ship launch-ready software.",
        "Owned delivery from requirements through React/Next.js interfaces, Node.js/NestJS/Express APIs, databases, CI/CD, and cloud deployment workflows.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Nest.js",
        "Express.js",
        "Python",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Docker",
        "GitHub Actions",
        "AWS",
        "GCP",
        "LangChain",
        "LangGraph",
        "RAG",
        "MCP",
      ],
    },
    {
      title: "Senior Full-Stack Engineer, Web3 / DApp Development",
      company: "Webisoft",
      companyUrl: "https://webisoft.com",
      period: "May 2023 - Oct 2024",
      highlights: [
        "Contributed to DApp development for DeFi ecosystems including Gains Network, Velodrome, and Uniswap V2 fork-based applications.",
        "Integrated wallet-connected flows and smart contract interactions with viem and wagmi on EVM networks.",
        "Built Web3 UX and blockchain indexer functionality to connect frontend experiences with on-chain data workflows.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "EVM",
        "Solidity",
        "viem",
        "wagmi",
        "Docker",
        "GitHub Actions",
        "AWS",
        "GCP",
      ],
    },
    {
      title: "Full-Stack Engineer, SaaS / Automation Products",
      company: "Webisoft",
      companyUrl: "https://webisoft.com",
      period: "May 2022 - Apr 2023",
      highlights: [
        "Developed features for GetBonzo and LeadAction across SMS and email automation product workflows.",
        "Implemented 100+ backend endpoints and APIs for automation, user management, integrations, and data operations.",
        "Built 20+ custom UI components and 17+ application pages while supporting CI/CD, containerized development, monitoring, and cloud deployment.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Express.js",
        "Nest.js",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Docker",
        "Kubernetes",
        "k3d",
        "Grafana",
        "Prometheus",
        "GitHub Actions",
        "AWS",
        "GCP",
        "Terraform",
      ],
    },
    {
      title: "Senior Full-Stack Engineer",
      company: "Innovature.ai",
      companyUrl: "https://innovature.ai",
      period: "May 2020 - May 2022",
      highlights: [
        "Owned feature development across frontend interfaces, backend business logic, APIs, database workflows, and production infrastructure.",
        "Built and maintained CRUD REST APIs with Express.js, TypeScript, and MySQL for core product functionality.",
        "Collaborated across design and engineering to translate requirements into maintainable features and improve product stability.",
      ],
      technologies: [
        "TypeScript",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
        "GraphQL",
        "REST APIs",
        "Docker",
        "CI/CD",
        "Cloud Infrastructure",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Innovature.ai",
      companyUrl: "https://innovature.ai",
      period: "Nov 2018 - May 2020",
      highlights: [
        "Specialized in frontend development, building production pages and reusable components from Figma designs.",
        "Implemented feature tickets and bug fixes through Agile workflows.",
        "Translated design specs into responsive user-facing interfaces and improved UI consistency with design collaboration.",
      ],
      technologies: [
        "TypeScript",
        "JavaScript",
        "React",
        "HTML",
        "CSS",
        "Figma",
        "Responsive UI",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "Innovature.ai",
      companyUrl: "https://innovature.ai",
      period: "Feb 2018 - Nov 2018",
      highlights: [
        "Contributed to assigned frontend and backend development tasks across feature delivery, bug fixes, and maintenance.",
        "Gained hands-on experience with TypeScript, Express.js, MySQL, frontend implementation, and REST API development.",
        "Worked closely with senior engineers to learn production engineering practices and full-stack workflows.",
      ],
      technologies: [
        "TypeScript",
        "JavaScript",
        "Express.js",
        "MySQL",
        "REST APIs",
        "Git",
        "Agile Development",
      ],
    },
  ],
  engineeringNotes,
  projectArchive,
  projectCaseStudies: {
    fullsail: {
      overview:
        "FullSail is a Sui-based Ve(3,3)-inspired DEX focused on sustainable liquidity, voting, and emissions mechanics.",
      role: "Owned frontend product surfaces, backend API integration, and on-chain interaction flows for swap, liquidity, and governance.",
      metadata: {
        role: "Senior Full-Stack Engineer",
        timeline: "Q2 2024 - Q4 2024",
        clientType: "Web3 DeFi startup",
        stack: ["Next.js", "NestJS", "Sui", "GraphQL", "AWS ECS"],
        links: [
          { label: "Live product", href: "https://fullsail.finance/" },
          { label: "Case study", href: "/projects/fullsail" },
        ],
      },
      realScenario:
        "The launch deadline required stable swap, LP, and vote flows for a marketing window while wallet failure handling was still inconsistent.",
      problem:
        "Translate complex DeFi mechanics into reliable UX while handling wallet and transaction-state complexity.",
      architecture: [
        "Next.js frontend",
        "NestJS API",
        "GraphQL data layer",
        "Sui RPC and contract interaction",
        "AWS ECS deployment",
      ],
      keyFeatures: [
        "Swap and liquidity flows",
        "Governance and voting screens",
        "Wallet-connected transaction handling",
      ],
      ownedScopeChecklist: [
        "Implemented deterministic transaction states across swap/liquidity/vote flows",
        "Integrated Sui-specific contract interaction adapters across product surfaces",
        "Built recoverable wallet error and timeout handling paths",
        "Coordinated release QA for launch-critical governance interactions",
      ],
      challenges: [
        "Sui object model integration",
        "Transaction state reliability",
        "Synchronizing product state with on-chain updates",
      ],
      tradeoffs: [
        "Separated chain-specific data adapters from UI logic",
        "Balanced live updates with API caching to reduce UX jitter",
      ],
      outcome:
        "Shipped launch-critical swap, liquidity, and governance flows with clearer wallet recovery paths and lower release risk.",
      outcomes: [
        "Shipped campaign-critical DeFi flows in time for the launch window",
        "Improved transaction reliability with deterministic wallet and recovery states",
        "Reduced launch risk by separating Sui-specific adapters from core UI behavior",
      ],
      buildNext: [
        "Add governance and emissions analytics panels for operators",
        "Instrument proactive wallet/RPC health telemetry",
      ],
      relatedNoteSlugs: ["reliable-transaction-ux-web3"],
      stack: ["Next.js", "NestJS", "Sui", "GraphQL", "AWS ECS"],
    },
    sonar: {
      overview:
        "Sonar.Trade is an automated trading platform that expanded from EVM-only execution into multi-chain strategy support with Solana integration.",
      role: "Owned full-stack delivery across frontend UX upgrades, backend strategy orchestration updates, and cross-chain data integration.",
      metadata: {
        role: "Senior Full-Stack Engineer",
        timeline: "Q1 2024 - Q3 2024",
        clientType: "Algorithmic trading product team",
        stack: ["Next.js", "NestJS", "Solana", "PostgreSQL", "Prisma"],
        links: [
          { label: "Live platform", href: "https://sonar.trade/" },
          { label: "Case study", href: "/projects/sonar" },
        ],
      },
      realScenario:
        "The business needed Solana expansion while preserving trusted EVM strategy behavior already used in live automated trading.",
      problem:
        "Enable Solana-compatible strategy execution while preserving backward-compatible behavior for existing EVM users.",
      architecture: [
        "Next.js trading dashboard",
        "NestJS strategy API",
        "PostgreSQL + Prisma strategy persistence",
        "EVM + Solana execution adapters",
        "Cloud deployment with CI/CD",
      ],
      keyFeatures: [
        "Dual-chain strategy execution",
        "Improved strategy configuration UX",
        "Backward-compatible v1 strategy handling",
      ],
      ownedScopeChecklist: [
        "Designed adapter boundaries for EVM and Solana execution differences",
        "Extended strategy orchestration APIs for multi-chain lifecycle management",
        "Updated configuration UX with stronger operator guardrails",
        "Protected legacy strategy behavior during rollout with compatibility checks",
      ],
      challenges: [
        "Normalizing chain-specific execution semantics",
        "Maintaining strategy reliability under async market updates",
        "Delivering UX improvements without breaking existing flows",
      ],
      tradeoffs: [
        "Used adapter abstraction for chain differences at cost of additional orchestration complexity",
        "Prioritized compatibility and operator trust over aggressive feature expansion",
      ],
      outcome:
        "Delivered stable multi-chain automation while preserving trusted EVM behavior and improving setup clarity for operators.",
      outcomes: [
        "Enabled production strategy execution across both EVM and Solana environments",
        "Protected existing operator trust by keeping legacy strategy behavior backward-compatible",
        "Reduced misconfiguration risk with clearer setup constraints and stronger UX guardrails",
      ],
      buildNext: [
        "Add pre-trade simulation previews for strategy validation",
        "Expand operations dashboards for chain latency and failure patterns",
      ],
      relatedNoteSlugs: [
        "reliable-transaction-ux-web3",
        "ai-coding-tools-in-production-workflows",
      ],
      stack: ["Next.js", "NestJS", "Solana", "PostgreSQL", "Prisma"],
    },
    tizz: {
      overview:
        "Tizz is a perp trading product on Botanix that required custom indexing infrastructure to support real-time product behavior.",
      role: "Built trading-facing frontend experiences and implemented backend indexing/event-processing workflows for on-chain sync.",
      metadata: {
        role: "Senior Full-Stack Engineer",
        timeline: "Q4 2024 - Q1 2025",
        clientType: "Perpetuals trading startup",
        stack: ["Next.js", "NestJS", "Botanix", "viem", "Redis"],
        links: [
          { label: "Case study", href: "/projects/tizz" },
          { label: "Project surface", href: "/projects/tizz" },
        ],
      },
      realScenario:
        "Botanix had no hosted subgraph path, but traders still required near real-time position accuracy and replay-safe recovery during provider lag.",
      problem:
        "Subgraph support was unavailable, so product reliability depended on a custom event ingestion and reconciliation pipeline.",
      architecture: [
        "Next.js perp trading frontend",
        "NestJS backend services",
        "Custom Botanix event indexer",
        "Redis-backed queueing and cache",
        "Viem-based contract and event interaction",
      ],
      keyFeatures: [
        "Responsive perp trading UI",
        "Near real-time event processing",
        "Indexer-driven position and market state updates",
      ],
      ownedScopeChecklist: [
        "Implemented block-scanning indexer with persistent cursor checkpoints",
        "Built idempotent event handlers and replay-safe projections",
        "Added reconciliation jobs for drift and recovery",
        "Integrated indexer outputs into trader-facing market and position views",
      ],
      challenges: [
        "Designing reliable indexing without native subgraph infrastructure",
        "Handling chain reorg-like inconsistencies and sync drift",
        "Keeping UX state aligned with rapid on-chain event volume",
      ],
      tradeoffs: [
        "Accepted higher operational ownership in exchange for custom indexer control",
        "Prioritized data consistency and recovery flows over minimal backend complexity",
      ],
      outcome:
        "Launched a production-ready perp trading experience backed by dependable custom indexing on a chain without hosted subgraph support.",
      outcomes: [
        "Built a custom Botanix indexer when hosted subgraph tooling was unavailable",
        "Added replay-safe projections, persistent checkpoints, and reconciliation jobs",
        "Connected indexer outputs to trader-facing market and position views with maintainable recovery paths",
      ],
      buildNext: [
        "Introduce anomaly detection for index lag and projection drift",
        "Add downstream exports for strategy analytics and risk reporting",
      ],
      relatedNoteSlugs: [
        "custom-blockchain-indexers-without-subgraphs",
        "reliable-transaction-ux-web3",
      ],
      stack: ["Next.js", "NestJS", "viem", "Botanix", "Redis"],
    },
  },
  techStackIcons: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  ],
  coreCompetencies: [
    "Python",
    "Golang",
    "NestJS",
    "OpenAI API",
    "Claude Code",
    "Next.js",
    "Tailwind CSS",
    "TanStack Query",
  ],
} satisfies ResumeContent;
