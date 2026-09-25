import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaGraduationCap,
  FaRocket,
  FaDatabase,
  FaServer,
  FaReact,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description:
        "I write structured, reusable and maintainable code following modern development practices.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack",
      description:
        "I work across frontend and backend to build complete, scalable web applications.",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description:
        "I break complex requirements into practical, simple and reliable solutions.",
    },
    {
      icon: <FaRocket />,
      title: "Performance",
      description:
        "I focus on responsive interfaces, efficient APIs and smooth user experiences.",
    },
  ];

  const technologies = [
    "React.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux Toolkit",
    "Axios",
    "Socket.io",
    "Tailwind CSS",
    "Git",
    "REST API",
  ];

  const stats = [
    {
      value: "10+",
      label: "Technologies",
    },
    {
      value: "5+",
      label: "Projects",
    },
    {
      value: "MERN",
      label: "Primary Stack",
    },
    {
      value: "24/7",
      label: "Learning Mindset",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-900 px-6 py-24 sm:py-32"
    >
      {/* Background Effects */}

      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

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
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            About Me
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Turning Ideas Into{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Products
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I'm a passionate MERN Stack Developer focused on
            building modern, responsive and scalable web
            applications that solve real-world problems.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid items-stretch gap-8 lg:grid-cols-5">

          {/* ================= PROFILE CARD ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
              duration: 0.7,
            }}
            className="lg:col-span-2"
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-9">

              {/* Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

              {/* Developer Icon */}

              <div className="relative mb-7 flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 shadow-lg shadow-cyan-500/10">
                  <FaLaptopCode size={28} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Developer
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Prashant Sharma
                  </h3>
                </div>

              </div>

              {/* Description */}

              <div className="relative space-y-5 text-[15px] leading-8 text-slate-400">

                <p>
                  I'm a MERN Stack Developer who enjoys
                  transforming ideas into functional and
                  user-friendly digital experiences.
                </p>

                <p>
                  My development journey includes React,
                  TypeScript, JavaScript, Node.js,
                  Express.js and MongoDB, along with
                  Redux Toolkit, Axios and Socket.io.
                </p>

                <p>
                  I've worked on projects involving fleet
                  management, dashboards, authentication,
                  REST APIs, real-time features and
                  database-driven applications.
                </p>

              </div>

              {/* Education */}

              <div className="relative mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-4">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <FaGraduationCap size={20} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Education
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      Master of Computer Applications
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Computer Applications & Software Development
                    </p>
                  </div>

                </div>

              </div>

              {/* CTA */}

              <a
                href="#contact"
                className="group relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Let's work together

                <FaArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={13}
                />
              </a>

            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
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
              duration: 0.7,
            }}
            className="lg:col-span-3"
          >

            <div className="grid h-full gap-4 sm:grid-cols-2">

              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
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
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                >

                  <div className="mb-5 flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400/15">
                      {item.icon}
                    </div>

                    <FaCheckCircle
                      className="text-slate-700 transition group-hover:text-cyan-400"
                      size={15}
                    />

                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

        {/* ================= STATS ================= */}

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
          className="mt-8 grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl md:grid-cols-4"
        >

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group p-6 text-center transition hover:bg-white/[0.04] ${
                index !== stats.length - 1
                  ? "border-b border-white/10 md:border-b-0 md:border-r"
                  : ""
              } ${
                index === 1
                  ? "border-r border-white/10"
                  : ""
              }`}
            >

              <p className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>

            </div>
          ))}

        </motion.div>

        {/* ================= TECHNOLOGIES ================= */}

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
          className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-9"
        >

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                My Toolkit
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Technologies I Work With
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Tools and technologies I use to build modern applications.
              </p>
            </div>

            <div className="hidden items-center gap-3 md:flex">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <FaReact />
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                <FaDatabase />
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-400/10 text-purple-400">
                <FaServer />
              </div>

            </div>

          </div>

          <div className="mt-7 flex flex-wrap gap-3">

            {technologies.map((technology, index) => (
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
                  delay: index * 0.04,
                }}
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                className="cursor-default rounded-xl border border-white/10 bg-slate-950/50 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400"
              >
                {technology}
              </motion.span>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;