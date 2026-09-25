export interface Project {
  _id?: string;
  slug: string;

  title: string;
  description: string;

  image: string;
  category: string;

  technologies: string[];
  features: string[];

  github?: string;
  liveDemo?: string;

  featured?: boolean;

  createdAt?: string;
  updatedAt?: string;
}