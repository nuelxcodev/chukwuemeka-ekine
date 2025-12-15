import React from 'react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  type: 'Web' | 'Mobile' | 'Desktop';
  image?: string;
  role: string;
  year: string;
  features: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  details: string[];
}

export interface Skill {
  name: string;
  icon: string; // SimpleIcons slug or Lucide icon name
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}