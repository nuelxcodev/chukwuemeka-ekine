import { Project, Experience, SkillCategory, SocialLink } from './types';
import { Linkedin, Mail, Phone, Code, Smartphone, Database, Layers, Search, PenTool, Cpu, Rocket } from 'lucide-react';

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

export const EXPERIENCE: Experience[] = [
  {
    company: "Carrot Suit",
    role: "React Native Developer",
    period: "September 2024 – March 2025",
    location: "Lagos, Nigeria",
    details: [
      "Engineered scalable, cross-platform mobile applications using React Native, delivering a seamless native-like experience on both iOS and Android.",
      "Architected reusable component libraries and design systems that reduced development time by 30%.",
      "Collaborated closely with cross-functional teams to integrate complex backend services and optimize app performance, achieving a 99.9% crash-free user session rate."
    ]
  },
  {
    company: "Kingdom Greatness International Church (KGIC)",
    role: "Software Engineer",
    period: "March 2024 – November 2024",
    location: "Lagos, Nigeria",
    details: [
      "Spearheaded the development of a comprehensive desktop data analytics platform using Electron.js and Chart.js for real-time organizational reporting.",
      "Designed and implemented secure RESTful API architectures using Node.js to handle sensitive membership and financial data.",
      "Created interactive data visualization dashboards that enhanced executive decision-making capabilities by providing actionable insights."
    ]
  },
  {
    company: "Ochefi Technologies",
    role: "Associate Software Engineer",
    period: "June 2023 – February 2024",
    location: "Lagos, Nigeria",
    details: [
      "Developed robust full-stack web applications utilizing the MERN stack (MongoDB, Express, React, Node.js), ensuring high availability and scalability.",
      "Optimized database queries and API response times, resulting in significant performance improvements for data-heavy applications.",
      "Championed code quality initiatives through rigorous peer reviews and the implementation of clean code best practices."
    ]
  },
  {
    company: "Naving Technologies",
    role: "Software Engineer Intern",
    period: "March 2021 – April 2022",
    location: "Lagos, Nigeria",
    details: [
      "Contributed to the development of dynamic web and mobile solutions using React.js and React Native in an agile environment.",
      "Assisted in the design and integration of RESTful APIs, facilitating seamless communication between client and server architectures.",
      "Gained deep hands-on experience in the software development lifecycle, from requirement gathering to testing and deployment."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Airmetriz Logistics",
    description: "A comprehensive enterprise logistics and courier service solution engineered to streamline shipping operations. This platform facilitates real-time shipment tracking, automated delivery scheduling, and a responsive customer portal for seamless order management.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Redux Toolkit", "Google Maps API", "Node.js"],
    link: "http://airmetriz.vercel.app",
    type: "Web",
    year: "2023",
    role: "Lead Frontend Engineer",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    features: [
        "Implemented real-time shipment tracking using Google Maps API.",
        "Built a dynamic pricing calculator based on weight, distance, and delivery speed.",
        "Designed a responsive user dashboard for order history and profile management.",
        "Optimized page load speeds by 40% using Next.js Server Side Rendering (SSR)."
    ]
  },
  {
    title: "Nufy Movies",
    description: "A feature-rich movie discovery platform that aggregates trending content, trailers, and production metadata. The application features a secure authentication system, personalized watchlists, and an optimized search engine for a premium user experience.",
    technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "JWT", "TMDB API"],
    link: "https://nufy-movies.onrender.com",
    type: "Web",
    year: "2023",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200",
    features: [
        "Developed a secure JWT-based authentication system for user accounts.",
        "Integrated the TMDB API to fetch and display real-time movie data.",
        "Implemented a 'Favorites' system allowing users to persist their watchlist.",
        "Designed a custom video player modal for seamless trailer playback."
    ]
  },
  {
    title: "Nuelmart E-Commerce",
    description: "A fully responsive, high-performance e-commerce application designed with a mobile-first approach. The platform handles complex cart logic, secure payment gateway integration, and real-time inventory management to support high-volume transactions.",
    technologies: ["React.js", "Node.js", "Context API", "CSS Modules", "Stripe API"],
    link: "https://nuelmart.netlify.app",
    type: "Web",
    year: "2022",
    role: "Frontend Architect",
    image: "https://images.unsplash.com/photo-1472851294608-415522f96319?auto=format&fit=crop&q=80&w=1200",
    features: [
        "Built a persistent shopping cart using React Context API and LocalStorage.",
        "Integrated secure payment gateways for safe and reliable transactions.",
        "Implemented advanced product filtering and sorting algorithms.",
        "Created a mobile-responsive layout ensuring 100% usability across devices."
    ]
  },
  {
    title: "Enterprise Data Suite",
    description: "A robust desktop application engineered for organizational management at KGIC. It streamlines membership tracking, financial reporting, and data analytics with exportable reports, functioning completely offline for reliability.",
    technologies: ["Electron.js", "React.js", "Chart.js", "SQLite", "Node.js"],
    type: "Desktop",
    year: "2024",
    role: "Sole Developer",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    features: [
        "Architected an offline-first desktop application using Electron.js.",
        "Visualized complex financial data using interactive Chart.js dashboards.",
        "Implemented automated PDF and Excel report generation features.",
        "Designed a secure local database schema using SQLite for data integrity."
    ]
  }
];