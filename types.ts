
export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  logoUrl?: string; // Added logo support
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  location: string;
  description: string[];
  logoUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface NavItem {
  name: string;
  href: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  tagline: string;
  description: string;
  resumeUrl: string;
  ctaText: string;
  heroImageUrl?: string; // Added hero image support
}

export interface AboutData {
  sectionNumber: string;
  title: string;
  paragraphs: string[];
  profileImageUrl: string;
  recentTechnologies: string[];
}

export interface ExperienceData {
  sectionNumber: string;
  title: string;
  jobs: ExperienceItem[];
}

export interface EducationData {
  sectionNumber: string;
  title: string;
  items: EducationItem[];
}

export interface ProjectsData {
  sectionNumber: string;
  title: string;
  items: ProjectItem[];
}

export interface SkillsData {
  sectionNumber: string;
  title: string;
  categories: SkillCategory[];
}

export interface ContactData {
  sectionNumber: string;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  email: string;
  footerText: string;
  popupMessage: string;
}

export interface ProfileData {
  socials: SocialLink[];
  navLinks: NavItem[];
  hero: HeroData;
  about: AboutData;
  experience: ExperienceData;
  education: EducationData; // Added education section
  projects: ProjectsData;
  skills: SkillsData;
  contact: ContactData;
}