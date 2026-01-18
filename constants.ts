import { ProfileData } from "./types";

// NOTE: To run this on GitHub Pages with local assets:
// 1. Create a folder named 'assets' inside your 'public' folder (e.g. public/assets).
// 2. Place your image files there.
// 3. Update the filenames below to match your actual files.
// 4. Paths are relative (no leading slash) to support subdirectory hosting on GitHub Pages.

export const PROFILE_DATA: ProfileData = {
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Tools", href: "#tools" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/dustin-nguyen",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/duchn",
      icon: "Linkedin",
    },
  ],

  hero: {
    greeting: "Hi, my name is",
    name: "Duc Nguyen",
    tagline: "Android Developer & Software Engineer",
    description:
      "I’m an Android developer and software engineer specializing in building high-performance, scalable, and user-centric applications. I’ve contributed to enterprise products used by millions at Walmart Global Tech, BMW of North America, and Hatchando LTD. I focus on clean architectures, app performance optimization, and delivering impactful engineering solutions.",
    resumeUrl: "assets/Duc-Resume.pdf",
    ctaText: "View My Work",
    heroImageUrl: "assets/hero-profile.jpg",
  },

  about: {
    sectionNumber: "01.",
    title: "About Me",
    paragraphs: [
      "I am a software engineer with a deep passion for building scalable web and mobile applications that delight users and improve everyday lives. I blend modern engineering practices with a strong focus on UX/UI design to create software that not only works flawlessly but feels intuitive and natural to use.",
      "I became a software engineer because I want to create tools and applications that make people's lives easier, more productive, and more enjoyable. At Walmart Global Tech, I worked on enterprise Android platforms, optimizing performance, implementing clean modular architecture, and enhancing app stability. I also explored AI-powered automation using tools like n8n and Ollama to streamline workflows and create smarter solutions for real-world problems.",
      "I thrive on challenges that push me to learn and innovate, whether it’s optimizing app performance, designing modular architectures, or exploring cutting-edge AI and cloud technologies. I take pride in crafting software that is reliable, performant, and a joy for users to interact with.",
      "Here are a few technologies I’ve been exploring and working with recently:",
    ],
    profileImageUrl: "assets/about-profile.jpg",
    recentTechnologies: [
      "Kotlin",
      "Android",
      "LLM",
      "Google AI Studio",
      "n8n",
      "ollama",
      "Python",
      "Flask",
    ],
  },

  experience: {
    sectionNumber: "02.",
    title: "Where I've Worked",
    jobs: [
      {
        id: "exp-walmart",
        company: "Walmart – Global Tech",
        role: "Android Developer",
        period: "Dec 2023 — Present",
        description: [
          "Played a key role in developing Walmart's high-traffic local marketplace platform (Kotlin, Java, GraphQL), contributing to complex feature integration and UX/UI collaboration for an intuitive user experience; this platform is projected for $1B+ annual revenue.",
          "Instrumental in optimizing memory management to achieve significant app performance gains, reducing crashes by 40% and enhancing responsiveness across diverse Android devices.",
          "Engineered and implemented key aspects of a modular, clean architecture for new app functionalities, contributing to a 20% reduction in development time and improving scalability for features like media integration and AI-driven capabilities.",
          "Actively contributed to establishing comprehensive automated testing protocols, resulting in a 30% decrease in post-release bugs and boosting overall app stability and reliability on a large scale.",
          "Collaborated closely with UX/UI designers to implement a user-centric new design, which contributed to a 15% improvement in user satisfaction scores and enabled seamless control of app functionalities.",
        ],
        technologies: [
          "Kotlin",
          "Android",
          "GraphQL",
          "Clean Architecture",
          "Testing",
          "CI/CD",
          "Automation testing",
          "R2",
        ],
        logoUrl: "assets/walmart-logo.svg",
      },
      {
        id: "exp-bmw",
        company: "BMW of North America LLC",
        role: "Software Developer Intern",
        period: "Sep 2022 — Mar 2023",
        description: [
          "Developed a key back-end system for dealer part requests; transitioned services from Spring MVC to Quarkus, significantly reducing AWS Lambda cold start times by 50%.",
          "Executed migration of mainframe DB2 to Oracle SQL & Salesforce, achieving $50K annual savings in API costs and improving data accessibility.",
          "Optimized an RPA bot (UiPath) for $500K in operational cost savings; built a monitoring service (Angular, Spring MVC) and implemented CI/CD (Jenkins), enhancing system reliability.",
        ],
        technologies: [
          "Spring MVC",
          "Quarkus",
          "Angular",
          "Oracle SQL",
          "Salesforce",
          "UiPath",
        ],
        logoUrl: "assets/bmw-logo.png",
      },
      {
        id: "exp-hatchando",
        company: "HATCHANDO LTD",
        role: "Software Engineer Intern",
        period: "May 2021 — Aug 2021",
        description: [
          "Maintained and enhanced Windows MS SQL database applications, focusing on improving data integrity and system performance for internal tools.",
        ],
        technologies: ["MS SQL", "Windows Apps"],
        logoUrl: "assets/hatchando.png",
      },
    ],
  },

  education: {
    sectionNumber: "03.",
    title: "Education",
    items: [
      {
        id: "edu-ms",
        school: "Rutgers University",
        degree: "Master of Science in Software Engineering",
        period: "May 2023",
        location: "New Brunswick, NJ",
        description: [
          "Focused on scalable systems, HPC, cloud infrastructure, and software architecture.",
        ],
        logoUrl: "assets/rutgers-logo.png",
      },
      {
        id: "edu-bs",
        school: "Rutgers University",
        degree: "Bachelor of Science in Computer Engineering (Magna Cum Laude)",
        period: "May 2021",
        location: "New Brunswick, NJ",
        description: [
          "Dean's List (Fall 2019 – Spring 2021).",
          "Coursework included Algorithms, Operating Systems, Databases, and Computer Architecture.",
        ],
        logoUrl: "assets/rutgers-logo.png",
      },
    ],
  },
  tools: {
    sectionNumber: "04.",
    title: "Try These Tools ( I built them! )",
    items: [
      {
        id: "tool-1",
        title: "JSON Formatter",
        description:
          "A simple, offline-first tool to format and validate JSON strings. Built for speed and privacy.",
        imageUrl: "assets/tool-json.jpg",
        technologies: ["React", "TypeScript", "Ace Editor"],
        repoUrl: "https://github.com",
        demoUrl: "https://example.com",
      },
      {
        id: "tool-2",
        title: "Color Palette Gen",
        description:
          "Generate accessible color palettes using AI based on your brand requirements.",
        imageUrl: "assets/tool-color.jpg",
        technologies: ["React", "Tailwind", "OpenAI"],
        repoUrl: "https://github.com",
        demoUrl: "https://example.com",
      },
      {
        id: "tool-3",
        title: "Markdown Preview",
        description:
          "Real-time markdown previewer with GFM support and custom export options.",
        imageUrl: "assets/tool-markdown.jpg",
        technologies: ["React", "Remark", "Vite"],
        repoUrl: "https://github.com",
      },
    ],
  },
  projects: {
    sectionNumber: "04.",
    title: "Some Things I've Built",
    items: [
      {
        id: "proj-easychef",
        title: "EasyChef (AI-Powered Recipe Generator)",
        description:
          "Developed an AI recipe generator (Python, Flask, TensorFlow, Hugging Face) processing user input via a web UI; explored efficient model deployment considerations for responsive user-facing applications.",
        imageUrl: "assets/projects/easyChef.jpg",
        technologies: ["Python", "Flask", "TensorFlow", "Hugging Face"],
        // repoUrl: "https://github.com/dustin-nguyen",
      },
      {
        id: "proj-n8n-ollama",
        title: "AI-Powered Automation with n8n + Ollama",
        description:
          "Built AI-powered automation workflows using n8n and Ollama to streamline tasks, integrate multiple services, and create smarter, self-learning processes that save time and reduce manual effort.",
        imageUrl: "assets/projects/n8n_ollama.jpg",
        technologies: [
          "n8n",
          "Ollama",
          "JavaScript",
          "Node.js",
          "API Integration",
        ],
        //  repoUrl: "https://github.com/dustin-nguyen",
      },
      {
        id: "proj-parking-system",
        title:
          "Blockchain and Docker Assisted Secure Automated Parking Garage System",
        description:
          "Developed a secure parking system with license plate recognition, combination parking, and blockchain for transactional integrity using MERN stack, Python, and SQLite.",
        imageUrl: "assets/projects/blockchain_parking.png",
        technologies: ["MERN", "Python", "SQLite", "Docker", "Blockchain"],
        repoUrl: "https://github.com/minhluanlqd/Software_Project_G4",
      },
      {
        id: "proj-movie",
        title: "Movie Recommendation System",
        description:
          "Built a scalable movie recommendation system (PySpark, Hadoop, Flask/CherryPy), handling large media metadata sets and focusing on efficient data processing for timely, personalized recommendations.",
        imageUrl: "assets/projects/movie_rec_sys.png",
        technologies: ["PySpark", "Hadoop", "Flask"],
        repoUrl: "https://github.com/dustin-nguyen",
      },
      {
        id: "proj-mast",
        title: "Mobile Application for Speech Therapy",
        description:
          "Created a mobile app using Flutter, Firebase, and ASR/NLP to provide virtual classrooms for teaching kids correct word pronunciation.",
        imageUrl: "assets/project-mast.jpg",
        technologies: ["Flutter", "Firebase", "ASR", "NLP"],
        repoUrl: "https://github.com/dustin-nguyen/MAST",
      },
      {
        id: "proj-learning-gate",
        title: "Learning Gate",
        description:
          "A web-based learning platform for students to access tutorials, courses, and track progress in a structured learning environment.",
        imageUrl: "assets/project-learning-gate.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Firebase"],
        repoUrl: "https://github.com/dustin-nguyen/Learning-Gate",
      },
      {
        id: "proj-buyme",
        title: "BuyMe",
        description:
          "Fabricated an eBay-style platform where users can sell products, purchase items, or join auctions. Built with HTML, CSS, JDBC, and SQL.",
        imageUrl: "assets/project-buyme.jpg",
        technologies: ["HTML", "CSS", "JDBC", "SQL"],
        repoUrl: "https://github.com/dustin-nguyen/Buyme",
      },
    ],
  },

  skills: {
    sectionNumber: "05.",
    title: "Technical Skills",
    categories: [
      {
        name: "Languages",
        skills: ["Kotlin", "Java", "Python", "SQL", "JavaScript", "C++", "C"],
      },
      {
        name: "Frameworks",
        skills: ["Android", "Spring", "Quarkus", "TensorFlow", "R2"],
      },
      {
        name: "Tools",
        skills: ["AWS", "Git", "Docker", "Jenkins", "GraphQL"],
      },
      {
        name: "Other",
        skills: [
          "Clean Architecture",
          "CI/CD",
          "Testing",
          "System Design",
          "LLM",
        ],
      },
    ],
  },

  contact: {
    sectionNumber: "06.",
    subtitle: "What's Next?",
    title: "Get In Touch",
    description:
      "I am currently looking for new opportunities. Whether you have a question, a job offer, or just want to say hi, my inbox is always open.",
    buttonText: "Say Hello",
    email: "ducnrg@gmail.com",
    popupMessage:
      "Psst… want to say hi? Drop me an email and I’ll respond faster than a coffee kick! ☕🚀 ",
    footerText:
      "Built with React, TypeScript & Tailwind. Designed & Built by Duc Nguyen",
  },
};
