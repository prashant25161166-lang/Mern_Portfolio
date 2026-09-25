import dotenv from "dotenv";
import mongoose from "mongoose";

import Project from "../src/models/Project.js";
import { connectDB } from "../src/config/db.js";

dotenv.config();

const projects = [
  {
    title: "FleetDash",
    slug: "fleetdash",
    description:
      "A modern fleet management system for monitoring vehicles, drivers, trips, analytics, reports, alerts, and live fleet activity from a centralized dashboard.",

    image: "/images/fleetdash.webp",

    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "TypeScript",
      "Node.js",
      "Redux Toolkit",
      "Axios",
      "Socket.io",
      "Leaflet",
      "Tailwind CSS",
    ],

    features: [
      "Dashboard Analytics",
      "Vehicle Management",
      "Driver Management",
      "Live Tracking",
      "Reports",
      "Alerts",
      "Fleet Analytics",
      "Map Integration",
    ],

    liveDemo: "https://fleetdash-frontend.onrender.com/",
    github:
      "https://github.com/AbhayTYagi9012543171/FleetDash-frontend",

    category: "MERN Stack",
    featured: true,
  },

  {
    title: "SyncDoc",
    slug: "syncdoc",
    description:
      "A real-time collaborative document platform that allows multiple users to work together on documents with synchronization, authentication, version history, and document export.",

    image: "/images/syncdoc.webp",

    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "TypeScript",
      "Node.js",
      "Socket.io",
      "Yjs",
      "CRDT",
      "JWT",
      "Mongoose",
    ],

    features: [
      "Real-time Collaboration",
      "Document Versioning",
      "Authentication",
      "Socket.io Communication",
      "Yjs / CRDT",
      "PDF Export",
      "HTML Export",
      "Collaborative Editing",
    ],

    liveDemo: "#",
    github: "#",

    category: "MERN Stack",
    featured: true,
  },

  {
    title: "URL Shortener",
    slug: "url-shortener",
    description:
      "A full-stack URL shortening application that allows users to convert long URLs into short, shareable links with authentication and REST API integration.",

    image: "/images/url-shortener.webp",

    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "Axios",
      "REST API",
      "JWT",
    ],

    features: [
      "Short URL Generation",
      "User Authentication",
      "REST API",
      "URL Management",
      "Axios Integration",
      "MongoDB Storage",
    ],

    liveDemo: "#",
    github: "#",

    category: "Full Stack",
    featured: true,
  },
];

const seedProjects = async (): Promise<void> => {
  try {
    await connectDB();

    console.log("🌱 Starting project seed...");

    await Project.deleteMany({});

    console.log("🗑️ Existing projects removed.");

    const createdProjects = await Project.insertMany(
      projects
    );

    console.log(
      `✅ ${createdProjects.length} projects inserted successfully.`
    );

    createdProjects.forEach((project) => {
      console.log(`   • ${project.title}`);
    });

    await mongoose.connection.close();

    console.log("🔌 MongoDB connection closed.");
    process.exit(0);
  } catch (error) {
    console.error(
      "❌ Project seeding failed:",
      error
    );

    await mongoose.connection.close();

    process.exit(1);
  }
};

seedProjects();