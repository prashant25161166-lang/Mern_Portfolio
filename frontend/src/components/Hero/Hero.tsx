import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaServer,
  FaReact,
  FaNodeJs,
  FaChevronDown,
} from "react-icons/fa";

const Hero = () => {
  const techStack = [
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pt-28"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.06),transparent_35%)]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability Badge */}

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-400 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            Available for opportunities
          </motion.div>

          {/* Greeting */}

          <p className="mb-3 text-lg font-medium text-slate-400">
            Hello, I'm
          </p>

          {/* Name */}

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Prashant{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Sharma
            </span>
          </h1>

          {/* Role */}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold text-slate-300 sm:text-3xl">
              MERN Stack Developer
            </h2>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-semibold text-cyan-400">
              Full Stack
            </span>
          </div>

          {/* Description */}

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I build{" "}
            <span className="font-medium text-slate-200">
              modern, scalable and responsive
            </span>{" "}
            web applications using the MERN stack. I enjoy
            turning ideas into practical digital products with
            clean code, intuitive interfaces and reliable APIs.
          </p>

          {/* =====================================================
              TECH STACK
          ===================================================== */}

          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.7 + index * 0.08,
                }}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
              >
                {technology}
              </motion.span>
            ))}
          </div>

          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-500/30"
            >
              View Projects

              <FaArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <FaDownload />

              Download Resume
            </a>
          </div>

          {/* =====================================================
              SOCIAL LINKS
          ===================================================== */}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/
prashant25161166-lang"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-400"
            >
              <FaGithub
                size={20}
                className="transition-transform group-hover:scale-110"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/prashant sharma-408166384/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-400"
            >
              <FaLinkedin
                size={20}
                className="transition-transform group-hover:scale-110"
              />
            </a>

            <div className="hidden h-8 w-px bg-white/10 sm:block" />

            <p className="text-sm text-slate-500">
              Open to internships, freelance & full-time roles
            </p>
          </div>

          {/* =====================================================
              STATS
          ===================================================== */}

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-5 border-t border-white/10 pt-6">
            <div>
              <p className="text-2xl font-bold text-white">
                MERN
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Full Stack
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">
                REST
              </p>

              <p className="mt-1 text-xs text-slate-500">
                API Development
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">
                TS
              </p>

              <p className="mt-1 text-xs text-slate-500">
                TypeScript
              </p>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            RIGHT CODE EDITOR
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-lg">
            {/* Main glow */}

            <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-3xl" />

            {/* Editor */}

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/50 backdrop-blur-xl">
              {/* Header */}

              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />

                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />

                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <span className="text-xs text-slate-500">
                  developer.tsx
                </span>
              </div>

              {/* Code */}

              <div className="overflow-x-auto font-mono text-sm leading-8 sm:text-base">
                <p>
                  <span className="text-purple-400">
                    const
                  </span>{" "}
                  <span className="text-cyan-400">
                    developer
                  </span>{" "}
                  = {"{"}
                </p>

                <p className="pl-6">
                  <span className="text-blue-400">
                    name
                  </span>
                  :{" "}
                  <span className="text-green-400">
                    "Prashant Sharma"
                  </span>
                  ,
                </p>

                <p className="pl-6">
                  <span className="text-blue-400">
                    role
                  </span>
                  :{" "}
                  <span className="text-green-400">
                    "MERN Developer"
                  </span>
                  ,
                </p>

                <p className="pl-6">
                  <span className="text-blue-400">
                    experience
                  </span>
                  :{" "}
                  <span className="text-orange-300">
                    "Full Stack"
                  </span>
                  ,
                </p>

                <p className="pl-6">
                  <span className="text-blue-400">
                    stack
                  </span>
                  : [
                </p>

                <p className="pl-12 text-orange-300">
                  "React",
                </p>

                <p className="pl-12 text-orange-300">
                  "Node.js",
                </p>

                <p className="pl-12 text-orange-300">
                  "Express.js",
                </p>

                <p className="pl-12 text-orange-300">
                  "MongoDB",
                </p>

                <p className="pl-6">
                  ],
                </p>

                <p className="pl-6">
                  <span className="text-blue-400">
                    focus
                  </span>
                  :{" "}
                  <span className="text-green-400">
                    "Building great products"
                  </span>
                </p>

                <p>
                  {"}"};
                </p>

                <p className="mt-4">
                  <span className="text-purple-400">
                    console
                  </span>
                  .
                  <span className="text-cyan-400">
                    log
                  </span>
                  (
                  <span className="text-green-400">
                    "Let's build something amazing!"
                  </span>
                  );
                </p>
              </div>

              {/* Bottom status */}

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                  <span className="text-xs text-slate-400">
                    Available for work
                  </span>
                </div>

                <span className="text-xs text-slate-600">
                  v1.0.0
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              FLOATING TECH ICONS
          ===================================================== */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -left-5 top-20 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur-xl sm:block"
          >
            <FaReact
              className="text-cyan-400"
              size={28}
            />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.5,
            }}
            className="absolute -right-5 bottom-24 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur-xl sm:block"
          >
            <FaDatabase
              className="text-green-400"
              size={25}
            />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1,
            }}
            className="absolute -right-3 top-10 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur-xl sm:block"
          >
            <FaServer
              className="text-purple-400"
              size={25}
            />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 8, 0],
              rotate: [0, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1.5,
            }}
            className="absolute bottom-8 left-8 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur-xl sm:block"
          >
            <FaCode
              className="text-blue-400"
              size={24}
            />
          </motion.div>

          {/* Node badge */}

          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 0.8,
            }}
            className="absolute -bottom-5 right-20 hidden rounded-xl border border-white/10 bg-slate-900/90 p-3 shadow-xl backdrop-blur-xl sm:block"
          >
            <FaNodeJs
              className="text-green-500"
              size={22}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-cyan-400 sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <FaChevronDown size={12} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;