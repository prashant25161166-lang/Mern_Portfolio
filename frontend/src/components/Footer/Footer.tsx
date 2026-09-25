import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaDownload,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        {/* ================= MAIN FOOTER ================= */}

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
            duration: 0.6,
          }}
          className="grid gap-12 lg:grid-cols-4"
        >

          {/* ================= BRAND ================= */}

          <div className="lg:col-span-1">

            <a
              href="#home"
              className="group inline-flex items-center gap-1 text-2xl font-bold"
            >
              <span className="text-white">
                MERN
              </span>

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              MERN Stack Developer focused on building
              modern, responsive and scalable web
              applications with clean and maintainable
              code.
            </p>

            {/* Availability */}

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Available for opportunities
            </div>

            {/* Social */}

            <div className="mt-7 flex gap-3">

              <motion.a
                whileHover={{
                  y: -4,
                }}
                href="https://github.com/Prashant Sharma 7417720228"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400"
              >
                <FaGithub size={18} />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -4,
                }}
                href="https://www.linkedin.com/in/prashant-sharma-480166384/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400"
              >
                <FaLinkedin size={18} />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -4,
                }}
                href="#contact"
                aria-label="Contact"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400"
              >
                <FaEnvelope size={17} />
              </motion.a>

            </div>
          </div>

          {/* ================= NAVIGATION ================= */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Navigation
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-700 transition group-hover:bg-cyan-400" />

                  {item.name}
                </a>
              ))}

            </div>
          </div>

          {/* ================= TECHNOLOGIES ================= */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Tech Stack
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Technologies I use to build modern
              full-stack applications.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>

          {/* ================= CTA ================= */}

          <div>

            <div className="flex items-center gap-2">
              <FaCode className="text-cyan-400" />

              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Let's Connect
              </h3>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Have a project, internship opportunity or
              idea? Let's build something meaningful
              together.
            </p>

            <div className="mt-6 flex flex-col gap-3">

              {/* Contact */}

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <FaEnvelope />

                Contact Me
              </a>

              {/* Resume */}

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                <FaDownload />

                Download Resume
              </a>

            </div>

          </div>

        </motion.div>

        {/* ================= DIVIDER ================= */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ================= BOTTOM ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >

          {/* Copyright */}

          <div>
            <p className="text-sm text-slate-500">
              © {currentYear}{" "}
              <span className="text-slate-300">
                Prashant Sharma
              </span>
              . All rights reserved.
            </p>

            <p className="mt-1 text-xs text-slate-600">
              Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>

          {/* Back to top */}

          <motion.a
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="#home"
            aria-label="Back to top"
            className="group flex h-11 w-11 items-center justify-center self-start rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400 sm:self-auto"
          >
            <FaArrowUp className="transition-transform group-hover:-translate-y-1" />
          </motion.a>

        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;