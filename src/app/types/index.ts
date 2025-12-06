import { StaticImageData } from "next/image";

// Project type
export interface Project {
  title: string;
  image: string | StaticImageData; // supports string URL or imported image
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
}

// Blog type
export interface Blog {
  title: string;
  image?: string | StaticImageData; // optional for blogs without images
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}
