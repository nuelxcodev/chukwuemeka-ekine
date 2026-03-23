import { Project, Experience, SkillCategory, SocialLink } from './types';
import { Linkedin, Mail, Phone, Code, Smartphone, Database, Layers, Search, PenTool, Cpu, Rocket } from 'lucide-react';
import {
  Truck,
  Film,
  ShoppingCart,
  BarChart3
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "Chukwuemeka Emmanuel Ekine",
  role: "junior Software Engineer",
  location: "Lagos, Nigeria",
  phone: "+234 903 912 4772",
  email: "chukwuemekacodev@gmail.com",
  summary: "Results-driven junior Software Engineer with over 4 years of experience architecting and delivering high-performance web and mobile solutions. I specialize in the full software development lifecycle—from conceptual design to deployment—leveraging modern JavaScript ecosystems (React, Node.js, Next.js) to solve complex business challenges. Proven track record of optimizing application performance, leading technical initiatives, and building scalable, user-centric products.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/chukwuemeka-ekine-07560b290",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: Mail,
  },
  {
    name: "Phone",
    url: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`,
    icon: Phone,
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend Engineering",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "React Native", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Redux", icon: "redux" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Electron.js", icon: "electron" },
      { name: "Three.js", icon: "threedotjs" }
    ]
  },
  {
    category: "Backend & Architecture",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "Django", icon: "django" },
      { name: "ASP.NET Core", icon: "dotnet" },
      { name: "Microservices", icon: "server" }, // Generic mapping
      { name: "System Design", icon: "codesandbox" }, // Generic mapping
      { name: "Firebase", icon: "firebase" }
    ]
  },
  {
    category: "Database Management",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MS SQL Server", icon: "microsoftsqlserver" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" }
    ]
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS", icon: "amazonwebservices" },
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Nginx", icon: "nginx" },
      { name: "Linux", icon: "linux" },
      { name: "Git", icon: "git" }
    ]
  }
];

export const SERVICES = [
  {
    title: "Frontend Architecture",
    description: "Building responsive, pixel-perfect web interfaces with React, Next.js, and TypeScript. I focus on accessibility, performance optimization, and creating seamless user experiences.",
    icon: Code
  },
  {
    title: "Mobile App Development",
    description: "Developing cross-platform mobile applications for iOS and Android using React Native. Delivering native-like performance with a single code base.",
    icon: Smartphone
  },
  {
    title: "Backend System Design",
    description: "Architecting robust RESTful APIs and microservices using Node.js and Django. Ensuring data security, scalability, and efficient database management.",
    icon: Database
  },
  {
    title: "Full Stack Integration",
    description: "Seamlessly connecting frontend user interfaces with complex backend logic and databases. Managing state, authentication, and real-time data flow.",
    icon: Layers
  }
];

export const WORK_PROCESS = [
  {
    title: "Discovery & Strategy",
    description: "Understanding business requirements, user needs, and project goals to define a solid technical roadmap.",
    icon: Search
  },
  {
    title: "Design & Architecture",
    description: "Designing scalable system architectures and intuitive UI/UX patterns before writing a single line of code.",
    icon: PenTool
  },
  {
    title: "Development",
    description: "Writing clean, maintainable, and tested code using industry best practices and modern frameworks.",
    icon: Cpu
  },
  {
    title: "Deployment & Scale",
    description: "Setting up CI/CD pipelines, containerization, and cloud infrastructure for reliable and scalable deployment.",
    icon: Rocket
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Airmetriz Logistics",
    icon: Truck,
    description: "A comprehensive enterprise logistics and courier service solution engineered to streamline shipping operations...",
    technologies: ["Next.js", "React", "Tailwind CSS", "Redux Toolkit", "Google Maps API", "Node.js"],
    link: "http://airmetriz.vercel.app",
    type: "Web",
    year: "2023",
    role: "Lead Frontend Engineer",
    features: [
      "Implemented real-time shipment tracking using Google Maps API.",
      "Built a dynamic pricing calculator...",
      "Designed a responsive user dashboard...",
      "Optimized page load speeds by 40%..."
    ]
  },
  {
    title: "Nufy Movies",
    icon: Film,
    description: "A feature-rich movie discovery platform...",
    technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "JWT", "TMDB API"],
    link: "https://nufy-movies.onrender.com",
    type: "Web",
    year: "2023",
    role: "Full Stack Developer",
    features: [
      "Developed a secure JWT-based authentication system...",
      "Integrated the TMDB API...",
      "Implemented a 'Favorites' system...",
      "Designed a custom video player modal..."
    ]
  },
  {
    title: "Nuelmart E-Commerce",
    icon: ShoppingCart,
    description: "A fully responsive, high-performance e-commerce application...",
    technologies: ["React.js", "Node.js", "Context API", "CSS Modules", "Stripe API"],
    link: "https://nuelmart.netlify.app",
    type: "Web",
    year: "2022",
    role: "Frontend Architect",
    features: [
      "Built a persistent shopping cart...",
      "Integrated secure payment gateways...",
      "Implemented advanced product filtering...",
      "Created a mobile-responsive layout..."
    ]
  },
  {
    title: "Enterprise Data Suite",
    icon: BarChart3,
    description: "A robust desktop application engineered for organizational management...",
    technologies: ["Electron.js", "React.js", "Chart.js", "SQLite", "Node.js"],
    type: "Desktop",
    year: "2024",
    role: "Sole Developer",
    features: [
      "Architected an offline-first desktop application...",
      "Visualized complex financial data...",
      "Implemented automated PDF and Excel reports...",
      "Designed a secure local database schema..."
    ]
  }
];