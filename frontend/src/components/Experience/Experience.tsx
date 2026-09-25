import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaCircle,
} from "react-icons/fa";

import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            <FaBriefcase />
            Experience
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            My Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Experience gained through internships, practical
            development, teamwork and building real-world
            full-stack applications.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <div className="relative">

          {/* Desktop timeline */}
          <div className="absolute bottom-0 left-[31px] top-0 hidden w-px bg-gradient-to-b from-cyan-400 via-blue-500/40 to-transparent md:block" />

          <div className="space-y-12">

            {experience.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.company}`}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="relative md:pl-20"
              >

                {/* ================= TIMELINE NODE ================= */}
                <div className="absolute left-0 top-8 hidden md:flex">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.12 + 0.2,
                    }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 shadow-lg shadow-cyan-500/10"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                      <FaBriefcase size={17} />
                    </div>

                    {/* Pulse */}
                    <span className="absolute inset-0 animate-ping rounded-full border border-cyan-400/20" />
                  </motion.div>
                </div>

                {/* ================= EXPERIENCE CARD ================= */}
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
                >

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/5 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />

                  {/* Top gradient */}
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* ================= CARD HEADER ================= */}
                  <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                    <div className="flex-1">

                      {/* Experience number */}
                      <div className="mb-4 flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-cyan-400/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px w-8 bg-cyan-400/30" />

                        {/* Duration */}
                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300">
                          <FaCalendarAlt />
                          {item.duration}
                        </span>
                      </div>

                      {/* Role */}
                      <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-300 sm:text-3xl">
                        {item.role}
                      </h3>

                      {/* Company */}
                      <p className="mt-2 text-lg font-semibold text-cyan-400">
                        {item.company}
                      </p>

                      {/* Location */}
                      <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                        <FaMapMarkerAlt className="text-cyan-400/70" />
                        {item.location}
                      </p>
                    </div>

                    {/* Icon */}
                    <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-400 transition duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 lg:flex">
                      <FaBriefcase size={22} />
                    </div>
                  </div>

                  {/* ================= DESCRIPTION ================= */}
                  <div className="relative mt-7 border-t border-white/10 pt-7">
                    <p className="max-w-4xl text-sm leading-8 text-slate-400 sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* ================= RESPONSIBILITIES ================= */}
                  <div className="relative mt-8">

                    <div className="mb-5 flex items-center gap-3">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">
                        Responsibilities
                      </h4>

                      <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">

                      {item.responsibilities.map(
                        (responsibility, responsibilityIndex) => (
                          <motion.div
                            key={responsibility}
                            initial={{
                              opacity: 0,
                              x: -10,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.35,
                              delay:
                                index * 0.1 +
                                responsibilityIndex * 0.05,
                            }}
                            className="group/item flex gap-3 text-sm leading-7 text-slate-400"
                          >
                            <FaCheckCircle className="mt-1.5 shrink-0 text-cyan-400 transition group-hover/item:scale-110" />

                            <span className="transition group-hover/item:text-slate-200">
                              {responsibility}
                            </span>
                          </motion.div>
                        )
                      )}

                    </div>
                  </div>

                  {/* ================= TECHNOLOGIES ================= */}
                  <div className="relative mt-8">

                    <div className="mb-5 flex items-center gap-3">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">
                        Technologies
                      </h4>

                      <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <div className="flex flex-wrap gap-2">

                      {item.technologies.map(
                        (technology, technologyIndex) => (
                          <motion.span
                            key={technology}
                            initial={{
                              opacity: 0,
                              scale: 0.9,
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.3,
                              delay:
                                technologyIndex * 0.04,
                            }}
                            whileHover={{
                              y: -2,
                            }}
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                          >
                            <FaCircle
                              size={5}
                              className="text-cyan-400"
                            />

                            {technology}
                          </motion.span>
                        )
                      )}

                    </div>
                  </div>

                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            delay: 0.2,
          }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate-500">
            Interested in working together?
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            Let's Connect
            <FaExternalLinkAlt size={13} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;