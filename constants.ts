
import { ProfileData } from './types';

// NOTE: To run this on GitHub Pages with local assets:
// 1. Create a folder named 'assets' inside your 'public' folder (e.g. public/assets).
// 2. Place your image files there.
// 3. Update the filenames below to match your actual files.
// 4. Paths are relative (no leading slash) to support subdirectory hosting on GitHub Pages.

export const PROFILE_DATA: ProfileData = {
  navLinks: [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/dustin-nguyen",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/duchn",
      icon: "Linkedin"
    }
  ],
  hero: {
    greeting: "Hi, my name is",
    name: "Dustin Nguyen",
    tagline: "I build accessible, pixel-perfect, and performant web experiences.",
    description: "I'm a software engineer based in San Francisco, specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Tech Solutions Inc.",
    resumeUrl: "assets/Duc-Resume.pdf", 
    ctaText: "Check out my work",
    heroImageUrl: "assets/hero-profile.jpg"
  },
  about: {
    sectionNumber: "01.",
    title: "About Me",
    paragraphs: [
      "I am a software engineer with a passion for building scalable web applications and crafting intuitive user experiences. With a strong foundation in modern frontend architectures and a keen eye for design, I bridge the gap between engineering and aesthetics. My approach creates software that not only functions flawlessly but feels natural to use.",
      "My journey started when I decided to customize a Tumblr theme, and I've been hooked on web development ever since. I enjoy creating software that lives on the internet, whether that be websites, applications, or anything in between.",
      "Here are a few technologies I’ve been working with recently:"
    ],
    profileImageUrl: "assets/about-profile.jpg", 
    recentTechnologies: [
      "React", 
      "TypeScript", 
      "Next.js", 
      "Tailwind CSS", 
      "Node.js", 
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  experience: {
    sectionNumber: "02.",
    title: "Where I've Worked",
    jobs: [
      {
        id: "exp-1",
        company: "Tech Solutions Inc.",
        role: "Senior Frontend Engineer",
        period: "2021 — Present",
        description: [
          "Led the migration of a legacy monolithic application to a micro-frontend architecture using React and Webpack Module Federation, reducing build times by 40%.",
          "Developed and maintained a shared component library used across 5 distinct products, ensuring UI consistency and accessibility compliance (WCAG 2.1 AA).",
          "Mentored junior developers and conducted code reviews to maintain high code quality standards."
        ],
        technologies: ["React", "TypeScript", "GraphQL", "AWS"],
        logoUrl: "assets/company-1.png" 
      },
      {
        id: "exp-2",
        company: "Creative Digital Agency",
        role: "Software Developer",
        period: "2019 — 2021",
        description: [
          "Collaborated with designers to translate Figma mockups into responsive, interactive web applications for high-profile clients.",
          "Optimized frontend performance, achieving a 95+ Lighthouse score across key landing pages.",
          "Integrated third-party APIs (Stripe, Contentful) to enable e-commerce and dynamic content management features."
        ],
        technologies: ["JavaScript", "React", "Sass", "Node.js"],
        logoUrl: "assets/company-2.png" 
      },
      {
        id: "exp-3",
        company: "StartUp Co.",
        role: "Junior Web Developer",
        period: "2018 — 2019",
        description: [
          "Assisted in the development of a customer-facing dashboard using Vue.js.",
          "Participated in agile sprints, daily stand-ups, and retrospective meetings.",
          "Debugged and resolved cross-browser compatibility issues for IE11 and Safari."
        ],
        technologies: ["Vue.js", "Firebase", "Bootstrap"],
        logoUrl: "assets/company-3.png" 
      }
    ]
  },
  education: {
    sectionNumber: "03.",
    title: "Education",
    items: [
      {
        id: "edu-1",
        school: "University of California, Berkeley",
        degree: "B.S. Computer Science",
        period: "2014 — 2018",
        location: "Berkeley, CA",
        description: "Relevant coursework: Data Structures & Algorithms, Artificial Intelligence, Database Systems, Computer Architecture. Graduated with Honors.",
        logoUrl: "assets/school-1.png" 
      },
      {
        id: "edu-2",
        school: "Full Stack Academy",
        degree: "Web Development Immersive",
        period: "2018",
        location: "New York, NY",
        description: "Intensive 17-week coding bootcamp focused on the MERN stack (MongoDB, Express, React, Node.js). Built 3 full-stack projects in agile teams.",
        logoUrl: "assets/school-2.png" 
      }
    ]
  },
  projects: {
    sectionNumber: "04.",
    title: "Some Things I've Built",
    items: [
      {
        id: "proj-1",
        title: "E-Commerce Dashboard",
        description: "A comprehensive analytics dashboard for online retailers. Features real-time data visualization, inventory management, and sales reporting.",
        imageUrl: "assets/project-1.jpg", 
        technologies: ["React", "Recharts", "Tailwind", "Supabase"],
        repoUrl: "https://github.com",
        demoUrl: "https://example.com"
      },
      {
        id: "proj-2",
        title: "TaskMaster AI",
        description: "A productivity application that uses AI to categorize and prioritize tasks automatically based on urgency and complexity.",
        imageUrl: "assets/project-2.jpg", 
        technologies: ["Next.js", "OpenAI API", "Prisma", "Postgres"],
        repoUrl: "https://github.com",
        demoUrl: "https://example.com"
      },
      {
        id: "proj-3",
        title: "DevPortfolio Generator",
        description: "A CLI tool that helps developers generate a static portfolio site from a JSON configuration file.",
        imageUrl: "assets/project-3.jpg", 
        technologies: ["Node.js", "Ink", "Chalk"],
        repoUrl: "https://github.com"
      },
      {
        id: "proj-4",
        title: "HealthTracker",
        description: "Mobile-first web app for tracking daily calorie intake and exercise routines with historical data analysis.",
        imageUrl: "assets/project-4.jpg", 
        technologies: ["React Native", "Firebase", "Redux"],
        demoUrl: "https://example.com"
      }
    ]
  },
  skills: {
    sectionNumber: "05.",
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Core",
        skills: ["React", "TypeScript", "Next.js", "HTML5/CSS3", "Tailwind CSS"]
      },
      {
        name: "State & Testing",
        skills: ["Redux Toolkit", "React Query", "Jest", "Cypress", "Vitest"]
      },
      {
        name: "Backend & Cloud",
        skills: ["Node.js", "PostgreSQL", "Firebase", "AWS", "Docker"]
      },
      {
        name: "Tools & Design",
        skills: ["Git", "Figma", "Webpack", "Vite", "CI/CD"]
      }
    ]
  },
  contact: {
    sectionNumber: "06.",
    subtitle: "What's Next?",
    title: "Get In Touch",
    description: "I am currently looking for new opportunities. Whether you have a question, a job offer, or just want to say hi, my inbox is always open.",
    buttonText: "Say Hello",
    email: "dustin.nguyen@example.com",
    footerText: "Built with React, TypeScript & Tailwind. Designed & Built by Dustin Nguyen"
  }
};
