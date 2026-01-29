import { APPS } from '../../const/apps';
import type { PortfolioData } from '../types/portfolio.types';

// Portfolio Data - Replace this with your actual information
export const portfolioData: PortfolioData = {
  about: {
    name: "Pritam",
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
      id: "1",
      name: "E-Commerce REST API",
      description: "Scalable RESTful API for e-commerce platform with authentication, payment processing, and inventory management.",
      techStack: [
        { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
        { name: "Express", icon: "SiExpress", color: "#000000" },
        { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
        { name: "Redis", icon: "SiRedis", color: "#DC382D" }
      ],
      apis: ["Stripe Payment API", "SendGrid Email API", "AWS S3"],
      features: [
        "JWT Authentication & Authorization",
        "Payment gateway integration",
        "Real-time inventory tracking",
        "Admin dashboard APIs",
        "Rate limiting & caching",
        "Comprehensive API documentation"
      ],
      github: "https://github.com/yourusername/ecommerce-api",
      liveDemo: "https://api.example.com/docs"
    },
    {
      id: "2",
      name: "Real-Time Chat Server",
      description: "WebSocket-based chat server supporting millions of concurrent connections with message persistence.",
      techStack: [
        { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
        { name: "Socket.io", icon: "SiSocketdotio", color: "#010101" },
        { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
        { name: "Docker", icon: "SiDocker", color: "#2496ED" }
      ],
      apis: ["Twilio Video API", "Firebase Cloud Messaging"],
      features: [
        "WebSocket real-time communication",
        "Message encryption",
        "File upload handling",
        "Presence detection",
        "Scalable microservices architecture",
        "Load balancing"
      ],
      github: "https://github.com/yourusername/chat-server"
    },
    {
      id: "3",
      name: "Analytics Dashboard Backend",
      description: "High-performance analytics API processing millions of events daily with real-time insights.",
      techStack: [
        { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
        { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
        { name: "ClickHouse", icon: "SiClickhouse", color: "#FFCC01" },
        { name: "Kafka", icon: "SiApachekafka", color: "#231F20" }
      ],
      apis: ["Google Analytics API", "Mixpanel API"],
      features: [
        "Event streaming with Kafka",
        "Real-time data aggregation",
        "Custom dashboard APIs",
        "Data export functionality",
        "Query optimization",
        "Batch processing"
      ],
      github: "https://github.com/yourusername/analytics-backend",
      liveDemo: "https://analytics.example.com"
    },
    {
      id: "4",
      name: "Task Management API",
      description: "Comprehensive project and task management API with team collaboration features.",
      techStack: [
        { name: "NestJS", icon: "SiNestjs", color: "#E0234E" },
        { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
        { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
        { name: "Prisma", icon: "SiPrisma", color: "#2D3748" }
      ],
      apis: ["Google Calendar API", "Slack API", "Notion API"],
      features: [
        "Multi-tenant architecture",
        "Role-based access control",
        "Webhook integrations",
        "Automated task scheduling",
        "Email notifications",
        "Advanced search & filtering"
      ],
      github: "https://github.com/yourusername/task-api",
      liveDemo: "https://tasks-api.example.com/docs"
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
    { name: "GitHub", url: "https://github.com/yourusername", icon: "FaGithub" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "FaLinkedin" },
    { name: "Twitter", url: "https://twitter.com/yourusername", icon: "FaTwitter" },
    { name: "Instagram", url: "https://instagram.com/yourusername", icon: "FaInstagram" }
  ],
  contact: {
    email: "your.email@example.com"
  }
};
