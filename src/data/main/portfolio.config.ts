import { APPS } from '../../const/apps';
import type { PortfolioData } from '../types/portfolio.types';

// Portfolio Data - Replace this with your actual information
export const portfolioData: PortfolioData = {
  about: {
    name: "PritamDev",
    title: "React Native App Developer",
    introduction: "I'm a passionate React Native developer who transforms ideas into beautiful, high-performance mobile applications. With expertise in building cross-platform apps that users love, I specialize in creating seamless experiences that bridge design and functionality. My journey in mobile development has equipped me with deep knowledge in React Native, Redux, Firebase, and modern development practices.",
    experience: [
      {
        year: "2024 - Present",
        title: "Senior React Native Developer",
        description: "Leading mobile app development for multiple high-impact projects, focusing on performance optimization and scalable architecture"
      },
      {
        year: "2022 - 2024",
        title: "Full Stack Developer",
        description: "Built end-to-end mobile and web applications using React Native, React.js, and Node.js"
      },
      {
        year: "2020 - 2022",
        title: "Junior Mobile Developer",
        description: "Started journey in mobile development, mastering React Native and contributing to various app projects"
      }
    ],
    skills: [
      "Cross-Platform Development",
      "State Management (Redux, Context API)",
      "RESTful API Integration",
      "Firebase & Cloud Services",
      "UI/UX Implementation",
      "Performance Optimization",
      "Native Module Integration",
      "App Store Deployment"
    ]
  },
  apps: APPS,
  backendProjects: [
    {
      id: "whatsapp-service",
      name: "Whatsapp-Service",
      description: "A robust MERN stack service providing bulk OTP and WhatsApp messaging services for verification and communication.",
      techStack: [
        { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
        { name: "Express", icon: "SiExpress", color: "#000000" },
        { name: "React", icon: "SiReact", color: "#61DAFB" },
        { name: "Node.js", icon: "SiNodedotjs", color: "#339933" }
      ],
      apis: ["WhatsApp Cloud API", "OTP Gateway", "Socket.io"],
      features: [
        "Bulk messaging capabilities",
        "OTP verification service",
        "Real-time delivery tracking",
        "API integration for developers"
      ],
      github: "https://github.com/PritamSarkar12212004/Whatsapp-Service.git"
    },
    {
      id: "nexamine-database",
      name: "Nexamine Private-DataBase",
      description: "A custom lightweight database system built using Node.js filesystem modules, supporting JS/TS applications with efficient data storage.",
      techStack: [
        { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
        { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
        { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" }
      ],
      apis: ["Node FS API", "Crypto API"],
      features: [
        "Recursive data structure",
        "Built-in data encryption",
        "High-speed file-based I/O",
        "Easy JS/TS integration"
      ],
      github: "https://github.com/PritamSarkar12212004/Private-DataBase.git"
    },
    {
      id: "tiffin-wala-admin-backend",
      name: "Tiffin Wala Admin Backend",
      description: "The backend engine for Tiffin Wala Admin, managing mess registrations, order processing, and admin analytics.",
      techStack: [
        { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
        { name: "Express", icon: "SiExpress", color: "#000000" },
        { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" }
      ],
      apis: ["JWT Auth", "Cloudinary API", "Payment Gateway"],
      features: [
        "Owner verification system",
        "Dynamic menu management",
        "Financial reporting logic",
        "Role-based access control"
      ],
      github: "https://github.com/PritamSarkar12212004/TiffinWala_Admin_Backend.git"
    },
    {
      id: "tiffin-wala-backend",
      name: "Tiffin Wala Client Backend",
      description: "Main backend service for the Tiffin Wala client app, handling user orders, real-time tracking, and menu discovery.",
      techStack: [
        { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
        { name: "Express", icon: "SiExpress", color: "#000000" },
        { name: "MongoDB", icon: "SiMongodb", color: "#47A248" }
      ],
      apis: ["Google Maps API", "Firebase Push Auth", "Socket.io"],
      features: [
        "Real-time order tracking",
        "Location-based mess search",
        "Secure payment processing",
        "Push notification system"
      ],
      github: "https://github.com/PritamSarkar12212004/Tiffin-Wala-Backend.git"
    },
    {
      id: "my-raisoni-backend",
      name: "MyRaisoni Backend",
      description: "Secure backend infrastructure for the MyRaisoni student portal, managing academic data and campus resources.",
      techStack: [
        { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
        { name: "Express", icon: "SiExpress", color: "#000000" },
        { name: "MongoDB", icon: "SiMongodb", color: "#47A248" }
      ],
      apis: ["University ERP API", "Firebase Auth", "Redis Engine"],
      features: [
        "Academic record synchronization",
        "Secure student authentication",
        "Real-time event updates",
        "Attendance tracking logic"
      ],
      github: "https://github.com/PritamSarkar12212004/MyRaisoni_Backend.git"
    },
    {
      id: "food-protein-calculator",
      name: "Food Protein Calculator",
      description: "A specialized freelance web application for health-conscious users to calculate protein intake and nutritional values.",
      techStack: [
        { name: "React", icon: "SiReact", color: "#61DAFB" },
        { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
        { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" }
      ],
      apis: ["Nutrition Data API", "Local Storage"],
      features: [
        "Dynamic protein calculation",
        "Modern responsive design",
        "Custom diet plan generator",
        "Quick search food database"
      ],
      github: "https://github.com/PritamSarkar12212004/food-prootine-cal.git",
      liveDemo: "https://food-prootine-cal.vercel.app/"
    },
    {
      id: "carbon-chain-app",
      name: "CarbonChain Environment App",
      description: "Award-winning hackathon project that calculates carbon footprints and enables industry tokenization for environmental impact.",
      techStack: [
        { name: "React", icon: "SiReact", color: "#61DAFB" },
        { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
        { name: "Three.js", icon: "SiThreedotjs", color: "#000000" }
      ],
      apis: ["Carbon Footprint API", "Web3 Token Engine"],
      features: [
        "Environmental impact analysis",
        "Industry carbon tokenization",
        "Real-time carbon tracking",
        "Interactive data visualization"
      ],
      github: "https://github.com/PritamSarkar12212004/CarbonChain-app.git",
      liveDemo: "https://carbon-chain-app.vercel.app/"
    },
    {
      id: "carbon-chain-backend",
      name: "CarbonChain Backend",
      description: "Scalable backend handling complex environmental calculations and token transactions for the CarbonChain ecosystem.",
      techStack: [
        { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
        { name: "Express", icon: "SiExpress", color: "#000000" },
        { name: "Blockchain Gear", icon: "SiEthereum", color: "#3C3C3D" }
      ],
      apis: ["Smart Contract Integ.", "Data Analytics Engine"],
      features: [
        "Secure token transaction logs",
        "Heavy data processing logic",
        "Environmental regulatory checks",
        "High-performance calculation engine"
      ],
      github: "https://github.com/PritamSarkar12212004/CarbonChain-Backend.git"
    },
    {
      id: "frotify-frontend",
      name: "Frotify Finance Portfolio",
      description: "A premium freelance finance management website with advanced tracking and portfolio visualization tools.",
      techStack: [
        { name: "React", icon: "SiReact", color: "#61DAFB" },
        { name: "Redux", icon: "SiRedux", color: "#764ABC" },
        { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" }
      ],
      apis: ["Market Data API", "Financial APIs", "Charts.js"],
      features: [
        "Real-time expense tracking",
        "Investment portfolio view",
        "Interactive financial charts",
        "Clean glassmorphism design"
      ],
      github: "https://github.com/PritamSarkar12212004/Frotify-Frontend.git",
      liveDemo: "https://frotify.vercel.app/login"
    },
    {
      id: "frotify-backend",
      name: "Frotify Backend",
      description: "The financial brain of Frotify, ensuring secure data handling, market data processing, and user portfolio management.",
      techStack: [
        { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
        { name: "Express", icon: "SiExpress", color: "#000000" },
        { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" }
      ],
      apis: ["Bank Sync API", "Market Feeds", "Auth0"],
      features: [
        "Secure asset data storage",
        "High-accuracy financial math",
        "Automated expense categorization",
        "Robust user data encryption"
      ],
      github: "https://github.com/PritamSarkar12212004/Frotify-Backend.git"
    }
  ],
  techStack: [
    {
      category: "Mobile Development",
      technologies: [
        { name: "React Native", icon: "SiReact", color: "#61DAFB" },
        { name: "Expo", icon: "SiExpo", color: "#000020" },
        { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
        { name: "Redux Toolkit", icon: "SiRedux", color: "#764ABC" }
      ]
    },
    {
      category: "Frontend Development",
      technologies: [
        { name: "React.js", icon: "SiReact", color: "#61DAFB" },
        { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
        { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
        { name: "Framer Motion", icon: "SiFramer", color: "#0055FF" }
      ]
    },
    {
      category: "Backend Development",
      technologies: [
        { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
        { name: "Express", icon: "SiExpress", color: "#000000" },
        { name: "NestJS", icon: "SiNestjs", color: "#E0234E" },
        { name: "GraphQL", icon: "SiGraphql", color: "#E10098" }
      ]
    },
    {
      category: "Databases",
      technologies: [
        { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
        { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
        { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
        { name: "Redis", icon: "SiRedis", color: "#DC382D" }
      ]
    },
    {
      category: "Tools & Others",
      technologies: [
        { name: "Git", icon: "SiGit", color: "#F05032" },
        { name: "Docker", icon: "SiDocker", color: "#2496ED" },
        { name: "Figma", icon: "SiFigma", color: "#F24E1E" }
      ]
    }
  ],
  social: [
    { name: "GitHub", url: "https://github.com/PritamSarkar12212004", icon: "FaGithub" },
    { name: "LinkedIn", url: "https://linkedin.com/in/PritamSarkar12212004", icon: "FaLinkedin" },
    { name: "Twitter", url: "https://twitter.com/PritamSarkar", icon: "FaTwitter" },
    { name: "Instagram", url: "https://instagram.com/PritamSarkar", icon: "FaInstagram" }
  ],
  contact: {
    email: "your.email@example.com"
  }
};
