import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUniversity,
  FaAward,
  FaBookOpen,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import { education } from "../../data/education";

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

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
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            <FaGraduationCap />
            Education
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My Academic{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My academic background has helped me develop
            a strong foundation in computer applications,
            programming and software development.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative">

          {/* Desktop Timeline */}

          <div className="absolute bottom-10 left-8 top-10 hidden w-px bg-gradient-to-b from-cyan-400 via-blue-500/50 to-transparent lg:block" />

          <div className="space-y-8">

            {education.map((item, index) => (
              <motion.div
                key={`${item.degree}-${item.institution}`}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative lg:pl-20"
              >

                {/* Timeline Icon */}

                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + 0.2,
                  }}
                  className="absolute left-0 top-8 hidden lg:flex"
                >
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 text-cyan-400 shadow-lg shadow-cyan-500/10">
                    <FaGraduationCap size={23} />

                    <span className="absolute inset-0 animate-ping rounded-full border border-cyan-400/10" />
                  </div>
                </motion.div>

                {/* Education Card */}

                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8"
                >

                  {/* Card Glow */}

                  <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

                  {/* Top */}

                  <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                    <div>

                      {/* Current Badge */}

                      {index === 0 && (
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                          Currently Pursuing
                        </div>
                      )}

                      {/* Degree */}

                      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {item.degree}
                      </h3>

                      {/* Institution */}

                      <p className="mt-3 flex items-center gap-2 font-medium text-cyan-400">
                        <FaUniversity />

                        {item.institution}
                      </p>

                      {/* Duration */}

                      <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                        <FaCalendarAlt />

                        {item.duration}
                      </p>

                    </div>

                    {/* Result */}

                    {item.result && (
                      <div className="flex w-fit items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-sm font-semibold text-cyan-300">
                        <FaAward />

                        {item.result}
                      </div>
                    )}

                  </div>

                  {/* Description */}

                  <div className="relative mt-7 border-t border-white/10 pt-6">

                    <p className="max-w-4xl text-sm leading-8 text-slate-400">
                      {item.description}
                    </p>

                  </div>

                  {/* Learning Areas */}

                  <div className="relative mt-6 flex flex-wrap gap-2">

                    <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 text-xs text-slate-400">
                      <FaCheckCircle className="text-cyan-400" />
                      Programming
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 text-xs text-slate-400">
                      <FaCheckCircle className="text-cyan-400" />
                      Computer Science
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 text-xs text-slate-400">
                      <FaCheckCircle className="text-cyan-400" />
                      Software Development
                    </span>

                  </div>

                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* ================= EDUCATION SUMMARY ================= */}

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
          className="mt-10 grid gap-5 md:grid-cols-3"
        >

          {/* Card 1 */}

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30">

            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
              <FaBookOpen />
            </div>

            <h4 className="text-lg font-semibold text-white">
              Strong Foundation
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Building a strong foundation in programming,
              databases and software development.
            </p>

          </div>

          {/* Card 2 */}

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30">

            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
              <FaGraduationCap />
            </div>

            <h4 className="text-lg font-semibold text-white">
              Continuous Learning
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Continuously learning modern technologies and
              improving practical development skills.
            </p>

          </div>

          {/* Card 3 */}

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30">

            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-400/10 text-purple-400">
              <FaAward />
            </div>

            <h4 className="text-lg font-semibold text-white">
              Practical Development
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Applying academic concepts through real-world
              MERN stack projects and applications.
            </p>

          </div>

        </motion.div>

        {/* ================= CTA ================= */}

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
          }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.03] p-7 text-center sm:flex-row sm:text-left"
        >

          <div>
            <p className="text-sm font-semibold text-cyan-400">
              Always Learning
            </p>

            <h3 className="mt-1 text-xl font-bold text-white">
              Education is just the beginning.
            </h3>
          </div>

          <a
            href="#skills"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
          >
            Explore My Skills

            <FaArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Education;