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

  featured: boolean;

  createdAt?: string;
  updatedAt?: string;
}

/* =========================================================
   GITHUB PROFILE
========================================================= */

export interface GithubProfile {
  username: string;
  name?: string;
  avatar: string;
  bio?: string;

  profileUrl: string;

  followers: number;
  following: number;
  publicRepositories: number;

  location?: string;
  company?: string;
}

/* =========================================================
   GITHUB REPOSITORY
========================================================= */

export interface GithubRepository {
  id: number;

  name: string;
  fullName?: string;

  url: string;

  description?: string | null;

  language?: string | null;

  stars: number;
  forks: number;

  watchers?: number;

  topics?: string[];

  fork?: boolean;

  createdAt?: string;
  updatedAt: string;
  pushedAt?: string;
}

/* =========================================================
   GITHUB DATA
========================================================= */

export interface GithubData {
  profile: GithubProfile;

  repositories: GithubRepository[];

  totalStars?: number;
  totalForks?: number;
  totalRepositories?: number;
}