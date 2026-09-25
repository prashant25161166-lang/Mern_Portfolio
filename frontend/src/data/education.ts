export interface Education {
  degree: string;
  institution: string;
  duration: string;
  result?: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "KIET Deemed to be University",
    duration: "2025 - 2027",
    description:
      "Pursuing MCA with focus on advanced computer applications, software development and modern technologies.",
  },

  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "IMR College, CCS University",
    duration: "2022 - 2025",
    result: "Completed",
    description:
      "Completed undergraduate studies in computer applications with focus on programming, databases and web development.",
  },

  {
    degree: "Class 12 - CBSE",
    institution: "Tulsi Ram Maheshwari Public School",
    duration: "2021",
    result: "Passed",
    description:
      "Completed senior secondary education under the CBSE curriculum.",
  },

  {
    degree: "Class 10 - CBSE",
    institution: "Tulsi Ram Maheshwari Public School",
    duration: "2019",
    result: "Passed",
    description:
      "Completed secondary education under the CBSE curriculum.",
  },
];