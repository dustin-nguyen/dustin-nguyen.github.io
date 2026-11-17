
export interface SocialLink {
  platform: string;
  url: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  logoUrl?: string; // Added logo support
  screenshots?: string[]; // Added screenshots for carousel
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

export interface ToolItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
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
  resumeUrl: string;
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

export interface ToolsData {
  sectionNumber: string;
  title: string;
  items: ToolItem[];
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
  subtitle: string;
  email: string;
  footerText: string;
}

export interface ProfileData {
  socials: SocialLink[];
  navLinks: NavItem[];
  hero: HeroData;
  about: AboutData;
  experience: ExperienceData;
  education: EducationData; 
  tools: ToolsData; // Added tools section
  projects: ProjectsData;
  skills: SkillsData;
  contact: ContactData;
}
