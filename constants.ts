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
      "I build Android marketplace features at Walmart Global Tech. Earlier, I worked on backend services, data migration, and automation at BMW of North America.",
    resumeUrl: "assets/Duc-Resume.pdf",
    ctaText: "View My Work",
    heroImageUrl: "assets/hero-profile.jpg",
  },

  about: {
    sectionNumber: "01.",
    title: "About Me",
    paragraphs: [
      "I build Android marketplace features at Walmart Global Tech with Kotlin, Java, and GraphQL. My work includes seller discovery, fulfillment options, and product details across multiple pages.",
      "I also work on app stability and the tools that help teams ship. I use Android Profiler and LeakCanary to find memory and lifecycle issues, and I cut about 45 minutes from each YAML UI automation CI job by sharding and trimming tests.",
      "Before Walmart, I worked on backend services, database migration, automation, and monitoring at BMW of North America. I have a master's degree in software engineering from Rutgers University.",
      "Tools I use:",
    ],
    profileImageUrl: "assets/about-profile.jpg",
    recentTechnologies: [
      "Kotlin",
      "Android",
      "Java",
      "GraphQL",
      "MVVM",
      "Gradle",
      "JUnit",
      "LeakCanary",
      "Jenkins",
    ],
  },

  experience: {
    sectionNumber: "02.",
    title: "Experience",
    jobs: [
      {
        id: "exp-walmart",
        company: "Walmart Global Tech",
        role: "Android Developer",
        period: "Dec 2023 to present",
        description: [
          "Build Walmart marketplace features in Kotlin, Java, and GraphQL with product and UX partners.",
          "Built the LocalFinds seller carousel and grid with delivery and pickup estimates and category tags. The components are reused across three pages.",
          "Created a LocalFinds landing-page banner with category navigation, promotions, and an FAQ. Four pages reuse it.",
          "Implemented LocalFinds fulfillment selection for shipping, pickup, and delivery, including fees, seller details, and return eligibility.",
          "Added Walmart Resold condition and seller-rating details to product pages, plus a condition-details sheet. Also built a search savings checkbox that applies claimed discounts in the cart.",
          "Build reusable UI components for a plugin-based, registry-driven server-driven UI, using MVVM and multi-module Gradle.",
          "Use Android Profiler and LeakCanary to fix memory leaks, image loading, and lifecycle issues. Chunk-load large bottom sheets to prevent crashes while backend pagination is unavailable.",
          "Stabilized flaky YAML UI tests and cut about 45 minutes from each CI job through sharding and test trimming. Work with JUnit, Sauce Labs, and Jenkins.",
          "Partner with UX designers, review code, and mentor about three Android engineers, including rotating team members and contractors.",
        ],
        technologies: [
          "Kotlin",
          "Android",
          "GraphQL",
          "MVVM",
          "Multi-module Gradle",
          "JUnit",
          "YAML UI automation",
          "Sauce Labs",
          "Jenkins CI",
          "Android Profiler",
          "LeakCanary",
        ],
        logoUrl: "assets/walmart-logo.svg",
        screenshots: [
          "assets/walmart/pickup_exp.png",
          "assets/walmart/all_seller_grid.png",
          "assets/walmart/extra_saving_search.png",
          "assets/walmart/lmp_banner.png",
          "assets/walmart/lmp_faq.png",
          "assets/walmart/other_condition_bottomsheet.png",
          "assets/walmart/seller_carouselv2.png",
          "assets/walmart/topHighLight.png",
        ],
      },
      {
        id: "exp-bmw",
        company: "BMW of North America LLC",
        role: "Software Developer Intern",
        period: "Sep 2022 to Mar 2023",
        description: [
          "Migrated AWS Lambda services for dealer warranty claims from Spring MVC to Quarkus, reducing cold starts by 50%.",
          "Migrated a mainframe DB2 database to Oracle SQL and Salesforce. The change saved $50,000 in annual API costs and improved data access.",
          "Optimized a UiPath bot to save $500,000 in annual labor costs. Built an Angular and Spring MVC monitor for Lambda status and run time, and added Jenkins CI/CD and test coverage reporting.",
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
        description: [],
        logoUrl: "assets/rutgers-logo.png",
      },
      {
        id: "edu-bs",
        school: "Rutgers University",
        degree: "Bachelor of Science in Computer Engineering",
        period: "May 2021",
        location: "New Brunswick, NJ",
        description: [],
        logoUrl: "assets/rutgers-logo.png",
      },
    ],
  },
  tools: {
    sectionNumber: "04.",
    title: "A tool I built",
    items: [
      {
        id: "tool-1",
        title: "Bank Statement AI Converter",
        description:
          "Upload a bank statement PDF and convert its transactions into a formatted Excel spreadsheet. Built with React, TypeScript, and Gemini.",
        imageUrl: "assets/tools/bank_AI_converter.png",
        technologies: ["gemini-2.5-flash", "React", "TypeScript", "Vite", "Tailwind CSS"],
        repoUrl: "https://github.com/dustin-nguyen/bank-statement-to-excel-AI",
        demoUrl: "https://dustin-nguyen.github.io/bank-statement-to-excel-AI/",
      },
    ],
  },
  projects: {
    sectionNumber: "05.",
    title: "Selected projects",
    items: [
      {
        id: "proj-easychef",
        title: "EasyChef recipe generator",
        description:
          "Built a web app that generates recipes from user input. Used Python, Flask, TensorFlow, and Hugging Face to explore model deployment for a responsive interface.",
        imageUrl: "assets/projects/easyChef.jpg",
        technologies: ["Python", "Flask", "TensorFlow", "Hugging Face"],
        // repoUrl: "https://github.com/dustin-nguyen",
      },
      {
        id: "proj-movie",
        title: "Movie Recommendation System",
        description:
          "Built a movie recommendation system that processes large media metadata sets with PySpark, Hadoop, Flask, and CherryPy.",
        imageUrl: "assets/projects/movie_rec_sys.png",
        technologies: ["PySpark", "Hadoop", "Flask"],
        repoUrl: "https://github.com/dustin-nguyen",
      },
    ],
  },

  skills: {
    sectionNumber: "06.",
    title: "Technical Skills",
    categories: [
      {
        name: "Languages",
        skills: ["Kotlin", "Java", "Python", "JavaScript", "C++", "C", "Scala", "R"],
      },
      {
        name: "Mobile and architecture",
        skills: ["Android SDK", "XML layouts", "Coroutines", "MVVM", "Multi-module Gradle", "Clean architecture", "Server-driven UI", "Plugin-based architecture", "Modularization"],
      },
      {
        name: "Backend and frontend",
        skills: ["Spring MVC", "Quarkus", "Node.js", "Flask", "GraphQL", "Apollo", "React", "Angular", "HTML", "CSS"],
      },
      {
        name: "Data, cloud, and testing",
        skills: [
          "MySQL", "MongoDB", "Firebase", "Oracle SQL", "DB2", "Hadoop", "PySpark", "TensorFlow", "Hugging Face", "AWS Lambda", "AWS S3", "Jenkins", "Git", "GitHub", "Linux", "JUnit 5", "YAML UI automation", "Sauce Labs", "Android Profiler", "LeakCanary",
        ],
      },
    ],
  },

  contact: {
    sectionNumber: "07.",
    subtitle: "Get in touch",
    title: "Get In Touch",
    description:
      "I'm open to conversations about Android development, marketplace features, app stability, and engineering teams.",
    buttonText: "Say Hello",
    email: "ducnrg@gmail.com",
    popupMessage: "Email Duc Nguyen",
    footerText: "Duc Nguyen | Software engineer",
  },
};
