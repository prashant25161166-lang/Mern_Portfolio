import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaServer,
  FaDatabase,
  FaBolt,
  FaLayerGroup,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiAxios,
  SiSocketdotio,
  SiHtml5,
  SiCss,
} from "react-icons/si";

import { skills } from "../../data/skills";

/* -------------------------------------------------------
   ICON MAP
------------------------------------------------------- */

const iconMap: Record<string, React.ReactNode> = {
  "React.js": <FaReact />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  Mongoose: <FaDatabase />,
  "Redux Toolkit": <SiRedux />,
  "Tailwind CSS": <SiTailwindcss />,
  "REST API": <FaServer />,
  Axios: <SiAxios />,
  "Socket.io": <SiSocketdotio />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss />,
};

/* -------------------------------------------------------
   TYPES
------------------------------------------------------- */

type FilterCategory = "All" | string;

/* -------------------------------------------------------
   COMPONENT
------------------------------------------------------- */

const Skills = () => {
  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>("All");

  /* -----------------------------------------------------
     CATEGORY LIST
  ----------------------------------------------------- */

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(skills.map((skill) => skill.category))
    );

    return ["All", ...uniqueCategories];
  }, []);

  /* -----------------------------------------------------
     FILTERED SKILLS
  ----------------------------------------------------- */

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") {
      return skills;
    }

    return skills.filter(
      (skill) => skill.category === activeCategory
    );
  }, [activeCategory]);

  /* -----------------------------------------------------
     TOP SKILLS
  ----------------------------------------------------- */

  const topSkills = useMemo(() => {
    return [...skills]
      .sort((a, b) => b.level - a.level)
      .slice(0, 4);
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* -------------------------------------------------
          BACKGROUND GLOW
      ------------------------------------------------- */}

      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* -------------------------------------------------
            HEADER
        ------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          {/* Label */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Technical Skills
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Technologies I{" "}
            <span className="text-cyan-400">
              Work With
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A practical technology stack focused on modern
            full-stack development, responsive interfaces,
            APIs and database-driven applications.
          </p>
        </motion.div>

        {/* -------------------------------------------------
            TOP SKILLS
        ------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-10"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-400">
              <FaBolt />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Core Technologies
              </h3>

              <p className="text-xs text-slate-500">
                Technologies I use most frequently
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-lg text-cyan-400 transition group-hover:scale-110">
                    {iconMap[skill.name] || <FaCode />}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">
                      {skill.name}
                    </p>

                    <p className="text-xs text-slate-500">
                      {skill.level}% proficiency
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* -------------------------------------------------
            CATEGORY FILTER
        ------------------------------------------------- */}

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const isActive =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`rounded-xl border px-4 py-2 text-sm font-medium transition duration-300 ${
                  isActive
                    ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-400/20 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* -------------------------------------------------
            SKILLS GRID
        ------------------------------------------------- */}

        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.03,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                {/* Top */}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">

                    {/* Icon */}

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400/15">
                      {iconMap[skill.name] || (
                        <FaCode />
                      )}
                    </div>

                    {/* Name */}

                    <div className="min-w-0">
                      <h3 className="truncate font-semibold text-white">
                        {skill.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {skill.category}
                      </p>
                    </div>
                  </div>

                  {/* Percentage */}

                  <span className="shrink-0 text-xs font-semibold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress */}

                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: index * 0.04,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  />
                </div>

                {/* Bottom */}

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-slate-600">
                    Skill level
                  </span>

                  <span className="text-[11px] text-slate-500">
                    {skill.level >= 90
                      ? "Advanced"
                      : skill.level >= 75
                      ? "Strong"
                      : skill.level >= 60
                      ? "Intermediate"
                      : "Learning"}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* -------------------------------------------------
            EMPTY STATE
        ------------------------------------------------- */}

        {filteredSkills.length === 0 && (
          <div className="py-16 text-center">
            <FaCode className="mx-auto text-3xl text-slate-600" />

            <p className="mt-4 text-slate-500">
              No skills found in this category.
            </p>
          </div>
        )}

        {/* -------------------------------------------------
            STACK SUMMARY
        ------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="p-8 sm:p-10">
              <div className="mb-6 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-cyan-400">
                <FaLayerGroup size={24} />
              </div>

              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Full-Stack{" "}
                <span className="text-cyan-400">
                  Development
                </span>
              </h3>

              <p className="mt-4 max-w-xl leading-8 text-slate-400">
                From responsive React interfaces to RESTful
                Express APIs, MongoDB data models and
                real-time Socket.io applications, I work
                across the complete development stack.
              </p>

              <a
                href="#projects"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View My Projects

                <FaCode />
              </a>
            </div>

            {/* Right */}

            <div className="border-t border-white/10 p-8 lg:border-l lg:border-t-0 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                My Stack
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Redux Toolkit",
                  "Tailwind CSS",
                  "REST APIs",
                  "Socket.io",
                  "Git",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Stats */}

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                <div>
                  <p className="text-2xl font-bold text-white">
                    {skills.length}+
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Technologies
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-white">
                    4
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Core Layers
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-white">
                    100%
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;