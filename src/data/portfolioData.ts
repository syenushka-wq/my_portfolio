export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "AI / ML" | "Microservices" | "Full Stack Web" | "Software Engineering";
  summary: string;
  technologies: string[];
  keyHighlights: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  metrics?: { label: string; value: string };
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string }[];
}

export interface EducationItem {
  institution: string;
  program: string;
  description: string;
  location: string;
  status: string;
  badge?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  points: string[];
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
  badge: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Himadi Yenushka De Silva",
    displayName: "Himadi De Silva",
    initials: "HD",
    role: "Software Engineering Student & Aspiring Software Engineer",
    institute: "IJSE – Institute of Java and Software Engineering",
    location: "Sri Lanka",
    email: "syenushka@gmail.com",
    github: "https://github.com/syenushka-wq",
    linkedin: "https://www.linkedin.com/in/yenushka-silva-1a8952427/",
    status: "Available for Internships & Projects",
    cvFileName: "CV-Himadi-Yenushka-De-Silva.pdf",
    aboutBio: [
      "I am an enthusiastic Software Engineering student at the Institute of Java and Software Engineering (IJSE) in Sri Lanka, driven by a deep passion for building high-quality, practical digital solutions.",
      "My academic and project work centers around modern web development, scalable enterprise backends with Java and Spring Boot, and the exciting frontier of Artificial Intelligence and Machine Learning. I love understanding how systems work under the hood, writing maintainable code, and turning complex problem statements into elegant user experiences.",
      "Whether developing full-stack applications, training predictive machine learning models, or architecting microservices, I am dedicated to continuous learning and eager to contribute to innovative software engineering teams."
    ],
    stats: [
      { value: "3+", label: "Featured Projects" },
      { value: "15+", label: "Core Technologies" },
      { value: "IJSE", label: "Software Engineering" },
      { value: "100%", label: "Dedication to Craft" },
    ]
  },

  skills: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "SQL" },
        { name: "HTML" },
        { name: "CSS" },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "JavaScript (ES6+)" },
        { name: "HTML5" },
        { name: "CSS3 / Modern CSS" },
        { name: "Responsive UI" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java" },
        { name: "Spring Boot" },
        { name: "REST APIs" },
        { name: "FastAPI" },
        { name: "Node.js" },
        { name: "Express.js" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL" },
        { name: "SQL" },
        { name: "Relational Modeling" },
        { name: "Query Optimization" },
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning" },
        { name: "Python" },
        { name: "Regression Analysis" },
        { name: "Data Cleaning" },
        { name: "Feature Engineering" },
        { name: "Scikit-Learn" },
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Postman" },
        { name: "Vite" },
        { name: "VS Code" },
        { name: "REST API Testing" },
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "01",
      title: "Used Car Price Predictor for Sri Lanka",
      tagline: "Machine Learning regression platform for vehicle valuation",
      category: "AI / ML",
      summary: "A complete machine learning solution engineered to predict used automobile valuations in Sri Lanka. It combines extensive real-world data cleaning, feature engineering, a regression model trained with Python, a high-throughput FastAPI inference server, a Node.js/Express API Gateway, and an interactive React user interface.",
      technologies: ["Python", "Machine Learning", "FastAPI", "React", "Node.js", "Express", "CSS3", "REST APIs"],
      keyHighlights: [
        "In-depth data preprocessing, outlier removal, and categorical feature encoding",
        "Trained regression model accurately estimating vehicle prices based on mileage, year, and brand",
        "FastAPI microservice delivering real-time predictions with sub-50ms latency",
        "Node.js/Express API Gateway with rate limiting, logging, and validation",
        "Interactive React frontend allowing users to tweak vehicle specs and view price ranges",
      ],
      githubUrl: "https://github.com/syenushka-wq",
      liveUrl: "#",
      featured: true,
      metrics: { label: "Regression Pipeline", value: "FastAPI + React" }
    },
    {
      id: "02",
      title: "Automated Greenhouse Management System",
      tagline: "Smart climate & irrigation microservices platform",
      category: "Microservices",
      summary: "A smart environmental control system designed with Java and Spring Boot microservices. It regulates greenhouse parameters such as humidity, ambient temperature, and soil moisture through autonomous sensor processing, relational database logging, and automated irrigation triggers.",
      technologies: ["Java", "Spring Boot", "Microservices", "REST APIs", "MySQL", "Docker", "Database Integration"],
      keyHighlights: [
        "Decoupled microservice architecture for sensor telemetry, climate rules, and alerting",
        "Clean RESTful APIs enabling bi-directional communication with hardware controllers",
        "MySQL integration storing longitudinal environmental metrics and crop cycles",
        "Automated threshold triggers for dynamic watering and climate adjustment",
      ],
      githubUrl: "https://github.com/syenushka-wq/Automated-Greenhouse-Management-System-AGMS-",
      liveUrl: "#",
      featured: false,
      metrics: { label: "Architecture", value: "Spring Boot Microservices" }
    },
    {
      id: "03",
      title: "Serenity Mental Health Therapy Center",
      tagline: "Comprehensive clinical appointment & therapy platform",
      category: "Full Stack Web",
      summary: "A modern software engineering web solution designed for mental health therapy centers to streamline patient intake, counselor appointment scheduling, and confidential session records with role-based access control.",
      technologies: ["React", "TypeScript", "Node.js", "REST APIs", "MySQL", "Modern CSS"],
      keyHighlights: [
        "Secure patient portal for browsing licensed therapists and booking appointments",
        "Therapist schedule management with real-time slot conflict resolution",
        "Confidential session logs and progress notes protected by strict authentication",
        "Clean, empathetic UI designed specifically for therapeutic and wellness environments",
      ],
      githubUrl: "https://github.com/syenushka-wq/Serenity-Mental-Health-Therapy-Center",
      liveUrl: "#",
      featured: false,
      metrics: { label: "Domain", value: "Healthcare & Therapy" }
    }
  ] as ProjectItem[],

  education: [
    {
      institution: "IJSE – Institute of Java and Software Engineering",
      program: "Software Engineering",
      description: "Comprehensive software engineering curriculum covering Object-Oriented Programming (Java), Enterprise Software Architecture, Database Design (MySQL), Spring Boot Microservices, Frontend Frameworks (React, TypeScript), and software engineering best practices.",
      location: "Sri Lanka",
      status: "Currently Enrolled",
      badge: "Core Studies"
    }
  ] as EducationItem[],

  experiences: [
    {
      role: "Software Engineering Student & Project Developer",
      organization: "IJSE (Institute of Java and Software Engineering)",
      period: "Present",
      type: "Academic & Project Work",
      description: "Engaged in building production-grade software applications adhering to enterprise software engineering design patterns, layered architecture, and agile software development principles.",
      points: [
        "Architecting full-stack applications utilizing Java, Spring Boot, MySQL, and React",
        "Designing and consuming clean, RESTful APIs across distributed services",
        "Implementing Machine Learning models and integrating predictive endpoints with modern web frontends",
        "Conducting continuous code refactoring, Git version control, and collaborative code reviews"
      ],
      tags: ["Java", "Spring Boot", "React", "Python", "MySQL", "REST APIs"]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      title: "Software Engineering Program",
      issuer: "Institute of Java and Software Engineering (IJSE)",
      year: "In Progress",
      description: "Rigorous industry-oriented training covering advanced Java, OOP principles, data structures, Spring Boot ecosystem, and enterprise architecture.",
      badge: "IJSE"
    },
    {
      title: "Machine Learning & Python Development",
      issuer: "Hands-on Project & Practical Study",
      year: "Active",
      description: "Supervised regression models, data cleaning, exploratory data analysis, and microservice deployment with FastAPI.",
      badge: "AI/ML"
    },
    {
      title: "Modern Full-Stack Web Development",
      issuer: "Self-Directed & Applied Projects",
      year: "Active",
      description: "Building responsive, modern, type-safe web interfaces with React, TypeScript, and modern CSS design systems.",
      badge: "Full-Stack"
    }
  ] as CertificationItem[]
};
