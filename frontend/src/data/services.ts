export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "MERN Stack Development",
    description:
      "Full-stack web applications using MongoDB, Express.js, React and Node.js with scalable architecture.",
    icon: "code",
  },
  {
    title: "Frontend Development",
    description:
      "Modern responsive interfaces using React, TypeScript, Tailwind CSS and reusable component architecture.",
    icon: "react",
  },
  {
    title: "Backend Development",
    description:
      "Secure and scalable backend systems using Node.js, Express.js, MongoDB and RESTful APIs.",
    icon: "server",
  },
  {
    title: "REST API Development",
    description:
      "Well-structured REST APIs with validation, error handling, authentication and database integration.",
    icon: "api",
  },
  {
    title: "Database Design",
    description:
      "MongoDB database design using Mongoose schemas, relationships and efficient data management.",
    icon: "database",
  },
  {
    title: "Dashboard Development",
    description:
      "Interactive admin dashboards with analytics, charts, tables, filters and real-time data.",
    icon: "chart",
  },
  {
    title: "Responsive Web Development",
    description:
      "Mobile-first websites that provide a consistent experience across mobile, tablet and desktop.",
    icon: "mobile",
  },
];