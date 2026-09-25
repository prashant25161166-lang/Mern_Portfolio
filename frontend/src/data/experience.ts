export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    role: "MERN Stack Developer Intern",
    company: "Internship / Training Project",
    duration: "2026",
    location: "Remote",
    description:
      "Worked on full-stack web application development using the MERN stack, with focus on responsive interfaces, REST APIs, database integration and real-world application features.",
    responsibilities: [
      "Developed responsive React and TypeScript interfaces.",
      "Built and integrated RESTful APIs using Node.js and Express.js.",
      "Designed MongoDB schemas and implemented database operations.",
      "Integrated Axios for frontend-backend communication.",
      "Implemented application features using Redux Toolkit.",
      "Worked with authentication and API error handling.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Axios",
    ],
  },

  {
    role: "Full Stack Project Developer",
    company: "FleetDash",
    duration: "2026",
    location: "Project",
    description:
      "Developed a fleet management dashboard for monitoring vehicles, drivers, analytics, reports and live fleet activity.",
    responsibilities: [
      "Built dashboard interfaces using React and TypeScript.",
      "Implemented vehicle and driver management modules.",
      "Integrated REST APIs with Axios.",
      "Implemented Redux Toolkit for application state management.",
      "Integrated Socket.io for real-time functionality.",
      "Implemented map-based live tracking using Leaflet.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Socket.io",
      "Leaflet",
    ],
  },
];