export interface Project {
  id: string;
  title: string;
  blog: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  imageUrl?: string;
  screenshots?: Screenshot[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Screenshot {
  url: string;
  caption?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
