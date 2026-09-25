import { motion } from "framer-motion";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaCode,
  FaMobileAlt,
  FaChartBar,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import { services } from "../../data/services";

const iconMap: Record<string, React.ReactNode> = {
  code: <FaCode />,
  react: <FaReact />,
  server: <FaServer />,
  api: <FaCode />,
  database: <FaDatabase />,
  chart: <FaChartBar />,
  mobile: <FaMobileAlt />,
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
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
          {/* Label */}
          <motion.div
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
              duration: 0.5,
            }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Services
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            What I{" "}
            <span className="text-cyan-400">
              Can Build
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            I create modern, responsive and scalable web
            applications with a strong focus on performance,
            usability and clean architecture.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const icon =
              iconMap[service.icon] || <FaCode />;

            return (
              <motion.article
                key={service.title}
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-blue-500/0 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 group-hover:border-cyan-400/30 group-hover:bg-white/[0.05]">

                  {/* Top Row */}
                  <div className="flex items-start justify-between">
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        rotate: 5,
                        scale: 1.1,
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-400 transition duration-300"
                    >
                      {icon}
                    </motion.div>

                    {/* Number */}
                    <span className="font-mono text-sm font-semibold text-slate-700 transition group-hover:text-cyan-400/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 text-xl font-bold text-white transition group-hover:text-cyan-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  {/* Feature */}
                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-400">
                    <FaCheckCircle className="text-cyan-400" />

                    <span>
                      Modern & scalable solution
                    </span>
                  </div>

                  {/* Bottom */}
                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">

                    {/* Progress Line */}
                    <div className="h-px w-12 bg-cyan-400/40 transition-all duration-500 group-hover:w-20 group-hover:bg-cyan-400" />

                    {/* Arrow */}
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-500 transition duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-400">
                      <FaArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
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
          className="mt-14 rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.03] p-8 text-center"
        >
          <p className="text-sm text-slate-400">
            Have an idea or project in mind?
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            Let's build something{" "}
            <span className="text-cyan-400">
              amazing
            </span>{" "}
            together.
          </h3>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Start a Conversation

            <FaArrowRight
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;