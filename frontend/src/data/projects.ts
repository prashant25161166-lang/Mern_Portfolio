import type { Project } from "../types/project";

export const fallbackProjects: Project[] = [
  {
    _id: "fleetdash",
    slug: "fleetdash",
    title: "FleetDash",
    description:
      "A full-stack fleet management platform for monitoring vehicles, drivers, trips, analytics and real-time tracking.",
    category: "MERN Stack",
    image: "/projects/fleetdash.webp",

    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Socket.io",
      "Tailwind CSS",
    ],

    features: [
      "Fleet Dashboard",
      "Vehicle Management",
      "Driver Management",
      "Live Tracking",
      "Analytics",
      "Alerts",
    ],

    liveDemo: "#",
    github: "#",
    featured: true,
  },

  {
    _id: "portfolio",
    slug: "mern-portfolio",
    title: "MERN Portfolio",
    description:
      "A modern developer portfolio built with React, TypeScript, Tailwind CSS and Node.js.",
    category: "Frontend",
    image: "/projects/portfolio.webp",

    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
    ],

    features: [
      "Responsive Design",
      "Dark Mode",
      "Animations",
      "Project Showcase",
      "Contact Section",
    ],

    liveDemo: "#",
    github: "#",
    featured: true,
  },

  {
    _id: "url-shortener",
    slug: "url-shortener",
    title: "URL Shortener",
    description:
      "A full-stack URL shortening application that generates short links and provides an easy way to manage shortened URLs.",
    category: "MERN Stack",
    image: "/projects/url-shortener.webp",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "Tailwind CSS",
    ],

    features: [
      "URL Shortening",
      "Custom Short Links",
      "Copy URL",
      "REST API",
      "MongoDB Storage",
    ],

    liveDemo: "#",
    github: "#",
    featured: true,
  },
];